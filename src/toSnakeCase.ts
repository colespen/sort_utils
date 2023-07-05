export function _toSnakeCase(string: string): string {
  if (typeof string !== "string") {
    throw new Error("input must be of type string");
  }

  if (string.length === 0) return string;

  return string
    .trim()
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, i) => {
      return i === 0 ? word.toLowerCase() : "_" + word.toLowerCase();
    })
    .replace(/\s+/g, "");
}
