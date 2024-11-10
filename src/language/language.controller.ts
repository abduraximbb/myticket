import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LanguageService } from './language.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Language } from './models/language.model';

@ApiTags("Languages")
@Controller("language")
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @ApiOperation({ summary: "Create new language" })
  @ApiResponse({
    status: 201,
    description: "Success created new language",
    type: Language,
  })
  @Post("create")
  create(@Body() createLanguageDto: CreateLanguageDto) {
    return this.languageService.create(createLanguageDto);
  }

  @ApiOperation({ summary: "Fetch all languages" })
  @ApiResponse({
    status: 200,
    description: "Success fetched all languages",
    type: [Language],
  })
  @Get("all")
  findAll() {
    return this.languageService.findAll();
  }

  @ApiOperation({ summary: "Find by ID" })
  @ApiResponse({
    status: 200,
    description: "Success fetched by ID",
    type: Language,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.languageService.findOne(+id);
  }

  @ApiOperation({ summary: "Update by ID" })
  @ApiResponse({
    status: 200,
    description: "Success updated by ID",
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateLanguageDto: UpdateLanguageDto
  ) {
    return this.languageService.update(+id, updateLanguageDto);
  }

  @ApiOperation({ summary: "Delete by ID" })
  @ApiResponse({
    status: 200,
    description: "Success deleted by ID",
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.languageService.remove(+id);
  }
}
