import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DepartementCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Bureau Location" source="bureauLocation" />
        <TextInput label="Address" source="address" />
      </SimpleForm>
    </Create>
  );
};
