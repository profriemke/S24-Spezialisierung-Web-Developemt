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

router.get('/', async ({ view }) => {
    const user = new User()
    user.login='riemke'
    user.password='123'
    await user.save()
    const users = await User.all()

  return 'Hallo'
})
