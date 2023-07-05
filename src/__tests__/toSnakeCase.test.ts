import { _toSnakeCase } from "../toSnakeCase";

describe("_toSnakeCase", () => {
  it("should return a string converted to snake_case", () => {
    const string = "turn this to snake case";
    expect(_toSnakeCase(string)).toBe("turn_this_to_snake_case");
  });

  it("should return an empty string from empty string", () => {
    const string = "";
    expect(_toSnakeCase(string)).toBe("");
  });

  it("should handle a single-word string", () => {
    const string = "hello";
    expect(_toSnakeCase(string)).toBe("hello");
  });

  it("should handle a string with multiple consecutive spaces", () => {
    const string = "  this   has  multiple  spaces  ";
    expect(_toSnakeCase(string)).toBe("this_has_multiple_spaces");
  });

  it("should handle a string with special characters", () => {
    const string = "!@#$%^&*()-+{}|:\"<>?[];',./\\";
    expect(_toSnakeCase(string)).toBe("!@#$%^&*()-+{}|:\"<>?[];',./\\");
  });

  it("should convert kebab case to snake case", () => {
    const string = "some-sort-of-string";
    expect(_toSnakeCase(string)).toBe("some_sort_of_string");
  });

  it("should throw an error if input is not a string", () => {
    const string = test;
    const convertedString = () => _toSnakeCase(string as unknown as string);
    expect(convertedString).toThrow("input must be of type string");
  });
});
