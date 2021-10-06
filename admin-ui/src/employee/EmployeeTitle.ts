import { Employee as TEmployee } from "../api/employee/Employee";

export const EMPLOYEE_TITLE_FIELD = "name";

export const EmployeeTitle = (record: TEmployee) => {
  return record.name;
};
