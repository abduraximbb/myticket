import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "user1", description: "Foydalanuvchining ismi" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "user1.@gmail.com",
    description: "Foydalanuvchining emaili",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "Uzbek!$t0n",
    description:
      "Foydalanuvchining passwordi (Strong password:symbol, katta harf, kichkina harf, raqam)",
  })
  @IsStrongPassword({ minLength: 6 })
  password: string;

  @ApiProperty({
    example: "ADMIN",
    description: "Foydalanuvchiga berilayotgan dastlabki rol",
  })
  @IsString()
  @IsNotEmpty()
  role_value: string;
}
