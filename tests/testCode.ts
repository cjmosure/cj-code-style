/**
 * ESLint Test File
 *
 * This file contains various TypeScript patterns and edge cases to test ESLint configurations.
 * It includes examples of both good and problematic code to help evaluate rule effectiveness.
 */

// ==============================
// IMPORTS AND EXPORTS
// ==============================

export const namedExport = 'test';

// ==============================
// VARIABLE DECLARATIONS
// ==============================
// Different ways to declare variables
const _constVar = 'I am constant';
let _mutableVar = 'I can change';
let _oldStyleVar = 'I am using var';
_mutableVar = 'See? I changed';

// Different types of declarations
const _stringVar = 'string';
const numberVar = 123;
const booleanVar = true;
const _nullVar = null;
const _undefinedVar = undefined;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const _anyVar: any = 'anything goes here';
const _unknownVar: unknown = 'type-safe any';
const _neverVar: never = (() => {
  throw new Error()
})();
const objectVar: object = {};
const arrayVar: string[] = ['a', 'b', 'c'];
const _tupleVar: [string, number] = ['tuple', 123];
const _genericVar: number[] = [1, 2, 3];
const _unionVar: number | string = Math.random() > 0.5 ? 'string' : 123;
const _intersectionVar: { a: string } & { b: number } = { a: 'a', b: 123 };
const _literalVar: 'literal' = 'literal' as const;
const _functionVar: () => void = () => {
};

// Type aliases and interfaces
type MyType = {
  method(): void;
  prop1: string;
  prop2?: number;
};

const _usage: MyType = {
  method: () => {
    console.log('method');
  },
  prop1: 'property',
};

interface MyInterface {
  method(): void;
  prop1: string;
  prop2?: number;
}

// Classes with TypeScript features
class MyClass implements MyInterface {
  static staticVar = 'static';
  // Access modifiers
  private privateVar: string;
  // Methods
  prop1 = 'property';
  prop2 = 456;
  protected protectedVar: string;

  public publicVar: string;

  readonly readonlyVar: string;
  // Parameter properties shorthand
  constructor(
    private paramProp: string,
    public publicParamProp = 123,
    protected _protectedProp = true,
  ) {
    this.privateVar = 'private';
    this.protectedVar = 'protected';
    this.publicVar = 'public';
    this.readonlyVar = 'readonly';
  }

  method(): void {
    console.log('method');
  }

  // Getter and setter
  get protectedProp(): boolean {
    return this._protectedProp;
  }

  set protectedProp(value: boolean) {
    this._protectedProp = value;
  }
}

// Enum
enum Direction {
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
  Up = 'UP',
}

// ==============================
// FUNCTIONS
// ==============================
// Function declarations
const normalFunction = (param: string): string => param;

// Function expressions
const functionExpression = (param: string): string => param;

// Arrow functions
const arrowFunction = (param: string): string => param;

const shortArrowFunction = (param: string): string => param;
shortArrowFunction('test');

// Rest parameters
const restFunction = (...args: number[]): number => args.reduce((sum, current) => sum + current, 0);
restFunction(1, 2, 3, 4);

// Default parameters
const defaultParams = (param1 = 'default', param2 = 0): void => {
  console.log(param1, param2);
};
defaultParams();

// Optional parameters
const optionalParams = (required: string, optional?: string): string => optional ? required + optional : required;
optionalParams('required');


// Function overloads
function overloaded(param: string): string;
function overloaded(param: number): number;
function overloaded(param: number | string): number | string {
  return param;
}
overloaded('string');

// Generic functions
const genericFunction = <T>(param: T): T => param;

// Async functions
const asyncFunction = async (): Promise<string> => new Promise((resolve) => {
  setTimeout(() => resolve('resolved'), 100);
});

// Generator functions
function* _generatorFunction(): Generator<number> {
  yield 1;
  yield 2;
  yield 3;
}

// ==============================
// CONTROL FLOW
// ==============================
// If statements
if (booleanVar)
  console.log('true branch');
else if (!booleanVar)
  console.log('else if branch');
else
  console.log('else branch');

// Ternary operator
const _ternaryResult = booleanVar ? 'true' : 'false';

// Switch statements
let numby = 2;
numby = 1;
switch (numby) {
  case 1:
    console.log('one');
    break;
  case 2:
    console.log('two');
    break;
  default:
    console.log('default');
    break;
}

// For loops
for (let i = 0; i < 5; i++)
  console.log(i);


// For...in loops
const exampleObject = { a: 1, b: 2, c: 3 };
for (const key in exampleObject) {
  if (Object.prototype.hasOwnProperty.call(objectVar, key))
    console.log(key);

}

// For...of loops
const exampleArray = [1, 2, 3];
for (const item of exampleArray)
  console.log(item);


// While loops
let whileCounter = 0;
while (whileCounter < 5)
  whileCounter++;


// Do...while loops
let doWhileCounter = 0;
do
  doWhileCounter++;
while (doWhileCounter < 5);

// Try...catch...finally
try {
  throw new Error('error');
} catch (error) {
  console.error(error);
} finally {
  console.log('finally');
}

// ==============================
// COMMON ESLINT ISSUES
// ==============================
// Unused variables
const _unusedVar = 'I am not used anywhere';

// Console logs in production code
console.log('debugging statement');
console.warn('warning');
console.error('error');

// Unreachable code
const _unreachableCode = () => {
  return 'early return';
  // eslint-disable-next-line no-unreachable
  console.log('I will never be executed'); // Unreachable code
};

// No-op functions
const _noOp = () => {
};

// Empty block statements
if (booleanVar) {
  // Empty block
}

// Overly complex expressions
const _complex = booleanVar ? (numberVar > 10 ? 'big' : (numberVar < 5 ? 'small' : 'medium')) : 'not applicable';

// Re-assignment of function parameters
const _reassignParam = (param: string) => {
  param = 'reassigned'; // Reassigning function parameters
  return param;
};

// Use of eval
const evalCode = 'console.log("eval")';
eval(evalCode);

// Lack of exhaustive handling in switch
const _nonExhaustiveSwitch = (dir: Direction) => {
  switch (dir) {
    case Direction.Up:
      return 'up';
    case Direction.Down:
      return 'down';
    // Missing cases for Left and Right
  }
};

// Explicit any
const explicitAny: any = 'I could be anything';

// Implicit any
const implicitAny = (param) => param + 1;

// Dead code
if (false)
  console.log('This will never execute');


// ==============================
// BEST PRACTICES
// ==============================
// Good practices for comparison
if (variable === undefined) { /* ... */ }
if (variable !== null) { /* ... */ }

// Bad practices for comparison
if (variable == null) { /* ... */ } // Double equals allows for type coercion
if (variable === 'value' || variable === 'otherValue') { /* ... */ } // Could use Array.includes

// Good error handling
try {
  // Risky operation
} catch (error) {
  if (error instanceof TypeError) {
    // Handle type error
  } else if (error instanceof RangeError) {
    // Handle range error
  } else {
    // Handle other errors
  }
}

// Bad error handling
try {
  // Risky operation
} catch (error) {
  console.error(error); // Just logging without proper handling
}

// ==============================
// NAMING CONVENTIONS
// ==============================
// Constants
const MAX_ITEMS = 100;
const PI = 3.14159;

// Variables
const userName = 'John';
const isActive = true;

// Functions
const getUserData = () => ({});
const isValidEmail = (email: string) => true;

// Classes
class UserAccount {
  // ...
}

// Interfaces
interface UserProfile {
  // ...
}

// Different casing styles
const snake_case_var = 'snake';
const camelCaseVar = 'camel';
const PascalCaseVar = 'pascal';
const ALL_CAPS_VAR = 'all caps';

// ==============================
// COMPLEX TYPE SCENARIOS
// ==============================
// Mapped types
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Conditional types
type NonNullable<T> = T extends null | undefined ? never : T;

// Utility types
type PartialUser = Partial<UserProfile>;
type ReadonlyUser = Readonly<UserProfile>;
type PickedUser = Pick<UserProfile, 'email' | 'name'>;
type OmittedUser = Omit<UserProfile, 'password'>;

// Type guards
const isString = (value: unknown): value is string => typeof value === 'string';

// Declaration merging
interface MergeableInterface {
  prop1: string;
}

interface MergeableInterface {
  prop2: number;
}

// ==============================
// COMMON BUGS AND EDGE CASES
// ==============================
// Off-by-one errors
for (let i = 0; i <= arrayVar.length; i++) {
  // Potential array index out of bounds at the last iteration
  console.log(arrayVar[i]);
}

// Null reference errors
const maybeNull: null | string = Math.random() > 0.5 ? 'string' : null;
const length = maybeNull?.length; // Optional chaining for safety
const unsafeLength = maybeNull!.length; // Non-null assertion (risky)

// Race conditions
let counter = 0;
const incrementAsync = async () => {
  const current = counter;
  // Simulating delay that could cause race condition
  await new Promise((resolve) => setTimeout(resolve, 100));
  counter = current + 1;
};

// Infinite loops
const potentialInfiniteLoop = () => {
  let i = 0;
  while (i < 10)
    console.log(i);
    // Missing i++ could cause infinite loop

};

// Type casting
const strNumber = '42';
const num = Number(strNumber); // Proper conversion
const numAlt = +strNumber; // Alternative conversion
const badNum = strNumber as unknown as number; // Unsafe type assertion

// ==============================
// ADVANCED PATTERNS
// ==============================
// Higher-order functions
const createMultiplier = (factor: number) => (num: number) => num * factor;

const double = createMultiplier(2);
const triple = createMultiplier(3);

// Currying
const curriedAdd = (a: number) => (b: number) => a + b;
const add5 = curriedAdd(5);

// Memoization
const memoize = <T extends (...args: any[]) => any>(fn: T) => {
  const cache = new Map();

  return (...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args);
    if (cache.has(key))
      return cache.get(key);


    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

const memoizedFib = memoize((n: number): number => {
  if (n <= 1) return n;
  return memoizedFib(n - 1) + memoizedFib(n - 2);
});

// Decorators (experimental feature)
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments: ${args}`);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class DecoratedClass {
  @log
  public method(arg: string) {
    return `Method called with ${arg}`;
  }
}

// ==============================
// POTENTIAL PROBLEMATIC CODE
// ==============================
// Mixing promises and callbacks
const mixedAsyncPatterns = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('result');
    }, 100);
  });

  promise.then((result) => {
    // Nested callback
    setTimeout(() => {
      console.log(result);
    }, 100);
  });
};

// Callback hell
const callbackHell = () => {
  setTimeout(() => {
    console.log('first');
    setTimeout(() => {
      console.log('second');
      setTimeout(() => {
        console.log('third');
        setTimeout(() => {
          console.log('fourth');
        }, 100);
      }, 100);
    }, 100);
  }, 100);
};

// Deeply nested conditionals
const deeplyNested = (a: boolean, b: boolean, c: boolean, d: boolean) => {
  if (a) {
    if (b) {
      if (c) {
        if (d)
          return 'all true';
        else
          return 'a, b, c true, d false';

      } else {
        if (d)
          return 'a, b, d true, c false';
        else
          return 'a, b true, c, d false';

      }
    } else {
      // More nesting...
      return 'complex condition';
    }
  } else {
    return 'a false';
  }
};

// Large objects with repetitive structure
const largeObject = {
  property1: {
    nestedProperty1: {
      anotherValue: 'another value',
      value: 'value',
      yetAnotherValue: 'yet another value',
    },
    nestedProperty2: {
      anotherValue: 'another value',
      value: 'value',
      yetAnotherValue: 'yet another value',
    },
  },
  property2: {
    nestedProperty1: {
      anotherValue: 'another value',
      value: 'value',
      yetAnotherValue: 'yet another value',
    },
    nestedProperty2: {
      anotherValue: 'another value',
      value: 'value',
      yetAnotherValue: 'yet another value',
    },
  },
};

// Giant functions
const giantFunction = () => {
  // Step 1: Initialize variables
  let a = 0;
  let b = 0;
  let c = 0;
  let d = 0;

  // Step 2: Perform calculation for a
  for (let i = 0; i < 10; i++)
    a += i;


  // Step 3: Perform calculation for b
  for (let i = 0; i < 10; i++)
    b += i * 2;


  // Step 4: Perform calculation for c
  for (let i = 0; i < 10; i++)
    c += i * 3;


  // Step 5: Perform calculation for d
  for (let i = 0; i < 10; i++)
    d += i * 4;


  // Step 6: Combine results
  return a + b + c + d;
};

// ==============================
// EXPORT THE CREATED ITEMS FOR USE ELSEWHERE
// ==============================
export {
  ClassComponent,
  Direction,
  FunctionalComponent,
  MyClass,
  MyNamespace,
  arrowFunction,
  asyncFunction,
  createMultiplier,
  curriedAdd,
  functionExpression,
  genericFunction,
  memoize,
  normalFunction,
};
