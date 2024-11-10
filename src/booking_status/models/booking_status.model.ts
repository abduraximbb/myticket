import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Booking } from "../../booking/models/booking.model";

interface BookingStatusCreationAttr{
    name:string
}

@Table({ tableName: "bookin_status", timestamps: false })
export class BookingStatus extends Model<
  BookingStatus,
  BookingStatusCreationAttr
> {
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

  @HasMany(()=>Booking)
  booking:Booking
}
