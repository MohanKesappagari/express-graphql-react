import { Query, Resolver } from "type-graphql";
import { Person } from "./entity/person.entity";

@Resolver()
export class PersonResolver {
  @Query(() => [Person])
  persons() {
    return Person.find();
  }
}
