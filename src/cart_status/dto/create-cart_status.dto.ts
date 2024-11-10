import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCartStatusDto {
  @ApiProperty({ example: "cart1", description: "Enter customer's cart" })
  @IsString()
  @IsNotEmpty()
  name: string;
}
