import {
  ContextAttempt,
  ContextAttemptFab,
  ContextAttemptUser,
  ContextSession,
  ContextSessionAssessment,
  ContextSessionFab,
  ContextSessionScan,
  ContextSpace,
  ContextSpaceActivity,
  IdP,
  LocationInfo,
} from '@fabric-space/fabric-async'

import { JSONSchemaType } from "ajv"
import {
  SchemaAssessment,
  SchemaChoice,
  SchemaOutcome,
} from './activity'

export const SchemaIdP: JSONSchemaType<IdP> = {
  type: "object",
  required: [
    "idpId",
    "userId",
  ],
  properties: {
    idpId: {type: "string"},
    userId: {type: "string"},
  },
}

export const SchemaLocationInfo: JSONSchemaType<LocationInfo> = {
  type: "object",
  required: [
    "lat",
    "lng",
  ],
  properties: {
    lat: {type: "number"},
    lng: {type: "number"},
  },
}

export const SchemaContextSession: JSONSchemaType<ContextSession> = {
  type: "object",
  required: [
    "userId",
    "orgId",
    "sessionId",
    "spaceId",
    "secondsSinceEpoch",
  ],
  properties: {
    idp: {
      nullable: true,
      ...SchemaIdP,
    },
    location: {
      nullable: true,
      ...SchemaLocationInfo,
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
      ...SchemaIdP,
    },
    location: {
      nullable: true,
      ...SchemaLocationInfo,
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

export const SchemaContextSessionScan: JSONSchemaType<ContextSessionScan> = {
  type: "object",
  required: [
    "userId",
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
      ...SchemaIdP,
    },
    location: {
      nullable: true,
      ...SchemaLocationInfo,
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
}

export const SchemaContextSessionAssessment: JSONSchemaType<ContextSessionAssessment> = {
  type: "object",
  required: [
    "userId",
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
      ...SchemaIdP,
    },
    location: {
      nullable: true,
      ...SchemaLocationInfo,
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

export const SchemaContextAttemptFab: JSONSchemaType<ContextAttemptFab> = {
  type: "object",
  required: [
    "id",
    "name",
    "contentSetId",
  ],
  properties: {
    id: {type: "string"},
    name: {type: "string"},
    projectId: {nullable: true, type: "string"},
    contentSetId: {type: "string"},
  },
}

export const SchemaContextAttemptUser: JSONSchemaType<ContextAttemptUser> = {
  type: "object",
  required: [
    "id",
  ],
  properties: {
    id: {type: "string"},
    idp: {
      nullable: true,
      ...SchemaIdP,
    },
  },
}

export const SchemaContextAttempt: JSONSchemaType<ContextAttempt> = {
  type: "object",
  required: [
    "userId",
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
    "user",
  ],
  properties: {
    idp: {
      nullable: true,
      ...SchemaIdP,
    },
    location: {
      nullable: true,
      ...SchemaLocationInfo,
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
    completed: {
      nullable: true,
      type: "boolean",
    },
    user: SchemaContextAttemptUser,
    fab: {
      nullable: true,
      ...SchemaContextAttemptFab,
    },
    assessments: {
      nullable: true,
      type: "array",
      items: SchemaAssessment,
    },
    choices: {
      nullable: true,
      type: "array",
      items: SchemaChoice,
    },
    outcomes: {
      nullable: true,
      type: "array",
      items: SchemaOutcome,
    },
  }
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

export const SchemaContextUserActivity: JSONSchemaType<ContextSpaceActivity> = {
  anyOf: [
    SchemaContextSpace,
    SchemaContextSession,
    SchemaContextSessionFab,
    SchemaContextSessionScan,
    SchemaContextSessionAssessment,
    SchemaContextAttempt,
  ],
}
