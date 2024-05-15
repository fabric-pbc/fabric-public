import {
  ActivityEvent,
  EventInteraction,
  EventInteractionAssessment,
  EventInteractionChoice,
  EventInteractionOutcome,
  EventLeaderboard,
  EventStatusLevel,
  EventGamify,
  EventReward,
  EventSession,
} from '@fabric-space/fabric-async'

import { JSONSchemaType } from 'ajv'

export const SchemaEventReward: JSONSchemaType<EventReward> = {
  type: "object",
  required: [
    "version",
    "eventId",
    "event",
    "context",
    "object",
  ],
  properties: {
    version: {
      type: "string",
      const: "0.1",
    },
    eventId: {
      type: "string",
    },
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
    "version",
    "eventId",
    "event",
    "context",
    "object"
  ],
  properties: {
    version: {
      type: "string",
      const: "0.1",
    },
    eventId: {
      type: "string",
    },
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

export const SchemaEventStatusLevel: JSONSchemaType<EventStatusLevel> = {
  type: "object",
  required: [
    "version",
    "eventId",
    "event",
    "context",
    "object"
  ],
  properties: {
    version: {
      type: "string",
      const: "0.1",
    },
    eventId: {
      type: "string",
    },
    event: {
      type: "string",
      enum: [
        "status_level.milestone",
      ],
    },
    context: {
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
    object: {
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
        range: {
          type: "object",
          required: [
            "low",
            "high",
          ],
          properties: {
            low: {
              type: "number",
            },
            high: {
              type: "number",
            },
          },
        },
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
    },
  }
}

export const SchemaEventGamify: JSONSchemaType<EventGamify> = {
  oneOf: [
    // EventLeaderboard
    {
      type: "object",
      required: [
        "version",
        "eventId",
        "event",
        "context",
        "object"
      ],
      properties: {
        version: {
          type: "string",
          const: "0.1",
        },
        eventId: {
          type: "string",
        },
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
    // EventStatusLevel
    {
      type: "object",
      required: [
        "version",
        "eventId",
        "event",
        "context",
        "object"
      ],
      properties: {
        version: {
          type: "string",
          const: "0.1",
        },
        eventId: {
          type: "string",
        },
        event: {
          type: "string",
          enum: [
            "status_level.milestone",
          ],
        },
        context: {
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
        object: {
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
            range: {
              type: "object",
              required: [
                "low",
                "high",
              ],
              properties: {
                low: {
                  type: "number",
                },
                high: {
                  type: "number",
                },
              },
            },
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
        },
      }
    },
  ]
}

export const SchemaEventInteractionOutcome: JSONSchemaType<EventInteractionOutcome> = {
  type: "object",
  required: [
    "version",
    "eventId",
    "event",
    "context",
    "object",
  ],
  properties: {
    version: {
      type: "string",
      const: "0.1",
    },
    eventId: {
      type: "string",
    },
    event: {
      type: "string",
      enum: [
        "outcome.assigned",
        "outcome.updated",
      ],
    },
    context: {
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
    object: {
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
    },
  },
}


export const SchemaEventInteractionChoice: JSONSchemaType<EventInteractionChoice> = {
  type: "object",
  required: [
    "version",
    "eventId",
    "event",
    "context",
    "object",
  ],
  properties: {
    version: {
      type: "string",
      const: "0.1",
    },
    eventId: {
      type: "string",
    },
    event: {
      type: "string",
      enum: [
        "choice.saved",
      ],
    },
    context: {
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
    object: {
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
    },
  },
}

export const SchemaEventInteractionAssessment: JSONSchemaType<EventInteractionAssessment> = {
  type: "object",
  required: [
    "version",
    "eventId",
    "event",
    "context",
    "object",
  ],
  properties: {
    version: {
      type: "string",
      const: "0.1",
    },
    eventId: {
      type: "string",
    },
    event: {
      type: "string",
      enum: [
        "assessment.completed",
        "assessment.progress",
      ],
    },
    context: {
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
    object: {
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
    },
  },
}

export const SchemaEventInteraction: JSONSchemaType<EventInteraction> = {
  oneOf: [
    // EventInteractionOutcome
    {
      type: "object",
      required: [
        "version",
        "eventId",
        "event",
        "context",
        "object",
      ],
      properties: {
        version: {
          type: "string",
          const: "0.1",
        },
        eventId: {
          type: "string",
        },
        event: {
          type: "string",
          enum: [
            "outcome.assigned",
            "outcome.updated",
          ],
        },
        context: {
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
        object: {
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
        },
      },
    },
    // EventInteractionChoice
    {
      type: "object",
      required: [
        "version",
        "eventId",
        "event",
        "context",
        "object",
      ],
      properties: {
        version: {
          type: "string",
          const: "0.1",
        },
        eventId: {
          type: "string",
        },
        event: {
          type: "string",
          enum: [
            "choice.saved",
          ],
        },
        context: {
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
        object: {
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
        },
      },
    },
    // EventInteractionAssessment
    {
      type: "object",
      required: [
        "version",
        "eventId",
        "event",
        "context",
        "object",
      ],
      properties: {
        version: {
          type: "string",
          const: "0.1",
        },
        eventId: {
          type: "string",
        },
        event: {
          type: "string",
          enum: [
            "assessment.completed",
            "assessment.progress",
          ],
        },
        context: {
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
        object: {
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
        },
      },
    },
  ]
}

export const SchemaEventSession: JSONSchemaType<EventSession> = {
  type: "object",
  required: [
    "version",
    "eventId",
    "event",
    "context",
  ],
  properties: {
    version: {
      type: "string",
      const: "0.1",
    },
    eventId: {
      type: "string",
    },
    event: {
      type: "string",
      enum: [
        "session.entered_space",
        "session.signin",
        "session.signup",
      ],
    },
    context: {
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
    }
  },
}

export const SchemaActivityEvent: JSONSchemaType<ActivityEvent> = {
  oneOf: [
    // EventPurchase
    // EventReward
    {
      type: "object",
      required: [
        "version",
        "eventId",
        "event",
        "context",
        "object",
      ],
      properties: {
        version: {
          type: "string",
          const: "0.1",
        },
        eventId: {
          type: "string",
        },    
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
            // ContextSessionScan
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
                "scanId",
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
                scanId: {type: "string"},
                actionLogId: {type: "string"},
                action: {type: "string"},
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
    {
      type: "object",
      required: [
        "version",
        "eventId",
        "event",
        "context",
      ],
      properties: {
        version: {
          type: "string",
          const: "0.1",
        },
        eventId: {
          type: "string",
        },
        event: {
          type: "string",
          enum: [
            "session.entered_space",
            "session.signin",
            "session.signup",
          ],
        },
        context: {
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
        }
      },
    },
    // EventLeaderboard
    {
      type: "object",
      required: [
        "version",
        "eventId",
        "event",
        "context",
        "object"
      ],
      properties: {
        version: {
          type: "string",
          const: "0.1",
        },
        eventId: {
          type: "string",
        },
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
    // EventStatusLevel
    {
      type: "object",
      required: [
        "version",
        "eventId",
        "event",
        "context",
        "object"
      ],
      properties: {
        version: {
          type: "string",
          const: "0.1",
        },
        eventId: {
          type: "string",
        },
        event: {
          type: "string",
          enum: [
            "status_level.milestone",
          ],
        },
        context: {
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
        object: {
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
            range: {
              type: "object",
              required: [
                "low",
                "high",
              ],
              properties: {
                low: {
                  type: "number",
                },
                high: {
                  type: "number",
                },
              },
            },
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
        },
      }
    },
    // EventInteraction
    {
      oneOf: [
        // EventInteractionOutcome
        {
          type: "object",
          required: [
            "version",
            "eventId",
            "event",
            "context",
            "object",
          ],
          properties: {
            version: {
              type: "string",
              const: "0.1",
            },
            eventId: {
              type: "string",
            },
            event: {
              type: "string",
              enum: [
                "outcome.assigned",
                "outcome.updated",
              ],
            },
            context: {
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
            object: {
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
            },
          },
        },
        // EventInteractionChoice
        {
          type: "object",
          required: [
            "version",
            "eventId",
            "event",
            "context",
            "object",
          ],
          properties: {
            version: {
              type: "string",
              const: "0.1",
            },
            eventId: {
              type: "string",
            },
            event: {
              type: "string",
              enum: [
                "choice.saved",
              ],
            },
            context: {
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
            object: {
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
            },
          },
        },
        // EventInteractionAssessment
        {
          type: "object",
          required: [
            "version",
            "eventId",
            "event",
            "context",
            "object",
          ],
          properties: {
            version: {
              type: "string",
              const: "0.1",
            },
            eventId: {
              type: "string",
            },
            event: {
              type: "string",
              enum: [
                "assessment.completed",
                "assessment.progress",
              ],
            },
            context: {
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
            object: {
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
            },
          },
        },
      ]
    },
  ]
}
