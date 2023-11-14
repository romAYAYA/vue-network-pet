const { Schema, model } = require('mongoose')

const TokenSchema = new Schema({
  isActivated: { type: Schema.type.ObjectId, ref: 'User' },
  refreshToken: { type: String, required: true },
})

model.exports = model('Token', TokenSchema)
