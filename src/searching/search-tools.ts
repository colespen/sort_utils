/**
 * @param {InputObject[]} input array of objects
 * @param {KeyType} propertyName key of object to search for
 * @param {KeyValue} propertyValue value of key to search for
 * @returns {InputObject[] | []} object found or empty array
 * 
 * Lookup object(s) by a specified property name and value.
 */
export function getByField<InputObject, KeyType extends keyof InputObject>(
  input: InputObject[],
  propertyName: KeyType,
  propertyValue: InputObject[KeyType],
): InputObject[] | [] {
  if (!Array.isArray(input)) {
    throw new Error('Input must be an array of objects')
  }

  if (!propertyName) {
    throw new Error('propertyName is undefined')
  }

  if (!propertyValue) {
    throw new Error('propertyValue is undefined')
  }

  const resultMap = new Map()
  let objectMatch = []

  for (const obj of input) {
    const fieldValue = obj[propertyName]

    if (fieldValue && fieldValue === propertyValue) {

      // assign matching array of object(s) or empty array
      objectMatch = resultMap.get(fieldValue) || []

      // push all matching objects into array
      objectMatch.push(obj)

      // build hash table of found object arrays
      resultMap.set(fieldValue, objectMatch)
    }
  }

  // retrieve the matching objects from the hash table
  const resultArray = resultMap.get(propertyValue) || []
  return resultArray
}
