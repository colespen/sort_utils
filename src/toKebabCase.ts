export function _toKebabCase(string: string): string {
  if (typeof string !== "string") {
    throw new Error("input must be of type string");
  }

  if (string.length === 0) return string;

  return string
    .trim()
    .replace(/(?:^\w|[A-Z]|\b\w)[^_]/g, (word, i) => {
      return i === 0 ? word.toLowerCase() : "-" + word.toLowerCase();
    })
    .replace(/\s+/g, "")
}

// write a function that converts a string to kebab-case and also converts snake_case to kebab-case
