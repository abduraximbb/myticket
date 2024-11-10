import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateHumanCategoryDto {
  @ApiProperty({example:"Child", description:"Enter homan's category"})
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({example:5, description:"Enter homan's start age"})
  @IsNotEmpty()
  @IsNumber()
  start_age: number;

  @ApiProperty({example:12, description:"Enter homan's finish age"})
  @IsNotEmpty()
  @IsNumber()
  finish_age: number;

  @ApiProperty({example:1, description:"Enter gender's number"})
  @IsNotEmpty()
  @IsNumber()
  gender: number;
}