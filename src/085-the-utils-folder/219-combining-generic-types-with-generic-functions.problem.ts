import { Equal, Expect } from "@total-typescript/helpers";
import { expect, it } from "vitest";

type Result = [Error, null] | [null, any];

type PromiseFunc = () => Promise<any>;

const safeFunction = (func: PromiseFunc) => async (): Promise<Result> => {
  try {
    const result = await func();
    return [null, result];
  } catch (e) {
    if (e instanceof Error) {
      return [e, null];
    }
    throw e;
  }
};

it("should return an error if the function throws", async () => {
  const func = safeFunction(() => {
    throw new Error("Something went wrong");
  });

  type test1 = Expect<
    Equal<typeof func, () => Promise<[Error, null] | [null, unknown]>>
  >;

  const [err, result] = await func();

  type test2 = Expect<Equal<typeof err, Error | null>>;

  expect(err).toBeInstanceOf(Error);
  expect(result).toBeNull();
});

it("should return the result if the function succeeds", async () => {
  const func = safeFunction(() => {
    return Promise.resolve(`hello`);
  });

  type test1 = Expect<
    Equal<typeof func, () => Promise<[Error, null] | [null, string]>>
  >;

  const [err, result] = await func();

  type test2 = Expect<Equal<typeof result, string | null>>;

  expect(err).toBeNull();
  expect(result).toEqual("hello");
});
