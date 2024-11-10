import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from '../decorator/roles-auth.decorator';


@ApiTags("Foydalanuvchilar rollari")
@Controller("roles")
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @ApiOperation({ summary: "Create new role" })
  @ApiResponse({
    status: 201,
    description: "Success created new role",
    type: Roles,
  })
  @Post("create")
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @ApiOperation({ summary: "Fetch all roles" })
  @ApiResponse({
    status: 200,
    description: "Success fetched all roles",
    type: [Roles],
  })
  @Get("all")
  findAll() {
    return this.rolesService.findAll();
  }

  @ApiOperation({ summary: "Find by value" })
  @ApiResponse({
    status: 200,
    description: "Success fetched by value",
    type: Roles,
  })
  @Get("/value/:value")
  findRoleByValue(@Param("value") value: string) {
    return this.rolesService.findRoleByValue(value);
  }

  @ApiOperation({ summary: "Find by ID" })
  @ApiResponse({
    status: 200,
    description: "Success fetched by ID",
    type: Roles,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.rolesService.findOne(+id);
  }

  @ApiOperation({ summary: "Update by ID" })
  @ApiResponse({
    status: 200,
    description: "Success updated by ID",
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @ApiOperation({ summary: "Delete by ID" })
  @ApiResponse({
    status: 200,
    description: "Success deleted by ID",
    type: Number,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.rolesService.remove(+id);
  }
}
