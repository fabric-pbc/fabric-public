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
  event: "reward.provisioned",
  context: {
    timestamp: Date.now(),
    location: { lat: 40.760833, lng: -111.891111, },
    sessionId: "session-001",
    spaceId: "space-001",
    fabId: "fab-001",
    actionLogId: "user-action-2",
    orgId: "org-001",
    idp: {
      idpId: "idp-001",
      userId: "user-001",
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
