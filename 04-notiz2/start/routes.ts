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
import db from '@adonisjs/lucid/services/db'
import {testValidator} from '#validators/test'

router.get('/', async ({ response }) => {
    //const notes = await Note.all()
    const notes = await db.from('notes').select('*')
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

    const result = await db.table('notes').insert({titel: 'Test', content: 'This is a test'})

  const note = new Note()
  note.title = 'Test'
  note.content = 'This is a test'      
  note.save()

  return 'ok'
})

router.post('/test', async ({ request }) => {
  const data = request.all()
  console.log(data)
  const payload = await testValidator.validate(data)
  console.log(payload)
  return payload
})

router.get('/test', async ({ view }) => {
  return view.render('pages/test')

})