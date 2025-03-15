const { Client } = require('../../repository/domains')
const { ApiError } = require( '../../core/error' )

/**
 * Class Client UseCase
 */
class ClientUseCase {
  /**
   * Function UseCase to create a Client
   * @param {Object} payload Object containing the Client properties to create record
   * @returns {Object} containing the Client properties
   */
  async create ( { user: { user_id }, body }) {
    try {
      const client = new Client({ ...body, user_id })
      return await client.save()
    } catch ( err ) {
      throw new ApiError( err )
    }
  }

  /**
   * Function UseCase to find a Client
   * @param {Object} payload Object containing the Client properties to find record
   * @returns {Object} containing the Client properties
   */
  async get({ user: { user_id }, params, query }) {
    try {
      const { id } = params
            
      if (!id) return await Client.find({ user_id, ...query }).sort({ created_at: -1 });
      else return await Client.findOne({ _id: id, user_id });
    } catch (err) {
      throw new ApiError(err)
    }
  }

  /**
   * Function UseCase to update a Client
   * @param {Object} payload Object containing the Client properties to update record
   * @returns {Object} containing the Client properties
   */
  async update({ user: { user_id }, params, body }) {
    try {
      const { id } = params
      return await Client.findOneAndUpdate({ _id: id, user_id }, { $set: body, updatedAt: Date.now() }, { new: true, runValidators: true });
    } catch (err) {
      throw new ApiError(err)
    }
  }

  /**
   * Function UseCase to delete a Client
   * @param {Object} payload Object containing the Client properties to delete record
   * @returns {Object} containing the Client properties
   */
  async delete({ user: { user_id }, params }) {
    const { id } = params
    try {
      await await Client.findOneAndDelete({ _id: id, user_id });
      return { status: 200, message: 'Client deleted successfully' }
    } catch (err) {
      throw new ApiError(err)
    }
  }
}

module.exports = new ClientUseCase()
