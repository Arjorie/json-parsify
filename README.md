# json-parsify

## Overview
`json-parsify` can safely parse a JSON. Returns `null` if an error occurred and no set default value, else, it will return the set default value.

## Installation

Install json-parsify using `npm`;

```sh
$ npm i json-parsify 
```

## Usage
```ts
import { jsonParsify } from 'json-parsify';

console.log('***************');
const objectJson = '{"name": "John Doe", "age": 24 }';
const objectJsonResult = jsonParsify(objectJson);
console.log('Parsed Stringified Object');
console.log({ objectJSON: objectJsonResult });

console.log('***************');
const arrayJson = '["John Doe", "Jane Doe"]';
const arrayJsonResult = jsonParsify(arrayJson);
console.log('Parsed Stringified Array');
console.log({ arrayJSON: arrayJsonResult });

console.log('***************');
const numberJson = '3';
const numberJsonResult = jsonParsify(numberJson);
console.log('Parsed Stringified Number');
console.log({ numberJSON: numberJsonResult });

console.log('***************');
const booleanJson = 'true';
const booleanJsonResult = jsonParsify(booleanJson);
console.log('Parsed Stringified Boolean');
console.log({ booleanJSON: booleanJsonResult });

console.log('***************');
const errorJson = '{}}';
const errorJsonResult = jsonParsify(errorJson);
console.log('Parsed with error');
console.log({ errorJSON: errorJsonResult });

console.log('***************');
const errorAndWithDefaultValueJson = '{}}';
const errorAndWithDefaultValueJsonResult = jsonParsify(errorAndWithDefaultValueJson, { message: 'Default result'});
console.log('Parsed with errorAndWithDefaultValue');
console.log({ errorAndWithDefaultValueJSON: errorAndWithDefaultValueJsonResult });

console.log('***************');
const undefinedWithDefaultValueJson = undefined;
const undefinedWithDefaultValueJsonResult = jsonParsify(undefinedWithDefaultValueJson, { message: 'Default result'});
console.log('Parsed with withDefaultValue');
console.log({ withDefaultValueJSON: undefinedWithDefaultValueJsonResult });

```

### Sample Result from code above:
```sh
***************
Parsed Stringified Object
{ objectJSON: { name: 'John Doe', age: 24 } }
***************
Parsed Stringified Array
{ arrayJSON: [ 'John Doe', 'Jane Doe' ] }
***************
Parsed Stringified Number
{ numberJSON: 3 }
***************
Parsed Stringified Boolean
{ booleanJSON: true }
***************
Unexpected token } in JSON at position 2
Parsed with error
{ errorJSON: null }
***************
Unexpected token } in JSON at position 2
Parsed with errorAndWithDefaultValue
{ errorAndWithDefaultValueJSON: { message: 'Default result' } }
***************
Parsed with withDefaultValue
{ withDefaultValueJSON: { message: 'Default result' } }
```
