const bcrypt = require( 'bcryptjs' )
const { env } = require( '../utils' )

async function encrypt ( data ) {
  return await bcrypt.hash( data, Number( env( 'CRYPT_SALT' ) ) )
}

async function compareEncrypt ( data, hashData ) {
  return await bcrypt.compareSync( data, hashData )
}

async function jwtSign ( data, options ) {
  return await options.jwtSign( data, { expiresIn: env( 'JWT_EXPIRATION_TIME' ) } )
}

module.exports = {
  encrypt,
  jwtSign,
  compareEncrypt
}
