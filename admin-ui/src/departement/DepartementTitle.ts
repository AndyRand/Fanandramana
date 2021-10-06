import { Departement as TDepartement } from "../api/departement/Departement";

export const DEPARTEMENT_TITLE_FIELD = "address";

export const DepartementTitle = (record: TDepartement) => {
  return record.address;
};
