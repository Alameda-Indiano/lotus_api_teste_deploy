const { postSchema, getAllSchema, getSchema, updateSchema, deleteSchema } = require( './schemas' )
const { clientUseCase } = require( '../../../usecases' )

module.exports = async ( app ) => {
  app.post( '/', {
    schema: postSchema,
    preValidation: [app.authenticate]
  }, clientUseCase.create )

  app.get( '/', {
    schema: getAllSchema,
    preValidation: [app.authenticate]
  }, clientUseCase.get )

  app.get( '/:id', {
    schema: getSchema,
    preValidation: [app.authenticate]
  }, clientUseCase.get )

  app.put( '/:id', {
    schema: updateSchema,
    preValidation: [app.authenticate]
  }, clientUseCase.update )

  app.delete( '/:id', {
    schema: deleteSchema,
    preValidation: [app.authenticate]
  }, clientUseCase.delete )
}
