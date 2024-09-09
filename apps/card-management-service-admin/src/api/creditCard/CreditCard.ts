export type CreditCard = {
  cardHolderName: string | null;
  cardNumber: string | null;
  createdAt: Date;
  cvc: string | null;
  expiryDate: Date | null;
  id: string;
  updatedAt: Date;
  user: string | null;
};
