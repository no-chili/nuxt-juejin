import mongoose from 'mongoose'
const Schema = mongoose.Schema
const AuthorSchema = new Schema({
  // 头像
  avatar: String,
  // 名字
  name: String,
  // 介绍
  introduce: String,
  // 等级
  level: String,
})
const AuthorModel = mongoose.model('author', AuthorSchema)
export default AuthorModel
