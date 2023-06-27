/**
 * @param {object[]} input array of objects
 * @param {KeyType} propertyName key of object to sort
 * @param {"ASC" | "DESC"} options direction of sorting
 * Sort an array of objects by a specified property name (key) in specified direction.
 * Default direction: ascending.
 */
export function _sortByKey<InputObject, KeyType extends keyof InputObject>(
  input: InputObject[],
  propertyName: KeyType,
  options: "ASC" | "DESC" = "ASC"
) {
  if (input.length <= 1) {
    return input;
  }

  return [...input].sort((a, b) => {
    if (a[propertyName] < b[propertyName]) {
      return options === "DESC" ? 1 : -1;
    }
    if (a[propertyName] > b[propertyName]) {
      return options === "DESC" ? -1 : 1;
    }
    return 0;
  });
}
