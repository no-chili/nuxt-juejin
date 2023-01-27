import express, { json } from 'express'
import useAdminRoutes from './module/admin'
import connectDB from './db/index'
const app = express()
app.use(json())
app.get('/', (req, res) => {
  res.statusCode = 200
  res.send({
    message: 'Api可用',
  })
})
useAdminRoutes(app)
connectDB()
export default fromNodeMiddleware(app)
