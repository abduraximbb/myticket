import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Ticket } from './models/ticket.model';

@ApiTags("Ticket")
@Controller("ticket")
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @ApiOperation({ summary: "Create new ticket" })
  @ApiResponse({
    status: 201,
    description: "Success craeted new ticket",
    type: Ticket,
  })
  @Post("create")
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }

  @ApiOperation({ summary: "Fetch all tickets sold" })
  @ApiResponse({
    status: 200,
    description: "Success fetched all tickets sold",
    type: [Ticket],
  })
  @Get("sold/")
  findSeatByStatus() {
    return this.ticketService.findSeatByStatus();
  }

  @ApiOperation({ summary: "Fetch all tickets" })
  @ApiResponse({
    status: 200,
    description: "Success fetched all tickets",
    type: [Ticket],
  })
  @Get("all")
  findAll() {
    return this.ticketService.findAll();
  }

  @ApiOperation({ summary: "Fetch ticket by ID" })
  @ApiResponse({
    status: 200,
    description: "Success fetched ticket by ID",
    type: Ticket,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.ticketService.findOne(+id);
  }

  @ApiOperation({ summary: "Update ticket by ID" })
  @ApiResponse({
    status: 200,
    description: "Success updated ticket by ID",
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketService.update(+id, updateTicketDto);
  }

  @ApiOperation({ summary: "Delete ticket by ID" })
  @ApiResponse({
    status: 200,
    description: "Success deleted ticket by ID",
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.ticketService.remove(+id);
  }
}
