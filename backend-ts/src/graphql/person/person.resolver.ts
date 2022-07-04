import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { CreatePersonDto } from "./dto/create-person.dto";
import { UpdatePersonDto } from "./dto/update-person.dto";
import { Person } from "./entity/person.entity";
import PersonService from "./person.service";

/* A decorator that tells TypeGraphQL that this class is a resolver for the Person entity. */
@Resolver(() => Person)
/* The PersonResolver class is a class that contains methods that are used to resolve GraphQL queries
and mutations */
export class PersonResolver {
  /* A mutation that creates a person. */
  @Mutation(() => Person)
  createPerson(@Arg("createPersonDto") createPersonDto: CreatePersonDto) {
    return PersonService.create(createPersonDto);
  }

  /* A query that returns all the persons. */
  @Query(() => [Person])
  persons() {
    return PersonService.findAll();
  }

  /* A query that returns a person with a specific userid. */
  @Query(() => Person)
  person(@Arg("userid", () => Int) userid: number) {
    return PersonService.findOne(userid);
  }

  /* A mutation that updates a person. */
  @Mutation(() => Person)
  updatePerson(@Arg("updatePersonDto") updatePersonDto: UpdatePersonDto) {
    return PersonService.update(updatePersonDto);
  }

  /* A mutation that deletes a person with a specific userid. */
  @Mutation(() => Person)
  deletePerson(@Arg("userid", () => Int) userid: number) {
    return PersonService.remove(userid);
  }
}
