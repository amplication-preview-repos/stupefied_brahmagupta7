import { User } from "../user/User";

export type UserProfile = {
  address: string | null;
  createdAt: Date;
  id: string;
  phoneNumber: string | null;
  updatedAt: Date;
  user?: User | null;
};
