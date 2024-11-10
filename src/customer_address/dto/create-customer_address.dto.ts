import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCustomerAddressDto {
  @ApiProperty({ example: "1", description: "Enter customer's ID" })
  @IsNumber()
  customerId: number;

  @ApiProperty({
    example: "John Doe",
    description: "Enter customer's full name",
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: "1", description: "Enetr region's ID" })
  @IsNumber()
  regionId: number;

  @ApiProperty({ example: "1", description: "Enetr district's ID" })
  @IsNumber()
  districtId: number;

  @ApiProperty({ example: "California, Boston", description: "Enter customer's street" })
  @IsNotEmpty()
  @IsString()
  street: string;

  @ApiProperty({ example: "123", description: "Enter customer's house number" })
  @IsNotEmpty()
  @IsString()
  house: string;

  @ApiProperty({ example: "A", description: "Enter customer's apartment number" })
  @IsNumber()
  flat: number;

  @ApiProperty({ example: "New York", description: "Enter customer's city" })
  @IsNotEmpty()
  @IsString()
  location: string;

  @ApiProperty({ example: "10001", description: "Enter customer's post index" })
  @IsNotEmpty()
  @IsString()
  post_index: string;

  @ApiProperty({ example: "New customer", description: "Enter customer's info"})
  @IsString()
  info?: string;
}
