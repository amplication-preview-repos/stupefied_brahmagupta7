import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProfileUpdateInput = {
  address?: string | null;
  phoneNumber?: string | null;
  user?: UserWhereUniqueInput | null;
};
