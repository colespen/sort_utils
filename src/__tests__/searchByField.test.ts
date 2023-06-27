import { dummyData } from "../dummy-data/dummy-data";
import { _searchByField } from "../searchByField";


describe("_sortByPropertyNamesOrder", () => {

  it("should return the object(s) with matching field provided - 'age': 25", () => {
    const sortedArray = _searchByField(dummyData, "age", 25);
    let containsCorrectAge = false;
    if (sortedArray.length > 1) {
      sortedArray.forEach((obj) => {
        if (obj.age === 25) {
          containsCorrectAge = true;
        }
      });
    }
    if (sortedArray.length === 1) {
      if (sortedArray[0].age === 25) {
        containsCorrectAge = true;
      }
    }

    expect(containsCorrectAge).toBe(true);
  });

  it("should return the object(s) with matching field provided - 'gender': female", () => {
    const sortedArray = _searchByField(dummyData, "gender", "female");
    let containsCorrectAge = false;
    if (sortedArray.length > 1) {
      sortedArray.forEach((obj) => {
        if (obj.gender === "female") {
          containsCorrectAge = true;
        }
      });
    }
    if (sortedArray.length === 1) {
      if (sortedArray[0].gender === "female") {
        containsCorrectAge = true;
      }
    }

    expect(containsCorrectAge).toBe(true);
  });
});
