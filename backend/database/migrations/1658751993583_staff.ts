import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Staffs extends BaseSchema {
  protected tableName = 'staffs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();

      table.string('first_name', 180).notNullable();
      table.string('last_name', 180).notNullable();
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
