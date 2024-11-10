import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { CustomerAddress } from "../../customer_address/models/customer_address.model";
import { Region } from "../../region/models/region.model";
import { Venue } from "../../venue/models/venue.model";

interface DistrictCreationAttr {
  name: string;
  regionId: number;
}

@Table({ tableName: "district", timestamps: false })
export class District extends Model<District, DistrictCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
  })
  regionId: number;

  @BelongsTo(() => Region)
  region: Region;

  @HasMany(() => Venue)
  venues: Venue;

  @HasOne(()=>CustomerAddress)
  address:CustomerAddress
}
