## Setup
``` bash
npm install @klaus-stein/js-helpers
```
## Usage
``` javascript
const stringifyArray = require('@klaus-stein/js-helpers');

let arr = [1,3,4,5,6,7,8,10,11,12];

async function f() {
  let result = await stringifyArray(arr);
  console.log(result);
}
```