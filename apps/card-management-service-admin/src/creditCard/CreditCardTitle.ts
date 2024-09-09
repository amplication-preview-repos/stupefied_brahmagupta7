import { CreditCard as TCreditCard } from "../api/creditCard/CreditCard";

export const CREDITCARD_TITLE_FIELD = "cardHolderName";

export const CreditCardTitle = (record: TCreditCard): string => {
  return record.cardHolderName?.toString() || String(record.id);
};
