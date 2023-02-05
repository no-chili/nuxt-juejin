import express, { Express } from 'express'
import tab from '../db/schemas/tab'
import ad from '../db/schemas/ad'
import article from '../db/schemas/article'
import author from '../db/schemas/author'
import multer from 'multer'
const objMulter = multer({ dest: './public/uploads' })

type Map = {
  [k: string]: any
}
const resourceMap: Map = {
  tab,
  ad,
  article,
  author,
}
const router = express.Router()
router.get('/:model', async (req, res) => {
  const path = req.path.split('/')[1]
  const modelPath = path[1]
  const model = resourceMap[modelPath]
  const data = await model.find()
  res.statusCode = 200
  res.end(data)
})

router.get('/:model/:id', async (req, res) => {
  const path = req.path.split('/')[1]
  const modelPath = path[1]
  const id = path[2]
  const model = resourceMap[modelPath]
  const data = await model.findById(id)
  res.statusCode = 200
  res.end(data)
})

router.post('/:model', async (req, res) => {
  const modelPath = req.path.split('/')[1]
  const model = resourceMap[modelPath]
  const Model = new model(req.body)
  await Model.save()
  res.statusCode = 200
  res.end({
    message: 'ok',
  })
})

router.delete('/:model', async (req, res) => {
  const modelPath = req.path.split('/')[1]
  const model = resourceMap[modelPath]
  const data = await model.deleteOne(req.body)
  res.statusCode = 200
  res.end({
    message: 'ok',
  })
})

router.put('/:model', async (req, res) => {
  const modelPath = req.path.split('/')[1]
  const filter = req.body.filter
  const newData = req.body.newData
  const model = resourceMap[modelPath]
  await model.updateOne(filter, newData)
  res.statusCode = 200
  res.end({
    message: 'ok',
  })
})

function useResourceRoutes(app: Express) {
  app.use('/resource', router)
  app.post('/upload', objMulter.single('file'), async (req, res) => {
    const file = req.file!
    res.send({ ...file, url: `http://127.0.0.1:3000/uploads/${file.filename}` })
  })
}
export default useResourceRoutes
