import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreatePersonInput } from './create-person.input';

@InputType()
export class UpdatePersonInput extends PartialType(CreatePersonInput) {
  @Field(() => Int)
  userid: number;
}
