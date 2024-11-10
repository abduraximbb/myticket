import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { SignInDto } from "./dto/signin.dto";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { AdminSignInDto } from "./dto/adminSignin.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Users } from "../users/models/users.model";

@ApiTags("AUTH")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: "Yangi foydalanuvchini ro'yxatdan o'tkizish" })
  @ApiResponse({
    status: 201,
    description: "Ro'yxatdan o'tgan foydalanuvchi",
    type: String,
  })
  @Post("signup")
  async signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @ApiOperation({ summary: "Tizimga kirish" })
  @ApiResponse({
    status: 200,
    description: "Success login",
    type: String,
  })
  @HttpCode(HttpStatus.OK)
  @Post("signin")
  async signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @ApiOperation({ summary: "Admin ro'yxatdan o'tish" })
  @ApiResponse({
    status: 200,
    description: "Success login admin",
    type: String,
  })
  @Post("adminsignup")
  async adminSignUp(@Body() createAdminDto: CreateAdminDto) {
    return this.authService.adminSignUp(createAdminDto);
  }

  @ApiOperation({ summary: "Admin Tizimga kirish" })
  @ApiResponse({
    status: 200,
    description: "Success login admin",
    type: String,
  })
  @HttpCode(HttpStatus.OK)
  @Post("adminsignin")
  async adminSignin(@Body() adminSignInDto: AdminSignInDto) {
    return this.authService.adminSignIn(adminSignInDto);
  }
}
