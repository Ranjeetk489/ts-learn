// import { IndividualProgram } from './11-indexed-access-with-unions.solution.1';
import { programModeEnumMap } from './10-as-const.solution';
import { Equal, Expect } from "../helpers/type-utils";

const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

// export type IndividualProgram = typeof programModeEnumMap[Exclude<keyof typeof programModeEnumMap, "GROUP" | "ANNOUNCEMENT">]

export type IndividualProgram = typeof programModeEnumMap[Exclude<keyof typeof programModeEnumMap, "GROUP" |  "ANNOUNCEMENT" >]
type tests = [
  Expect<
    Equal<
      IndividualProgram,
      "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"
    >
  >,
];
