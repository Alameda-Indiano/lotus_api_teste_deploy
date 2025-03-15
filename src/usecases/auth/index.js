
const { User } = require('../../repository/domains')
const { HtttpErrors } = require( '../../consts' )
const { jwtSign, compareEncrypt } = require( '../../core/encrypt' )
const boom = require( '@hapi/boom' )

const { env } = require( '../../utils' )
const { Unauthorized } = require( 'http-errors' )

class AuthUseCase {
  async login ( req, res ) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({ email: email });
      const comparePassword = await compareEncrypt( password, user?.password )

      if ( user && comparePassword ) {
        const accessToken = await jwtSign({ user_id: user.id, user_name: user.name }, res)
  
        if ( accessToken ) return res.send( { accessToken, name: user.name, email: user.email } )
      }

      return Unauthorized( HtttpErrors.INVALID_USERNAME_OR_PASSWORD )
    } catch ( err ) {
      throw boom.boomify( err )
    }
  }
}

module.exports = new AuthUseCase()
