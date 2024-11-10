import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './models/admin.model';
import * as bcrypt from "bcrypt";


@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private adminModel:typeof Admin){}

  async create(createAdminDto: CreateAdminDto) {
    return this.adminModel.create(createAdminDto);
  }

  findByLogin(login:string){
    return this.adminModel.findOne({where:{login},include:{all:true}})
  }

  findAll() {
    return this.adminModel.findAll({include:{all:true}});
  }

  findOne(id: number) {
    return this.adminModel.findOne({where:{id}, include:{all:true}});
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const admin = await this.adminModel.update(updateAdminDto, {where:{id}, returning:true})
    return admin[1][0];
  }

  remove(id: number) {
    return this.adminModel.destroy({where:{id}});
  }
}
