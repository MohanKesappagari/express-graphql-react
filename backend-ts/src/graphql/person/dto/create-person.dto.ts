import { Field, InputType } from "type-graphql";

@InputType()
export class CreatePersonDto {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => Boolean)
  isactive: boolean;
}
