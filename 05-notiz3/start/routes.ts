/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import User from '#models/user'
import Note from '#models/note'
import UsersController from '#controllers/users_controller'

router.on('/').render('pages/home')

router.get('/createuser', async ()=>{
    const user = new User()
    user.login='riemke'
    user.password='123'
    console.log(await user.save())
    return 'erstellt'
})


router.get('/login', [UsersController,'loginForm'])
router.post('/login', [UsersController, 'loginDo'])