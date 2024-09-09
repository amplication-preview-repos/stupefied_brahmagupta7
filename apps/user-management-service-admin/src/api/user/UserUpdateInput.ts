import { InputJsonValue } from "../../types";
import { UserProfileUpdateManyWithoutUsersInput } from "./UserProfileUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userProfiles?: UserProfileUpdateManyWithoutUsersInput;
  username?: string;
};
