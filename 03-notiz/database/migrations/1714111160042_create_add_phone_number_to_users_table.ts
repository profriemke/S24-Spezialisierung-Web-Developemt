import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  async up() {
    this.schema.alterTable('users', (table) => {
      table.string('firstname')
      table.string('lastname')
    })
  }
    async down() {
    this.schema.alterTable('users', (table) => {
      table.dropColumn('firstname')
      table.dropColumn('lastname')
    })
  }
}