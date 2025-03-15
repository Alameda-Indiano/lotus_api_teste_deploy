const { user } = require('./schema')

const postSchema = {
  body: user,
  response: {
    200: {
      type: 'object',
      properties: user,
      required: ['id', 'name', 'password', 'email', 'establishment_id', 'created_at', 'updated_at' ]
    }
  }
}

const updateSchema = {
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string'
      }
    },
    required: ['id']
  },
  body: user,
  response: {
    200: {
      type: 'object',
      properties: user,
      required: ['id', 'name', 'password', 'email', 'establishment_id', 'created_at', 'updated_at' ]
    }
  }
}

const deleteSchema = {
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string'
      }
    },
    required: ['id']
  },
  response: {
    200: {
      type: 'object',
      properties: {
        status: { type: 'number' },
        message: { type: 'string' }
      },
      required: ['status', 'message']
    }
  }
}

const getSchema = {
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        pattern: '[0-9]'
      }
    },
    required: ['id']
  },
  response: {
    200: {
      type: 'object',
      properties: user,
      required: ['id', 'name', 'password', 'email', 'establishment_id', 'created_at', 'updated_at' ]
    }
  }
}

const getAllSchema = {
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: user,
        required: ['id', 'name', 'password', 'email', 'establishment_id', 'created_at', 'updated_at' ]
      }
    }
  }
}


module.exports = { postSchema, updateSchema, deleteSchema, getSchema, getAllSchema }
