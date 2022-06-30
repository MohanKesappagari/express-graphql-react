import { Field, InputType } from "type-graphql";

@InputType()
export class CreatePersonDto {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  mobile?: string;

  @Field()
  gender: string;

  @Field({ nullable: true })
  age?: number;

  @Field(() => Boolean, { nullable: true })
  isactive?: boolean;
}
