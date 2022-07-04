import { CreatePersonDto } from "./dto/create-person.dto";
import { UpdatePersonDto } from "./dto/update-person.dto";
import { Person } from "./entity/person.entity";

/**
 * It creates a new person object using the data from the createPersonDto object, and then saves it to
 * the database.
 * @param {CreatePersonDto} createPersonDto - CreatePersonDto
 * @returns The person object is being returned.
 */
const create = async (createPersonDto: CreatePersonDto) => {
  const { email, name, gender, isactive, age, mobile } = createPersonDto;
  const person = Person.create({ email, name, gender, isactive, age, mobile });
  return Person.save(person);
};

/**
 * It returns a promise that resolves to an array of all the people in the database
 */
const findAll = () => Person.find();

/**
 * It returns a promise that resolves to a person object if the userid exists in the database, or null
 * if it doesn't
 * @param {number} userid - number
 */
const findOne = (userid: number) => Person.findOne({ where: { userid } });

/**
 * The function takes an object with the same properties as the Person class, and returns an object
 * with the same properties as the Person class.
 * @param {UpdatePersonDto} updatePersonDto - UpdatePersonDto
 * @returns The return value is the number of rows affected by the update.
 */
const update = (updatePersonDto: UpdatePersonDto) => {
  const { userid, email, name, gender, isactive, age, mobile } =
    updatePersonDto;
  const person = Person.create({ email, name, gender, isactive, age, mobile });
  return Person.update(userid, person);
};

/**
 * Remove takes a userid and returns a promise that resolves to the number of rows deleted.
 * @param {number} userid - The id of the user to delete.
 */
const remove = (userid: number) => Person.delete(userid);

const PersonService = { create, findAll, findOne, update, remove };
export default PersonService;
