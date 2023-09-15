// @ts-nocheck
import { register } from '../controllers/authentication'
jest.mock('dotenv')

describe('Some Function', () => {
  it('should do something', async () => {
    const result = await register({ body: '' }, {})
    expect(result).toBe({ email: 'ann@gmail.com' })
  })
})
