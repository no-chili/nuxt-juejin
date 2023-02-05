import mongoose from 'mongoose'
const Schema = mongoose.Schema
const AdSchema = new Schema({
  // 图片
  imager: String,
  // 链接
  link: String,
})
const AdModel = mongoose.model('ad', AdSchema)
export default AdModel
