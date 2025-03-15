const { client } = require('./schema')

const postSchema = {
  body: client,
  response: {
    200: {
      type: 'object',
      properties: client,
      required: ['id', 'name', 'primary_document', 'person_type', 'birth_date', 'marital_status', 'birth_place', 'occupation', 'income', 'children_number', 'email', 'phone', 'establishment_id', 'created_at', 'updated_at', 'user_id' ]
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
  body: client,
  response: {
    200: {
      type: 'object',
      properties: client,
      required: ['id', 'name', 'primary_document', 'person_type', 'birth_date', 'marital_status', 'birth_place', 'occupation', 'income', 'children_number', 'email', 'phone', 'establishment_id', 'created_at', 'updated_at', 'user_id' ]
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
      properties: client,
      required: ['id', 'name', 'primary_document', 'person_type', 'birth_date', 'marital_status', 'birth_place', 'occupation', 'income', 'children_number', 'email', 'phone', 'establishment_id', 'created_at', 'updated_at', 'user_id' ]
    }
  }
}

const getAllSchema = {
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: client,
        required: ['id', 'name', 'primary_document', 'person_type', 'birth_date', 'marital_status', 'birth_place', 'occupation', 'income', 'children_number', 'email', 'phone', 'establishment_id', 'created_at', 'updated_at', 'user_id' ]
      }
    }
  }
}


module.exports = { postSchema, updateSchema, deleteSchema, getSchema, getAllSchema }