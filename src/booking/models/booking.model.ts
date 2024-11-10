import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { BookingStatus } from "../../booking_status/models/booking_status.model"
import { Cart } from "../../cart/models/cart.model"

interface IBookingCreationAttr{
    cartId:number
    createdAt:Date
    finishedAt:Date
    booking_statusId:number
}

@Table({ tableName: "booking", timestamps: false })
export class Booking extends Model<Booking, IBookingCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
  })
  cartId: number;
  @BelongsTo(() => Cart)
  cart: Cart;

  @Column({
    type: DataType.DATE,
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,
  })
  finishedAt: Date;

  @ForeignKey(() => BookingStatus)
  @Column({
    type: DataType.INTEGER,
  })
  booking_statusId: number;
  @BelongsTo(() => BookingStatus)
  status: BookingStatus;
}
