import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript"
import { Cart } from "../../cart/models/cart.model"
import { Event } from "../../event/models/event.model"
import { Seat } from "../../seat/models/seat.model"
import { TicketStatus } from "../../ticket_status/models/ticket_status.model"

interface ITicketCreationAttr{
    eventId:number
    seatId:number
    price:number
    service_fee:number
    ticket_statusId:number
    ticket_type: string
}

@Table({ tableName: "ticket", timestamps: false })
export class Ticket extends Model<Ticket, ITicketCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Event)
  @Column({
    type: DataType.INTEGER,
  })
  eventId: number;
  @BelongsTo(() => Event)
  event: Event;

  @ForeignKey(() => Seat)
  @Column({
    type: DataType.INTEGER,
  })
  seatId: number;
  @BelongsTo(() => Seat)
  seat: Seat;

  @Column({
    type: DataType.INTEGER,
  })
  price: number;

  @Column({
    type: DataType.INTEGER,
  })
  service_fee: number;

  @Column({
    type: DataType.INTEGER,
  })
  ticket_statusId: number;

  @Column({
    type: DataType.STRING,
  })
  ticket_type: string;

  @HasMany(()=>Cart)
  cart: Cart

}
