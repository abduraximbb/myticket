import { JwtService } from "@nestjs/jwt";
import { UsersController } from "../users.controller";
import { UsersService } from "../users.service";
import { Test } from "@nestjs/testing";
import { Users } from "../models/users.model";
import { CreateUserDto } from "../dto/create-user.dto";
import { usersStub } from "./stubs/users.stub";
import exp from "constants";
import { Param } from "@nestjs/common";
import { where } from "sequelize";

jest.mock("../users.service");

describe("Users controller", () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, JwtService],
    }).compile();
    usersController = moduleRef.get<UsersController>(UsersController);
    usersService = moduleRef.get<UsersService>(UsersService);
  });

  it("Users controller should be defined", () => {
    expect(usersController).toBeDefined();
  });
  it("Users service should be defined", () => {
    expect(usersController).toBeDefined();
  });

  describe("create user", () => {
    describe("when create user is called", () => {
      let user: Users;
      let createUserDto: CreateUserDto;
      beforeAll(async () => {
        createUserDto = {
          name: usersStub().name,
          email: usersStub().email,
          password: usersStub().password,
          role_value: usersStub().role_value,
        };
        user = await usersController.create(createUserDto);
        console.log(user);
      });
      it("then it should call usersService", () => {
        expect(usersService.create).toHaveBeenCalledWith(createUserDto);
      });
      test("than it should return user", () => {
        expect(user).toEqual(usersStub());
      });
    });
  });

  describe("findAll users", () => {
    describe("when findAll users is called", () => {
      let users: Users[];
      beforeAll(async () => {
        users = await usersController.findAll();
      });
      it("then it should call userService", () => {
        expect(usersService.findAll).toHaveBeenCalled();
      });
      it("then it should return users", () => {
        expect(users).toEqual([usersStub()]);
      });
    });
  });

  // describe("findOne user", () => {
  //   describe("when findOne user is called", () => {
  //     let user: Users;
  //     let userId: number;
  //     beforeAll(async () => {
  //       userId = usersStub().id;
  //       user = await usersController.findOne(String(userId));
  //     });
  //     it("than it should call userService", () => {
  //       expect(usersService.findOne).toHaveBeenCalledWith(userId);
  //     });
  //     it("than it should return User with a correct Id", () => {
  //       expect(user).toEqual(usersStub());
  //     });
  //   });
  // });

  // describe("remove user", () => {
  //   describe("when remove user is called", () => {
  //     let userId: number;
  //     beforeAll(async () => {
  //       userId = usersStub().id;
  //     });
  //     it("than it should call userService", () => {
  //       expect(usersService.remove).toEqual(Number);
  //     });
  //   });
  // });
});
