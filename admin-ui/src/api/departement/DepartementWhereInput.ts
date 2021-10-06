import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DepartementWhereInput = {
  id?: StringFilter;
  bureauLocation?: StringNullableFilter;
  address?: StringNullableFilter;
};
