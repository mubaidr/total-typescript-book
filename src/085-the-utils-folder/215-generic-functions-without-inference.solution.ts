import { Equal, Expect } from "@total-typescript/helpers";

const createStringMap = <T>() => {
  return new Map<string, T>();
};

const numberMap = createStringMap<number>();

numberMap.set("foo", 123);
numberMap.set(
  "bar",
  // @ts-expect-error
  true,
);

const objMap = createStringMap<{ a: number }>();

objMap.set("foo", { a: 123 });

objMap.set(
  "bar",
  // @ts-expect-error
  { b: 123 },
);

const unknownMap = createStringMap();

type test = Expect<Equal<typeof unknownMap, Map<string, unknown>>>;
