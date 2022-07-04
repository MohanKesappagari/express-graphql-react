import { Field, ID, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

/* It's a decorator that tells TypeORM that this class is an entity. */
@Entity()
/* It's a decorator that tells GraphQL that this class is an object type. */
@ObjectType()
/* It's a class that extends BaseEntity, which is a class that comes with TypeORM. It has a bunch of
properties, some of which are required, some of which are not */
export class Person extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly userid: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  mobile: string;

  @Field()
  @Column()
  gender: string;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true })
  age: number;

  @Field()
  @CreateDateColumn()
  created: Date;

  @Field()
  @UpdateDateColumn()
  updated: Date;

  @Field(() => Boolean)
  @Column({ default: true })
  isactive: boolean;
}
