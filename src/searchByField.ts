/**
 * @param {InputObject[]} input array of objects
 * @param {KeyType} propertyName key of object to search for
 * @param {KeyValue} propertyValue value of key to search for
 * @param {"ASC" | "DESC"} sortDirection direction of sorting. Default: Ascending
 * @returns {InputObject[] | []} object found or empty array
 * @description Search using hash map to locate object(s) in an array
 * by the specified property name (key) and value.
 */
export function _searchByField<InputObject, KeyType extends keyof InputObject>(
  input: InputObject[],
  propertyName: KeyType,
  propertyValue: InputObject[KeyType]
): InputObject[] | [] {
  if (!Array.isArray(input) || (input as []).length === 0) {
    throw new Error("Input is not an array or is empty");
  }

  if (!propertyName) {
    throw new Error("PropertyName is undefined");
  }

  if (!propertyValue) {
    throw new Error("PropertyValue is undefined");
  }

  const resultMap = new Map();

  // Build hash table by iterating over input
  for (const obj of input) {
    const fieldValue = obj[propertyName];

    if (fieldValue) {
      if (!resultMap.has(fieldValue)) {
        resultMap.set(fieldValue, []);
      }
      resultMap.get(fieldValue).push(obj);
    }
  }

  // Retrieve the matching objects from the hash table
  const resultArray = resultMap.get(propertyValue) || [];

  return resultArray;
}
