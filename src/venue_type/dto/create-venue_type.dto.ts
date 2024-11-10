import { ApiProperty } from "@nestjs/swagger";

export class CreateVenueTypeDto {
  @ApiProperty({example:"Sport complex", description:"Enter a venue type"})
  name: string;
}