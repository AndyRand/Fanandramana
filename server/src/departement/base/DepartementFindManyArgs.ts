import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DepartementWhereInput } from "./DepartementWhereInput";
import { Type } from "class-transformer";
import { DepartementOrderByInput } from "./DepartementOrderByInput";

@ArgsType()
class DepartementFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DepartementWhereInput,
  })
  @Field(() => DepartementWhereInput, { nullable: true })
  @Type(() => DepartementWhereInput)
  where?: DepartementWhereInput;

  @ApiProperty({
    required: false,
    type: DepartementOrderByInput,
  })
  @Field(() => DepartementOrderByInput, { nullable: true })
  @Type(() => DepartementOrderByInput)
  orderBy?: DepartementOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DepartementFindManyArgs };
