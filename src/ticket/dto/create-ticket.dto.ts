import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTicketDto {
    @ApiProperty({example:"1", description:"Enter event's ID"})
    @IsNumber()
  eventId: number;

  @ApiProperty({example:"1", description:"Enter seat's ID"})
  @IsNumber()
  seatId: number;

  @ApiProperty({example:"10000", description:"Enter ticket's price"})
  @IsNumber()
  price: number;

  @ApiProperty({example:"500", description:"Enter ticket's service fee"})
  @IsNumber()
  @IsNotEmpty()
  service_fee: number;

  @ApiProperty({example:"1", description:"Enter ticket's status ID"})
  @IsNumber()
  @IsNotEmpty()
  ticket_statusId: number;

  @ApiProperty({example:"VIP", description:"Enter ticket's type"})
  @IsNotEmpty()
  @IsString()
  ticket_type: string;
}
