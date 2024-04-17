# fabric-ajv
Schema validators for fabric-async.

This package allows you to use [Ajv](https://ajv.js.org/) to evaluate if a javascript object conforms to a schema describing types from [fabric-async](../fabric-async/README.md).

# Install
```bash
npm install @fabric-space/fabric-ajv
```

# Example
```typescript
import Ajv from "ajv"
import { SchemaEventReward } from "@fabric-space/fabric-ajv"

const ajv = new Ajv({allErrors: true})
const validator = ajv.compile(SchemaEventReward)

const event: EventReward = {
  event: "reward.provisioned",
  context: {
    secondsSinceEpoch: Math.floor(Date.now()/1000),
    location: { lat: 40.760833, lng: -111.891111, },
    sessionId: "session-001",
    spaceId: "space-001",
    fabId: "fab-001",
    actionLogId: "user-action-2",
    orgId: "org-001",
    userId: "fabric-user-005",
    idp: {
      idpId: "idp-001",
      userId: "external-user-001",
    },
  },
  object: [
    {
      id: "reward-001",
      type: "product",
      productId: "product-001",
      inventoryId: "inventory-007",
    },
    {
      id: "reward-002",
      type: "point",
      bucketId: "bucket-001",
      value: 1,
      current: {
        balance: 51,
        experience: 101,
      }
    },
  ],
}

const serialized = JSON.stringify(event)
const deserializezd = JSON.parse(serialized)

if (!validator(deserializezd)) {
  throw new Error("invalid")
}

```
