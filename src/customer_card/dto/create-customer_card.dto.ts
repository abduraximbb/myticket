import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCustomerCardDto {
  @ApiProperty({ example: "1", description: "Enetr custoner's ID" })
  @IsNumber()
  customerId: number;

  @ApiProperty({ example: "VISA", description: "Enter card's name" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: "1234567", description: "Enter card's phone number" })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({
    example: "1234893993433",
    description: "Enter card's cvv number",
  })
  @IsNotEmpty()
  @IsString()
  card_number: string;

  @ApiProperty({
    example: "2028",
    description: "Enter card's expiration time",
  })
  @IsNotEmpty()
  @IsString()
  year: string;

  @ApiProperty({ example: "02", description: "Enter card's expiration month" })
  @IsNotEmpty()
  @IsString()
  month: string;

  @ApiProperty({ example: true, description: "Is card active?" })
  @IsBoolean()
  is_active?: boolean;

  @ApiProperty({ example: true, description: "Is card main?" })
  @IsBoolean()
  is_main?: boolean;
}
