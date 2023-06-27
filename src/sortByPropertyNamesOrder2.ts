const sortDirections = ["ASC", "DESC"] as const;

// TODO: FIX THIS
/**
 * @param {InputObject[]} input array of objects
 * @param {KeyType[]} propertyNames array of keys of object to sort by
 * @param {"ASC" | "DESC"} sortDirection direction of sorting. Default: Ascending
 * @returns {InputObject[]} sorted array
 * @description Sort an array of objects by a specified property names (array of keys) in specified direction.
 *
 * Use sortByProprteryName for faster single key sorting
 */
export function sortByPropertyNamesOrder2<
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
  //
  const partition = (arr: InputObject[], low: number, high: number): number => {
    let currLow = 0;
    for (let i = 0; i < propertyNames.length; i++) {
      const pivot = arr[Math.floor((low + high) / 2)][propertyNames[i]];
      currLow = low;
      let currHigh = high;

      while (currLow <= currHigh) {
        if (sortDirection === "ASC") {
          while (arr[currLow][propertyNames[i]] < pivot) {
            currLow++;
          }
          while (arr[currHigh][propertyNames[i]] > pivot) {
            currHigh--;
          }
        }
        if (sortDirection === "DESC") {
          while (arr[currLow][propertyNames[i]] > pivot) {
            currLow++;
          }
          while (arr[currHigh][propertyNames[i]] < pivot) {
            currHigh--;
          }
        }
        if (currLow <= currHigh) {
          [arr[currLow], arr[currHigh]] = [arr[currHigh], arr[currLow]];
          currLow++;
          currHigh--;
        }
      }
    }
    return currLow;
  };
  //
  const quicksort = (arr: InputObject[], low: number, high: number) => {
    if (arr.length <= 1 || low >= high) {
      return;
    }
    const index = partition(arr, low, high);

    if (low < index - 1) {
      quicksort(arr, low, index - 1);
    }
    if (index < high) {
      quicksort(arr, index, high);
    }
  };

  const sortedArray = [...input];
  quicksort(sortedArray, 0, sortedArray.length - 1);

  return sortedArray;
}
