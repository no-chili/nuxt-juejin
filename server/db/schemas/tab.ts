import mongoose from 'mongoose'
const Schema = mongoose.Schema
const TabSchema = new Schema({
  // 标题
  title: String,
  // 红标签内容
  tip: String,
  // 图片
  image: String,
})
const TabModel = mongoose.model('tab', TabSchema)
export default TabModel
