import express from 'express'
import { login, register } from '../controllers/authentication'

const registerRoute = async (req: express.Request, res: express.Response) => {
  try {
    const result = await register(req.body)
    if (result.errors) {
      return res.status(400).json(result.errors)
    }

    return res.send(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

export default (router: express.Router) => {
  router.post('/auth/register', registerRoute)
  router.post('/auth/login', login)
}
