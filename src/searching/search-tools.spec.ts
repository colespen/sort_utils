import { getByField } from './search-tools'

const testData = [
  {
    'age': 25,
    'company': 'INTERLOO',
  },
  {
    'age': 25,
    'company': 'QUALITERN',
  },
  {
    'age': 37,
    'company': 'TECHADE',
  },
]

describe('searchByField', () => {
  it("should return the object(s) with matching age number", () => {
    const searchResult = getByField(testData, 'age', 25);
    const containsCorrectAge = searchResult.every((obj) => obj.age === 25);
    expect(containsCorrectAge).toBe(true);
  });

  it("should return the object(s) with matching company string", () => {
    const searchResult = getByField(testData, 'company', 'INTERLOO')
    const containsCorrectCompany = searchResult.every((obj) => obj.company === 'INTERLOO')
    expect(containsCorrectCompany).toBe(true)
  })

  it('should return an empty array when no match is found', () => {
    const searchResult = getByField(testData, 'age', 101)
    expect(searchResult).toEqual([])
  })

  it('should throw an error when propertyName is undefined', () => {
    const propertyName = ''
    const sortedArray = (): object[] | [] => getByField<object, never>(testData, propertyName as never, 101 as never)
    expect(sortedArray).toThrowError('propertyName is undefined')
  })

  it('should throw an error when propertyValue is undefined', () => {
    const propertyValue = ''
    const sortedArray = (): object[] | [] =>
      getByField<object, never>(testData, 'age' as never, propertyValue as never)
    expect(sortedArray).toThrowError('propertyValue is undefined')
  })
})
