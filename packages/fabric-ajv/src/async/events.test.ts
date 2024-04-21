import { describe, test, expect } from "vitest"
import { EventLeaderboard, EventReward, LocationInfo } from "@fabric-space/fabric-async"
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

  test("leaderboard", () => {
    const event: EventLeaderboard = {
      version: "0.1",
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
})
