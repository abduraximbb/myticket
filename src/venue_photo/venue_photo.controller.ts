import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { VenuePhotoService } from './venue_photo.service';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { VenuePhoto } from './models/venue_photo.model';

@ApiTags("Obyektlarning rasmlari")
@Controller("venue-photo")
export class VenuePhotoController {
  constructor(private readonly venuePhotoService: VenuePhotoService) {}

  @ApiOperation({ summary: "Create new venue-photo" })
  @ApiResponse({
    status: 201,
    description: "Success craeted new venue-photo",
    type: VenuePhoto,
  })
  @Post("create")
  @UseInterceptors(FileInterceptor("image"))
  create(
    @Body() createVenuePhotoDto: CreateVenuePhotoDto,
    @UploadedFile() image: any
  ) {
    console.log(image);

    return this.venuePhotoService.create(createVenuePhotoDto, image);
  }

  @ApiOperation({ summary: "Fetch all venue-photos" })
  @ApiResponse({
    status: 200,
    description: "Success fetched all venue-photos",
    type: [VenuePhoto],
  })
  @Get("all")
  findAll() {
    return this.venuePhotoService.findAll();
  }

  @ApiOperation({ summary: "Fetch venue-photo by ID" })
  @ApiResponse({
    status: 200,
    description: "Success fetched venue-photo by ID",
    type: VenuePhoto,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.venuePhotoService.findOne(+id);
  }

  @ApiOperation({ summary: "Update venue-photo by ID" })
  @ApiResponse({
    status: 201,
    description: "Success updated venue-photo by ID",
    type: VenuePhoto,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateVenuePhotoDto: UpdateVenuePhotoDto
  ) {
    return this.venuePhotoService.update(+id, updateVenuePhotoDto);
  }

  @ApiOperation({ summary: "Delete venue-photo by ID" })
  @ApiResponse({
    status: 200,
    description: "Success deleted venue-photo by ID",
    type:Number
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.venuePhotoService.remove(+id);
  }
}
