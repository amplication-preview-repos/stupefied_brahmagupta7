import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CreditCardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="cardHolderName" source="cardHolderName" />
        <TextField label="cardNumber" source="cardNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="CVC" source="cvc" />
        <TextField label="expiryDate" source="expiryDate" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User" source="user" />
      </SimpleShowLayout>
    </Show>
  );
};
