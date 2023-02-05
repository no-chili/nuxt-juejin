import express, { json } from 'express'
import connectDB from './db/index'
import useResourceRoutes from './module/resource'

const app = express()
app.use(json())
app.use('/upload', express.static('./public'))
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
