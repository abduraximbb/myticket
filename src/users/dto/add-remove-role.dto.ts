import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AddRemoveRoleDto {
  @ApiProperty({example:"2", description:"Enter user's ID"})
  @IsNumber()
  readonly userId: number;

  @ApiProperty({example:"admin", description:"Enter role value"})
  @IsString()
  readonly role_value: string;
}
