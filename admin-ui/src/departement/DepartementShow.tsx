import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DEPARTEMENT_TITLE_FIELD } from "./DepartementTitle";

export const DepartementShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Bureau Location" source="bureauLocation" />
        <TextField label="Address" source="address" />
        <ReferenceManyField
          reference="Employee"
          target="DepartementId"
          label="Employees"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Birthdate" source="birthdate" />
            <TextField label="Email Adress" source="emailAdress" />
            <TextField label="Books" source="book" />
            <ReferenceField
              label="Dept"
              source="departement.id"
              reference="Departement"
            >
              <TextField source={DEPARTEMENT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
