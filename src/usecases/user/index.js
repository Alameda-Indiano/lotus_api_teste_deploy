const { User } = require('../../repository/domains')
const { encrypt } = require( '../../core/encrypt' )
const { ApiError } = require( '../../core/error' )

/**
 * Class User UseCase
 */
class UserUseCase {
  /**
   * Function UseCase to create a user
   * @param {Object} payload Object containing the user properties to create record
   * @returns {Object} containing the user properties
   */
  async create ( { body } ) {
    try {
      body.password = await encrypt( body.password )
      
      const user = new User(body)
      return await user.save()
    } catch ( err ) {
      throw new ApiError( err )
    }
  }

   /**
   * Function UseCase to find a User
   * @param {Object} payload Object containing the User properties to find record
   * @returns {Object} containing the User properties
   */
   async get({ user: { user_id }, params, query }) {
    try {
      const { id } = params
            
      if (!id) return await User.find({ user_id, ...query }).sort({ created_at: -1 });
      else return await User.findOne({ _id: id, user_id });
    } catch (err) {
      throw new ApiError(err)
    }
  }

  /**
   * Function UseCase to update a User
   * @param {Object} payload Object containing the User properties to update record
   * @returns {Object} containing the User properties
   */
  async update({ user: { user_id }, params, body }) {
    try {
      const { id } = params
      return await User.findOneAndUpdate({ _id: id, user_id }, { $set: body, updatedAt: Date.now() }, { new: true, runValidators: true });
    } catch (err) {
      throw new ApiError(err)
    }
  }

  /**
   * Function UseCase to delete a User
   * @param {Object} payload Object containing the User properties to delete record
   * @returns {Object} containing the User properties
   */
  async delete({ user: { user_id }, params }) {
    const { id } = params
    try {
      await await User.findOneAndDelete({ _id: id, user_id });
      return { status: 200, message: 'User deleted successfully' }
    } catch (err) {
      throw new ApiError(err)
    }
  }
}
module.exports = new UserUseCase()
