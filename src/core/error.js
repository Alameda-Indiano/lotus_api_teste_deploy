class ApiError extends Error {
  constructor ( { message, code, status } ) {
    super( message )

    this.status = status
    this.code = code
  }
}
module.exports = { ApiError }
