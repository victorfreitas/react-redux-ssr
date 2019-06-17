export default (key, defaultValue = '') => process.env[key] || defaultValue
