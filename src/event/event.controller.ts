import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { EventService } from "./event.service";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Event } from "./models/event.model";

@ApiTags("Events")
@Controller("event")
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @ApiOperation({ summary: "Create new event" })
  @ApiResponse({
    status: 201,
    description: "Success created new event",
    type: Event,
  })
  @Post("create")
  @UseInterceptors(FileInterceptor("photo"))
  create(@Body() createEventDto: CreateEventDto, @UploadedFile() photo: any) {
    console.log(1);

    return this.eventService.create(createEventDto, photo);
  }

  @ApiOperation({ summary: "Get all event" })
  @ApiResponse({
    status: 200,
    description: "Success fetched all event",
    type: [Event],
  })
  @Get("all")
  findAll() {
    return this.eventService.findAll();
  }

  @ApiOperation({ summary: "Get event by iD" })
  @ApiResponse({
    status: 200,
    description: "Success fetched event by ID",
    type: Event,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.eventService.findOne(+id);
  }

  @ApiOperation({ summary: "Update event by ID" })
  @ApiResponse({
    status: 200,
    description: "Success updated event",
    type: Event,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(+id, updateEventDto);
  }

  @ApiOperation({ summary: "Delete event by ID" })
  @ApiResponse({
    status: 200,
    description: "Success deleted event by ID",
    type: Number,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.eventService.remove(+id);
  }
}
