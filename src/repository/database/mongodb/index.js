const mongoose = require('mongoose');
const { env, logger } = require('../../../utils')
const seed = require('./seed')

class MongoDBClient {
  // Health check for MongoDB
  async healthCheck() {
    try {
      if (this.client && this.client.readyState === 1) {
        return { status: true, message: 'MongoDB is healthy' };
      } else {
        return { status: false, message: 'MongoDB is not connected' };
      }
    } catch (err) {
      return { status: false, message: err.message };
    }
  }

  // Find documents in a collection
  async init() {
    try {
      if (!this.client) {
        const type = env('MONGO_CONNECTION_TYPE')
        const host = env('MONGO_HOST')
        const user = env('MONGO_USERNAME')
        const password = env('MONGO_PASSWORD')
        this.db = env('MONGO_DATABASE')

        const options = {
          serverSelectionTimeoutMS: 5000,
          socketTimeoutMS: 5000,
          autoIndex: true
        };

        const url = `${type}://${user}:${password}@${host}/${this.db}?authSource=admin&retryWrites=true&w=majority`

        mongoose.set('strictQuery', true)
        mongoose.set('debug', env('NODE_ENV') === 'local')

        await mongoose
          .connect(url, options)
          .then(() => { logger.info('MongoDB is connected')})
          .catch(err => console.error(err))
        
        await seed()
      }
    } catch (err) {
      logger.error(`MongoDB initialization error: ${err.message}`);
    }
  }

  // Close the MongoDB connection
  async close() {
    try {
      if (this.client && this.client.readyState === 1) {
        await mongoose.connection.close();
        console.info('MongoDB is disconnected');
      }
    } catch (err) {
      console.error(`Error disconnecting from MongoDB: ${err.message}`);
    }
  }
}

module.exports = new MongoDBClient();
