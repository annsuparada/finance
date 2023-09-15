// // @ts-nocheck
// import { register } from '../controllers/authentication'
// import { createUser } from '../db/users'

// jest.mock('../db/users', () => ({
//   createUser: jest.fn().mockResolvedValue('test'),
// }))

// jest.mock('express', () => ({
//   createUser: jest.fn().mockResolvedValue('test'),
// }))

// const mockResponse = () => {
//   const res = {} as express.Response
//   res.status = jest.fn().mockReturnValue(res)
//   res.json = jest.fn().mockReturnValue(res)
//   res.send = jest.fn().mockReturnValue(res)
//   return res
// }

// describe('authentication', () => {
//   beforeEach(() => {
//     process.env.SECRET = 'TEST-AUTH'
//   })
//   const req = {}
//   const res = mockResponse()

//   it('should return error message, when email is in use', async () => {
//     const result = await register({ body: '' }, {})
//     expect(res.status).toEqual(500)
//   })
// })
