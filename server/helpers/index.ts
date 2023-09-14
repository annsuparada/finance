import crypto from 'crypto'
import dotenv from 'dotenv'
dotenv.config()

const SECRET = process.env.SECRET

export const authentication = (salt: string, password: string): string => {
  if (SECRET !== undefined) {
    return crypto
      .createHmac('sha256', [salt, password].join('/'))
      .update(SECRET)
      .digest('hex')
  } else {
    throw new Error('SECRET environment variable is undefined')
  }
}

export const random = () => crypto.randomBytes(128).toString('base64')
