import { Injectable } from '@nestjs/common';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CustomerCard } from './models/customer_card.model';

@Injectable()
export class CustomerCardService {
  constructor(@InjectModel(CustomerCard) private customerCradModel:typeof CustomerCard){}

  create(createCustomerCardDto: CreateCustomerCardDto) {
    return this.customerCradModel.create(createCustomerCardDto);
  }

  findAll() {
    return this.customerCradModel.findAll({include:{all:true}});
  }

  findOne(id: number) {
    return this.customerCradModel.findOne({where:{id}, include:{all:true}});
  }

  async update(id: number, updateCustomerCardDto: UpdateCustomerCardDto) {
    const card_number  = await this.customerCradModel.update(updateCustomerCardDto,{where:{id}, returning:true})
    return card_number[1][0];
  }

  remove(id: number) {
    return this.customerCradModel.destroy({where:{id}});
  }
}
