import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";
import { VenueType } from "../../venue_type/models/venue_type.model";

interface IVenueVenueTypeCreationAttr {
  venueId: number;
  venue_typeId: number;
}

@Table({ tableName: "venue_venue_type", timestamps: false })
export class VenueVenueType extends Model<
  VenueVenueType,
  IVenueVenueTypeCreationAttr
> {
  @ForeignKey(() => Venue)
  @Column({ type: DataType.INTEGER })
  venueId: number;

  @ForeignKey(() => VenueType)
  @Column({ type: DataType.INTEGER })
  venue_typeId: number;

  @BelongsTo(() => Venue)
  venue: Venue;

  @BelongsTo(() => VenueType)
  venue_type: VenueType;
}
