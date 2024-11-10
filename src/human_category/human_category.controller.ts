import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { HumanCategoryService } from './human_category.service';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
import { Response } from 'express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HumanCategory } from './models/human_category.model';

@ApiTags("Human-Category")
@Controller("human-category")
export class HumanCategoryController {
  constructor(private readonly humanCategoryService: HumanCategoryService) {}

  @ApiOperation({ summary: "Create new human-category" })
  @ApiResponse({
    status: 201,
    description: "Success created new human-category",
    type: HumanCategory,
  })
  @Post("create")
  async createHumanCategory(
    @Body() createHumanCategoryDto: CreateHumanCategoryDto
  ) {
    return this.humanCategoryService.createHumanCategory(
      createHumanCategoryDto
    );
  }

  // @Get("all")
  // async getAllHumancategory() {
  //   return this.humanCategoryService.getAllHumanCategory();
  // }

  @ApiOperation({ summary: "Fetch all human-category" })
  @ApiResponse({
    status: 200,
    description: "Success fetched all human-category",
    type: [HumanCategory],
  })
  @Get("all")
  async getAllHumancategory(@Res() res: Response) {
    const human_category =
      await this.humanCategoryService.getAllHumanCategory();
    res.status(HttpStatus.OK).send({
      message: "Seccess getted",
      data: human_category,
    });
  }

  @ApiOperation({ summary: "Get human-category by name" })
  @ApiResponse({
    status: 200,
    description: "Success fetched human-category",
    type: HumanCategory,
  })
  @Get("search")
  async getHumanCategoryByName(@Query("name") name: string) {
    return this.humanCategoryService.getHumanCategoryByName(name);
  }

  @ApiOperation({ summary: "Get human-category by ID" })
  @ApiResponse({
    status: 200,
    description: "Success fetched  human-category by ID",
    type: HumanCategory,
  })
  @Get(":id")
  async getHumanCategoryById(@Param("id") id: number) {
    return this.humanCategoryService.getHumanCategoryById(id);
  }

  @ApiOperation({ summary: "Delete human-category by ID" })
  @ApiResponse({
    status: 200,
    description: "Success deleted human-category",
    type: HumanCategory,
  })
  @Delete(":id")
  async deleteHumanCategoryById(@Param("id") id: number) {
    return this.humanCategoryService.deletehumanCategoryById(id);
  }

  @ApiOperation({ summary: "Update human-category by ID" })
  @ApiResponse({
    status: 200,
    description: "Success updated human-category",
    type: HumanCategory,
  })
  @Patch(":id")
  async updateHumanCategory(
    @Param("id") id: number,
    @Body() updateHumanCategoryDto: UpdateHumanCategoryDto
  ) {
    return this.humanCategoryService.updateHumanCategoryById(
      id,
      updateHumanCategoryDto
    );
  }
}