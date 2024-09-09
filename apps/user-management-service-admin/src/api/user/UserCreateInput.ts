import { InputJsonValue } from "../../types";
import { UserProfileCreateNestedManyWithoutUsersInput } from "./UserProfileCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  userProfiles?: UserProfileCreateNestedManyWithoutUsersInput;
  username: string;
};
