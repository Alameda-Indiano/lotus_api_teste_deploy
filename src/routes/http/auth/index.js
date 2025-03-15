const { schema } = require( './schemas' )
const { authUseCase } = require( '../../../usecases' )

module.exports = async ( app ) => {
  app.post( '/', {
    schema
  }, authUseCase.login )
}
