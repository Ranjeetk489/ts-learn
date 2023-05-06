import { Equal, Expect } from "../helpers/type-utils";

interface FruitMap {
  apple: "red";
  banana: "yellow";
  orange: "orange";
}

type Fmap = {
  t :"tag"
  p: "pag"
}

type TransformedFruit = {
  [F in keyof FruitMap]: `${F}:${FruitMap[F]}`;
}[keyof FruitMap];

type test = {}

type tests = [
  Expect<
    Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
  >,
];
