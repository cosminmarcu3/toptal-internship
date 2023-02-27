import { faker } from "@faker-js/faker";
import { config } from "dotenv";
import cloneDeep from "lodash.clonedeep";

// faker.js is a great library for random data generation, very useful for data mocking

const randomName = faker.name.fullName();

console.log(randomName);

// dotenv is a powerful library which helps us load variables from .env files to process.env

config({ path: `sample.env` });

console.log(process.env.RANDOM_VAR);

// cloneDeep from lodash helps clone an object with other nested objects inside, without copying the reference

const obj = {
  a: {
    x: 3,
  },
};

const x = cloneDeep(obj);

x.a.x = 7;

console.log(obj, x);
