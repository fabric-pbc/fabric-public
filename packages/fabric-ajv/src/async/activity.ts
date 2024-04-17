import {
  LeaderInfo,
  Leaderboard,
  Reward,
  RewardPoint,
  RewardProduct,
} from '@fabric-space/fabric-async'

import { JSONSchemaType } from "ajv"


export const SchemaRewardProduct: JSONSchemaType<RewardProduct> = {
  type: "object",
  required: [
    "id",
    "inventoryId",
    "productId",
    "type",
  ],
  properties: {
    id: {type: "string"},
    inventoryId: {type: "string"},
    productId: {type: "string"},
    type: {
      type: "string",
      const: "product",
    },
  },
}

export const SchemaRewardPoint: JSONSchemaType<RewardPoint> = {
  type: "object",
  required: [
    "bucketId",
    "current",
    "id",
    "type",
    "value",
  ],
  properties: {
    bucketId: {type: "string"},
    current: {
      type: "object",
      required: [
        "balance",
        "experience",
      ],
      properties: {
        balance: {type: "number"},
        experience: {type: "number"},
      }
    },
    id: {type: "string"},
    type: {type: "string"},
    value: {type: "number"},
  }
}

export const SchemaReward: JSONSchemaType<Reward> = {
  oneOf: [
    // product
    {
      type: "object",
      required: [
        "id",
        "inventoryId",
        "productId",
        "type",
      ],
      properties: {
        id: {type: "string"},
        inventoryId: {type: "string"},
        productId: {type: "string"},
        type: {
          type: "string",
          const: "product",
        },
      },
    },
    // point
    {
      type: "object",
      required: [
        "bucketId",
        "current",
        "id",
        "type",
        "value",
      ],
      properties: {
        bucketId: {type: "string"},
        current: {
          type: "object",
          required: [
            "balance",
            "experience",
          ],
          properties: {
            balance: {type: "number"},
            experience: {type: "number"},
          }
        },
        id: {type: "string"},
        type: {type: "string"},
        value: {type: "number"},
      }
    }
  ]
}

export const ScheamLeaderInfo: JSONSchemaType<LeaderInfo> = {
  type: "object",
  required: [
    "metric",
    "nameSanitized",
    "rank",
  ],
  properties: {
    nameSanitized: {
      type: "string",
    },
    rank: {
      type: "integer",
    },
    metric: {
      type: "number",
    },
  }
}

export const SchemaLeaderboard: JSONSchemaType<Leaderboard> = {
  type: "object",
  required: [
    "leaders",
  ],
  properties: {
    leaders: {
      type: "array",
      items: {
        type: "object",
        required: [
          "metric",
          "nameSanitized",
          "rank",
        ],
        properties: {
          nameSanitized: {
            type: "string",
          },
          rank: {
            type: "integer",
          },
          metric: {
            type: "number",
          },
        },
      },
    },
  },
}
