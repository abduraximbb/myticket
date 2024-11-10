import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Region } from './models/region.model';

@ApiTags("Regions")
@Controller("region")
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @ApiOperation({ summary: "Create new region" })
  @ApiResponse({
    status: 201,
    description: "Success created new region",
    type: Region,
  })
  @Post("create")
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto);
  }

  @ApiOperation({ summary: "Fetch all regions" })
  @ApiResponse({
    status: 200,
    description: "Success fetched all regions",
    type: [Region],
  })
  @Get("all")
  findAll() {
    return this.regionService.findAll();
  }

  @ApiOperation({ summary: "Find by ID" })
  @ApiResponse({
    status: 200,
    description: "Success fetched by ID",
    type: Region,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.regionService.findOne(+id);
  }

  @ApiOperation({ summary: "Update by ID" })
  @ApiResponse({
    status: 200,
    description: "Success updated by ID",
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionService.update(+id, updateRegionDto);
  }

  @ApiOperation({ summary: "Delete by ID" })
  @ApiResponse({
    status: 200,
    description: "Success deleted by ID",
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.regionService.remove(+id);
  }
}
