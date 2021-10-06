import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DepartementTitle } from "../departement/DepartementTitle";

export const EmployeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <DateTimeInput label="Birthdate" source="birthdate" />
        <TextInput label="Email Adress" source="emailAdress" type="email" />
        <TextInput label="Books" source="book" />
        <ReferenceInput
          source="departement.id"
          reference="Departement"
          label="Dept"
        >
          <SelectInput optionText={DepartementTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
