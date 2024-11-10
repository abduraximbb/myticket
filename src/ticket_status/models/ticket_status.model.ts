import { Column, DataType, Model, Table } from "sequelize-typescript";

interface TicketStatusCreationAttr {
  name: string;
}

@Table({ tableName: "ticket_status" })
export class TicketStatus extends Model<
  TicketStatus,
  TicketStatusCreationAttr
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
}
