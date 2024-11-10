import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateLanguageDto {
    @ApiProperty({ example: "English", description: "Enter language's name" })
  @IsString()
  @IsNotEmpty()
  name: string;
}
