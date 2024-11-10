import { BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { Cart } from "../../cart/models/cart.model";
import { CustomerAddress } from "../../customer_address/models/customer_address.model";
import { CustomerCard } from "../../customer_card/models/customer_card.model";
import { Language } from "../../language/models/language.model";
import { Ticket } from "../../ticket/models/ticket.model";

interface ICustomerCreationAttr {
  first_name: string;
  last_name: string;
  phone: string;
  hashed_password: string;
  email: string;
  birth_date: string;
  gender: number;
  languageId: number;
  hashed_refresh_token?: string;
}

@Table({
  tableName: "customers",
  timestamps: true,
})
export class Customer extends Model<Customer, ICustomerCreationAttr> {
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
  })
  last_name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: true,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.DATEONLY,
  })
  birth_date: string;

  @Column({
    type: DataType.INTEGER,
  })
  gender: number;

  @ForeignKey(()=>Language)
  @Column({
    type: DataType.INTEGER,
  })
  languageId: number;
  @BelongsTo(()=>Language)
  language:Language

  @Column({
    type: DataType.STRING,
  })
  hashed_password: string;

  @HasMany(()=>CustomerCard)
  cards: CustomerCard

  @HasMany(()=>CustomerAddress)
  address:CustomerAddress

  @HasOne(()=>Cart)
  tickets: Cart
}
