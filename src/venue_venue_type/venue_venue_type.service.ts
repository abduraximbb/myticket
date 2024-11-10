import { Injectable } from "@nestjs/common";
import { CreateVenueVenueTypeDto } from "./dto/create-venue_venue_type.dto";
import { UpdateVenueVenueTypeDto } from "./dto/update-venue_venue_type.dto";
import { InjectModel } from "@nestjs/sequelize";
import { VenueVenueType } from "./models/venue_venue_type.model";

@Injectable()
export class VenueVenueTypeService {
  constructor(
    @InjectModel(VenueVenueType)
    private venueVenueTypeModel: typeof VenueVenueType
  ) {}

  create(createVenueVenueTypeDto: CreateVenueVenueTypeDto) {
    return this.venueVenueTypeModel.create(createVenueVenueTypeDto);
  }

  findAll() {
    return this.venueVenueTypeModel.findAll({include:{all:true}});
  }

  findOne(id: number) {
    return this.venueVenueTypeModel.findOne({where:{id}, include:{all:true}});
  }

  async update(id: number, updateVenueVenueTypeDto: UpdateVenueVenueTypeDto) {
    const venue_venue_type = await this.venueVenueTypeModel.update(updateVenueVenueTypeDto, {where:{id}, returning:true})
    return venue_venue_type[1][0];
  }

  remove(id: number) {
    return this.venueVenueTypeModel.destroy({where:{id}});
  }
}