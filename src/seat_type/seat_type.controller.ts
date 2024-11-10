import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { SeatTypeService } from "./seat_type.service";
import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { SeatType } from "./models/seat_type.model";

@ApiTags("Seat-Type")
@Controller("seat-type")
export class SeatTypeController {
  constructor(private readonly seatTypeService: SeatTypeService) {}

  @ApiOperation({ summary: "Create new seat-type" })
  @ApiResponse({
    status: 201,
    description: "Success craeted new seat-type",
    type: SeatType,
  })
  @Post("create")
  async createSeatType(@Body() createSeatTypeDto: CreateSeatTypeDto) {
    return this.seatTypeService.createSeatType(createSeatTypeDto);
  }

  @ApiOperation({ summary: "Fetch all seat-type" })
  @ApiResponse({
    status: 200,
    description: "Success fetched all seat-type",
    type: [SeatType],
  })
  @Get("all")
  async getAllSeatType() {
    return this.seatTypeService.getAllSeatType();
  }

  @ApiOperation({ summary: "Fetch seat-type by ID" })
  @ApiResponse({
    status: 200,
    description: "Success fetched seat-type by ID",
    type: SeatType,
  })
  @Get(":id")
  async getSeatTypeById(@Param("id") id: number) {
    return this.seatTypeService.getSeatTypeById(id);
  }

  @ApiOperation({ summary: "Delete seat-type by ID" })
  @ApiResponse({
    status: 200,
    description: "Success deleted seat-type by ID",
  })
  @Delete(":id")
  async deleteSeatTypeById(@Param("id") id: number) {
    return this.seatTypeService.deleteSeatTypeById(id);
  }

  @ApiOperation({ summary: "Update seat-type by ID" })
  @ApiResponse({
    status: 200,
    description: "Success updated seat-type by ID",
    type: SeatType,
  })
  @Patch(":id")
  async updateSeatTypeById(
    @Param("id") id: number,
    @Body() updateSeatTypeDto: UpdateSeatTypeDto
  ) {
    return this.seatTypeService.updateSeatTypeById(id, updateSeatTypeDto);
  }
}
