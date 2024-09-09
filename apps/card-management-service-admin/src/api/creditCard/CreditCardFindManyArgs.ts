import { CreditCardWhereInput } from "./CreditCardWhereInput";
import { CreditCardOrderByInput } from "./CreditCardOrderByInput";

export type CreditCardFindManyArgs = {
  where?: CreditCardWhereInput;
  orderBy?: Array<CreditCardOrderByInput>;
  skip?: number;
  take?: number;
};
