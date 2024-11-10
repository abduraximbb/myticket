import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript"
import { Booking } from "../../booking/models/booking.model"
import { CartStatus } from "../../cart_status/models/cart_status.model"
import { Customer } from "../../customer/models/customer.model"
import { Ticket } from "../../ticket/models/ticket.model"

interface ICartModel{
    ticketId:number
    customerId:number
    createdAt:Date
    finishedAt:Date
    cart_statusId:number
}

@Table({ tableName: "cart", timestamps: false })
export class Cart extends Model<Cart, ICartModel> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Ticket)
  @Column({
    type: DataType.INTEGER,
  })
  ticketId: number;
  @BelongsTo(() => Ticket)
  ticket: Ticket;

  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
  })
  customerId: number;
  @BelongsTo(() => Customer)
  customer: Customer;

  @Column({
    type: DataType.DATE,
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,
  })
  finishedAt: Date;

  @ForeignKey(() => CartStatus)
  @Column({
    type: DataType.INTEGER,
  })
  cart_statusId:number
  @BelongsTo(()=>CartStatus)
  status:CartStatus


  @HasMany(()=>Booking)
  booking:Booking
}
