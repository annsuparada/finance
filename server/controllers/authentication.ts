import express from 'express'
import { createUser, getUserByEmail, getUserByUsername } from '../db/users'
import { authentication, random } from '../helpers'
import { config } from 'dotenv'
config()

const SECRET = process.env.SECRET

interface errorObject {
  code: string
  message: string
}

interface registerPostBodyObj {
  email: string
  password: string
  username: string
}

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.sendStatus(400)
    }

    const user = await getUserByEmail(email).select(
      '+authentication.salt +authentication.password',
    )

    if (!user) {
      return res.sendStatus(400)
    }

    const expectedHash = authentication(
      user.authentication?.salt || '',
      password,
    )

    if (!user.authentication || user.authentication.password !== expectedHash) {
      return res.sendStatus(403)
    }

    const salt = random()
    user.authentication.sessionToken = authentication(salt, user._id.toString())

    await user.save()

    if (SECRET !== undefined) {
      res.cookie(SECRET, user.authentication.sessionToken, {
        domain: 'localhost',
        path: '/',
      })
    } else {
      console.error('SECRET environment variable is undefined')
    }

    return res.status(200).json(user).end()
  } catch (error) {
    console.log(error)
    return res.sendStatus(400)
  }
}

export const register = async (postBody: registerPostBodyObj) => {
  const { email, password, username } = postBody
  const errorMessages: errorObject[] = []

  if (!email) {
    errorMessages.push({
      code: 'requiredEmail',
      message: 'Email is required',
    })
  } else if (!password) {
    errorMessages.push({
      code: 'requiredPassword',
      message: 'Password is required',
    })
  } else if (!username) {
    errorMessages.push({
      code: 'requiredUsername',
      message: 'Username is required',
    })
  }

  const existingUser = await getUserByEmail(email)
  const existingUsername = await getUserByUsername(username)
  if (existingUser) {
    errorMessages.push({
      code: 'emailExists',
      message: 'This email is already in use.',
    })
  }
  if (existingUsername) {
    errorMessages.push({
      code: 'usernameExists',
      message: 'This username is already taken.',
    })
  }

  if (errorMessages.length > 0) {
    return { errors: errorMessages }
  }

  const salt = random()
  const user = await createUser({
    email,
    username,
    authentication: {
      salt,
      password: authentication(salt, password),
    },
  })

  return { user }
}
