import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DepartementEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Bureau Location" source="bureauLocation" />
        <TextInput label="Address" source="address" />
      </SimpleForm>
    </Edit>
  );
};
