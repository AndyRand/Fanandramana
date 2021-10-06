import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type PostCreateInput = {
  title?: string | null;
  content?: string | null;
  employee?: EmployeeWhereUniqueInput | null;
};
