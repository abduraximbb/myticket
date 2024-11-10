import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeatService } from './seat.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Seat } from './models/seat.model';

@ApiTags("Seats")
@Controller("seat")
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  @ApiOperation({ summary: "Create new seat" })
  @ApiResponse({
    status: 201,
    description: "Success craeted new seat",
    type: Seat,
  })
  @Post("create")
  create(@Body() createSeatDto: CreateSeatDto) {
    return this.seatService.create(createSeatDto);
  }

  @ApiOperation({ summary: "Fetch all seats" })
  @ApiResponse({
    status: 200,
    description: "Success fetched all seats",
    type: [Seat],
  })
  @Get("all")
  findAll() {
    return this.seatService.findAll();
  }

  @ApiOperation({ summary: "Fetch seat by ID" })
  @ApiResponse({
    status: 200,
    description: "Success fetched by ID",
    type: Seat,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.seatService.findOne(+id);
  }

  @ApiOperation({ summary: "Update seat by ID" })
  @ApiResponse({
    status: 201,
    description: "Success updated by ID",
    type: Seat,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateSeatDto: UpdateSeatDto) {
    return this.seatService.update(+id, updateSeatDto);
  }

  @ApiOperation({ summary: "Delete seat by ID" })
  @ApiResponse({
    status: 200,
    description: "Success deleted by ID",
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.seatService.remove(+id);
  }
}
