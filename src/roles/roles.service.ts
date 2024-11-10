import { Injectable } from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Roles } from "./models/roles.model";

@Injectable()
export class RolesService {
  constructor(@InjectModel(Roles) private rolesModel: typeof Roles) {}

  create(createRoleDto: CreateRoleDto) {
    return this.rolesModel.create({
      value: createRoleDto.value.toUpperCase(),
      description: createRoleDto.description,
    });
  }

  findAll() {
    return this.rolesModel.findAll({include:{all:true}});
  }

  findRoleByValue(value:string){
    return this.rolesModel.findOne({where:{value:value.toUpperCase()}})
  }

  findOne(id: number) {
    return this.rolesModel.findOne({where:{id}});
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const roles = await this.rolesModel.update(updateRoleDto, {where:{id}, returning:true})
    return roles[1][0];
  }

  remove(id: number) {
    return this.rolesModel.destroy({where:{id}});
  }
}
