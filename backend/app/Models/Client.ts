import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'

import Appointment from './Appointment';

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'name'})
  public name: string;

  @hasOne(() => Appointment)
  public appointment: HasOne<typeof Appointment>
}
