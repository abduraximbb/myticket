import { ApiProperty } from "@nestjs/swagger";

export class CreateRegionDto {
    @ApiProperty({example:"Nottingem", description:"Enter a region name"})
    name:string
}
