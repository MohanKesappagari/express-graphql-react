import { DataSource } from "typeorm";
/* Creating a new DataSource object. */
export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root123",
  database: "person",
  synchronize: true,
  logging: true,
  entities: ["src/**/*.entity.ts"],
  subscribers: [],
  migrations: [],
});
