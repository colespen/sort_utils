// TRIED TO MAKE FASTER
/**
 * @param {{ [key: string]: any }[]} input array of objects
 * @param {string} propertyName key of object to sort
 * @param {"ASC" | "DESC"} options direction of sorting
 * Sort an array of objects by a specified property name (key) in specified direction.
 * Default direction: ascending.
 */
export function sortByPropertyName2<InputObject, KeyType extends keyof InputObject>(
    input: InputObject[],
    propertyName: KeyType,
    options: "ASC" | "DESC" = "ASC"
  ) {
    if (input.length <= 1) {
      return input;
    }
    //
    const partition = (
      arr: InputObject[],
      low: number,
      high: number
    ): number => {
      const pivot = arr[Math.floor((low + high) / 2)][propertyName];
      let i = low;
      let j = high;
  
      while (i <= j) {
        if (options === "ASC") {
          while (arr[i][propertyName] < pivot) {
            i++;
          }
          while (arr[j][propertyName] > pivot) {
            j--;
          }
        }
        if (options === "DESC") {
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
    const quicksort = (
      arr: InputObject[],
      low: number,
      high: number
    ) => {
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
  