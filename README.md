# WTDiff!

Spanned from a problem I had at work while dealing with deciding what to send as part of the payload.

Rule of thumb from experience, just send what's necessary to make the update.

## Why?

KISS - Keep it simple and stupid

1. We need to keep changes predictable
2. Our consuming source does not need to know about what has not changed
3. The consuming source should simply run the updates based on all the fields sent

## Let's get to it

### CommonJS
```js
const wtdiff = require("wtdiff")

const dude1 = {name: "dude", job: "guitar player"}
const dude2 = {name: "dude", job: "developer"}

cosnt changes = wtdiff.extractChanges(dude1, dude2)

console.log(changes)
/**
  {
    job: "developer"
  }
*/

```

### ES Modules 
```ts
import wtdiff from 'wtdiff'

const dude1 = {name: "dude", job: "guitar player"}
const dude2 = {name: "dude", job: "developer"}

cosnt changes = wtdiff.extractChanges(dude1, dude2)

console.log(changes)
/**
  {
    job: "developer"
  }
*/
```

## Supporting
- [x] Nested objects 
- [] Nested arrays
