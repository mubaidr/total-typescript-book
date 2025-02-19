import { expect, it, vitest } from "vitest";

const func1 = (obj: { id: string }) => {
  console.log(obj.id);
};
const func2 = (obj: { name: string }) => {
  console.log(obj.name);
};

const funcs = [func1, func2];

const logAll = (obj) => {
  funcs.forEach((func) => func(obj));
};

it("should log id and name of an object", () => {
  const consoleSpy = vitest.spyOn(console, "log");

  logAll({ id: "1", name: "Waqas" });

  expect(consoleSpy).toHaveBeenCalledWith("1");
  expect(consoleSpy).toHaveBeenCalledWith("Waqas");
});
