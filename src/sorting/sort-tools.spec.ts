import { sortByPropertyName, sortByPropertyNamesOrder } from './sort-tools'

const testData = [
  {
    'age': 60,
    'name': 'Elliott Kane',
    'balance': 2185.35,
    'gender': 'male',
  },
  {
    'age': 25,
    'name': 'Jo Guerrero',
    'balance': 1613.43,
    'gender': 'female',
  },
  {
    'age': 37,
    'name': 'Jenkins Rios',
    'balance': 2224.47,
    'gender': 'male',
  },
]

describe('sortByPropertyName', () => {
  it('should sort array in ascending order by default', () => {
    const sortedArray = sortByPropertyName(testData, 'age')
    for (let i = 0; i < sortedArray.length - 1; i++) {
      const ageValue = sortedArray[i]?.age; // is optional chaining is bad here?
      const nextAgeValue = sortedArray[i + 1]?.age; 
      if (ageValue && nextAgeValue) {
        expect(ageValue <= nextAgeValue).toBe(true);
      }
    }
  })

  it('should handle sorting in ascending order by name', () => {
    const sortedArray = sortByPropertyName(testData, 'name', 'ASC')
    for (let i = 0; i < sortedArray.length - 1; i++) {
      const nameValue = sortedArray[i]?.name;
      const nextNameValue = sortedArray[i + 1]?.name;
      if (nameValue && nextNameValue) {
      expect(nameValue.localeCompare(nextNameValue)).toBeLessThanOrEqual(0)
    }
  }
})

  it('should handle sorting in descending order by balance', () => {
    const sortedArray = sortByPropertyName(testData, 'balance', 'DESC')
    for (let i = 0; i < sortedArray.length - 1; i++) {
      const balanceValue = sortedArray[i]?.balance;
      const nextBalanceValue = sortedArray[i + 1]?.balance;
      if (balanceValue && nextBalanceValue) {
        expect(balanceValue >= nextBalanceValue).toBe(true)
      }
    }
  })

  it('should return the input array when it contains a single element', () => {
    const input = [{ propertyName: 'value' }]
    const sortedArray = sortByPropertyName(input, 'propertyName')
    expect(sortedArray).toEqual(input)
  })

  it('should throw an error when array is empty', () => {
    const input: never[] = []
    const sortedArray = (): object[] | [] => sortByPropertyName(input, 'propertyName')
    expect(sortedArray).toThrow('Input array is empty')
  })
})

describe('sortByPropertyNamesOrder', () => {
  it('should sort array in ascending order by default by age', () => {
    const sortedArray = sortByPropertyNamesOrder(testData, ['age'])
    for (let i = 0; i < sortedArray.length - 1; i++) {
      const ageValue = sortedArray[i]?.age;
      const nextAgeValue = sortedArray[i + 1]?.age;
      if (ageValue && nextAgeValue) {
        expect(ageValue <= nextAgeValue).toBe(true);
      }
    }
  })

  it('should sort array in descending order by balance', () => {
    const sortedArray = sortByPropertyNamesOrder(testData, ['balance'], 'DESC')
    for (let i = 0; i < sortedArray.length - 1; i++) {
      const balanceValue = sortedArray[i]?.balance;
      const nextBalanceValue = sortedArray[i + 1]?.balance;
      if (balanceValue && nextBalanceValue) {
        expect(balanceValue >= nextBalanceValue).toBe(true)
      }
    }
  })

  it('should sort array in ascending order by gender, age, then name', () => {
    const sortedArray = sortByPropertyNamesOrder(testData, ['gender', 'age', 'name'], 'ASC')

    for (let i = 0; i < sortedArray.length - 1; i++) {
      const zeroIndexElement = sortedArray[0]
      const firstElement = sortedArray[i]
      const secondElement = sortedArray[i + 1]
      const lastElement = sortedArray[sortedArray.length - 1]
      
      if (zeroIndexElement && firstElement && secondElement && lastElement) {
        expect(zeroIndexElement.gender === 'female').toBe(true)
        expect(lastElement.gender === 'male').toBe(true)
  
        if (firstElement.gender === secondElement.gender) {
          expect(firstElement.age <= secondElement.age).toBe(true)
        }
        if (firstElement.age === secondElement.age) {
          const nameLocalCompare = firstElement.name.localeCompare(secondElement.name)
          expect(nameLocalCompare).toBeLessThanOrEqual(0)
        }
      }
    }
  })

  it('should return the input array when it contains a single element', () => {
    const input = [{ propertyName: 'value' }]
    const sortedArray = sortByPropertyNamesOrder(input, ['propertyName'])
    expect(sortedArray).toEqual(input)
  })

  it('should throw an error when provided propertyNames array is empty', () => {
    const sortedArray = (): object[] | [] => sortByPropertyNamesOrder(testData, [])
    expect(sortedArray).toThrowError('propertyNames array is empty')
  })

  it('should throw an error when array is empty', () => {
    const input: never[] = []
    const sortedArray = (): object[] | [] => sortByPropertyNamesOrder(input, ['propertyName'])
    expect(sortedArray).toThrow('Input array is empty')
  })
})
