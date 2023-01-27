import express, { Express } from 'express'
import tab from '../db/schemas/tab'
const router = express.Router()
router.get('/tab', async (req, res) => {
  const Tab = new tab({
    tab_title: 'new tab',
    link: 'link',
  })
  Tab.save().then(() => {
    res.send('数据已保存')
  })
})

function useAdminRoutes(app: Express) {
  app.use('/admin', router)
}
export default useAdminRoutes
