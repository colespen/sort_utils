import { _toCamelCase } from "../toCamelCase";

describe("_toCamelCase", () => {
  //write a test that checks if the function returns a string converted to camelCase
  it("should return a string converted to camelCase", () => {
    const string = "turn this to camel case";
    expect(_toCamelCase(string)).toBe("turnThisToCamelCase");
  });

  it("should return an empty string from empty string", () => {
    const string = "";
    expect(_toCamelCase(string)).toBe("");
  });

  it("should handle a single-word string", () => {
    const string = "hello";
    expect(_toCamelCase(string)).toBe("hello");
  });

  it("should handle a string with multiple consecutive spaces", () => {
    const string = "  this   has  multiple  spaces  ";
    expect(_toCamelCase(string)).toBe("thisHasMultipleSpaces");
  });

  it("should handle a string with special characters", () => {
    const string = "!@#$%^&*()_+{}|:\"<>?[];',./\\";
    expect(_toCamelCase(string)).toBe("!@#$%^&*()_+{}|:\"<>?[];',./\\");
  });

  it("should throw an error if input is not a string", () => {
    const string = test;
    const convertedString = () => _toCamelCase(string as unknown as string);
    expect(convertedString).toThrow("input must be of type string");
  });
});
