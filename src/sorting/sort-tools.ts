const sortDirections = ['ASC', 'DESC'] as const
// as const infers as tuple of string literals

/**
 *
 * @param {InputObject[]} input array of objects
 * @param {KeyType} propertyName key of object to sort by
 * @param {"ASC" | "DESC"} sortDirection direction of sorting. Default: Ascending
 * @returns {InputObject[]} sorted array
 * @description Sort an array of objects by a specified property name (key) in specified direction.
 */
export function sortByPropertyName<InputObject, KeyType extends keyof InputObject>(
  input: InputObject[],
  propertyName: KeyType,
  sortDirection: (typeof sortDirections)[number] = 'ASC',
): InputObject[] {
  if (!Array.isArray(input)) {
    throw new Error('Input is not an array')
  }

  if (input.length === 0) {
    throw new Error('Input array is empty')
  }

  if (!propertyName) {
    throw new Error('PropertyName is undefined')
  }

  if (input.length <= 1) {
    return input
  }

  return input.slice().sort((a: InputObject, b: InputObject) => {
    const aPropValue = a[propertyName] === undefined ? 0 : a[propertyName];
    const bPropValue = b[propertyName] === undefined ? 0 : b[propertyName];

    if (aPropValue < bPropValue) {
      return sortDirection === 'DESC' ? 1 : -1;
    }

    if (aPropValue > bPropValue) {
      return sortDirection === 'DESC' ? -1 : 1;
    }

    return 0
  })
}

/**
 * @param {InputObject[]} input array of objects
 * @param {KeyType[]} propertyNames array of keys of object to sort by
 * @param {"ASC" | "DESC"} sortDirection direction of sorting. Default: Ascending
 * @returns {InputObject[]} sorted array
 *
 * Sort an array of objects by a specified property names (array of keys) in specified direction.
 *
 * Note: use sortByProprteryName for faster single key sorting
 */
export function sortByPropertyNamesOrder<InputObject, KeyType extends keyof InputObject>(
  input: InputObject[],
  propertyNames: KeyType[],
  sortDirection: (typeof sortDirections)[number] = 'ASC',
): InputObject[] {
  if (!Array.isArray(input)) {
    throw new Error('Input is not an array')
  }

  if ((input as []).length === 0) {
    throw new Error('Input array is empty')
  }

  if (!propertyNames) {
    throw new Error('propertyNames is undefined')
  }
  if (propertyNames.length === 0) {
    throw new Error('propertyNames array is empty')
  }
  if (input.length <= 1) {
    return input
  }

  return input.slice().sort((a, b) => {
    for (let i = 0; i < propertyNames.length; i++) {
      // this time arrange in order of key priority
      const propertyName = propertyNames[i]
      const aVal = a[propertyName as keyof InputObject]
      const bVal = b[propertyName as keyof InputObject]
      if (aVal < bVal) {
        return sortDirection === 'DESC' ? 1 : -1
      }

      if (aVal > bVal) {
        return sortDirection === 'DESC' ? -1 : 1
      }
    }

    return 0 // again if all values are equal keep prev order
  })
}
