import { dummyData } from "../dummy-data/dummy-data";
import { _sortByPropertyName } from "../sortByPropertyName";
import { sortByPropertyName2 } from "../sortByPropertyName2";

// *** test with _sortByKey and sortByKey ***

describe("_sortByPropertyName", () => {
  it("should sort array in ascending order by default", () => {
    const sortedArray = _sortByPropertyName(dummyData, "age");
    for (let i = 0; i < sortedArray.length - 1; i++) {
      expect(sortedArray[i].age <= sortedArray[i + 1].age).toBe(true);
    }
  });

  it("should handle sorting in ascending order", () => {
    const sortedArray = _sortByPropertyName(dummyData, "name", "ASC");
    for (let i = 0; i < sortedArray.length - 1; i++) {
      expect(
        sortedArray[i].name.localeCompare(sortedArray[i + 1].name)
      ).toBeLessThanOrEqual(0);
    }
  });

  it("should sort array in descending order", () => {
    const sortedArray = _sortByPropertyName(dummyData, "balance", "DESC");
    for (let i = 0; i < sortedArray.length - 1; i++) {
      expect(sortedArray[i].balance >= sortedArray[i + 1].balance).toBe(true);
    }
  });

  it("should return the input array when it is empty", () => {
    const input: any[] = [];
    const sortedArray = _sortByPropertyName(input, "propertyName");
    expect(sortedArray).toEqual([]);
  });

  it("should return the input array when it contains a single element", () => {
    const input = [{ propertyName: "value" }];
    const sortedArray = _sortByPropertyName(input, "propertyName");
    expect(sortedArray).toEqual(input);
  });
});

describe("sortByPropertyName2", () => {
  it("should sort array in ascending order by default - type number", () => {
    const sortedArray = sortByPropertyName2(dummyData, "age");
    for (let i = 0; i < sortedArray.length - 1; i++) {
      expect(sortedArray[i].age <= sortedArray[i + 1].age).toBe(true);
    }
  });

  it("should handle sorting in ascending order - type string", () => {
    const sortedArray = sortByPropertyName2(dummyData, "name");
    for (let i = 0; i < sortedArray.length - 1; i++) {
      expect(
        sortedArray[i].name.localeCompare(sortedArray[i + 1].name)
      ).toBeLessThanOrEqual(0);
    }
  });

  it("should sort array in descending order - type string", () => {
    const sortedArray = sortByPropertyName2(dummyData, "balance", "DESC");
    for (let i = 0; i < sortedArray.length - 1; i++) {
      expect(sortedArray[i].balance >= sortedArray[i + 1].balance).toBe(true);
    }
  });

  it("should return the input array when it is empty", () => {
    const input: any[] = [];
    const sortedArray = sortByPropertyName2(input, "propertyName");
    expect(sortedArray).toEqual([]);
  });

  it("should return the input array when it contains a single element", () => {
    const input = [{ propertyName: "value" }];
    const sortedArray = sortByPropertyName2(input, "propertyName");
    expect(sortedArray).toEqual(input);
  });
});
