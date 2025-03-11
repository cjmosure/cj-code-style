// Declare variables with different scopes and types
let _globalVar = 'I am global';
let _blockVar = 'I am block-scoped';
const _constVar = 'I am a constant';

// Use different types of quotes
const _singleQuoteString = 'single quotes';
const _doubleQuoteString = 'double quotes';
const _templateLiteral = `template literal`;

// Example of a function with different argument and return types
const exampleFunction = (param1, param2 = 'default', ...rest) => {
  if (param1)
    console.log('param1 is truthy');
  else
    console.warn('param1 is falsy');

  return param2 + rest.join('');
};

// Call the example function with various arguments
exampleFunction(true, 'hello', 'world', '!');
exampleFunction(false);

// Create an object with different properties
const _exampleObject = {
  booleanProperty: true,
  method: () => 'method called',
  nullProperty: null,
  numberProperty: 123,
  stringProperty: 'string',
  symbolProperty: Symbol('symbol'),
  undefinedProperty: undefined,
};

// Use different types of loops
for (let i = 0; i < 10; i++)
  console.log(i);


let j = 0;
while (j < 10) {
  console.log(j);
  j++;
}

const array = [1, 2, 3];
for (const element of array)
  console.log(element);


const object = { a: 1, b: 2 };
for (const key in object)
  console.log(key, object[key]);


// Use try...catch
try {
 throw new Error('Something went wrong'); 
} catch (error) {
 console.error(error); 
}

// Use async/await
const asyncFunction = async () => {
  await new Promise((resolve) => {setTimeout(resolve, 1000);});
  return 'Async operation complete';
};

asyncFunction().then((result) => console.log(result));

// Use bitwise operators
const _bitwiseAnd = 5 & 3;
const _bitwiseOr = 5 | 3;
const _bitwiseXor = 5 ^ 3;
const _bitwiseNot = ~5;
const _leftShift = 5 << 1;
const _rightShift = 5 >> 1;
const _unsignedRightShift = 5 >>> 1;

// Use strict equality and inequality
const _strictEqual = 1 === '1';
const _strictNotEqual = 1 !== '1';

// Unused variable
const _unusedVariable = 'This variable is not used';

// Function with no return
const functionWithNoReturn = () => {
 console.log('This function does not return anything'); 
};

functionWithNoReturn();
