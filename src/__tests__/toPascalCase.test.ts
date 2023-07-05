import { _toPascalCase } from "../toPascalCase";

describe("_toPascalCase", () => {
  //write a test that checks if the function returns a string converted to camelCase
  it("should return a string converted to PascalCase", () => {
    const string = "turn this to pascal case";
    expect(_toPascalCase(string)).toBe("TurnThisToPascalCase");
  });

  it("should return an empty string from empty string", () => {
    const string = "";
    expect(_toPascalCase(string)).toBe("");
  });

  it("should handle a single-word string", () => {
    const string = "hello";
    expect(_toPascalCase(string)).toBe("Hello");
  });

  it("should handle a string with multiple consecutive spaces", () => {
    const string = "  this   has  multiple  spaces  ";
    expect(_toPascalCase(string)).toBe("ThisHasMultipleSpaces");
  });

  it("should handle a string with special characters", () => {
    const string = "!@#$%^&*()_+{}|:\"<>?[];',./\\";
    expect(_toPascalCase(string)).toBe("!@#$%^&*()_+{}|:\"<>?[];',./\\");
  });

  it("should throw an error if input is not a string", () => {
    const string = test;
    const convertedString = () => _toPascalCase(string as unknown as string);
    expect(convertedString).toThrow("input must be of type string");
  });
});
