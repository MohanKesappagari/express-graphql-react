import { gql } from "@apollo/client";

export const ALL_PERSONS = gql`
  query Persons {
    persons {
      name
      email
      userid
      mobile
      gender
      age
      created
      updated
      isactive
    }
  }
`;

export const PERSON = gql`
  query Person($userid: Int!) {
    person(userid: $userid) {
      userid
      name
      email
      mobile
      gender
      age
      created
      updated
      isactive
    }
  }
`;

export const CREATE_PERSION = gql`
  mutation Mutation($createPersonDto: CreatePersonDto!) {
    createPerson(createPersonDto: $createPersonDto) {
      userid
    }
  }
`;

export const UPDATE_PERSON = gql`
  mutation Mutation($updatePersonDto: UpdatePersonDto!) {
    updatePerson(updatePersonDto: $updatePersonDto) {
      __typename
    }
  }
`;

export const DELETE_USER = gql`
  mutation Mutation($userid: Int!) {
    deletePerson(userid: $userid) {
      __typename
    }
  }
`;
