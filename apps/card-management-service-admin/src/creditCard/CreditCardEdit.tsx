import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CreditCardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="cardHolderName" source="cardHolderName" />
        <TextInput label="cardNumber" source="cardNumber" />
        <TextInput label="CVC" source="cvc" />
        <DateTimeInput label="expiryDate" source="expiryDate" />
        <TextInput label="User" source="user" />
      </SimpleForm>
    </Edit>
  );
};
