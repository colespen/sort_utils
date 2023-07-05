export function _toKebabCase(string: string): string {
  if (typeof string !== "string") {
    throw new Error("input must be of type string");
  }

  if (string.length === 0) return string;

  // match underscore between letters
  const regex_ = /(?<=\w)_(?=\w)/g;
  // match first character of word
  // ensures that next character is either alpha or end of string
  const regexAlpha = /(?:^\w|[A-Z]|\b\w)(?![^a-zA-Z])/g;

  string = string.trim();

  if (string.match(regex_)) {
    string = string.replace(regex_, "-");
  } else {
    string = string.replace(regexAlpha, (word, i) => {
      return i === 0 ? word.toLowerCase() : "-" + word.toLowerCase();
    });
  }
  return string.replace(/\s+/g, "");
}
