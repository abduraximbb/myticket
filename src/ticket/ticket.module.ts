import { Module } from "@nestjs/common";
import { TicketService } from "./ticket.service";
import { TicketController } from "./ticket.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Ticket } from "./models/ticket.model";
import { TicketStatus } from "../ticket_status/models/ticket_status.model";

@Module({
  imports: [SequelizeModule.forFeature([Ticket])],
  controllers: [TicketController],
  providers: [TicketService],
  exports:[TicketService]
})
export class TicketModule {}