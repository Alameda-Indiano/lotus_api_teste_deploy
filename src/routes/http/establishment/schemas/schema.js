const accommodationTypeEnum = ['CONDOMINIUM', 'CHALET']

const establishment = {
    id: {
        type: 'string'
    },
    name: {
        type: 'string'
    },
    accommodation_type: {
        type: 'string',
        enum: accommodationTypeEnum
    },
    max_capacity: {
        type: 'number'
    },
    privacy_level: {
        type: 'number'
    },
    has_balcony: {
        type: 'boolean'
    },
    establishment_id: {
        type: 'string'
    },
    establishments:
    {
        type: 'array',
        items: {
            type: 'object',
            properties: {
                id: {
                    type: 'string'
                },
                name: {
                    type: 'string'
                }
            }
        }
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

module.exports = { establishment, accommodationTypeEnum }
