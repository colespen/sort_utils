const sortDirection = ["ASC", "DESC"] as const;

/**
 * @param {InputObject[]} input array of objects
 * @param {KeyType} propertyName key of object to sort by
 * @param {"ASC" | "DESC"} sortDirection direction of sorting. Default: Ascending
 * @description Sort an array of objects by a specified property name (key) in specified direction.
 */
export function _sortByPropertyName<
  InputObject,
  KeyType extends keyof InputObject
>(
  input: InputObject[],
  propertyName: KeyType,
  sortDirection: "ASC" | "DESC" = "ASC"
) {
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
