import { Field, InputType } from "type-graphql";
import { CreatePersonDto } from "./create-person.dto";

@InputType()
export class UpdatePersonDto extends CreatePersonDto {
  @Field()
  id: number;
}
