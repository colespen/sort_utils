/**
 * @param {InputObject[]} input array of objects
 * @param {KeyType} propertyName key of object to search for
 * @param {KeyValue} propertyValue value of key to search for
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
    throw new Error("propertyName is undefined");
  }

  if (!propertyValue) {
    throw new Error("propertyValue is undefined");
  }

  const resultMap = new Map();
  // Build hash table by iterating over input
  for (const obj of input) {
    const fieldValue = obj[propertyName];

    if (fieldValue && fieldValue === propertyValue) {
      // push all matching objects to its key array in Map
      const objectMatch = resultMap.get(fieldValue) || [];
      objectMatch.push(obj);
      resultMap.set(fieldValue, objectMatch);
    }
  }

  // Retrieve the matching objects from the hash table
  const resultArray = resultMap.get(propertyValue) || [];

  // console.log(resultMap);
  return resultArray;
}
