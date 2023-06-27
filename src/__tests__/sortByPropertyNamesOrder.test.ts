import { dummyData } from "../dummy-data/dummy-data";
import { _sortByPropertyNamesOrder } from "../sortByPropertyNamesOrder";

// console.log(_sortByPropertyNamesOrder(dummyData, ["age", "name"]));

describe("_sortByPropertyName", () => {
  it("should sort array in ascending order by default", () => {
    const sortedArray = _sortByPropertyNamesOrder(dummyData, ["age"]);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      expect(sortedArray[i].age <= sortedArray[i + 1].age).toBe(true);
    }
  });

  it("should sort array in descending order", () => {
    const sortedArray = _sortByPropertyNamesOrder(
      dummyData,
      ["balance"],
      "DESC"
    );
    for (let i = 0; i < sortedArray.length - 1; i++) {
      expect(sortedArray[i].balance >= sortedArray[i + 1].balance).toBe(true);
    }
  });

  it("should sort array in ascending order by gender, age, then name", () => {
    const sortedArray = _sortByPropertyNamesOrder(
      dummyData,
      ["gender", "age", "name"],
      "ASC"
    );
    for (let i = 0; i < sortedArray.length - 1; i++) {
      expect(sortedArray[0].gender === "female").toBe(true);
      expect(sortedArray[sortedArray.length - 1].gender === "male").toBe(true);
      if (sortedArray[i].gender === sortedArray[i + 1].gender) {
        expect(sortedArray[i].age <= sortedArray[i + 1].age).toBe(true);
      }
      if (sortedArray[i].age === sortedArray[i + 1].age) {
        let nameLocalCompare = sortedArray[i].name.localeCompare(
          sortedArray[i + 1].name
        );
        expect(nameLocalCompare).toBeLessThanOrEqual(0);
      }
    }
  });

  it("should return the input array when it is empty", () => {
    const input: any[] = [];
    const sortedArray = _sortByPropertyNamesOrder(input, ["propertyName"]);
    expect(sortedArray).toEqual([]);
  });

  it("should return the input array when it contains a single element", () => {
    const input = [{ propertyName: "value" }];
    const sortedArray = _sortByPropertyNamesOrder(input, ["propertyName"]);
    expect(sortedArray).toEqual(input);
  });
});
