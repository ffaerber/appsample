const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_HOST, { useMongoClient: true })
mongoose.Promise = global.Promise

module.exports = mongoose
