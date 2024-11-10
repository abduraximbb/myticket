import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateEventTypeDto {
  @ApiProperty({ example: "Concert", description: "Enter event type's name" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 1, description: "Enter parent event type's ID" })
  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  parent_event_typeId?: number;
}
