// @ts-nocheck
import { register } from '../controllers/authentication'
import dotenv from 'dotenv'
dotenv.config()

jest.mock('dotenv', () => ({
  config: () => {},
}))

describe('authentication', () => {
  beforeEach(() => {
    process.env.SECRET = 'TEST-AUTH'
  })
  it('should return error message, when email is in use', async () => {
    const result = await register({ body: '' }, {})
    expect(result).toEqual({ message: 'This email is already in use.' })
  })

  afterEach(() => {
    delete process.env.SECRET
  })
})
