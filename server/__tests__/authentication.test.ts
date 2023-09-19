// @ts-nocheck
import * as crypto from 'crypto'
import { register } from '../controllers/authentication'

// Mock crypto.randomBytes
jest
  .spyOn(crypto, 'randomBytes')
  .mockReturnValue(Buffer.from('mocked-random-bytes'))

jest.mock('../db/users', () => ({
  createUser: jest.fn().mockImplementation(async (userData) => {
    return {
      username: userData.username,
      email: userData.email,
      authentication: {
        password: 'mocked-password',
        salt: 'mocked-salt',
      },
      isAdmin: false,
    }
  }),
  getUserByEmail: jest.fn().mockImplementation(async (email) => {
    if (email === 'existing.email@example.com') {
      return {
        email: 'existing.email@example.com',
        username: 'existingUsername',
      }
    }
    return null
  }),
  getUserByUsername: jest.fn().mockImplementation(async (username) => {
    if (username === 'existingUsername') {
      return {
        email: 'existing.email@example.com',
        username: 'existingUsername',
      }
    }
    return null
  }),
}))

const mockResponse = () => {
  const res = {} as express.Response
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  res.send = jest.fn().mockReturnValue(res)
  return res
}

describe('register', () => {
  beforeEach(() => {
    process.env.SECRET = 'TEST-AUTH'
  })

  it('should return requiredEmail if there is no email', async () => {
    const input = {
      email: '',
      password: 'test',
      username: 'test',
    }

    const expectedOutput = {
      errors: [
        {
          code: 'requiredEmail',
          message: 'Email is required',
        },
      ],
    }

    const actualOutput = await register(input)
    expect(actualOutput).toEqual(expectedOutput)
  })

  it('should return emailRequired and passwordRequired and requiredUsername', async () => {
    const input = {}

    const expectedOutput = {
      errors: [
        {
          code: 'requiredEmail',
          message: 'Email is required',
        },
        {
          code: 'requiredPassword',
          message: 'Password is required',
        },
        {
          code: 'requiredUsername',
          message: 'Username is required',
        },
      ],
    }

    const actualOutput = await register(input)
    expect(actualOutput).toEqual(expectedOutput)
  })

  it('should return emailExists and usernameExists', async () => {
    const input = {
      email: 'existing.email@example.com',
      password: 'test',
      username: 'existingUsername',
    }

    const expectedOutput = {
      errors: [
        {
          code: 'emailExists',
          message: 'This email is already in use.',
        },
        {
          code: 'usernameExists',
          message: 'This username is already taken.',
        },
      ],
    }

    const actualOutput = await register(input)
    expect(actualOutput).toEqual(expectedOutput)
  })

  it('should return new user', async () => {
    const input = {
      email: 'testuser@example.com',
      password: 'test',
      username: 'testuser',
    }

    const expectedOutput = {
      user: {
        username: 'testuser',
        email: 'testuser@example.com',
        authentication: {
          password: 'mocked-password',
          salt: 'mocked-salt',
        },
        isAdmin: false,
      },
    }

    const actualOutput = await register(input)
    expect(actualOutput).toEqual(expectedOutput)
  })
})
