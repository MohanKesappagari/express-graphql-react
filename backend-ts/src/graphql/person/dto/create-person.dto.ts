import { Field, InputType } from "type-graphql";

/* A decorator that tells TypeGraphQL that this class is an input type. */
@InputType()
/* The below class is a DTO (Data Transfer Object) class that defines the shape of the data that will
be sent to the server when creating a new person */
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
