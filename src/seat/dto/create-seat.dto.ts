import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSeatDto {
  @ApiProperty({ example: "3-A", description: "Enter seat's sector" })
  @IsString()
  @IsNotEmpty()
  sector: string;

  @ApiProperty({ example: 3, description: "Enter seat's row number" })
  @IsNumber()
  @IsNotEmpty()
  row_number: number;

  @ApiProperty({ example: 1, description: "Enter seat's number" })
  @IsNumber()
  @IsNotEmpty()
  number: number;

  @ApiProperty({ example: 1, description: "Enter venue's ID" })
  @IsNumber()
  @IsNotEmpty()
  venueId: number;

  @ApiProperty({ example: 1, description: "Enter seat_type's ID" })
  @IsNumber()
  @IsNotEmpty()
  seat_typeId: number;

  @ApiProperty({
    example: "white, right",
    description: "Enter location of seat",
  })
  @IsString()
  @IsNotEmpty()
  location_in_schema: string;
}
