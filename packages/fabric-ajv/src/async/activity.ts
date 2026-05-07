import {
  Assessment,
  Choice,
  Attempt,
  AttemptSideEffects,
  LeaderInfo,
  Leaderboard,
  Outcome,
  PointsRange,
  Purchase,
  PurchaseGift,
  PurchaseLineItem,
  PurchaseMoney,
  Reward,
  RewardPoint,
  RewardProduct,
  ScoreTotalDescription,
  StatusLevel,
} from '@fabric-space/fabric-async'

import { JSONSchemaType } from "ajv"

export const SchemaRewardProduct: JSONSchemaType<RewardProduct> = {
  type: "object",
  required: [
    "id",
    "userInventory",
    "product",
    "type",
  ],
  properties: {
    id: {type: "string"},
    userInventory: {
      type: "object",
      required: [
        "id",
        "quantity",
      ],
      properties: {
        id: {type: "string"},
        quantity: {type: "integer"},
      },
    },
    product: {
      type: "object",
      required: [
        "id",
        "name",
      ],
      properties: {
        id: {type: "string"},
        name: {type: "string"},
        description: {
          nullable: true,
          type: "string",
        },
      }
    },
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
    SchemaRewardProduct,
    SchemaRewardPoint,
  ],
}

export const SchemaLeaderInfo: JSONSchemaType<LeaderInfo> = {
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

export const ScheamLeaderInfo: JSONSchemaType<LeaderInfo> = SchemaLeaderInfo

export const SchemaLeaderboard: JSONSchemaType<Leaderboard> = {
  type: "object",
  required: [
    "leaders",
  ],
  properties: {
    leaders: {
      type: "array",
      items: SchemaLeaderInfo,
    },
  },
}

export const SchemaPointsRange: JSONSchemaType<PointsRange> = {
  type: "object",
  required: [
    "low",
    "high",
  ],
  properties: {
    low: {
      oneOf: [
        {type: "number"},
        {type: "string"},
      ],
    },
    high: {
      oneOf: [
        {type: "number"},
        {type: "string"},
      ],
    },
  },
}

export const SchemaStatusLevel: JSONSchemaType<StatusLevel> = {
  type: "object",
  required: [
    "type",
    "id",
    "name",
    "order",
    "range",
  ],
  properties: {
    type: {
      type: "string",
      const: "status_level",
    },
    id: {
      type: "string",
    },
    name: {
      type: "string",
    },
    order: {
      type: "integer",
    },
    range: SchemaPointsRange,
    message: {
      nullable: true,
      type: "object",
      required: [
        "title",
        "description",
      ],
      properties: {
        title: {
          type: "string",
        },
        description: {
          type: "string",
        },
      }
    },
  },
}

export const SchemaPurchaseLineItem: JSONSchemaType<PurchaseLineItem> = {
  type: "object",
  required: [
    "productId",
    "quantity",
  ],
  properties: {
    productId: {type: "string"},
    quantity: {type: "integer"},
  },
}

export const SchemaPurchaseMoney: JSONSchemaType<PurchaseMoney> = {
  type: "object",
  required: [
    "id",
    "type",
    "items",
  ],
  properties: {
    id: {type: "string"},
    type: {
      type: "string",
      const: "money",
    },
    items: {
      type: "array",
      items: SchemaPurchaseLineItem,
    },
  },
}

export const SchemaPurchaseGift: JSONSchemaType<PurchaseGift> = {
  type: "object",
  required: [
    "id",
    "type",
    "items",
  ],
  properties: {
    id: {type: "string"},
    type: {
      type: "string",
      const: "gift",
    },
    items: {
      type: "array",
      items: SchemaPurchaseLineItem,
    },
  },
}

export const SchemaPurchase: JSONSchemaType<Purchase> = {
  oneOf: [
    SchemaPurchaseMoney,
    SchemaPurchaseGift,
  ],
}

export const SchemaOutcome: JSONSchemaType<Outcome> = {
  type: "object",
  required: [
    "type",
    "id",
    "claimed",
    "revealed",
    "assignedId",
  ],
  properties: {
    type: {
      type: "string",
      const: "outcome",
    },
    id: {
      type: "string",
    },
    claimed: {
      type: "boolean",
    },
    revealed: {
      type: "boolean",
    },
    assignedId: {
      type: "string",
    },
  },
}

export const SchemaChoice: JSONSchemaType<Choice> = {
  type: "object",
  required: [
    "type",
    "id",
    "questionId",
    "selectedOptionId",
  ],
  properties: {
    type: {
      type: "string",
      const: "choice",
    },
    id: {
      type: "string",
    },
    questionId: {
      type: "string",
    },
    selectedOptionId: {
      type: "string",
    },
  },
}

export const SchemaAssessment: JSONSchemaType<Assessment> = {
  type: "object",
  required: [
    "type",
    "correct",
    "questions",
  ],
  properties: {
    type: {
      type: "string",
      const: "assessment",
    },
    questions: {
      type: "integer",
    },
    correct: {
      type: "integer",
    },
    previousBestCorrect: {
      nullable: true,
      type: "integer",
    },
  },
}

const SchemaScoreTotalDescription: JSONSchemaType<ScoreTotalDescription> = {
  type: "object",
  required: [
    "dimensionId",
    "amount",
  ],
  properties: {
    dimensionId: {type: "string"},
    amount: {type: "number"},
  },
}

export const SchemaAttemptSideEffects: JSONSchemaType<AttemptSideEffects> = {
  type: "object",
  required: [],
  properties: {
    receipt: {
      type: "object",
      nullable: true,
      oneOf: [
        SchemaPurchaseMoney,
        SchemaPurchaseGift,
      ],
    },
    walletItems: {
      nullable: true,
      type: "array",
      items: SchemaRewardProduct,
    },
    pointsCredits: {
      nullable: true,
      type: "array",
      items: SchemaRewardPoint,
    },
    scores: {
      nullable: true,
      type: "array",
      items: SchemaScoreTotalDescription,
    },
  },
}

export const SchemaAttempt: JSONSchemaType<Attempt> = {
  type: "object",
  required: [
    "type",
    "id",
  ],
  properties: {
    type: {
      type: "string",
      const: "user_attempt",
    },
    id: {
      type: "string",
    },
    completed: {
      nullable: true,
      type: "boolean",
    },
    sideEffects: {
      nullable: true,
      ...SchemaAttemptSideEffects,
    },
  },
}
