import {
  ActivityEvent,
  EventLeaderboard,
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
      anyOf: [
        // ContextSession
        {
          type: "object",
          required: [
            "userId",
            "location",
            "orgId",
            "sessionId",
            "spaceId",
            "secondsSinceEpoch",
          ],
          properties: {
            idp: {
              nullable: true,
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
            userId: {type: "string"},
            sessionId: {type: "string"},
            spaceId: {type: "string"},
            secondsSinceEpoch: {type: "integer"},
          }
        },
        // ContextSessionFab
        {
          type: "object",
          required: [
            "userId",
            "location",
            "orgId",
            "sessionId",
            "spaceId",
            "secondsSinceEpoch",
            "journeyId",
            "fabId",
            "actionLogId",
            "action",
          ],
          properties: {
            idp: {
              nullable: true,
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
            userId: {type: "string"},
            sessionId: {type: "string"},
            spaceId: {type: "string"},
            secondsSinceEpoch: {type: "integer"},
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
            "userId",
            "location",
            "orgId",
            "sessionId",
            "spaceId",
            "secondsSinceEpoch",
            "journeyId",
            "fabId",
            "actionLogId",
            "action",
            "attemptId",
            "contentId",
          ],
          properties: {
            idp: {
              nullable: true,
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
            userId: {type: "string"},
            sessionId: {type: "string"},
            spaceId: {type: "string"},
            secondsSinceEpoch: {type: "integer"},
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

export const SchemaEventLeaderboard: JSONSchemaType<EventLeaderboard> = {
  type: "object",
  required: [
    "event",
    "context",
    "object"
  ],
  properties: {
    event: {
      type: "string",
      enum: [
        "leaderboard.updated",
      ],
    },
    context: {
      type: "object",
      required: [
        "orgId",
        "spaceId",
        "secondsSinceEpoch",
      ],
      properties: {
        orgId: {
          type: "string",
        },
        spaceId: {
          type: "string",
        },
        secondsSinceEpoch: {
          type: "integer",
        },
      }
    },
    object: {
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
    },
  }
}

export const SchemaActivityEvent: JSONSchemaType<ActivityEvent> = {
  oneOf: [
    // EventPurchase
    // EventReward
    {
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
          anyOf: [
            // ContextSession
            {
              type: "object",
              required: [
                "userId",
                "location",
                "orgId",
                "sessionId",
                "spaceId",
                "secondsSinceEpoch",
              ],
              properties: {
                idp: {
                  nullable: true,
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
                userId: {type: "string"},
                sessionId: {type: "string"},
                spaceId: {type: "string"},
                secondsSinceEpoch: {type: "integer"},
              }
            },
            // ContextSessionFab
            {
              type: "object",
              required: [
                "userId",
                "location",
                "orgId",
                "sessionId",
                "spaceId",
                "secondsSinceEpoch",
                "journeyId",
                "fabId",
                "actionLogId",
                "action",
              ],
              properties: {
                idp: {
                  nullable: true,
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
                userId: {type: "string"},
                sessionId: {type: "string"},
                spaceId: {type: "string"},
                secondsSinceEpoch: {type: "integer"},
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
                "userId",
                "location",
                "orgId",
                "sessionId",
                "spaceId",
                "secondsSinceEpoch",
                "journeyId",
                "fabId",
                "actionLogId",
                "action",
                "attemptId",
                "contentId",
              ],
              properties: {
                idp: {
                  nullable: true,
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
                userId: {type: "string"},
                sessionId: {type: "string"},
                spaceId: {type: "string"},
                secondsSinceEpoch: {type: "integer"},
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
    },
    // EventSession
    // EventLeaderboard
    // EventInteraction
    {
      type: "object",
      required: [
        "event",
        "context",
        "object"
      ],
      properties: {
        event: {
          type: "string",
          enum: [
            "leaderboard.updated",
          ],
        },
        context: {
          type: "object",
          required: [
            "orgId",
            "spaceId",
            "secondsSinceEpoch",
          ],
          properties: {
            orgId: {
              type: "string",
            },
            spaceId: {
              type: "string",
            },
            secondsSinceEpoch: {
              type: "integer",
            },
          }
        },
        object: {
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
        },
      }
    },
  ]
}
