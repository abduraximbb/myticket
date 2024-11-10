import { Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript"
import { Event } from "../../event/models/event.model";


interface IEventTypeCreationAttr{
    name: string
    parent_event_typeId: number
}

@Table({ tableName: "event_type", timestamps: false })
export class EventType extends Model<EventType, IEventTypeCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ForeignKey(() => EventType)
  @Column({
    type: DataType.INTEGER,
  })
  parent_event_typeId: number;

  @HasMany(() => Event)
  events: Event;
}
