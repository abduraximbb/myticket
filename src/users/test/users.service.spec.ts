import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "../users.service";
import { usersStub } from "./stubs/users.stub";
import { JwtService } from "@nestjs/jwt";
import { RolesService } from "../../roles/roles.service";
import { getModelToken } from "@nestjs/sequelize";
import { Users } from "../models/users.model";
import { Roles } from "../../roles/models/roles.model";
import { CreateUserDto } from "../dto/create-user.dto";
import exp from "constants";
import { UpdateUserDto } from "../dto/update-user.dto";

describe("Users services", () => {
  let usersService: UsersService;
  const mockUsersModel = {
    create: jest.fn().mockImplementation(usersStub),
    findOne: jest.fn().mockImplementation(usersStub),
    findAll: jest.fn().mockImplementation(() => [usersStub()]),
    findByPk: jest.fn().mockImplementation(usersStub),
    update: jest.fn().mockImplementation(usersStub),
    destroy: jest.fn(),
  };
  const mockRolesModel = {
    findOne: jest.fn().mockImplementation((value: string) => "USER"),
  };
  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        UsersService,
        JwtService,
        RolesService,
        {
          provide: getModelToken(Users),
          useValue: mockUsersModel,
        },
        {
          provide: getModelToken(Roles),
          useValue: mockRolesModel,
        },
      ],
    }).compile();
    usersService = moduleRef.get<UsersService>(UsersService);
  });

  it("should be defined", () => {
    expect(usersService).toBeDefined();
  });

  describe("createUser", () => {
    describe("when create User is called", () => {
      let createUserDto: CreateUserDto;
      let newUser: Users;
      beforeEach(async () => {
        createUserDto = {
          name: usersStub().name,
          email: usersStub().email,
          password: usersStub().password,
          role_value: usersStub().role_value,
        };
        newUser = await usersService.create(createUserDto);
        console.log(newUser);
      });
      it("should be create new user", async () => {
        expect(newUser).toMatchObject({
          ...usersStub(),
          roles: ["USER"],
        });
      });
    });
  });

  describe("getOneUser", () => {
    describe("when getOneUser is called", () => {
      test("then it should call usersService", async () => {
        expect(await usersService.findOne(usersStub().id)).toEqual(usersStub());
      });
    });
  });

  describe("getAllUsers", () => {
    describe("when getAllUsers is called", () => {
      test("then it should call usersService", async () => {
        expect(await usersService.findAll()).toEqual([usersStub()]);
      });
    });
  });

//   describe("update", ()=>{
//     describe('when updateUser is called', ()=>{
//        let updateUserDto: UpdateUserDto;
//       let newUser: Users;
//       beforeEach(async () => {
//         updateUserDto = {
//           name: usersStub().name,
//           email: usersStub().email,
//           password: usersStub().password,
//         };
//     })
//     it("then it should call usersService", async ()=>{
//         expect(await usersService.update(updateUserDto)).toMatchObject(usersStub)
//     })
//   })
});
