import { describe, test, expect } from "vitest"
import { EventReward, LocationInfo } from "@fabric-space/fabric-async"
import Ajv from "ajv"
import { SchemaEventReward } from "./events"

const ajv = new Ajv({allErrors: true})

describe("events", () => {
  const timestamp = Date.now()
  const idpId = "abc"
  const userId = "external-user-123"
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


  test("reward", () => {
    const validator = ajv.compile(SchemaEventReward)

    const event: EventReward = {
      event: "reward.provisioned",
      context: {
        timestamp: timestamp,
        location: location,
        sessionId: sessionId,
        spaceId: spaceId,
        fabId: fabId,
        actionLogId: "user-action-2",
        // TODO: include the identifier for the rule used to determine the reward
        // ruleId: ruleId,
        orgId: orgId,
        idp: {
          idpId: idpId,
          userId: userId,
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
})
