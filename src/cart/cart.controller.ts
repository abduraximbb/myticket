import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Cart } from './models/cart.model';

@ApiTags("Cart")
@Controller("cart")
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({ summary: "Create new Cart" })
  @ApiResponse({
    status: 201,
    description: "Success created new Cart",
    type: Cart,
  })
  @Post("create")
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @ApiOperation({ summary: "Find all Carts" })
  @ApiResponse({
    status: 200,
    description: "Success fetched all Carts",
    type: [Cart],
  })
  @Get("all")
  findAll() {
    return this.cartService.findAll();
  }

  @ApiOperation({ summary: "Find by ID" })
  @ApiResponse({
    status: 200,
    description: "Success fetched by ID",
    type: Cart,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.cartService.findOne(+id);
  }

  @ApiOperation({ summary: "Update by ID" })
  @ApiResponse({
    status: 201,
    description: "Success updated by ID",
    type: Cart,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(+id, updateCartDto);
  }

  @ApiOperation({ summary: "Delete by ID" })
  @ApiResponse({
    status: 200,
    description: "Success deleted by ID",
    type: Number,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.cartService.remove(+id);
  }
}
