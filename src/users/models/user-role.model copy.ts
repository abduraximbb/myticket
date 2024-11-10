import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Users } from "./users.model";
import { Roles } from "../../roles/models/roles.model";

interface IUserRoleCreationAttr {
  userId: number;
  roleId: number;
}

@Table({ tableName: "user_roles", timestamps: false })
export class UserRoles extends Model<UserRoles, IUserRoleCreationAttr> {
  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @ForeignKey(() => Roles)
  @Column({
    type: DataType.INTEGER,
  })
  roleId: number;
}
