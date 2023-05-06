import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";



type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
