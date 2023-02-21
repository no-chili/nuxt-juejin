import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ArticleSchema = new Schema({
  // 内容
  content: String,
  // 标题
  title: String,
  // 封面
  cover: String,
  // 作者
  author: mongoose.Types.ObjectId,
  // 时间
  titme: Date,
  // 介绍
  introduce: String,
  // 类型
  type: String,
})
const ArticleModel = mongoose.model('article', ArticleSchema)
export default ArticleModel
