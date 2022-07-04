/* Defining the structure of an object. */
export interface PERSON {
  userid: number;
  name: string;
  email: string;
  mobile: string;
  gender: string;
  age: number | string;
  created: string;
  updated: string;
  isactive: boolean;
}
/* A TypeScript interface. It is used to define the structure of an object. */
export interface FORM_VALUES {
  name: string;
  email: string;
  mobile: string;
  gender: string;
  age: number | string;
}
