import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartStatusService } from './cart_status.service';
import { CreateCartStatusDto } from './dto/create-cart_status.dto';
import { UpdateCartStatusDto } from './dto/update-cart_status.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CartStatus } from './models/cart_status.model';

@ApiTags("Cart-Status")
@Controller("cart-status")
export class CartStatusController {
  constructor(private readonly cartStatusService: CartStatusService) {}

  @ApiOperation({ summary: "Create new Cart-status" })
  @ApiResponse({
    status: 201,
    description: "Success created new cart-status",
    type: CartStatus,
  })
  @Post("create")
  create(@Body() createCartStatusDto: CreateCartStatusDto) {
    return this.cartStatusService.create(createCartStatusDto);
  }

  @ApiOperation({ summary: "Find all Cart_Statuses" })
  @ApiResponse({
    status: 200,
    description: "Success fetched all Cart_Statuses",
    type: [CartStatus],
  })
  @Get("all")
  findAll() {
    return this.cartStatusService.findAll();
  }

  @ApiOperation({ summary: "Find by ID" })
  @ApiResponse({
    status: 200,
    description: "Success found by ID",
    type: CartStatus,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.cartStatusService.findOne(+id);
  }

  @ApiOperation({ summary: "Update by ID" })
  @ApiResponse({
    status: 201,
    description: "Success updated by ID",
    type: CartStatus,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCartStatusDto: UpdateCartStatusDto
  ) {
    return this.cartStatusService.update(+id, updateCartStatusDto);
  }

  @ApiOperation({ summary: "Delete by ID" })
  @ApiResponse({
    status: 200,
    description: "Success delete by ID",
    type: Number,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.cartStatusService.remove(+id);
  }
}
