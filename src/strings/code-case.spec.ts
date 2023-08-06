import {
    camelToKebab,
    camelToSnake,
    camelToPascal,
    pascalToKebab,
    pascalToSnake,
    pascalToCamel,
    kebabToPascal,
    kebabToCamel,
    kebabToSnake,
    snakeToPascal,
    snakeToCamel,
    snakeToKebab,
    lowerToCapitalizeFirst,
  } from './code-case'
  
  describe('camelToSnake', () => {
    const CAMEL_TO_SNAKE_TESTS: [string, string][] = [
      ['', ''],
      ['camelCase', 'camel_case'],
      ['camelCCornerCase', 'camel_c_corner_case'],
      ['camelXMLCornerCase', 'camel_xml_corner_case'],
      ['camelCaseExample', 'camel_case_example'],
      ['camelVer 1.2.10', 'camel_ver 1.2.10'],
    ]
    it('converts camelCase to lower snake_case', () => {
      for (const [test, expected] of CAMEL_TO_SNAKE_TESTS) {
        expect(camelToSnake(test)).toEqual(expected)
      }
    })
  })
  
  describe('camelToKebab', () => {
    const CAMEL_TO_KEBAB_TESTS: [string, string][] = [
      ['', ''],
      ['camelCase', 'camel-case'],
      ['camelCCornerCase', 'camel-c-corner-case'],
      ['camelXMLCornerCase', 'camel-xml-corner-case'],
      ['camelCaseExample', 'camel-case-example'],
      ['camelVer 1.2.10', 'camel-ver 1.2.10'],
    ]
    it('converts camelCase to lower kebab-case', () => {
      for (const [test, expected] of CAMEL_TO_KEBAB_TESTS) {
        expect(camelToKebab(test)).toEqual(expected)
      }
    })
  })
  
  describe('camelToPascal', () => {
    const CAMEL_TO_PASCAL_TESTS: [string, string][] = [
      ['', ''],
      ['camelCase', 'CamelCase'],
      ['camelCCornerCase', 'CamelCCornerCase'],
      ['camelXMLCornerCase', 'CamelXMLCornerCase'],
      ['camelCaseExample', 'CamelCaseExample'],
      ['camelVer 1.2.10', 'CamelVer 1.2.10'],
    ]
    it('converts camelCase to PascalCase', () => {
      for (const [test, expected] of CAMEL_TO_PASCAL_TESTS) {
        expect(camelToPascal(test)).toEqual(expected)
      }
    })
  })
  
  describe('pascalToKebab', () => {
    const PASCAL_TO_KEBAB_TESTS: [string, string][] = [
      ['', ''],
      ['PascalCase', 'pascal-case'],
      ['PascalCCornerCase', 'pascal-c-corner-case'],
      ['PascalXMLCornerCase', 'pascal-xml-corner-case'],
      ['PascalCaseExample', 'pascal-case-example'],
      ['PascalVer 1.2.10', 'pascal-ver 1.2.10'],
    ]
    it('converts PascalCase to lower kebab-case', () => {
      for (const [test, expected] of PASCAL_TO_KEBAB_TESTS) {
        expect(pascalToKebab(test)).toEqual(expected)
      }
    })
  })
  
  describe('pascalToSnake', () => {
    const PASCAL_TO_SNAKE_TESTS: [string, string][] = [
      ['', ''],
      ['PascalCase', 'pascal_case'],
      ['PascalCCornerCase', 'pascal_c_corner_case'],
      ['PascalXMLCornerCase', 'pascal_xml_corner_case'],
      ['PascalCaseExample', 'pascal_case_example'],
      ['PascalVer 1.2.10', 'pascal_ver 1.2.10'],
    ]
    it('converts PascalCase to lower snake_case', () => {
      for (const [test, expected] of PASCAL_TO_SNAKE_TESTS) {
        expect(pascalToSnake(test)).toEqual(expected)
      }
    })
  })
  
  describe('pascalToCamel', () => {
    const PASCAL_TO_CAMEL_TESTS: [string, string][] = [
      ['', ''],
      ['PascalCase', 'pascalCase'],
      ['PascalCCornerCase', 'pascalCCornerCase'],
      ['PascalXMLCornerCase', 'pascalXMLCornerCase'],
      ['PascalCaseExample', 'pascalCaseExample'],
      ['PascalVer 1.2.10', 'pascalVer 1.2.10'],
    ]
    it('converts PascalCase to camelCase', () => {
      for (const [test, expected] of PASCAL_TO_CAMEL_TESTS) {
        expect(pascalToCamel(test)).toEqual(expected)
      }
    })
  })
  
  describe('kebabToPascal', () => {
    const KEBAB_TO_PASCAL_TESTS: [string, string][] = [
      ['', ''],
      ['kebab-case', 'KebabCase'],
      ['kebab-c-corner-case', 'KebabCCornerCase'],
      ['kebab-xml-corner-case', 'KebabXmlCornerCase'],
      ['kebab-case-example', 'KebabCaseExample'],
      ['kebab-ver 1.2.10', 'KebabVer 1.2.10'],
    ]
    it('converts kebab-case to PascalCase', () => {
      for (const [test, expected] of KEBAB_TO_PASCAL_TESTS) {
        expect(kebabToPascal(test)).toEqual(expected)
      }
    })
  })
  
  describe('kebabToCamel', () => {
    it('converts kebab-case to camelCase', () => {
      const KEBAB_TO_CAMEL_TESTS: [string, string][] = [
        ['', ''],
        ['kebab-case', 'kebabCase'],
        ['kebab-c-corner-case', 'kebabCCornerCase'],
        ['kebab-xml-corner-case', 'kebabXmlCornerCase'],
        ['kebab-case-example', 'kebabCaseExample'],
        ['kebab-ver 1.2.10', 'kebabVer 1.2.10'],
      ]
      for (const [test, expected] of KEBAB_TO_CAMEL_TESTS) {
        expect(kebabToCamel(test)).toEqual(expected)
      }
    })
  })
  
  describe('kebabToSnake', () => {
    const KEBAB_TO_SNAKE_TEST: [string, string][] = [
      ['', ''],
      ['kebab-case', 'kebab_case'],
      ['kebab-c-corner-case', 'kebab_c_corner_case'],
      ['kebab-xml-corner-case', 'kebab_xml_corner_case'],
      ['kebab-case-example', 'kebab_case_example'],
      ['kebab-ver 1.2.10', 'kebab_ver 1.2.10'],
    ]
    it('converts kebab-case to lower snake_case', () => {
      for (const [test, expected] of KEBAB_TO_SNAKE_TEST) {
        expect(kebabToSnake(test)).toEqual(expected)
      }
    })
  })
  
  describe('snakeToPascal', () => {
    const SNAKE_TO_PASCAL_TESTS: [string, string][] = [
      ['', ''],
      ['snake_case', 'SnakeCase'],
      ['snake_c_corner_case', 'SnakeCCornerCase'],
      ['snake_xml_corner_case', 'SnakeXmlCornerCase'],
      ['snake_case_example', 'SnakeCaseExample'],
      ['snake_ver 1.2.10', 'SnakeVer 1.2.10'],
    ]
    it('converts snake_case to PascalCase', () => {
      for (const [test, expected] of SNAKE_TO_PASCAL_TESTS) {
        expect(snakeToPascal(test)).toEqual(expected)
      }
    })
  })
  
  describe('snakeToCamel', () => {
    const SNAKE_TO_CAMEL_TESTS: [string, string][] = [
      ['', ''],
      ['snake_case', 'snakeCase'],
      ['snake_c_corner_case', 'snakeCCornerCase'],
      ['snake_xml_corner_case', 'snakeXmlCornerCase'],
      ['snake_case_example', 'snakeCaseExample'],
      ['snake_ver 1.2.10', 'snakeVer 1.2.10'],
    ]
    it('converts snake_case to camelCase', () => {
      for (const [test, expected] of SNAKE_TO_CAMEL_TESTS) {
        expect(snakeToCamel(test)).toEqual(expected)
      }
    })
  })
  
  describe('snakeToKebab', () => {
    const SNAKE_TO_KEBAB_TESTS: [string, string][] = [
      ['', ''],
      ['snake_case', 'snake-case'],
      ['snake_c_corner_case', 'snake-c-corner-case'],
      ['snake_xml_corner_case', 'snake-xml-corner-case'],
      ['snake_case_example', 'snake-case-example'],
      ['snake_ver 1.2.10', 'snake-ver 1.2.10'],
    ]
    it('converts snake_case to lower kebab-case', () => {
      for (const [test, expected] of SNAKE_TO_KEBAB_TESTS) {
        expect(snakeToKebab(test)).toEqual(expected)
      }
    })
  })
  
  describe('lowerToCapFirst', () => {
    const LOWER_TO_CAP_FIRST_TESTS: [string, string][] = [
      ['', ''],
      ['lowercase', 'Lowercase'],
      ['lowerccornercase', 'Lowerccornercase'],
      ['lowerxmlcornercase', 'Lowerxmlcornercase'],
      ['lowercaseexample', 'Lowercaseexample'],
      ['lowerver 1.2.10', 'Lowerver 1.2.10'],
    ]
    it('converts lowercase to Capitalized', () => {
      for (const [test, expected] of LOWER_TO_CAP_FIRST_TESTS) {
        expect(lowerToCapitalizeFirst(test)).toEqual(expected)
      }
    })
  })
  
  // add describe block for interperability between magicalXmlTags -> magical_xml_tags -> magicalXmlTags
  // describe('interperability', () => {
  //   it
  