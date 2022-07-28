import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Appointment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ serializeAs: 'dateDebut' })
  public dateDebut: DateTime

  @column.dateTime({ serializeAs: 'dateFin' })
  public dateFin: DateTime

  @column({ serializeAs: 'clientId' })
  public clientId: number;

  @column({ serializeAs: 'staffId' })
  public staffId: number;

}
