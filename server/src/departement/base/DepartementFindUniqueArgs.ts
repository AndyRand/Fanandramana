import { ArgsType, Field } from "@nestjs/graphql";
import { DepartementWhereUniqueInput } from "./DepartementWhereUniqueInput";

@ArgsType()
class DepartementFindUniqueArgs {
  @Field(() => DepartementWhereUniqueInput, { nullable: false })
  where!: DepartementWhereUniqueInput;
}

export { DepartementFindUniqueArgs };
