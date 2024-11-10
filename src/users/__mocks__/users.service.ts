import { usersStub } from "../test/stubs/users.stub";

export const UsersService = jest.fn().mockReturnValue({
  create: jest.fn().mockResolvedValue(usersStub()),
  findAll: jest.fn().mockResolvedValue([usersStub()]),
  findOne: jest.fn().mockResolvedValue(usersStub()),
  remove: jest.fn().mockReturnValue({message:"Foydalanuvchi o'chirildi"})
});

