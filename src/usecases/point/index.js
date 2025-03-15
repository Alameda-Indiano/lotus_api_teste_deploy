const { Point } = require('../../repository/domains')
const { ApiError } = require( '../../core/error' )

/**
 * Class Point UseCase
 */
class PointUseCase {
  /**
   * Function UseCase to create a Point
   * @param {Object} payload Object containing the Point properties to create record
   * @returns {Object} containing the Point properties
   */
  async create ( { user: { user_id }, body }) {
    try {
      const point = new Point({ ...body, user_id })
      return await point.save()
    } catch ( err ) {
      throw new ApiError( err )
    }
  }

  /**
   * Function UseCase to find a Point
   * @param {Object} payload Object containing the Point properties to find record
   * @returns {Object} containing the Point properties
   */
  async get({ user: { user_id }, params, query }) {
    try {
      const { id } = params
            
      if (!id) return await Point.find({ user_id, ...query }).sort({ created_at: -1 });
      else return await Point.findOne({ _id: id, user_id });
    } catch (err) {
      throw new ApiError(err)
    }
  }

  /**
   * Function UseCase to update a Point
   * @param {Object} payload Object containing the Point properties to update record
   * @returns {Object} containing the Point properties
   */
  async update({ user: { user_id }, params, body }) {
    try {
      const { id } = params
      return await Point.findOneAndUpdate({ _id: id, user_id }, { $set: body, updatedAt: Date.now() }, { new: true, runValidators: true });
    } catch (err) {
      throw new ApiError(err)
    }
  }

  /**
   * Function UseCase to delete a Point
   * @param {Object} payload Object containing the Point properties to delete record
   * @returns {Object} containing the Point properties
   */
  async delete({ user: { user_id }, params }) {
    const { id } = params
    try {
      await await Point.findOneAndDelete({ _id: id, user_id });
      return { status: 200, message: 'Point deleted successfully' }
    } catch (err) {
      throw new ApiError(err)
    }
  }
}

module.exports = new PointUseCase()
