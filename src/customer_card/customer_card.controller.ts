import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerCardService } from './customer_card.service';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomerCard } from './models/customer_card.model';

@ApiTags("Customer-Card")
@Controller("customer-card")
export class CustomerCardController {
  constructor(private readonly customerCardService: CustomerCardService) {}

  @ApiOperation({ summary: "Create new cutomer-card" })
  @ApiResponse({
    status: 201,
    description: "Success created new customer-card",
    type: CustomerCard,
  })
  @Post("create")
  create(@Body() createCustomerCardDto: CreateCustomerCardDto) {
    return this.customerCardService.create(createCustomerCardDto);
  }

  @ApiOperation({ summary: "find all cutomer-card" })
  @ApiResponse({
    status: 200,
    description: "Success fetched all customer-address",
    type: [CustomerCard],
  })
  @Get("all")
  findAll() {
    return this.customerCardService.findAll();
  }

  @ApiOperation({ summary: "Find cutomer-card by ID" })
  @ApiResponse({
    status: 200,
    description: "Success fetched customer-address by ID",
    type: CustomerCard,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.customerCardService.findOne(+id);
  }

  @ApiOperation({ summary: "Update cutomer-card by ID" })
  @ApiResponse({
    status: 201,
    description: "Success updated customer-card by ID",
    type: CustomerCard,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCustomerCardDto: UpdateCustomerCardDto
  ) {
    return this.customerCardService.update(+id, updateCustomerCardDto);
  }

  @ApiOperation({ summary: "Delete cutomer-card by ID" })
  @ApiResponse({
    status: 200,
    description: "Success deleted customer-card by ID",
    type: Number,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.customerCardService.remove(+id);
  }
}
