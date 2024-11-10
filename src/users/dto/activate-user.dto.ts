import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class ActivateUserDto {
  @ApiProperty({example:1, description:"Enetr user's ID"})
  @IsNumber()
  readonly userId: number;
}
