/**
 * Function to load enviroment variable
 * @param {string} key name of enviroment variable
 * @returns string value of enviroment variable
 */
const env = ( key ) => process.env[key] || null

module.exports = env
