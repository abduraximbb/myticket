import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";

import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { Users } from "../users/models/users.model";
import { SignInDto } from "./dto/signin.dto";
import { AdminService } from "../admin/admin.service";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { Admin } from "../admin/models/admin.model";
import { AdminSignInDto } from "./dto/adminSignin.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly adminService: AdminService
  ) {}

  async signUp(createUserDto: CreateUserDto) {
    const candidate = await this.userService.findUserByEmail(
      createUserDto.email
    );

    if (candidate) {
      throw new BadRequestException("Bunday Foydalanuvchi mavjud");
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 7);
    const newUser = await this.userService.create({
      ...createUserDto,
      password: hashedPassword,
    });
    return this.generateToken(newUser);
  }

  async signIn(signInDto: SignInDto) {
    const user = await this.userService.findUserByEmail(signInDto.email);
    if (!user) {
      throw new UnauthorizedException("User not found");
    }
    const validPassword = await bcrypt.compare(
      signInDto.password,
      user.password
    );
    if (!validPassword) {
      throw new UnauthorizedException("User not found");
    }

    return this.generateToken(user);
  }

  async generateToken(user: Users) {
    const payload = {
      sub: user.id,
      email: user.email,
      roles: user.roles,
    };

    return {token: this.jwtService.sign(payload)};
  }

  async adminGenerateToken(admin: Admin) {
    const payload = {
      sub: admin.id,
      login: admin.login,
      is_creator: admin.is_creator,
      is_active: admin.is_active,
    };

    return this.jwtService.sign(payload);
  }

  async adminSignUp(createAdminDto: CreateAdminDto) {
    const candidate = await this.adminService.findByLogin(createAdminDto.login);

    if (candidate) {
      throw new BadRequestException("Bunday Admin mavjud");
    }

    const hashedPassword = await bcrypt.hash(createAdminDto.password, 7);
    const newAdmin = await this.adminService.create({
      ...createAdminDto,
      password: hashedPassword,
    });
    return this.adminGenerateToken(newAdmin);
  }

  async adminSignIn(adminSignInDto: AdminSignInDto) {
    const admin = await this.adminService.findByLogin(adminSignInDto.login);
    console.log(admin);

    if (!admin) {
      throw new UnauthorizedException("Admin not found");
    }
    const validPassword = await bcrypt.compare(
      adminSignInDto.password,
      admin.hashed_password
    );
    // console.log(validPassword);

    if (!validPassword) {
      throw new UnauthorizedException("Admin not found");
    }

    return this.adminGenerateToken(admin);
  }
}
