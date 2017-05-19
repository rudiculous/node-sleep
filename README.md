# node-sleep
A function which returns a promise that resolves after a certain amount of time.

## Installation
`yarn add @rdcl/sleep`

## Usage
```javascript
import sleep from '@rdcl/sleep'

async () => {
  await sleep(100) // sleep for 100 milliseconds
  const val = await sleep(50, 'Hello, World!') // sleep for 50 milliseconds, then resolve to 'Hello, World!'
}
```

## Todo
Write tests.
