import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { photoProviders } from './person.providers';
import { PersonResolver } from './person.resolver';
import { PersonService } from './person.service';

@Module({
  imports: [DatabaseModule],
  providers: [...photoProviders, PersonResolver, PersonService],
})
export class PersonModule {}
