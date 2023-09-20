// @ts-nocheck
import * as crypto from 'crypto'
import { register, login } from '../controllers/authentication'

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
        authentication: {
          salt: 'abcdefg',
          password: '123456',
          sessionToken: 'session-token-value',
        },
        isAdmin: false,
        _id: 'user-id',
        save: jest.fn(),
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

jest.mock('../helpers', () => ({
  authentication: jest.fn().mockReturnValue('123456'),
  random: jest.fn().mockReturnValue('abcdefg'),
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

describe('login', () => {
  beforeEach(() => {
    process.env.SECRET = 'TEST-AUTH'
  })
  it('should return requiredEmail if there is no email for login', async () => {
    const input = {
      email: '',
      password: 'test',
    }

    const expectedOutput = {
      errors: [
        {
          code: 'requiredEmail',
          message: 'Email is required',
        },
      ],
    }

    const actualOutput = await login(input)
    expect(actualOutput).toEqual(expectedOutput)
  })

  it('should return requiredEmail adn requiredPassword if there is no email and password for login', async () => {
    const input = {
      email: '',
      password: '',
    }

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
      ],
    }

    const actualOutput = await login(input)
    expect(actualOutput).toEqual(expectedOutput)
  })

  it('should return emailNotExists if there is email does not exist for login', async () => {
    const input = {
      email: 'test-email@email.com',
      password: 'test',
    }

    const expectedOutput = {
      errors: [
        {
          code: 'emailNotExists',
          message: 'Email does not exist',
        },
      ],
    }

    const actualOutput = await login(input)
    expect(actualOutput).toEqual(expectedOutput)
  })

  it('should return InvalidCredentials if get the wrong password for login', async () => {
    const input = {
      email: 'existing.email@example.com',
      password: 'test',
    }

    const expectedOutput = {
      errors: [
        {
          code: 'InvalidCredentials',
          message: 'Invalid credentials',
        },
      ],
    }

    const actualOutput = await login(input)
    expect(actualOutput).toEqual(expectedOutput)
  })

  it('should return user if get corret email and password for login', async () => {
    const input = {
      email: 'existing.email@example.com',
      password: 'mocked-password',
    }

    const expectedOutput = {
      user: {
        email: 'existing.email@example.com',
        username: 'existingUsername',
        authentication: {
          salt: 'abcdefg',
          password: '123456',
          sessionToken: '123456',
        },
        isAdmin: false,
        _id: 'user-id',
        save: jest.fn(),
      },
    }

    const actualOutput = await login(input)
    console.log('actual output', actualOutput)
    console.log('expected output', expectedOutput)
    // expect(authentication).toHaveBeenCalledWith('abcdefg', 'mocked-password')
    // expect(user.save).toHaveBeenCalled()
    expect(actualOutput.user.email).toEqual(expectedOutput.user.email)
  })
})
