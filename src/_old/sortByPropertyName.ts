const sortDirections = ["ASC", "DESC"] as const;
// as const infers as tuple of string literals

/**
 * @param {InputObject[]} input array of objects
 * @param {KeyType} propertyName key of object to sort by
 * @param {"ASC" | "DESC"} sortDirection direction of sorting. Default: Ascending
 * @returns {InputObject[]} sorted array
 * @description Sort an array of objects by a specified property name (key) in specified direction.
 */
export function _sortByPropertyName<
  InputObject,
  KeyType extends keyof InputObject
>(
  input: InputObject[],
  propertyName: KeyType,
  sortDirection: (typeof sortDirections)[number] = "ASC"
): InputObject[] {
  if (!Array.isArray(input)) {
    throw new Error("Input is not an array");
  }

  if ((input as []).length === 0) {
    throw new Error("Input array is empty");
  }

  if (!propertyName) {
    throw new Error("PropertyName is undefined");
  }

  if (input.length <= 1) {
    return input;
  }

  return [...input].sort((a, b) => {
    if (a[propertyName] < b[propertyName]) {
      return sortDirection === "DESC" ? 1 : -1;
    }

    if (a[propertyName] > b[propertyName]) {
      return sortDirection === "DESC" ? -1 : 1;
    }

    return 0;
  });
}
