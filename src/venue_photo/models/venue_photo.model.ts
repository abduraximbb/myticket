import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";

interface VenuePhotoCreationAttr {
  venueId: number;
  url: string;
}

@Table({ tableName: "venue_photo", timestamps: false })
export class VenuePhoto extends Model<VenuePhoto, VenuePhotoCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venueId: number;

  @Column({
    type: DataType.STRING,
  })
  url: string;

  @BelongsTo(() => Venue)
  venue: Venue;
}
