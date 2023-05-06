import { Equal, Expect } from "../helpers/type-utils";

interface Values {
  email: string;
  firstName: string;
  lastName: string;
}

type ValuesAsUnionOfTuples1 = {
  [K in keyof Values]: [K, Values[K]];
}

type ValuesAsUnionOfTuples = ValuesAsUnionOfTuples1[keyof ValuesAsUnionOfTuples1]



type tests = [
  Expect<
    Equal<
      ValuesAsUnionOfTuples,
      ["email", string] | ["firstName", string] | ["lastName", string]
    >
  >
];
