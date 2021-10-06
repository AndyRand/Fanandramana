import { ArgsType, Field } from "@nestjs/graphql";
import { DepartementWhereUniqueInput } from "./DepartementWhereUniqueInput";
import { DepartementUpdateInput } from "./DepartementUpdateInput";

@ArgsType()
class UpdateDepartementArgs {
  @Field(() => DepartementWhereUniqueInput, { nullable: false })
  where!: DepartementWhereUniqueInput;
  @Field(() => DepartementUpdateInput, { nullable: false })
  data!: DepartementUpdateInput;
}

export { UpdateDepartementArgs };
