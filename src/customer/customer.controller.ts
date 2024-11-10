import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Customer } from './models/customer.model';

@ApiTags("Customers")
@Controller("customer")
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @ApiOperation({ summary: "Register new Customer" })
  @ApiResponse({
    status: 201,
    description: "Success registrated new customer",
    type: Customer,
  })
  @Post("create")
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @ApiOperation({ summary: "Find all customers" })
  @ApiResponse({
    status: 200,
    description: "Success fetched all customers",
    type: [Customer],
  })
  @Get("all")
  findAll() {
    return this.customerService.findAll();
  }

  @ApiOperation({ summary: "Find by ID" })
  @ApiResponse({
    status: 200,
    description: "Success fetched by ID",
    type: Customer,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.customerService.findOne(+id);
  }

  @ApiOperation({ summary: "Update by ID" })
  @ApiResponse({
    status: 200,
    description: "Success updated by ID",
    type: Customer,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCustomerDto: UpdateCustomerDto
  ) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @ApiOperation({ summary: "Delete customer by ID" })
  @ApiResponse({
    status: 200,
    description: "Success deleted by ID",
    type: String,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.customerService.remove(+id);
  }
}
