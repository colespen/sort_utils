import { _toKebabCase } from "../toKebabCase";

describe("_toKebabCase", () => {
  it("should return a string converted to kebab-case", () => {
    const string = "turn this to kebab case";
    expect(_toKebabCase(string)).toBe("turn-this-to-kebab-case");
  });

  it("should return an empty string from empty string", () => {
    const string = "";
    expect(_toKebabCase(string)).toBe("");
  });

  it("should handle a single-word string", () => {
    const string = "hello";
    expect(_toKebabCase(string)).toBe("hello");
  });

  it("should handle a string with multiple consecutive spaces", () => {
    const string = "  this   has  multiple  spaces  ";
    expect(_toKebabCase(string)).toBe("this-has-multiple-spaces");
  });

  // TODO: fix regex to ignore "_" when adding "-"
  it("should handle a string with special characters except", () => {
    const string = "!@#$%^&*()_+{}|:\"<>?[];',./\\";
    expect(_toKebabCase(string)).toBe("!@#$%^&*()_+{}|:\"<>?[];',./\\"); // `-_` should be `_`
  });

  it("should convert snake case to kebab case", () => {
    const string = "some_sort_of_string";
    expect(_toKebabCase(string)).toBe("some-sort-of-string");
  });

  it("should throw an error if input is not a string", () => {
    const string = test;
    const convertedString = () => _toKebabCase(string as unknown as string);
    expect(convertedString).toThrow("input must be of type string");
  });
});
