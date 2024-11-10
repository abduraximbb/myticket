import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Customer } from "../../customer/models/customer.model";

interface ICustomerCardCreationAttr {
  customerId: number;
  name: string;
  phone: string;
  card_number: string;
  year: string;
  month: string;
  is_active: boolean;
  is_main: boolean;
}

@Table({
  tableName: "customer_card",
})
export class CustomerCard extends Model<
  CustomerCard,
  ICustomerCardCreationAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
  })
  customerId: number;

  @BelongsTo(() => Customer)
  customer: Customer;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  card_number: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  year: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  month: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_main: boolean;
}
