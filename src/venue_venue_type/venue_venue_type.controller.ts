import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VenueVenueTypeService } from './venue_venue_type.service';
import { CreateVenueVenueTypeDto } from './dto/create-venue_venue_type.dto';
import { UpdateVenueVenueTypeDto } from './dto/update-venue_venue_type.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { VenueVenueType } from './models/venue_venue_type.model';

@ApiTags("Venue-venue-type")
@Controller("venue-venue-type")
export class VenueVenueTypeController {
  constructor(private readonly venueVenueTypeService: VenueVenueTypeService) {}

  @ApiOperation({ summary: "Create new venue-venue-type" })
  @ApiResponse({
    status: 201,
    description: "Success craeted new venue-venue-type",
    type: VenueVenueType,
  })
  @Post("create")
  create(@Body() createVenueVenueTypeDto: CreateVenueVenueTypeDto) {
    return this.venueVenueTypeService.create(createVenueVenueTypeDto);
  }

  @ApiOperation({ summary: "Fetched all venue-venue-type" })
  @ApiResponse({
    status: 200,
    description: "Success fetched all venue-venue-type",
    type: VenueVenueType,
  })
  @Get("all")
  findAll() {
    return this.venueVenueTypeService.findAll();
  }

  @ApiOperation({ summary: "Fetch venue-venue-type by ID" })
  @ApiResponse({
    status: 200,
    description: "Success fetched venue-venue-type by ID",
    type: VenueVenueType,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.venueVenueTypeService.findOne(+id);
  }

  @ApiOperation({ summary: "Update venue-venue-type by ID" })
  @ApiResponse({
    status: 200,
    description: "Success updated venue-venue-type by ID",
    type: VenueVenueType,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateVenueVenueTypeDto: UpdateVenueVenueTypeDto
  ) {
    return this.venueVenueTypeService.update(+id, updateVenueVenueTypeDto);
  }

  @ApiOperation({ summary: "Delete venue-venue-type by ID" })
  @ApiResponse({
    status: 200,
    description: "Success deleted venue-venue-type by ID",
    type: Number,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.venueVenueTypeService.remove(+id);
  }
}
