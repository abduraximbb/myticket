import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Users } from "./models/users.model";
import { Roles } from "../roles/models/roles.model";
import { RolesService } from "../roles/roles.service";
import { AddRemoveRoleDto } from "./dto/add-remove-role.dto";
import { ActivateUserDto } from "./dto/activate-user.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users) private userModel: typeof Users,
    private readonly rolesService: RolesService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.userModel.create(createUserDto);
    const role = await this.rolesService.findRoleByValue(
      createUserDto.role_value
    );

    if (!role) {
      throw new BadRequestException("Role not found");
    }

    // await newUser.$set("roles", [role.id]);
    // await newUser.save();
    newUser.roles = [role];

    return newUser;
  }

  findUserByEmail(email: string) {
    return this.userModel.findOne({
      where: { email },
      include: {
        all: true,
        attributes: ["value"],
        through: { attributes: [] },
      },
    });
  }

  findAll() {
    return this.userModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.userModel.findOne({where:{id}, include:{all:true}});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.update(updateUserDto, {where:{id}, returning:true})
    return user[1][0];
  }

  remove(id: number) {
    return {message:"Foydalanuvchi o'chirildi"};
  }

    
  async addRole(addRemoveRoleDto: AddRemoveRoleDto) {
    const user = await this.userModel.findByPk(addRemoveRoleDto.userId);
    const role = await this.rolesService.findRoleByValue(
      addRemoveRoleDto.role_value
    );
    if (role && user) {
      await user.$add("roles", role.id);
      const updatedUser = await this.userModel.findByPk(
        addRemoveRoleDto.userId,
        { include: { all: true } }
      );
      return updatedUser;
    }

    throw new NotFoundException("Foydalanuvchi yoki Role topilmadi");
  }

  async removeRole(addRemoveRoleDto: AddRemoveRoleDto) {
    const user = await this.userModel.findByPk(addRemoveRoleDto.userId);
    const role = await this.rolesService.findRoleByValue(
      addRemoveRoleDto.role_value
    );
    if (role && user) {
      await user.$remove("roles", role.id);
      const updatedUser = await this.userModel.findByPk(
        addRemoveRoleDto.userId,
        { include: { all: true } }
      );
      return updatedUser;
    }

    throw new NotFoundException("Foydalanuvchi yoki Role topilmadi");
  }

  async activateUser(activateUserDto: ActivateUserDto) {
    const user = await this.userModel.findByPk(activateUserDto.userId);

    if (user) {
      user.is_active = true;
      await user.save();
      return user;
    }

    throw new NotFoundException("Foydalanuvchi topilmadi");
  }
}
