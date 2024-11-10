import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { EventType } from "../../event_type/models/event_type.model";
import { HumanCategory } from "../../human_category/models/human_category.model";
import { Language } from "../../language/models/language.model";
import { Ticket } from "../../ticket/models/ticket.model";
import { Venue } from "../../venue/models/venue.model";

interface IEventCreationAttr {
  name: string;
  photo: string;
  start_date: string;
  start_time: string;
  finish_date: string;
  finish_time: string;
  info: string;
  event_typeId: number;
  human_categoryId: number;
  venueId: number;
  languageId: number;
  release_date: string;
}


@Table({ tableName: "event", timestamps: false })
export class Event extends Model<Event, IEventCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  photo: string;

  @Column({
    type: DataType.STRING,
  })
  start_date: string;

  @Column({
    type: DataType.STRING,
  })
  start_time: string;
  finish_date: string;

  @Column({
    type: DataType.STRING,
  })
  finish_time: string;

  @Column({
    type: DataType.STRING,
  })
  info: string;

  @ForeignKey(() => EventType)
  @Column({
    type: DataType.INTEGER,
  })
  event_typeId: number;
  @BelongsTo(() => EventType)
  event_type: EventType;

  @ForeignKey(() => HumanCategory)
  @Column({
    type: DataType.INTEGER,
  })
  human_categoryId: number;
  @BelongsTo(() => HumanCategory)
  human_category: HumanCategory;

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venueId: number;
  @BelongsTo(() => Venue)
  venue: Venue;

  @ForeignKey(() => Language)
  @Column({
    type: DataType.INTEGER,
  })
  languageId: number;
  @BelongsTo(()=>Language)
  language:Language

  @Column({
    type:DataType.STRING
  })
  release_date: string;

  @HasMany(()=>Ticket)
  tickets:Ticket
}
