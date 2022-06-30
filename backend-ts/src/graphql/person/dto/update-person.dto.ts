import { Field, InputType } from "type-graphql";

@InputType()
export class UpdatePersonDto {
  @Field()
  userid: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  mobile?: string;

  @Field({ nullable: true })
  gender?: string;

  @Field({ nullable: true })
  age?: number;

  @Field(() => Boolean, { nullable: true })
  isactive?: boolean;
}
