import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { VenueTypeService } from "./venue_type.service";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { VenueType } from "./models/venue_type.model";

@ApiTags("Venue-Type")
@Controller("venue-type")
export class VenueTypeController {
  constructor(private readonly venueTypeService: VenueTypeService) {}

  @ApiOperation({ summary: "Create new venue-type" })
  @ApiResponse({
    status: 201,
    description: "Success craeted new venue-type",
    type: VenueType,
  })
  @Post("create")
  async createVenueType(@Body() createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeService.createVenueType(createVenueTypeDto);
  }

  @ApiOperation({ summary: "Fetch all venue-types" })
  @ApiResponse({
    status: 200,
    description: "Success fetched all venue-types",
    type: [VenueType],
  })
  @Get("all")
  async getAllVenueType() {
    return this.venueTypeService.getAllVenueType();
  }

  @ApiOperation({ summary: "Fetch venue-type by ID" })
  @ApiResponse({
    status: 200,
    description: "Success fetched venue-type by ID",
    type: VenueType,
  })
  @Get(":id")
  async getVenueTypeById(@Param("id") id: number) {
    return this.venueTypeService.getVenueTypeById(id);
  }

  @ApiOperation({ summary: "Delete venue-type by ID" })
  @ApiResponse({
    status: 200,
    description: "Success deleted venue-type by ID",
    type: Number,
  })
  @Delete(":id")
  async deleteVenueTypeById(@Param("id") id: number) {
    return this.venueTypeService.deleteVenueTypeById(id);
  }

  @ApiOperation({ summary: "Update venue-type by ID" })
  @ApiResponse({
    status: 200,
    description: "Success updated venue-type",
    type: VenueType,
  })
  @Patch(":id")
  async updateVenueTypeById(
    @Param("id") id: number,
    @Body() updateVenueTypeDto: UpdateVenueTypeDto
  ) {
    return this.venueTypeService.updateVenueTypeById(id, updateVenueTypeDto);
  }
}
