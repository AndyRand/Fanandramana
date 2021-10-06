import { DepartementWhereUniqueInput } from "../departement/DepartementWhereUniqueInput";

export type EmployeeCreateInput = {
  name?: string | null;
  birthdate?: Date | null;
  emailAdress?: string | null;
  book?: string | null;
  dept?: DepartementWhereUniqueInput | null;
};
