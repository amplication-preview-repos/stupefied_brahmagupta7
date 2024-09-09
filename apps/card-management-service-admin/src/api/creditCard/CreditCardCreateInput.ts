export type CreditCardCreateInput = {
  cardHolderName?: string | null;
  cardNumber?: string | null;
  cvc?: string | null;
  expiryDate?: Date | null;
  user?: string | null;
};
