import { SortOrder } from "../../util/SortOrder";

export type CreditCardOrderByInput = {
  cardHolderName?: SortOrder;
  cardNumber?: SortOrder;
  createdAt?: SortOrder;
  cvc?: SortOrder;
  expiryDate?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
};
