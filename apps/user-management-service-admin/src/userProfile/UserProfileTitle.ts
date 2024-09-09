import { UserProfile as TUserProfile } from "../api/userProfile/UserProfile";

export const USERPROFILE_TITLE_FIELD = "address";

export const UserProfileTitle = (record: TUserProfile): string => {
  return record.address?.toString() || String(record.id);
};
