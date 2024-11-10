import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateVenueDto {
  @ApiProperty({example:"HUMO", description:"Enetr venue's name"})
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({example:"Bishkek, Kazakhstan", description:"Venue's address"})
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({example:"Bishkek, Kazakhstan", description:"Venue's location"})
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({example:"humo.uz", description:"Venue's site"})
  @IsNotEmpty()
  site: string;

  @ApiProperty({example:"1234567", description:"Venue's phone number(unique)"})
  @IsNotEmpty()
  @IsString()
  phone: string;
}
