import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DepartementWhereUniqueInput } from "../departement/DepartementWhereUniqueInput";

export type EmployeeWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  birthdate?: DateTimeNullableFilter;
  emailAdress?: StringNullableFilter;
  book?: StringNullableFilter;
  dept?: DepartementWhereUniqueInput;
};
