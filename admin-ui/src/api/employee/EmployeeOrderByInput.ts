import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  birthdate?: SortOrder;
  emailAdress?: SortOrder;
  book?: SortOrder;
  deptId?: SortOrder;
};
