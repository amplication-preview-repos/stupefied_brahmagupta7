import { JsonValue } from "type-fest";
import { UserProfile } from "../userProfile/UserProfile";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userProfiles?: Array<UserProfile>;
  username: string;
};
