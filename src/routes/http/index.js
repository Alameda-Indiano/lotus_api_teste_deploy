const apiRoutes = async ( app ) => {
  app.register( require( './auth' ), { prefix: 'auth' } )
  app.register( require( './user' ), { prefix: 'user' } )
  app.register( require( './establishment' ), { prefix: 'establishment' } )
  app.register( require( './client' ), { prefix: 'client' } )
  app.register( require( './point' ), { prefix: 'point' } )
}

module.exports = apiRoutes