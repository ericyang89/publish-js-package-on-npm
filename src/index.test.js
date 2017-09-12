import aaa from "."; //= require("./index");

test("replace the words when attack", () =>
  expect(aaa("this is a test, and test is an in the blacklist", ["test"])).toBe(
    "this is a *****, and ***** is an in the blacklist",
  ));

test("replace the words when attack", () =>
  expect(
    aaa("this is a test, and test is an in the blacklist,and ok", [
      "test",
      "ok",
    ]),
  ).toBe("this is a *****, and ***** is an in the blacklist,and *****"));
