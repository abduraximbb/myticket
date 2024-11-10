import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { District } from './models/district.model';

@ApiTags("Districts")
@Controller("district")
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @ApiOperation({ summary: "Create new district" })
  @ApiResponse({
    status: 201,
    description: "Success created new district",
    type: District,
  })
  @Post("create")
  create(@Body() createDistrictDto: CreateDistrictDto) {
    return this.districtService.create(createDistrictDto);
  }

  @ApiOperation({ summary: "Find all districts" })
  @ApiResponse({
    status: 200,
    description: "Success found all district",
    type: [District],
  })
  @Get("all")
  findAll() {
    return this.districtService.findAll();
  }

  @ApiOperation({ summary: "Fetch district by ID" })
  @ApiResponse({
    status: 200,
    description: "Success fetched district",
    type: District,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.districtService.findOne(+id);
  }

  @ApiOperation({ summary: "Update district by ID" })
  @ApiResponse({
    status: 201,
    description: "Success updated district",
    type: District,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateDistrictDto: UpdateDistrictDto
  ) {
    return this.districtService.update(+id, updateDistrictDto);
  }

  @ApiOperation({ summary: "Delete district by ID" })
  @ApiResponse({
    status: 200,
    description: "Success deleted district",
    type: Number,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.districtService.remove(+id);
  }
}
