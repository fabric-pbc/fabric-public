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

const event = {
  "version": "0.1",
  "eventId": "ev-001",
  "event": "reward.provisioned",
  "context": {
    "secondsSinceEpoch": 1717109662,
    "location": {
      "lat": 40.760833,
      "lng": -111.891111
    },
    "sessionId": "session-456",
    "spaceId": "space-007",
    "fabId": "fab-def",
    "actionLogId": "user-action-2",
    "orgId": "org-888",
    "userId": "fabric-user-id",
    "idp": {
      "idpId": "abc",
      "userId": "external-user-123"
    }
  },
  "object": [
    {
      "id": "reward-001",
      "type": "product",
      "product": {
        "id": "products-567",
        "name": "jersey"
      },
      "userInventory": {
        "id": "inventory-007",
        "quantity": 1
      }
    },
    {
      "id": "reward-002",
      "type": "point",
      "bucketId": "gamify-bucket-003",
      "value": 5,
      "current": {
        "balance": 55,
        "experience": 105
      }
    }
  ]
}

const serialized = JSON.stringify(event)
const deserializezd = JSON.parse(serialized)

if (!validator(deserializezd)) {
  throw new Error("invalid")
}

```
