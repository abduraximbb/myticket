import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Venue } from './models/venue.model';

@ApiTags("Venue (tadbir o'tkazish objektlari)")
@Controller("venue")
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @ApiOperation({ summary: "Create new venue" })
  @ApiResponse({
    status: 201,
    description: "Success craeted new venue",
    type: Venue,
  })
  @Post("create")
  create(@Body() createVenueDto: CreateVenueDto) {
    return this.venueService.create(createVenueDto);
  }

  @ApiOperation({ summary: "Fetch all venues" })
  @ApiResponse({
    status: 200,
    description: "Success fetched all venues",
    type: [Venue],
  })
  @Get("all")
  findAll() {
    return this.venueService.findAll();
  }

  @ApiOperation({ summary: "Fetch venue by ID" })
  @ApiResponse({
    status: 200,
    description: "Success fetched venue by ID",
    type: Venue,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.venueService.findOne(+id);
  }

  @ApiOperation({ summary: "Update venue by ID" })
  @ApiResponse({
    status: 201,
    description: "Success updated venue by ID",
    type: Venue,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateVenueDto: UpdateVenueDto) {
    return this.venueService.update(+id, updateVenueDto);
  }

  @ApiOperation({ summary: "Delete venue by ID" })
  @ApiResponse({
    status: 200,
    description: "Success deleted venue by ID",
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.venueService.remove(+id);
  }
}
