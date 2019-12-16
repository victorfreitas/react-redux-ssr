const env = (key, defaultValue = '') => process.env[key] || defaultValue

env.port = env('PORT', 3000)
env.host = env('HOST', 'localhost')

export default env
