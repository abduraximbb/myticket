import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from "class-validator";

export class AdminSignInDto {
  @ApiProperty({ example: "john_doe", description: "Enter admin's login" })
  @IsString()
  @IsNotEmpty()
  readonly login: string;

  @ApiProperty({
    example: "Uzbek!$t0n",
    description:
      "Enter strong password(Use to(symbol, Upper letter, lower letter, number))",
  })
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
