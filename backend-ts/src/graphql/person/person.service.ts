import { CreatePersonDto } from "./dto/create-person.dto";
import { UpdatePersonDto } from "./dto/update-person.dto";
import { Person } from "./entity/person.entity";

const create = async (createPersonDto: CreatePersonDto) => {
  const { email, name, gender, isactive, age, mobile } = createPersonDto;
  const person = Person.create({ email, name, gender, isactive, age, mobile });
  return Person.save(person);
};

const findAll = () => Person.find();

const findOne = (userid: number) => Person.findOne({ where: { userid } });

const update = (updatePersonDto: UpdatePersonDto) => {
  const { userid, email, name, gender, isactive, age, mobile } =
    updatePersonDto;
  const person = Person.create({ email, name, gender, isactive, age, mobile });
  return Person.update(userid, person);
};

const remove = (userid: number) => Person.delete(userid);

const PersonService = { create, findAll, findOne, update, remove };
export default PersonService;
