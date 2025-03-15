const point = {
    id: {
        type: 'string'
    },
    name: {
        type: 'string'
    },
    total: {
        type: 'number'
    },
    value: {
        type: 'number'
    },
    date: {
        type: 'string'
    },
    establishment_id: {
        type: 'string'
    },
    description: {
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

module.exports = { point }
