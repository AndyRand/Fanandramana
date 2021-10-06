import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DepartementTitle } from "../departement/DepartementTitle";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
