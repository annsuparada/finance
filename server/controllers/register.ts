interface errorObject {
  code: string
  message: string
}

export const register = (postBody) => {
  try {
    const { email, password, username } = postBody
    const errorMessages: errorObject[] = []

    if (!email) {
      errorMessages.push({
        code: 'requiredEmail',
        message: 'Email is required',
      })
    } else if (!password) {
      errorMessages.push({
        code: 'requiredPassword',
        message: 'Password is required',
      })
    } else if (!username) {
      errorMessages.push({
        code: 'requiredUsername',
        message: 'Username is required',
      })
    }

    const existingUser = await getUserByEmail(email)
    const existingUsername = await getUserByUsername(username)
    if (existingUser) {
      errorMessages.push({
        code: 'emailExists',
        message: 'This email is already in use.',
      })
    }
    if (existingUsername) {
      errorMessages.push({
        code: 'usernameExists',
        message: 'This username is already taken.',
      })
    }

    if (errorMessages.length > 0) {
      return res.status(400).json({
        errors: errorMessages,
      })
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
    return res.status(500).json(error)
  }
}
