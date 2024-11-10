import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookingStatusService } from './booking_status.service';
import { CreateBookingStatusDto } from './dto/create-booking_status.dto';
import { UpdateBookingStatusDto } from './dto/update-booking_status.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BookingStatus } from './models/booking_status.model';

@ApiTags("Booking-Status")
@Controller("booking-status")
export class BookingStatusController {
  constructor(private readonly bookingStatusService: BookingStatusService) {}

  @ApiOperation({ summary: "Create new booking_status" })
  @ApiResponse({
    status: 201,
    description: "Success created new booking_status",
    type: BookingStatus,
  })
  @Post("create")
  create(@Body() createBookingStatusDto: CreateBookingStatusDto) {
    return this.bookingStatusService.create(createBookingStatusDto);
  }

  @ApiOperation({ summary: "Find all booking_statuses" })
  @ApiResponse({
    status: 200,
    description: "Success fetched all booking_statuses",
    type: [BookingStatus],
  })
  @Get("all")
  findAll() {
    return this.bookingStatusService.findAll();
  }

  @ApiOperation({ summary: "Find by ID" })
  @ApiResponse({
    status: 200,
    description: "Success fetched by ID",
    type: BookingStatus,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.bookingStatusService.findOne(+id);
  }

  @ApiOperation({ summary: "Update by ID" })
  @ApiResponse({
    status: 201,
    description: "Success updated by ID",
    type: BookingStatus,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateBookingStatusDto: UpdateBookingStatusDto
  ) {
    return this.bookingStatusService.update(+id, updateBookingStatusDto);
  }

  @ApiOperation({ summary: "Delete booking_status" })
  @ApiResponse({
    status: 200,
    description: "Success deleted booking_status",
    type: Number,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.bookingStatusService.remove(+id);
  }
}
