import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private readonly personRepo: Repository<Person>,
  ) {}

  create(createPersonInput: CreatePersonInput) {
    const CREATE = this.personRepo.create(createPersonInput);
    return this.personRepo.save(CREATE);
  }

  findAll() {
    return this.personRepo.find();
  }

  findOne(userid: number) {
    return this.personRepo.findOne({ where: { userid } });
  }

  update(updatePersonInput: UpdatePersonInput) {
    const UPDATE = this.personRepo.create(updatePersonInput);
    return this.personRepo.update(updatePersonInput.userid, UPDATE);
  }

  remove(userid: number) {
    return this.personRepo.delete(userid);
  }
}
