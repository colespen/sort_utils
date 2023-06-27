// TRIED TO MAKE FASTER
const sortDirections = ["ASC", "DESC"] as const;
// as const infers as tuple of string literals

/**
 * @param {InputObject[]} input array of objects
 * @param {KeyType} propertyName key of object to sort by
 * @param {"ASC" | "DESC"} sortDirection direction of sorting. Default: Ascending
 * @returns {InputObject[]} sorted array
 * @description Sort an array of objects by a specified property name (key) in specified direction.
 */
export function sortByPropertyName2<
  InputObject,
  KeyType extends keyof InputObject
>(
  input: InputObject[],
  propertyName: KeyType,
  sortDirection: (typeof sortDirections)[number] = "ASC"
): InputObject[] {
  if (input.length <= 1) {
    return input;
  }
  //
  const partition = (arr: InputObject[], low: number, high: number): number => {
    const pivot = arr[Math.floor((low + high) / 2)][propertyName];
    let i = low;
    let j = high;

    while (i <= j) {
      if (sortDirection === "ASC") {
        while (arr[i][propertyName] < pivot) {
          i++;
        }
        while (arr[j][propertyName] > pivot) {
          j--;
        }
      }
      if (sortDirection === "DESC") {
        while (arr[i][propertyName] > pivot) {
          i++;
        }
        while (arr[j][propertyName] < pivot) {
          j--;
        }
      }
      if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
      }
    }

    return i;
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
