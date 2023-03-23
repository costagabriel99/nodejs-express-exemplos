import { Router } from 'express'

const router = Router()

router.post('/', (req, res) => {
    res.send('CREATE POST /')
  })
  
router.get('/:id?', (req, res) => {
    //DUAS OPÇÕES: LISTAR TODOS OU APENAS UM
    res.send('GET POST /')
  })

export default router
  