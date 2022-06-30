import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreatePersonDto } from "./dto/create-person.dto";
import { UpdatePersonDto } from "./dto/update-person.dto";
import { Person } from "./entity/person.entity";
import PersonService from "./person.service";

@Resolver(() => Person)
export class PersonResolver {
  @Mutation(() => Person)
  createPerson(@Arg("createPersonDto") createPersonDto: CreatePersonDto) {
    return PersonService.create(createPersonDto);
  }

  @Query(() => [Person])
  persons() {
    return PersonService.findAll();
  }

  @Query(() => Person)
  person(@Arg("userid") userid: number) {
    return PersonService.findOne(userid);
  }

  @Mutation(() => Person)
  updatePerson(@Arg("updatePersonDto") updatePersonDto: UpdatePersonDto) {
    return PersonService.update(updatePersonDto);
  }

  @Mutation(() => Person)
  deletePerson(@Arg("userid") userid: number) {
    return PersonService.remove(userid);
  }
}
