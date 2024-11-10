import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TicketStatusService } from './ticket_status.service';
import { CreateTicketStatusDto } from './dto/create-ticket_status.dto';
import { UpdateTicketStatusDto } from './dto/update-ticket_status.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TicketStatus } from './models/ticket_status.model';

@ApiTags("Ticket-status")
@Controller("ticket-status")
export class TicketStatusController {
  constructor(private readonly ticketStatusService: TicketStatusService) {}

  @ApiOperation({ summary: "Create new ticket-status" })
  @ApiResponse({
    status: 201,
    description: "Success craeted new ticket status",
    type: TicketStatus,
  })
  @Post("create")
  create(@Body() createTicketStatusDto: CreateTicketStatusDto) {
    return this.ticketStatusService.create(createTicketStatusDto);
  }

  @ApiOperation({ summary: "Fetch all ticket-status" })
  @ApiResponse({
    status: 200,
    description: "Success fetched all ticket-status",
    type: [TicketStatus],
  })
  @Get("all")
  findAll() {
    return this.ticketStatusService.findAll();
  }

  @ApiOperation({ summary: "Fetch ticket-status by ID" })
  @ApiResponse({
    status: 200,
    description: "Success fetched ticket-status by ID",
    type: TicketStatus,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.ticketStatusService.findOne(+id);
  }

  @ApiOperation({ summary: "Update ticket-status by ID" })
  @ApiResponse({
    status: 200,
    description: "Success updated ticket-status by ID",
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateTicketStatusDto: UpdateTicketStatusDto
  ) {
    return this.ticketStatusService.update(+id, updateTicketStatusDto);
  }

  @ApiOperation({ summary: "Delete ticket-status by ID" })
  @ApiResponse({
    status: 200,
    description: "Success deleted ticket-status by ID",
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.ticketStatusService.remove(+id);
  }
}
