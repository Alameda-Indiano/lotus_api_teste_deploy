const { postSchema, getAllSchema, getSchema, updateSchema, deleteSchema } = require( './schemas' )
const { establishmentUseCase } = require( '../../../usecases' )

module.exports = async ( app ) => {
  app.post( '/', {
    schema: postSchema,
    preValidation: [app.authenticate]
  }, establishmentUseCase.create )

  app.get( '/', {
    schema: getAllSchema,
    preValidation: [app.authenticate]
  }, establishmentUseCase.get )

  app.get( '/:id', {
    schema: getSchema,
    preValidation: [app.authenticate]
  }, establishmentUseCase.get )

  app.put( '/:id', {
    schema: updateSchema,
    preValidation: [app.authenticate]
  }, establishmentUseCase.update )

  app.delete( '/:id', {
    schema: deleteSchema,
    preValidation: [app.authenticate]
  }, establishmentUseCase.delete )
}
