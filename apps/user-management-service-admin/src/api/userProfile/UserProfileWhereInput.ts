import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProfileWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  phoneNumber?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
