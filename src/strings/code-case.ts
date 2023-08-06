/**
 * camelCase to (lower) snake_case e.g. "helloWorld" to hello_world.
 * treat acronyms as word boundary
 *
 */
export function camelToSnake(camel: string): string {
    if (!camel) {
      return camel
    }
    return camel
      .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
      .replace(/([A-Z]+)([A-Z][a-z0-9])/g, '$1_$2')
      .toLowerCase()
    // return s.replace(/[A-Z]+/g, (match) => `_${match.toLowerCase()}`).replace(/^_/, '')
  }
  
  /**
   * camelCase to (lower) kebab-case e.g. "helloWorld" to hello-world.
   * treat acronyms as word boundary
   *
   */
  export function camelToKebab(camel: string): string {
    if (!camel) {
      return camel
    }
    return camel
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/([A-Z]+)([A-Z][a-z0-9])/g, '$1-$2')
      .toLowerCase()
  }
  
  /**
   * camelCase to PascalCase
   */
  export function camelToPascal(camel: string): string {
    return camel.replace(/(^[a-z0-9])/g, (g) => g.toUpperCase())
  }
  
  /**
   * Convert PascalCase to (lower) kebab-case e.g. "HelloWorld" to hello-world.
   * @todo: this is the identical to `camelToKebab` - keep both or make `stringToKebab`?
   */
  export function pascalToKebab(pascal: string): string {
    if (!pascal) {
      return pascal
    }
    return pascal
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/([A-Z]+)([A-Z][a-z0-9])/g, '$1-$2')
      .toLowerCase()
  }
  
  /**
   * PascalCase to (lower) snake_case e.g. "HelloWorld" to hello_world.
   * @todo: this is the identical to `camelToSnake` - keep both or make `stringToSnake`?
   */
  export function pascalToSnake(pascal: string): string {
    if (!pascal) {
      return pascal
    }
    return pascal
      .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
      .replace(/([A-Z]+)([A-Z][a-z0-9])/g, '$1_$2')
      .toLowerCase()
  }
  
  /**
   * PascalCase to camelCase e.g. "HelloWorld" to helloWorld.
   */
  export function pascalToCamel(pascal: string): string {
    if (!pascal) {
      return pascal
    }
    return pascal.replace(/(^[A-Z0-9])/g, (g) => g.toLowerCase())
  }
  
  /**
   * (lower) kebab-case to (lower) snake_case e.g. "hello-world" to hello_world.
   */
  export function kebabToSnake(kebab: string): string {
    if (!kebab) {
      return kebab
    }
    return kebab.replace(/-/g, '_')
  }
  
  /**
   *  (lower) kebab-case to PascalCase e.g. "hello-world" to HelloWorld.
   */
  export function kebabToPascal(kebab: string): string {
    if (!kebab) {
      return kebab
    }
    return kebab.replace(/(^[a-z0-9]|-[a-z0-9])/g, (g) => g.toUpperCase().replace('-', ''))
  }
  
  /**
   * (lower) kebab-case to camelCase e.g. "hello-world" to helloWorld.
   */
  export function kebabToCamel(kebab: string): string {
    if (!kebab) {
      return kebab
    }
    return kebab.replace(/-([a-z0-9])/g, (g) => (g?.[1] ?? '').toUpperCase())
  }
  
  /**
   * (lower) snake_case to camelCase e.g. "hello_world" to helloWorld.
   */
  export function snakeToCamel(snake: string): string {
    if (!snake) {
      return snake
    }
    return snake.replace(/_([a-z0-9])/g, (g) => (g?.[1] ?? '').toUpperCase())
  }
  
  /**
   * (lower) snake_case to PascalCase e.g. "hello_world" to HelloWorld.
   */
  export function snakeToPascal(snake: string): string {
    if (!snake) {
      return snake
    }
    return snake.replace(/(^[a-z0-9]|_[a-z0-9])/g, (g) => g.toUpperCase().replace('_', ''))
  }
  
  /**
   * (lower) snake_case to kebab-case e.g. "hello_world" to hello-world.
   */
  export function snakeToKebab(snake: string): string {
    if (!snake) {
      return snake
    }
    return snake.replace(/_/g, '-')
  }
  
  /**
   * Convert lowercase to PascalCase (kind of) by capitalizing the first letter
   * e.g. "helloworld" to "Helloworld".
   * 
   * @todo: make a lowercase converter to Titlecase Converter instead?
   *
   */
  export function lowerToCapitalizeFirst(lower: string): string {
    if (!lower) {
      return lower
    }
    return lower[0]?.toUpperCase() + lower.slice(1)
  }