const user = {
    id: {
        type: 'string'
    },
    name: {
        type: 'string'
    },
    password: {
        type: 'string'
    },
    email: {
        type: 'string'
    },
    establishment_id: {
        type: 'string'
    },
    created_at: {
        type: 'string',
        format: 'date-time'
    },
    updated_at: {
        type: 'string',
        format: 'date-time'
    }
}

module.exports = { user }
