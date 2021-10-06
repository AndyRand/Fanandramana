import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type PostUpdateInput = {
  title?: string | null;
  content?: string | null;
  employee?: EmployeeWhereUniqueInput | null;
};
