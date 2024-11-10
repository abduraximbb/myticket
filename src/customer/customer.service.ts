import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './models/customer.model';
import * as bcrypt from "bcrypt";

@Injectable()
export class CustomerService {
  constructor(@InjectModel(Customer) private customerModel:typeof Customer){}
  
  async create(createCustomerDto: CreateCustomerDto) {
    const hashed_password = await bcrypt.hash(createCustomerDto.password, 7)
    return this.customerModel.create({...createCustomerDto, hashed_password});
  }

  findAll() {
    return this.customerModel.findAll({include:{all:true}});
  }

  findOne(id: number) {
    return this.customerModel.findOne({where:{id},include:{all:true}});
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.customerModel.update(updateCustomerDto, {where:{id}, returning:true})
    return customer[1][0];
  }

  remove(id: number) {
    return this.customerModel.destroy({where:{id}});
  }
}
