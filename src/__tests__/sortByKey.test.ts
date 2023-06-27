import { _sortByKey } from "../sortByKey";
import { sortByKey } from "../sortByKey2";
import { dummyData } from "../dummy-data";

// *** test with _sortByKey and sortByKey ***

describe("_sortByKey", () => {
  it("should sort array in ascending order by default - type number", () => {
    const sortedArray = _sortByKey(dummyData, "age");
    for (let i = 0; i < sortedArray.length - 1; i++) {
      expect(sortedArray[i].age <= sortedArray[i + 1].age).toBe(true);
    }
  });

  it("should handle sorting in ascending order - type string", () => {
    const sortedArray = _sortByKey(dummyData, "name");
    for (let i = 0; i < sortedArray.length - 1; i++) {
      expect(
        sortedArray[i].name.localeCompare(sortedArray[i + 1].name)
      ).toBeLessThanOrEqual(0);
    }
    // console.log(sortedArray)
  });

  it("should sort array in descending order - type string", () => {
    const sortedArray = _sortByKey(dummyData, "balance", "DESC");
    for (let i = 0; i < sortedArray.length - 1; i++) {
      expect(sortedArray[i].balance >= sortedArray[i + 1].balance).toBe(true);
    }
  });

  it("should return the input array when it is empty", () => {
    const input: any[] = [];
    const sortedArray = _sortByKey(input, "propertyName");
    expect(sortedArray).toEqual([]);
  });

  it("should return the input array when it contains a single element", () => {
    const input = [{ propertyName: "value" }];
    const sortedArray = _sortByKey(input, "propertyName");
    expect(sortedArray).toEqual(input);
  });
});

describe("sortByKey2", () => {
  it("should sort array in ascending order by default - type number", () => {
    const sortedArray = sortByKey(dummyData, "age");
    for (let i = 0; i < sortedArray.length - 1; i++) {
      expect(sortedArray[i].age <= sortedArray[i + 1].age).toBe(true);
    }
  });

  it("should handle sorting in ascending order - type string", () => {
    const sortedArray = sortByKey(dummyData, "name");
    for (let i = 0; i < sortedArray.length - 1; i++) {
      expect(
        sortedArray[i].name.localeCompare(sortedArray[i + 1].name)
      ).toBeLessThanOrEqual(0);
    }
    console.log(sortedArray);
  });

  it("should sort array in descending order - type string", () => {
    const sortedArray = sortByKey(dummyData, "balance", "DESC");
    for (let i = 0; i < sortedArray.length - 1; i++) {
      expect(sortedArray[i].balance >= sortedArray[i + 1].balance).toBe(true);
    }
  });

  it("should return the input array when it is empty", () => {
    const input: any[] = [];
    const sortedArray = sortByKey(input, "propertyName");
    expect(sortedArray).toEqual([]);
  });

  it("should return the input array when it contains a single element", () => {
    const input = [{ propertyName: "value" }];
    const sortedArray = sortByKey(input, "propertyName");
    expect(sortedArray).toEqual(input);
  });
});
