const { postSchema, getAllSchema, getSchema, updateSchema, deleteSchema } = require( './schemas' )
const { pointUseCase } = require( '../../../usecases' )

module.exports = async ( app ) => {
  app.post( '/', {
    schema: postSchema,
    preValidation: [app.authenticate]
  }, pointUseCase.create )

  app.get( '/', {
    schema: getAllSchema,
    preValidation: [app.authenticate]
  }, pointUseCase.get )

  app.get( '/:id', {
    schema: getSchema,
    preValidation: [app.authenticate]
  }, pointUseCase.get )

  app.put( '/:id', {
    schema: updateSchema,
    preValidation: [app.authenticate]
  }, pointUseCase.update )

  app.delete( '/:id', {
    schema: deleteSchema,
    preValidation: [app.authenticate]
  }, pointUseCase.delete )
}
