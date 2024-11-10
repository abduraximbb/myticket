import { Injectable } from "@nestjs/common";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Cart } from "./models/cart.model";

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private cartModel: typeof Cart) {}

  create(createCartDto: CreateCartDto) {
    const now = new Date();
    const finished_time = new Date(now.getTime() + 15 * 60000)
    return this.cartModel.create({...createCartDto,createdAt:now,finishedAt:finished_time});
  }

  findAll() {
    return this.cartModel.findAll({include:{all:true}});
  }

  findOne(id: number) {
    return this.cartModel.findOne({where:{id}, include:{all:true}});
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    const cart = await this.cartModel.update(updateCartDto, {where:{id}, returning:true})
    return cart[1][0];
  }

  remove(id: number) {
    return this.cartModel.destroy({where:{id}});
  }
}
