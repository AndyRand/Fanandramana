import { Employee } from "../employee/Employee";

export type Departement = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  bureauLocation: string | null;
  employees?: Array<Employee>;
  address: string | null;
};
