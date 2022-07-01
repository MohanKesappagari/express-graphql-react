import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePersonInput {
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
