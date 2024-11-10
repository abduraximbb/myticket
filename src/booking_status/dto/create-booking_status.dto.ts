import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateBookingStatusDto {
  @ApiProperty({ example: "Booked", description: "Enter booking or no booked ticket" })
  @IsString()
  @IsNotEmpty()
  name: string;
}
