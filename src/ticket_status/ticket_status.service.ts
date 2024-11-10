import { Injectable } from '@nestjs/common';
import { CreateTicketStatusDto } from './dto/create-ticket_status.dto';
import { UpdateTicketStatusDto } from './dto/update-ticket_status.dto';
import { InjectModel } from '@nestjs/sequelize';
import { TicketStatus } from './models/ticket_status.model';

@Injectable()
export class TicketStatusService {
  constructor(@InjectModel(TicketStatus) private ticketStatusModel: typeof TicketStatus){}

  create(createTicketStatusDto: CreateTicketStatusDto) {
    return this.ticketStatusModel.create(createTicketStatusDto);
  }

  findAll() {
    return this.ticketStatusModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.ticketStatusModel.findOne({where:{id}, include:{all:true}});
  }

  async update(id: number, updateTicketStatusDto: UpdateTicketStatusDto) {
    const ticket_status = await this.ticketStatusModel.update(updateTicketStatusDto, {where:{id}, returning:true})
    return ticket_status[1][0];
  }

  remove(id: number) {
    return this.ticketStatusModel.destroy({where:{id}});
  }
}
