import { register } from './register'

describe('register', () => {
  it('should return requiredEmail if there is no email', async () => {
    const actualResult = await register({})
    expect(actualResult).toEqual({
      code: 'requiredEmail',
      message: 'Email is required',
    })
  })
  it('should return requiredEmail if there is no email', async () => {
    const actualResult = await register({ email: 'adslakhjsdf' })
    expect(actualResult).toEqual({
      code: 'emailInvalid',
      message: 'Email is invalid',
    })
  })
})
