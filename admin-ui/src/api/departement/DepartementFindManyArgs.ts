import { DepartementWhereInput } from "./DepartementWhereInput";
import { DepartementOrderByInput } from "./DepartementOrderByInput";

export type DepartementFindManyArgs = {
  where?: DepartementWhereInput;
  orderBy?: DepartementOrderByInput;
  skip?: number;
  take?: number;
};
