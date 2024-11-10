import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { District } from "../../district/models/district.model";
import { Venue } from "../../venue/models/venue.model";

interface RegionCreationAttr{
    name: string
}

@Table({ tableName: "region" })
export class Region extends Model<Region, RegionCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @HasMany(() => Venue)
  venues: Venue[];

  @HasMany(() => District)
  districts: District[];
}
