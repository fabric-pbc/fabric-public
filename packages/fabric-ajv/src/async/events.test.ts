import { describe, test, expect } from "vitest"
import { EventInteractionAssessment, EventLeaderboard, EventReward, EventSession, EventStatusLevel, LocationInfo } from "@fabric-space/fabric-async"
import Ajv from "ajv"
import { SchemaActivityEvent } from "./events"

const ajv = new Ajv({allErrors: true})

describe("events", () => {
  const timestamp = Math.floor(Date.now()/1000)
  const idpId = "abc"
  const fabricUserId = "fabric-user-005"
  const externalUserId = "external-user-123"
  const sessionId = "session-456"
  const spaceId = "space-007"
  const orgId = "org-888"
  const productId = "products-567"
  const fabId = "fab-def"
  // const journeyId = "journey-abc"
  // const contentId = "content-002"
  // const attemptId = "attempt-003"
  // const questionId = "questions-x"
  // const selectedOptionId = "options-y"
  const location: LocationInfo = {
    lat: 40.760833,
    lng: -111.891111,
  }
  const bucketId = "gamify-bucket-003"
  const pointsAdded = 5
  const priorBalance = 50
  const priorExperience = 100
  const journeyId = "journeys-001"
  const action = "test"

  // one validator to test all Events
  const validator = ajv.compile(SchemaActivityEvent)

  test("reward", () => {

    const event: EventReward = {
      version: "0.1",
      eventId: "ev-001",
      event: "reward.provisioned",
      context: {
        secondsSinceEpoch: timestamp,
        location: location,
        sessionId: sessionId,
        spaceId: spaceId,
        journeyId,
        fabId: fabId,
        action,
        actionLogId: "user-action-2",
        // TODO: include the identifier for the rule used to determine the reward
        // ruleId: ruleId,
        orgId: orgId,
        userId: fabricUserId,
        idp: {
          idpId: idpId,
          userId: externalUserId,
        },
      },
      object: [
        {
          id: "reward-001",
          type: "product",
          productId: productId,
          inventoryId: "inventory-007",
        },
        {
          id: "reward-002",
          type: "point",
          bucketId: bucketId,
          value: pointsAdded,
          current: {
            balance: priorBalance + pointsAdded,
            experience: priorExperience + pointsAdded,
          }
        },
      ],
    }

    const serialized = JSON.stringify(event)
    const deserializezd = JSON.parse(serialized)

    // const isValid = 
    validator(deserializezd)
    expect(validator.errors).toBeFalsy()
  })

  test("session", () => {
    const event: EventSession = {
      version: "0.1",
      eventId: "ev-001",
      event: "session.entered_space",
      context: {
        secondsSinceEpoch: timestamp,
        location: location,
        orgId: orgId,
        spaceId: spaceId,
        sessionId: sessionId,
        userId: fabricUserId,
        idp: {
          idpId: idpId,
          userId: externalUserId,
        },
      },
    }

    const serialized = JSON.stringify(event)
    const deserializezd = JSON.parse(serialized)

    // const isValid = 
    validator(deserializezd)
    expect(validator.errors).toBeFalsy()
  })

  describe("gamify", () => {
    test("leaderboard", () => {
      const event: EventLeaderboard = {
        version: "0.1",
        eventId: "ev-001",
        event: "leaderboard.updated",
        context: {
          orgId: orgId,
          spaceId: spaceId,
          secondsSinceEpoch: timestamp,
        },
        object: {
          leaders: [
            {nameSanitized: "Jane D.", rank: 1, metric: 500},
            {nameSanitized: "John D.", rank: 2, metric: 300},
          ],
        },
      }
  
      const serialized = JSON.stringify(event)
      const deserializezd = JSON.parse(serialized)
  
      // const isValid = 
      validator(deserializezd)
      expect(validator.errors).toBeFalsy()
    })

    test("status_level", () => {
      const event: EventStatusLevel = {
        version: "0.1",
        eventId: "ev-001",
        event: "status_level.milestone",
        context: {
          secondsSinceEpoch: timestamp,
          location: location,
          orgId: orgId,
          spaceId: spaceId,
          sessionId: sessionId,
          userId: fabricUserId,
          idp: {
            idpId: idpId,
            userId: externalUserId,
          },
        },
        object: {
          type: "status_level",
          id: "status_level_id",
          order: 2,
          range: {low: 1, high: 4},
          name: "Bronze",
          message: {
            title: "Congratulations!",
            description: "This shows great progress!",
          },
        },
      }
  
      const serialized = JSON.stringify(event)
      const deserializezd = JSON.parse(serialized)
  
      // const isValid = 
      validator(deserializezd)
      expect(validator.errors).toBeFalsy()
    })

  })

  test("assessment", () => {
    const event: EventInteractionAssessment = {
      version: "0.1",
      eventId: "ev-001",
      event: "assessment.completed",
      context: {
        orgId: orgId,
        spaceId: spaceId,
        journeyId: journeyId,
        fabId: fabId,
        attemptId: "",
        contentId: "content-001",
        action: "choice-saved",
        actionLogId: "actions-001",
        sessionId: sessionId,
        userId: fabricUserId,
        location: location,
        secondsSinceEpoch: timestamp,
      },
      object: {
        type: "assessment",
        previousBestCorrect: 4,
        correct: 5,
        questions: 5,
      }
    }

    const serialized = JSON.stringify(event)
    const deserializezd = JSON.parse(serialized)

    // const isValid = 
    validator(deserializezd)
    expect(validator.errors).toBeFalsy()
  })
})
