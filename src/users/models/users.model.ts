import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript"
import { Roles } from "../../roles/models/roles.model"
import { UserRoles } from "./user-role.model copy"
import { ApiProperty } from "@nestjs/swagger"

interface IUserCreationAttr{
    name: string
    email: string
    password: string
    role_value: string
}

@Table({ tableName: "users" })
export class Users extends Model<Users, IUserCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Foydalanuvchinig unikal ID raqami (autoIncrement)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "user1",
    description: "Foydalanuvchinig ismi",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: "user1@gmail.com",
    description: "Foydalanuvchinig emaili",
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({
    example: "user1",
    description: "Foydalanuvchinig passwordi",
  })
  @Column({
    type: DataType.STRING,
  })
  password: string;

  @ApiProperty({
    example: "admin",
    description: "Foydalanuvchinig dastlabki roli",
  })
  @Column({
    type: DataType.STRING,
  })
  role_value: string;

  @ApiProperty({
    example: true,
    description: "Foydalanuvchinig (faolligi defaultValue:false)",
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @BelongsToMany(() => Roles, () => UserRoles)
  roles: Roles[];
}
