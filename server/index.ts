import express, { json } from 'express'
import useAdminRoutes from './module/admin'
import connectDB from './db/index'
import useResourceRoutes from './module/resource'
const app = express()
app.use(json())
app.get('/', (req, res) => {
  res.statusCode = 200
  res.send({
    message: 'Api可用',
  })
})
// useAdminRoutes(app)
useResourceRoutes(app)
connectDB()
export default fromNodeMiddleware(app)
