const sortDirections = ["ASC", "DESC"] as const;

/**
 * @param {InputObject[]} input array of objects
 * @param {KeyType[]} propertyNames array of keys of object to sort by
 * @param {"ASC" | "DESC"} sortDirection direction of sorting. Default: Ascending
 * @returns {InputObject[]} sorted array
 * @description Sort an array of objects by a specified property names (array of keys) in specified direction.
 *
 * Use sortByProprteryName for faster single key sorting
 */
export function _sortByPropertyNamesOrder<
  InputObject,
  KeyType extends keyof InputObject
>(
  input: InputObject[],
  propertyNames: KeyType[],
  sortDirection: (typeof sortDirections)[number] = "ASC"
): InputObject[] {
  if (input.length <= 1) {
    return input;
  }

  return [...input].sort((a, b) => {
    for (let i = 0; i < propertyNames.length; i++) {
      // this time arrange in order of key priority
      const propertyName = propertyNames[i];
      const aVal = a[propertyName];
      const bVal = b[propertyName];
      if (aVal < bVal) {
        return sortDirection === "DESC" ? 1 : -1;
      }
      if (aVal > bVal) {
        return sortDirection === "DESC" ? -1 : 1;
      }
    }
    return 0; // again if all values are equal keep prev order
  });
}
