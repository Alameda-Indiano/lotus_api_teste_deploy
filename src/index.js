const build = require( './app' )
const { env, logger, terminate } = require( './utils' )
const mongoClient = require( './repository/database/mongodb' )
const seed = require( './repository/database/mongodb/seed' )

build()
  .then( ( app ) => {
    app
      .listen( { port: env( 'APP_PORT' ) || process.env.PORT, host: '0.0.0.0' } )
      .then( async () => {
        const exitHandler = terminate( app, {
          coredump: false,
          timeout: 500
        } )

        mongoClient.init()
        
        process.on( 'uncaughtException', exitHandler( 1, 'Unexpected Error' ) )
        process.on( 'unhandledRejection', exitHandler( 1, 'Unhandled Promise' ) )
        process.on( 'SIGTERM', exitHandler( 0, 'SIGTERM' ) )
        process.on( 'SIGINT', exitHandler( 0, 'SIGINT' ) )
      } )
      .catch( ( err ) => {
        logger.error( 'Error starting server: ', err )
        process.exit( 1 )
      } )
  } )
  .catch( ( err ) => logger.error( err ) )
