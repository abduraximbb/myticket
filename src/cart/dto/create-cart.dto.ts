import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateCartDto {
  @ApiProperty({ example: "1", description: "Enter ticket ID" })
  @IsNumber()
  ticketId: number;

  @ApiProperty({ example: "1", description: "Enter customer ID" })
  @IsNumber()
  customerId: number;
  createdAt?: Date;
  finishedAt?: Date;

  @ApiProperty({ example: "1", description: "Enter cart status ID" })
  @IsNumber()
  cart_statusId: number;
}
