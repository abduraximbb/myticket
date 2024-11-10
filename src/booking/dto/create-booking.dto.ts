import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateBookingDto {
  @ApiProperty({example:"1", description:"Enter cart ID"})
  @IsNumber()
  cartId: number;
  createdAt?: Date;
  finishedAt?: Date;
  @ApiProperty({example:"1", description:"Enter booking status ID"})
  @IsNumber()
  booking_statusId: number;
}
