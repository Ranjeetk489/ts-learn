import { Equal, Expect } from "../helpers/type-utils";

type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";

type DynamicRoutes = Extract<Routes, `${string}/:${string}`>;

const arr = ["hey", "how"] as const;
type P<T> = Extract<T, "hey">;

type ArrP = P<typeof arr[number]>; 


type tests = [Expect<Equal<DynamicRoutes, "/users/:id" | "/posts/:id">>];
