import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString, IsStrongPassword } from "class-validator";

export class CreateCustomerDto {
  @ApiProperty({ example: "John", description: "Enter customer's first name" })
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @ApiProperty({ example: "Doe", description: "Enter customer's last name" })
  @IsString()
  @IsNotEmpty()
  last_name: string;

  @ApiProperty({ example: "+998912345678", description: "Enter customer's phone number(phone number is unique)" })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: "Uzbeki!st0n", description: "Strong password(min length:4)" })
  @IsString()
  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 4,
    minNumbers: 0,
    minUppercase: 0,
    minSymbols: 0,
  })
  password: string;

  @ApiProperty({ example: "johndoe@gmail.com", description: "Enter customer's email(email is unique)" })
  @IsEmail()
  email: string;

  @ApiProperty({ example: "2000-01-01", description: "Enter customer's birth date" })
  @IsString()
  @IsNotEmpty()
  birth_date: string;

  @ApiProperty({ example: "1", description: "Enter customer's gender" })
  @IsNumber()
  gender: number;

  @ApiProperty({ example: "1", description: "Enter customer's language ID" })
  @IsNotEmpty()
  @IsNumber()
  languageId: number;

  hashed_refresh_token?: string;
}
