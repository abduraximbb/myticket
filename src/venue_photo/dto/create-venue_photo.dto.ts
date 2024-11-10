import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateVenuePhotoDto {
  @ApiProperty({example:1, description:"Enter venue's ID"})
  @IsNumber()
  @Type(()=>Number)
  venueId: number;

  @ApiProperty({example:"image.jpg", description:"Enter photo's URL"})
  @IsString()
  @IsOptional()
  url: string;
}
