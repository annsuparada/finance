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

export const register = async (req: express.Request, res: express.Response) => {
  const result = await register(req.body, res)
  if (result.errors) {
    return res.status(400).json(result.errors)
  }
  return res.send(result)
}
