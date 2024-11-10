import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateRoleDto {
  @ApiProperty({ example: "ADMIN", description: "Bu yerda Rollar kiritiladi" })
  @IsString({ message: "String bo'lishi kerak" })
  @IsNotEmpty()
  value: string;

  @ApiProperty({
    example: "ADMIN roli ma'lumotlari",
    description: "Bu yerda Rol bo'yicha to'liq ma'lumot yoziladi",
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}
