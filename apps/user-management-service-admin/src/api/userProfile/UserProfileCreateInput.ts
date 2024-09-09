import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProfileCreateInput = {
  address?: string | null;
  phoneNumber?: string | null;
  user?: UserWhereUniqueInput | null;
};
