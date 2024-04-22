# fabric-async
Messages emitted by the Fabric platform, consumable via a webhook.

# Status
The code is in a `proposal` status.
This package is not expected to be consumed by production teams yet.

# Install
```bash
npm install @fabric-space/fabric-async
```

# Example
```typescript
const event: EventReward = {
  version: "0.1",
  eventId: "ev-001",
  event: "reward.provisioned",
  context: {
    secondsSinceEpoch: Math.floor(Date.now()/1000),
    location: { lat: 40.760833, lng: -111.891111, },
    sessionId: "session-001",
    spaceId: "space-001",
    journeyId: "journey-001",
    fabId: "fab-001",
    action: "assessment-completed",
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
```
