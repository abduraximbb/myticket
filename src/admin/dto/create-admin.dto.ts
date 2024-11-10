import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateAdminDto {
  @ApiProperty({ example: "John Doe", description: "Enter admin name" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: "john_doe", description: "Enter admin's login" })
  @IsString()
  @IsNotEmpty()
  login: string;

  @ApiProperty({
    example: "Uzbek!$t0n",
    description:
      "Enter strong password(Use to(symbol, Upper letter, lower letter, number))",
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  is_active?: boolean;
  is_creator?: boolean;
  hashed_refresh_token?: string;
}
