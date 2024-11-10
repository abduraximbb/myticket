import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateVenueVenueTypeDto {
  @ApiProperty({example:2, description:"Enter a venue's ID"})
  @IsNumber()
  venueId: number;

  @ApiProperty({example:1, description:"Enter a venue type's ID"})
  @IsNumber()
  venue_typeId: number;
}
