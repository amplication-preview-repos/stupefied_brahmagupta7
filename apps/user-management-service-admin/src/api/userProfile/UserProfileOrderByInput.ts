import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
