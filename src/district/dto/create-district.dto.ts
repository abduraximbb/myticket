import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDistrictDto {
  @ApiProperty({
    example: "Boston",
    description: "Enter district",
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 1, description: "Enter region's ID" })
  @IsNumber()
  regionId: number;
}
