import * as express from 'express'

const app = express()

import userController from './controller/userController'
import postController from './controller/postContoller'

app.use('/user', userController)
app.use('/post', postController)

/*
*USUÁRIO:
*Cadastro
*Login
*
*POSTS:
*Criar Posts
*Listar Posts
*/

app.listen(3000, () => console.log('ONLINE http://localhost:3000/'))