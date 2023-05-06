// Might come in handy!
import { S } from "ts-toolbelt";
// https://millsp.github.io/ts-toolbelt/modules/string_split.html

import { Equal, Expect } from "../helpers/type-utils";

type Path = "Users/John/Documents/notes.txt";


type PathSegments = Split<Path, "/">;
// PathSegments is inferred as ["Users", "John", "Documents", "notes.txt"]

type Split<S extends string, D extends string> = string extends S
  ? string[]
  : S extends ""
  ? []
  : S extends `${infer T}${D}${infer U}`
  ? [T, ...Split<U, D>]
  : [S];

type tests = [
  Expect<Equal<PathSegments, ["Users", "John", "Documents", "notes.txt"]>>,
];
