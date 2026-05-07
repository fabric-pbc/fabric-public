import {
  ActivityEvent,
  EventGamify,
  EventAttempt,
  EventLeaderboard,
  EventReward,
  EventSession,
  EventStatusLevel,
} from '@fabric-space/fabric-async'

import { JSONSchemaType } from 'ajv'
import {
  SchemaAttempt,
  SchemaLeaderboard,
  SchemaReward,
  SchemaStatusLevel,
} from './activity'
import {
  SchemaContextAttempt,
  SchemaContextSession,
  SchemaContextSpace,
  SchemaContextUserActivity,
} from './context'

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
    context: SchemaContextUserActivity,
    object: {
      type: "array",
      items: SchemaReward,
    },
  },
}

export const SchemaEventLeaderboard: JSONSchemaType<EventLeaderboard> = {
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
        "leaderboard.updated",
      ],
    },
    context: SchemaContextSpace,
    object: SchemaLeaderboard,
  },
}

export const SchemaEventStatusLevel: JSONSchemaType<EventStatusLevel> = {
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
        "status_level.milestone",
      ],
    },
    context: SchemaContextSession,
    object: SchemaStatusLevel,
  },
}

export const SchemaEventGamify: JSONSchemaType<EventGamify> = {
  oneOf: [
    SchemaEventLeaderboard,
    SchemaEventStatusLevel,
  ],
}

export const SchemaEventAttempt: JSONSchemaType<EventAttempt> = {
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
        "attempt.completed",
        "attempt.progress",
        "attempt.updated",
      ],
    },
    context: SchemaContextAttempt,
    object: SchemaAttempt,
  },
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
    context: SchemaContextSession,
  },
}

export const SchemaActivityEvent: JSONSchemaType<ActivityEvent> = {
  oneOf: [
    SchemaEventReward,
    SchemaEventSession,
    SchemaEventGamify,
    SchemaEventAttempt,
  ],
}
