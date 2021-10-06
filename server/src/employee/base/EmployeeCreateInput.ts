import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DepartementWhereUniqueInput } from "../../departement/base/DepartementWhereUniqueInput";
@InputType()
class EmployeeCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  birthdate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  emailAdress?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  book?: string | null;

  @ApiProperty({
    required: false,
    type: () => DepartementWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DepartementWhereUniqueInput)
  @IsOptional()
  @Field(() => DepartementWhereUniqueInput, {
    nullable: true,
  })
  dept?: DepartementWhereUniqueInput | null;
}
export { EmployeeCreateInput };
