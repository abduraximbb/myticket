import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdminGuard } from '../guards/admin.guard';
import { AdminSelfGuard } from '../guards/admin.self.guard';
import { AdminCreatorGuard } from '../guards/admin.creator.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Admin } from './models/admin.model';

@ApiTags("ADMIN")
@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: "Registrated new Admin" })
  @ApiResponse({
    status: 201,
    description: "Success registrated new admin",
    type: String,
  })
  @UseGuards(AdminCreatorGuard)
  @UseGuards(AdminGuard)
  @Post("create")
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @ApiOperation({ summary: "Find all admins" })
  @ApiResponse({
    status: 200,
    description: "Success fetched all admins",
    type: [Admin],
  })
  @UseGuards(AdminCreatorGuard)
  @UseGuards(AdminGuard)
  @Get("all")
  findAll() {
    return this.adminService.findAll();
  }

  @ApiOperation({ summary: "Find admin by ID" })
  @ApiResponse({
    status: 200,
    description: "Success fetched admin by ID",
    type: Admin,
  })
  @UseGuards(AdminCreatorGuard)
  @UseGuards(AdminSelfGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.adminService.findOne(+id);
  }

  @ApiOperation({ summary: "Update admin by ID" })
  @ApiResponse({
    status: 201,
    description: "Success updated admin by ID",
    type: Admin,
  })
  @UseGuards(AdminCreatorGuard)
  @UseGuards(AdminSelfGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @ApiOperation({ summary: "Delete admin by ID" })
  @ApiResponse({
    status: 200,
    description: "Success deleted admin by ID",
    type: Number,
  })
  @UseGuards(AdminCreatorGuard)
  @UseGuards(AdminGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.adminService.remove(+id);
  }
}
