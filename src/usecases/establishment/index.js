const { Establishment } = require('../../repository/domains')
const { ApiError } = require( '../../core/error' )

/**
 * Class Establishment UseCase
 */
class EstablishmentUseCase {
  /**
   * Function UseCase to create a establishment
   * @param {Object} payload Object containing the establishment properties to create record
   * @returns {Object} containing the establishment properties
   */
  async create ( { user: { user_id }, body }) {
    try {
      const establishment = new Establishment({ ...body, user_id })
      return await establishment.save()
    } catch ( err ) {
      throw new ApiError( err )
    }
  }

  /**
   * Function UseCase to find a Establishment
   * @param {Object} payload Object containing the Establishment properties to find record
   * @returns {Object} containing the Establishment properties
   */
  async get({ user: { user_id }, params, query }) {
    try {
      const { id } = params;

      if (!id) { 
        const establishment = await Establishment.find({ user_id, ...query }).sort({ created_at: -1 }) 
        const establishments = []

        for (const element of establishment) {
          const relatedEstablishments = await Establishment.find({ establishment_id: element.id });  
          
          establishments.push({
            ...element.toObject(),
            establishments: relatedEstablishments || [],
          })
        }
        
        return establishments;
      }
      else { 
        const establishment = await Establishment.findOne({ _id: id, user_id }); 
        
        if (!establishment) throw new ApiError('Establishment not found');
        
        const relatedEstablishments = await Establishment.find({ establishment_id: establishment.id });

        return {
          ...establishment.toObject(),
          establishments: relatedEstablishments || [],
        };
      }
    } catch (err) {
      throw new ApiError(err);
    }
  }  

  /**
   * Function UseCase to update a establishment
   * @param {Object} payload Object containing the establishment properties to update record
   * @returns {Object} containing the establishment properties
   */
  async update({ user: { user_id }, params, body }) {
    try {
      const { id } = params
      return await Establishment.findOneAndUpdate({ _id: id, user_id }, { $set: body, updatedAt: Date.now() }, { new: true, runValidators: true });
    } catch (err) {
      throw new ApiError(err)
    }
  }

  /**
   * Function UseCase to delete a establishment
   * @param {Object} payload Object containing the establishment properties to delete record
   * @returns {Object} containing the establishment properties
   */
  async delete({ user: { user_id }, params }) {
    const { id } = params
    try {
      await await Establishment.findOneAndDelete({ _id: id, user_id });
      return { status: 200, message: 'Establishment deleted successfully' }
    } catch (err) {
      throw new ApiError(err)
    }
  }
}

module.exports = new EstablishmentUseCase()
