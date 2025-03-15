const schema = {
  body: {
    type: 'object',
    properties: {
      email: {
        type: 'string'
      },
      password: {
        type: 'string'
      }
    },
    required: ['email', 'password']
  },
  response: {
    200: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        email: { type: 'string' },
        accessToken: { type: 'string' }
      }
    }
  }
}

module.exports = { schema }
