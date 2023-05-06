export type Maybe<T extends {}> = T | null | undefined;

type tests = [
  Maybe<null>,
  // @ts-expect-error
  Maybe<undefined>,

  Maybe<string>,
  Maybe<false>,
  Maybe<0>,
  Maybe<"">,
];
