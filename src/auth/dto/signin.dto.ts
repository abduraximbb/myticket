import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsStrongPassword } from "class-validator";

export class SignInDto {
  @ApiProperty({
    example: "johndoe@gmail.com",
    description: "Enter admin's email address",
  })
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    example: "StrongPassword123",
    description:
      "Enter strong password (Strong password: at least 5 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character)",
  })
  @IsStrongPassword({ minLength: 5, minSymbols: 0 })
  readonly password: string;
}
