import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Booking } from './models/booking.model';

@ApiTags("booking")
@Controller("booking")
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @ApiOperation({ summary: "Create new booking" })
  @ApiResponse({
    status: 201,
    description: "Success created new booking",
    type: Booking,
  })
  @Post("create")
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @ApiOperation({ summary: "FInd all bookings" })
  @ApiResponse({
    status: 200,
    description: "Success fetched all bookings",
    type: [Booking],
  })
  @Get("all")
  findAll() {
    return this.bookingService.findAll();
  }

  @ApiOperation({ summary: "Find by ID" })
  @ApiResponse({
    status: 200,
    description: "Success fetched booking by ID",
    type: Booking,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.bookingService.findOne(+id);
  }

  @ApiOperation({ summary: "Update booking by ID" })
  @ApiResponse({
    status: 201,
    description: "Success updated booking by ID",
    type: Booking,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.update(+id, updateBookingDto);
  }

  @ApiOperation({ summary: "Delete booking by ID" })
  @ApiResponse({
    status: 200,
    description: "Success deleted booking",
    type: String,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.bookingService.remove(+id);
  }
}
