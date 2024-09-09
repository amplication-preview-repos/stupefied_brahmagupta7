import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CreditCardWhereInput = {
  cardHolderName?: StringNullableFilter;
  cardNumber?: StringNullableFilter;
  cvc?: StringNullableFilter;
  expiryDate?: DateTimeNullableFilter;
  id?: StringFilter;
  user?: StringNullableFilter;
};
