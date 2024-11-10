import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOctal, IsOptional, IsString } from "class-validator";

export class CreateEventDto {
  @ApiProperty({
    example: "Consert",
    description: "Enter consert's name",
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: "123456", description: "Enter concert's photo path" })
  @IsString()
  @IsOptional()
  photo: string;

  @ApiProperty({ example: "2022-01-01", description: "Enter concert's start date" })
  @IsString()
  @IsNotEmpty()
  start_date: string;

  @ApiProperty({ example: "14:00", description: "Enter concert's start time" })
  @IsString()
  @IsNotEmpty()
  start_time: string;

  @ApiProperty({ example: "2022-01-01", description: "Enter concert's finish date" })
  @IsString()
  @IsNotEmpty()
  finish_date: string;

  @ApiProperty({ example: "16:00", description: "Enter concert's finish time" })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  finish_time: string;

  @ApiProperty({ example: "Consert By Dua Lipa", description: "Enter concert's info" })
  @IsString()
  @IsNotEmpty()
  info: string;

  @ApiProperty({ example: 1, description: "Enter concert's event type ID" })
  @IsNotEmpty()
  @IsNumber()
  event_typeId: number;

  @ApiProperty({ example: 1, description: "Enter human_category's ID" })
  @IsNotEmpty()
  @IsNumber()
  human_categoryId: number;

  @ApiProperty({ example: 1, description: "Enter venue's ID" })
  @IsNotEmpty()
  @IsNumber()
  venueId: number;

  @ApiProperty({ example: 1, description: "Enter language's ID" })
  @IsNotEmpty()
  @IsNumber()
  languageId: number;

  @ApiProperty({ example: "2024-12-12", description: "Enter concert's relaese date" })
  @IsNotEmpty()
  @IsNumber()
  release_date: string;
}
