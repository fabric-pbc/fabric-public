# fabric-ajv
Schema validators for fabric-async.

This package allows you to use [Ajv](https://ajv.js.org/) to evaluate if a javascript object conforms to a schema describing types from [fabric-async](../fabric-async/README.md).

# Install
```bash
npm install @fabric-space/fabric-ajv
```

# Example

## attempt.completed
```typescript
import Ajv from "ajv"
import { SchemaEventAttempt } from "@fabric-space/fabric-ajv"

const ajv = new Ajv({allErrors: true})
const validator = ajv.compile(SchemaEventAttempt)

const event = {
  "version": "0.1",
  "eventId": "ev-attempt-001",
  "event": "attempt.completed",
  "context": {
    "secondsSinceEpoch": 1717109662,
    "location": {
      "lat": 40.760833,
      "lng": -111.891111
    },
    "sessionId": "session-456",
    "spaceId": "space-007",
    "fabId": "fab-def",
    "journeyId": "journey-001",
    "attemptId": "attempt-123",
    "contentId": "content-456",
    "actionLogId": "action-log-789",
    "action": "quiz-completed",
    "orgId": "org-888",
    "userId": "fabric-user-id",
    "completed": true,
    "user": {
      "id": "fabric-user-id",
      "idp": {
        "idpId": "abc",
        "userId": "external-user-123"
      }
    },
    "assessments": [
      {
        "type": "assessment",
        "correct": 5,
        "questions": 5
      }
    ],
    "choices": [
      {
        "id": "choice-001",
        "type": "choice",
        "questionId": "q-001",
        "selectedOptionId": "opt-001"
      },
      {
        "id": "choice-002",
        "type": "choice",
        "questionId": "q-002",
        "selectedOptionId": "opt-001"
      },
      {
        "id": "choice-003",
        "type": "choice",
        "questionId": "q-003",
        "selectedOptionId": "opt-001"
      },
      {
        "id": "choice-004",
        "type": "choice",
        "questionId": "q-004",
        "selectedOptionId": "opt-001"
      },
      {
        "id": "choice-005",
        "type": "choice",
        "questionId": "q-005",
        "selectedOptionId": "opt-001"
      }
    ]
  },
  "object": {
    "id": "attempt-123",
    "type": "user_attempt",
    "completed": true,
    "sideEffects": {
      "pointsCredits": [
        {
          "id": "xp-credit-001",
          "type": "point",
          "bucketId": "currency-01",
          "value": 250,
          "current": {
            "balance": 1250,
            "experience": 1250
          }
        }
      ],
      "walletItems": [
        {
          "id": "wallet-badge-001",
          "type": "product",
          "userInventory": {
            "id": "inventory-badge-001",
            "quantity": 1
          },
          "product": {
            "id": "product-badge-master",
            "name": "Quiz Master Badge"
          }
        }
      ],
      "receipt": {
        "id": "receipt-001",
        "type": "gift",
        "items": [
          {
            "productId": "product-badge-master",
            "quantity": 1
          }
        ]
      }
    }
  }
}

const serialized = JSON.stringify(event)
const deserialized = JSON.parse(serialized)

if (!validator(deserialized)) {
  throw new Error("invalid")
}
```

## reward.provisioned
```typescript
import Ajv from "ajv"
import { SchemaEventReward } from "@fabric-space/fabric-ajv"

const ajv = new Ajv({allErrors: true})
const validator = ajv.compile(SchemaEventReward)

const event = {
  "version": "0.1",
  "eventId": "ev-reward-001",
  "event": "reward.provisioned",
  "context": {
    "secondsSinceEpoch": 1717109662,
    "location": {
      "lat": 40.760833,
      "lng": -111.891111
    },
    "sessionId": "session-456",
    "spaceId": "space-007",
    "orgId": "org-888",
    "userId": "fabric-user-id",
    "idp": {
      "idpId": "abc",
      "userId": "external-user-123"
    }
  },
  "object": [
    {
      "id": "point-reward-001",
      "type": "point",
      "bucketId": "currency-01",
      "value": 100,
      "current": {
        "balance": 1350,
        "experience": 1350
      }
    },
    {
      "id": "point-reward-002",
      "type": "point",
      "bucketId": "currency-02",
      "value": 50,
      "current": {
        "balance": 500,
        "experience": 500
      }
    }
  ]
}

const serialized = JSON.stringify(event)
const deserialized = JSON.parse(serialized)

if (!validator(deserialized)) {
  throw new Error("invalid")
}
```
