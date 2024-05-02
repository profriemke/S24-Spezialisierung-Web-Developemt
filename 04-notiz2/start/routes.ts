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

router.get('/', async ({ response }) => {
    const notes = await Note.all()
    return notes
})

router.get('/new', async ({ response }) => {
  const user = new User()
  user.login = 'otto'
  user.password = '123'
  user.save()   

  return 'ok'
})

router.get('/note', async ({ response }) => {
  const note = new Note()
  note.title = 'Test'
  note.content = 'This is a test'      
  note.save()

  return 'ok'
})