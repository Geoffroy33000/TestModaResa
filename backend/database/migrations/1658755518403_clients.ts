import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Clients extends BaseSchema {
  protected tableName = 'clients'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('name', 180).notNullable().unique();
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
