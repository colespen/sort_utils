import { Direction, ObjectInputType } from "./datatypes/sortByKeyTypes";

/**
 * @param {ObjectInputType[]} input array of objects
 * @param {string} propertyName key of object to sort
 * @param {Direction} options direction of sorting
 * Sort an array of objects by a specified property name (key) in specified direction.
 * Default direction: ascending.
 */
export function _sortByKey(
  input: ObjectInputType[],
  propertyName: string,
  options: Direction = Direction.ASC
) {
  if (input.length <= 1) {
    return input;
  }

  return [...input].sort((a, b) => {
    if (a[propertyName] < b[propertyName]) {
      return options === Direction.ASC ? -1 : 1;
    }
    if (a[propertyName] > b[propertyName]) {
      return options === Direction.ASC ? 1 : -1;
    }
    return 0;
  });
}

// TRIED TO MAKE FASTER

/**
 * @param {ObjectInputType[]} input array of objects
 * @param {string} propertyName key of object to sort
 * @param {Direction} options direction of sorting
 * Sort an array of objects by a specified property name (key) in specified direction.
 * Default direction: ascending.
 */
export function sortByKey(
  input: ObjectInputType[],
  propertyName: string,
  options: Direction = Direction.ASC
) {
  if (input.length <= 1) {
    return input;
  }
  //
  const partition = (
    arr: ObjectInputType[],
    low: number,
    high: number
  ): number => {
    const pivot = arr[Math.floor((low + high) / 2)][propertyName];
    let i = low;
    let j = high;

    while (i <= j) {
      if (options === Direction.ASC) {
        while (arr[i][propertyName] < pivot) {
          i++;
        }
        while (arr[j][propertyName] > pivot) {
          j--;
        }
      }
      if (options === Direction.DESC) {
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
  const quicksort = (arr: ObjectInputType[], low: number, high: number) => {
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
