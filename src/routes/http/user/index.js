const { postSchema, getAllSchema, getSchema, updateSchema, deleteSchema } = require( './schemas' )
const { userUseCase } = require( '../../../usecases' )

module.exports = async ( app ) => {
  app.post( '/', {
    schema: postSchema,
    // preValidation: [app.authenticate]
  }, userUseCase.create )

  app.get( '/', {
    schema: getAllSchema,
    preValidation: [app.authenticate]
  }, userUseCase.get )

  app.get( '/:id', {
    schema: getSchema,
    preValidation: [app.authenticate]
  }, userUseCase.get )

  app.put( '/:id', {
    schema: updateSchema,
    preValidation: [app.authenticate]
  }, userUseCase.update )

  app.delete( '/:id', {
    schema: deleteSchema,
    preValidation: [app.authenticate]
  }, userUseCase.delete )
}
