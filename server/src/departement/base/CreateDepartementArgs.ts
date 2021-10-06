import { ArgsType, Field } from "@nestjs/graphql";
import { DepartementCreateInput } from "./DepartementCreateInput";

@ArgsType()
class CreateDepartementArgs {
  @Field(() => DepartementCreateInput, { nullable: false })
  data!: DepartementCreateInput;
}

export { CreateDepartementArgs };
