import { Users } from "../../../users/models/users.model";

export const usersStub = (): Partial<Users> => {
  return {
    id: 1,
    name: "user1",
    email: "user1@mail.uz",
    password: "1234567",
    role_value: "ADmIN",
    is_active: true,
  };
};
