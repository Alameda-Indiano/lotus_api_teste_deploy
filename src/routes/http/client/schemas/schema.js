const personTypeEnum = ['INDIVIDUAL', 'LEGAL_ENTITY']
const maritalStatusEnum = ['SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED', 'SEPARATED', 'CIVIL_UNION', 'DOMESTIC_PARTNERSHIP']

const client = {
    id: {
        type: 'string'
    },
    name: {
        type: 'string'
    },
    primary_document:
    {
        type: 'string'
    },
    person_type: {
        type: 'string',
        enum: personTypeEnum
    },
    birth_date: {
        type: 'string',
    },
    marital_status: {
        type: 'string',
        enum: maritalStatusEnum
    },
    birth_place: {
        type: 'string',
    },
    occupation: {
        type: 'string',
    },
    income: {
        type: 'string',
    },
    children_number: {
        type: 'string',
    },    
    email: {
        type: 'string'
    },
    phone: {
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

module.exports = { client }
