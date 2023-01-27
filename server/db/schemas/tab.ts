import mongoose from 'mongoose'
const Schema = mongoose.Schema
const TabSchema = new Schema({
  tab_title: String,
  link: String,
})
const TabModel = mongoose.model('tab', TabSchema)
export default TabModel
