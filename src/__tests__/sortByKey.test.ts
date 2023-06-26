import { sortByKey } from "../sortByKey";
import { _sortByKey } from "../sortByKey";
import { dummyData } from "../dummy-data";
import { Direction, ObjectInputType } from "../datatypes/sortByKeyTypes";

// *** test with _sortByKey and sortByKey ***

describe("sortByKey", () => {
  it('should sort array in ascending order by default & by "age" type number', () => {
    const sortedArray = _sortByKey(dummyData, "age");
    for (let i = 0; i < sortedArray.length - 1; i++) {
      expect(sortedArray[i].age <= sortedArray[i + 1].age).toBe(true);
    }
  });

  it('should sort array in descending order and by "balance" type string', () => {
    const sortedArray = _sortByKey(dummyData, "balance", Direction.DESC);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      expect(sortedArray[i].balance >= sortedArray[i + 1].balance).toBe(true);
    }
  });

  it("should handle sorting by string property", () => {
    const sortedArray = _sortByKey(dummyData, "name");
    for (let i = 0; i < sortedArray.length - 1; i++) {
      expect(
        sortedArray[i].name.localeCompare(sortedArray[i + 1].name)
      ).toBeLessThanOrEqual(0);
    }
  });

  it("should return the input array when it is empty", () => {
    const input: ObjectInputType[] = [];
    const sortedArray = _sortByKey(input, "propertyName");
    expect(sortedArray).toEqual([]);
  });

  it("should return the input array when it contains a single element", () => {
    const input = [{ propertyName: "value" }];
    const sortedArray = _sortByKey(input, "propertyName");
    expect(sortedArray).toEqual(input);
  });
});

describe("sortByKey", () => {
    it('should sort array in ascending order by default & by "age" type number', () => {
      const sortedArray = sortByKey(dummyData, "age");
      for (let i = 0; i < sortedArray.length - 1; i++) {
        expect(sortedArray[i].age <= sortedArray[i + 1].age).toBe(true);
      }
    });
  
    it('should sort array in descending order and by "balance" type string', () => {
      const sortedArray = sortByKey(dummyData, "balance", Direction.DESC);
      for (let i = 0; i < sortedArray.length - 1; i++) {
        expect(sortedArray[i].balance >= sortedArray[i + 1].balance).toBe(true);
      }
    });
  
    it("should handle sorting by string property", () => {
      const sortedArray = sortByKey(dummyData, "name");
      for (let i = 0; i < sortedArray.length - 1; i++) {
        expect(
          sortedArray[i].name.localeCompare(sortedArray[i + 1].name)
        ).toBeLessThanOrEqual(0);
      }
    });
  
    it("should return the input array when it is empty", () => {
      const input: ObjectInputType[] = [];
      const sortedArray = sortByKey(input, "propertyName");
      expect(sortedArray).toEqual([]);
    });
  
    it("should return the input array when it contains a single element", () => {
      const input = [{ propertyName: "value" }];
      const sortedArray = sortByKey(input, "propertyName");
      expect(sortedArray).toEqual(input);
    });
  });