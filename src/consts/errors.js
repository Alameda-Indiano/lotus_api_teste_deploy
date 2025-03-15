const statusCodes = {
  400: {
    status: 400
  },
  401: {
    status: 401
  }
}

const ErrorCode = {
  ErrorSearchingContact: {
    ...statusCodes[400],
    message: 'Error searching contact.'
  },
  ErrorCreatingContact: {
    ...statusCodes[400],
    message: 'Error creating contact.'
  },
  ErrorUpdatingContact: {
    ...statusCodes[400],
    message: 'Error updating contact.'
  },
  ErrorCreatingCompany: {
    ...statusCodes[400],
    message: 'Error creating company.'
  },
  ErrorSearchingCompany: {
    ...statusCodes[400],
    message: 'Error searching company.'
  },
  ErrorUpdatingCompany: {
    ...statusCodes[400],
    message: 'Error updating company.'
  },
  ErrorMergingContacts: {
    ...statusCodes[400],
    message: 'Error merging contacts.'
  },
  ErrorAssociatingContactWithCompany: {
    ...statusCodes[400],
    message: 'Error associating contact with company.'
  },
  ErrorMergingCompanies: {
    ...statusCodes[400],
    message: 'Error merging companies.'
  },
  ErrorUserInvalid: {
    ...statusCodes[401],
    message: 'Invalid username or password'
  }
}

module.exports = { ErrorCode }
