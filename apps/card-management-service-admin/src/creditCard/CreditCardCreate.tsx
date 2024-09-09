import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CreditCardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="cardHolderName" source="cardHolderName" />
        <TextInput label="cardNumber" source="cardNumber" />
        <TextInput label="CVC" source="cvc" />
        <DateTimeInput label="expiryDate" source="expiryDate" />
        <TextInput label="User" source="user" />
      </SimpleForm>
    </Create>
  );
};
