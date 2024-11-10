import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventTypeService } from './event_type.service';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EventType } from './models/event_type.model';

@ApiTags("Event - type")
@Controller("event-type")
export class EventTypeController {
  constructor(private readonly eventTypeService: EventTypeService) {}

  @ApiOperation({ summary: "Create new event-type" })
  @ApiResponse({
    status: 201,
    description: "Success created new event-type",
    type: EventType,
  })
  @Post("create")
  create(@Body() createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeService.create(createEventTypeDto);
  }

  @ApiOperation({ summary: "Get all event-type" })
  @ApiResponse({
    status: 200,
    description: "Success fetched all event-type",
    type: EventType,
  })
  @Get("all")
  findAll() {
    return this.eventTypeService.findAll();
  }

  @ApiOperation({ summary: "Fetch event-type by ID" })
  @ApiResponse({
    status: 200,
    description: "Success fetched event-type by ID",
    type: EventType,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.eventTypeService.findOne(+id);
  }

  @ApiOperation({ summary: "Update event-type by ID" })
  @ApiResponse({
    status: 200,
    description: "Success updated event-type",
    type: EventType,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateEventTypeDto: UpdateEventTypeDto
  ) {
    return this.eventTypeService.update(+id, updateEventTypeDto);
  }

  @ApiOperation({ summary: "Delete event-type by ID" })
  @ApiResponse({
    status: 200,
    description: "Success deleted event-type",
    type: Number,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.eventTypeService.remove(+id);
  }
}
