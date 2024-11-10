import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Users } from "./models/users.model";
import { UserRoles } from "./models/user-role.model copy";
import { Roles } from "../roles/models/roles.model";
import { RolesModule } from "../roles/roles.module";
import { RolesService } from "../roles/roles.service";

@Module({
  imports: [SequelizeModule.forFeature([Users, UserRoles, Roles]), RolesModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
