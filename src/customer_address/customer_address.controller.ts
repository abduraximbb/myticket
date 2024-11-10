import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerAddressService } from './customer_address.service';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomerAddress } from './models/customer_address.model';

@ApiTags("Customer-Address")
@Controller("customer-address")
export class CustomerAddressController {
  constructor(
    private readonly customerAddressService: CustomerAddressService
  ) {}

  @ApiOperation({ summary: "Create new cutomer-Address" })
  @ApiResponse({
    status: 201,
    description: "Success created new customer-address",
    type: CustomerAddress,
  })
  @Post("create")
  create(@Body() createCustomerAddressDto: CreateCustomerAddressDto) {
    return this.customerAddressService.create(createCustomerAddressDto);
  }

  @ApiOperation({ summary: "Find all Cutomer-Address" })
  @ApiResponse({
    status: 200,
    description: "Success fetched customer-address",
    type: [CustomerAddress],
  })
  @Get("all")
  findAll() {
    return this.customerAddressService.findAll();
  }

  @ApiOperation({ summary: "Find by ID" })
  @ApiResponse({
    status: 200,
    description: "Success fetched customer-address by ID",
    type: CustomerAddress,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.customerAddressService.findOne(+id);
  }

  @ApiOperation({ summary: "Update cutomer-Address by ID" })
  @ApiResponse({
    status: 201,
    description: "Success updated customer-address",
    type: CustomerAddress,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCustomerAddressDto: UpdateCustomerAddressDto
  ) {
    return this.customerAddressService.update(+id, updateCustomerAddressDto);
  }

  @ApiOperation({ summary: "Delete cutomer-Address by ID" })
  @ApiResponse({
    status: 200,
    description: "Success deleted customer-address",
    type: Number,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.customerAddressService.remove(+id);
  }
}
