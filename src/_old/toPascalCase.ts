export function _toPascalCase(string: string): string {
  if (typeof string !== "string") {
    throw new Error("input must be of type string");
  }

  if (string.length === 0) return string;

  const convertedString = string
    .trim()
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, i) => {
      return i === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
  return convertedString[0].toUpperCase() + convertedString.slice(1);
}
