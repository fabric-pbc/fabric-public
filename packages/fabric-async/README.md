# fabric-async
Messages emitted by the Fabric platform, consumable via a webhook.

# Status
The code is in a `proposal` status.
This package is not expected to be consumed by production teams yet.

# Install
```bash
npm install @fabric-space/fabric-async
```

# Documentation
See the [generated documentation](https://fabric-pbc.github.io/fabric-public/).

# Example
```json
{
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
```
