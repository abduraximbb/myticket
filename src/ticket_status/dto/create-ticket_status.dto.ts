import { ApiProperty } from "@nestjs/swagger";

export class CreateTicketStatusDto {
    @ApiProperty({example:"sold", description:"Enter description about ticket status"})
  name: string;
}
