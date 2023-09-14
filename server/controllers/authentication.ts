import express from 'express'
import { createUser, getUserByEmail, getUserByUsername } from '../db/users'
import { authentication, random } from '../helpers'

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password, username } = req.body
    if (!email || !password || !username) {
      return res.sendStatus(400)
    }

    const existingUser = await getUserByEmail(email)
    const existingUsername = await getUserByUsername(username)
    if (existingUser) {
      return res
        .sendStatus(400)
        .json({ message: 'This email is already exist' })
    } else if (existingUsername) {
      return res
        .sendStatus(400)
        .json({ message: 'This username is already exist' })
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

    return res.status(201).json(user).end()
  } catch (error) {
    console.log(error)
    return res.sendStatus(400)
  }
}
