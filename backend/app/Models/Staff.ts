import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'

import Appointment from './Appointment';

export default class Staffs extends BaseModel {

  @column({ isPrimary: true })
  public id: number;

  @column({ serializeAs: 'firstName'})
  public firstName: string;

  @column({ serializeAs: 'lastName' })
  public lastName: string;

  @hasOne(() => Appointment)
  public appointment: HasOne<typeof Appointment>
}
