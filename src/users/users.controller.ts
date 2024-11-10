import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AddRemoveRoleDto } from './dto/add-remove-role.dto';
import { ActivateUserDto } from './dto/activate-user.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { SelfGuard } from '../guards/self.guard';
import { Roles } from '../decorator/roles-auth.decorator';
import { RolesGuard } from '../guards/roles.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Users } from './models/users.model';


@ApiTags("Foydalanuvchilar")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: "Create new user" })
  @ApiResponse({
    status: 201,
    description: "Success craeted new seat",
    type: Users,
  })
  @Post("create")
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({ summary: "Barcha foydalanuvchilarni ro'yxati" })
  @ApiResponse({
    status: 200,
    description: "List of users",
    type: [Users],
  })
  @UseGuards(JwtAuthGuard)
  @Get("all")
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: "Foydalanuvchini ID bo'yicha ko'rish" })
  @ApiResponse({
    status: 200,
    description: "Get user by ID",
    type: Users,
  })
  @UseGuards(SelfGuard)
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @ApiOperation({ summary: "Foydalanuvchini ID bo'yicha o'zgartirish" })
  @ApiResponse({
    status: 201,
    description: "Success updated user by ID",
    type: Users,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @ApiOperation({ summary: "Foydalanuvchini ID bo'yicha o'chirish" })
  @ApiResponse({ status: 200, description: "User deleted by ID" })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }

  @ApiOperation({ summary: "Add new Role" })
  @ApiResponse({
    status: 201,
    description: "Success added new role",
    type: Roles,
  })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @HttpCode(200)
  @Post("add_role")
  async addRole(@Body() addRemoveRoleDto: AddRemoveRoleDto) {
    return this.usersService.addRole(addRemoveRoleDto);
  }

  @ApiOperation({ summary: "Remove seat" })
  @ApiResponse({
    status: 200,
    description: "Success deleted role",
    type: Roles,
  })
  @HttpCode(200)
  @Post("remove_role")
  async removeRole(@Body() addRemoveRoleDto: AddRemoveRoleDto) {
    return this.usersService.removeRole(addRemoveRoleDto);
  }

  @ApiOperation({ summary: "Activate user" })
  @ApiResponse({
    status: 200,
    description: "Success success activated user",
    type: Object,
  })
  @HttpCode(200)
  @Post("activate")
  async activateUser(@Body() activateUserDto: ActivateUserDto) {
    return this.usersService.activateUser(activateUserDto);
  }
}
