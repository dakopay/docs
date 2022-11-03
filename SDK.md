Install SDK to use protocol.

```js

// instal sdk
npm i projectrepa/SDK

// Use
import { setChain, ABI, checkAddress, getNetwork } from 'repa-sdk';

// Set Network Chain
setChain(5);

// call functions
var addr = await checkAddress(ethaddress);

console.log(addr);

```
