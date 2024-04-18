import {
  ContextSession,
  ContextSessionAssessment,
  ContextSessionFab,
  ContextSpace,
  ContextUserActivity,
} from '@fabric-space/fabric-async'

import { JSONSchemaType } from "ajv"


export const SchemaContextSession: JSONSchemaType<ContextSession> = {
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

export const SchemaContextSessionFab: JSONSchemaType<ContextSessionFab> = {
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
}

export const SchemaContextSessionAssessment: JSONSchemaType<ContextSessionAssessment> = {
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
}

export const SchemaContextUserActivity: JSONSchemaType<ContextUserActivity> = {
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
}

export const SchemaContextSpace: JSONSchemaType<ContextSpace> = {
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
}
