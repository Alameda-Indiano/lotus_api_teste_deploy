const Fastify = require( 'fastify' )
const boom = require( '@hapi/boom' )

const Build = async () => {
  const fastify = Fastify({
    logger: true,
    trustProxy: true,
    bodyLimit: 1048576 * 10
  })
  
  await fastify.register( require('@fastify/etag') )
  await fastify.register( require('@fastify/helmet') )
  await fastify.register( require('@fastify/cors'), { origin: '*' } )
  await fastify.register( require( './core/auth' ) )
  await fastify.register( require( './routes/http' ), { prefix: 'api/v1' } )

  fastify.setNotFoundHandler((request, reply) => {
    fastify.log.debug(`Route not found: ${request.method}:${request.raw.url}`)

    reply.status(404).send({
      statusCode: 404,
      error: NOT_FOUND,
      message: `Route ${request.method}:${request.raw.url} not found`
    })
  })

  fastify.setErrorHandler((err, request, reply) => {
    fastify.log.debug(`Request url: ${request?.raw?.url}`)
    fastify.log.debug(`Payload: ${request?.body}`)
    fastify.log.error(`Error occurred: ${err}`)

    const code = err.statusCode ?? 500

    reply.status(code).send({
      statusCode: code,
      error: err.name ?? INTERNAL_SERVER_ERROR,
      message: err.message ?? err
    })
  })

  fastify.get( '/', async () => {
    try {
      return { message: 'Golden Hotel API Running!!!' };
    } catch ( err ) {
      throw boom.boomify( err )
    }
  } )

  return fastify
}

module.exports = Build
