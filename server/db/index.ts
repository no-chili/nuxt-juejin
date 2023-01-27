import mongoose from 'mongoose'
const mongoDB = 'mongodb://localhost:27017/juejin'
mongoose.set('strictQuery', false)
export default () => {
  mongoose
    .connect(mongoDB)
    .then(() => {
      console.log('数据库已连接')
    })
    .catch(() => {
      console.log('数据库连接出错')
    })
}
