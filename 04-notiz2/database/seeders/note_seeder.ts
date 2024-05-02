import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Note from '#models/note'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Note.createMany([
      {
        title: 'First Note',
        content: 'This is the first note' 
      },
      {
        title: 'Second Note',
        content: 'This is the second note' 
      },
      {
        title: 'Third Note',
        content: 'This is the   end note    '
      }

    ])
    await User.createMany([
      {
        login: 'otto',
        password: '123'
      },
      {
        login: 'anna',
        password: '456'
      }
    ])
  }
}