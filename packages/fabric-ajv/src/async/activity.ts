import {
  Assessment,
  Choice,
  LeaderInfo,
  Leaderboard,
  Outcome,
  Reward,
  RewardPoint,
  RewardProduct,
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
    // product
    {
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
