You can query all data using graphql:

```js
import { setChain, graphSubscriptions, graphTransfers } from 'repa-sdk';

// set testnet
setChain(5);

graphSubscriptions('first: 10');
```

Types :

```js

type subscriptionList @entity {
	id: ID!
	active: Boolean!
	txn: Bytes! # address
	timestamp: BigInt! # uint256
	sub: Bytes! # uint256
	plan: Bytes! # uint256
	boss: Bytes! # address
	user: Bytes! # address
	cost: BigInt! # uint256
	token: Bytes! # address
	token_name: String! # string
	token_symbol: String! # string
	token_decimal: BigInt! # uint8
}

type transferList @entity {
	id: ID!
	txn: Bytes! # address
	timestamp: BigInt! # uint256
	sub: Bytes! # address
        plan: Bytes! # uint256
	user: Bytes! # address
	boss: Bytes! # address
	amount: BigInt! # uint256
	token: Bytes! # address
	token_name: String! # string
	token_symbol: String! # string
        token_decimal: BigInt!
	token_balance: BigInt! # uint256
	token_allowance: BigInt! # uint256
}

```
