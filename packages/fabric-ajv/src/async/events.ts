import {
  EventReward,
} from '@fabric-space/fabric-async'

import { JSONSchemaType } from 'ajv'

export const SchemaEventReward: JSONSchemaType<EventReward> = {
  type: "object",
  required: [
    "event",
    "context",
    "object",
  ],
  properties: {
    event: {
      type: "string",
      enum: [
        "reward.provisioned",
        "reward.fulfilled",
      ],
    },
    context: {
      oneOf: [
        // ContextSession
        {
          type: "object",
          required: [
            "idp",
            "location",
            "orgId",
            "sessionId",
            "spaceId",
            "timestamp",
          ],
          properties: {
            idp: {
              type: "object",
              required: [
                "idpId",
                "userId",
              ],
              properties: {
                idpId: {type: "string"},
                userId: {type: "string"},
              },
            },
            location: {
              type: "object",
              required: [
                "lat",
                "lng",
              ],
              properties: {
                lat: {type: "number"},
                lng: {type: "number"},
              }
            },
            orgId: {type: "string"},
            sessionId: {type: "string"},
            spaceId: {type: "string"},
            timestamp: {type: "integer"},
          }
        },
        // ContextSessionFab
        {
          type: "object",
          required: [
            "idp",
            "location",
            "orgId",
            "sessionId",
            "spaceId",
            "timestamp",
            "journeyId",
            "fabId",
            "actionLogId",
            "action",
          ],
          properties: {
            idp: {
              type: "object",
              required: [
                "idpId",
                "userId",
              ],
              properties: {
                idpId: {type: "string"},
                userId: {type: "string"},
              },
            },
            location: {
              type: "object",
              required: [
                "lat",
                "lng",
              ],
              properties: {
                lat: {type: "number"},
                lng: {type: "number"},
              }
            },
            orgId: {type: "string"},
            sessionId: {type: "string"},
            spaceId: {type: "string"},
            timestamp: {type: "integer"},
            journeyId: {type: "string"},
            fabId: {type: "string"},
            actionLogId: {type: "string"},
            action: {type: "string"},
          }
        },
        // ContextSessionAssessment
        {
          type: "object",
          required: [
            "idp",
            "location",
            "orgId",
            "sessionId",
            "spaceId",
            "timestamp",
            "journeyId",
            "fabId",
            "actionLogId",
            "action",
            "attemptId",
            "contentId",
          ],
          properties: {
            idp: {
              type: "object",
              required: [
                "idpId",
                "userId",
              ],
              properties: {
                idpId: {type: "string"},
                userId: {type: "string"},
              },
            },
            location: {
              type: "object",
              required: [
                "lat",
                "lng",
              ],
              properties: {
                lat: {type: "number"},
                lng: {type: "number"},
              }
            },
            orgId: {type: "string"},
            sessionId: {type: "string"},
            spaceId: {type: "string"},
            timestamp: {type: "integer"},
            journeyId: {type: "string"},
            fabId: {type: "string"},
            actionLogId: {type: "string"},
            action: {type: "string"},
            attemptId: {type: "string"},
            contentId: {type: "string"},
          }
        },    
      ]
    },
    object: {
      type: "array",
      items: {
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
      },      
    }
  }
}
