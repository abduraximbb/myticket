import { Injectable } from "@nestjs/common";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Event } from "./models/event.model";
import { TicketService } from "../ticket/ticket.service";
import { FileService } from "../file/file.service";

@Injectable()
export class EventService {
  constructor(@InjectModel(Event) private eventModel: typeof Event,
  private readonly ticket: TicketService,
  private readonly fileService: FileService
  ) {}

  async create(createEventDto: CreateEventDto, image:any) {
    console.log(createEventDto);
    
    const fileName = await this.fileService.saveFile(image);

    return this.eventModel.create({...createEventDto, photo:fileName});
  }

  async findAll() {
    const seats = await this.ticket.findSeatByStatus()
    const sold_seats = []
    seats.forEach((seat)=>{
      //buyog'da ticketning ichida sotilgan seat kegan. Shuning faqat seatlarini massivga oganman
      //ticket_statusId = 2 = sotilgan
      //ticket_statusId = 2 = sotilmagan
      //tushunishiz uchun 
      sold_seats.push(seat.seat.dataValues);
    })
    
    const events = await this.eventModel.findAll({include:{all:true}});

    return {events,sold_seats}
  }

  findOne(id: number) {
    return this.eventModel.findOne({where:{id}, include:{all:true}});
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    const event = await this.eventModel.update(updateEventDto, {where:{id}, returning:true})
    return event[1][0];
  }

  remove(id: number) {
    return this.eventModel.destroy({where:{id}});
  }
}
