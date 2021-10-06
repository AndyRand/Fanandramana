import { ArgsType, Field } from "@nestjs/graphql";
import { DepartementWhereUniqueInput } from "./DepartementWhereUniqueInput";

@ArgsType()
class DeleteDepartementArgs {
  @Field(() => DepartementWhereUniqueInput, { nullable: false })
  where!: DepartementWhereUniqueInput;
}

export { DeleteDepartementArgs };
