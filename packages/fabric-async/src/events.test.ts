import { 
  describe,
  test,
} from 'vitest'

import {
  EventLeaderboard,
  EventPurchase,
  EventReward,
  EventSession,
  EventInteractionOutcome,
  EventInteractionChoice,
  EventInteractionAssessment,
  EventStatusLevel,
} from './events'

import {
  LocationInfo,
} from './context'

function logEvent<T extends object>(category: string, model: string, eventName: string, event: T) {
  console.log(`${category}, ${model}, ${eventName}:\n${JSON.stringify(event, null, 2)}`)
}

describe("events", () => {
  const timestamp = Math.floor(Date.now()/1000)
  const idpId = "abc"
  const fabricUserId = "fabric-user-id"
  const externalUserId = "external-user-123"
  const sessionId = "session-456"
  const spaceId = "space-007"
  const orgId = "org-888"
  const productId = "products-567"
  const productName = "jersey"
  const journeyId = "journey-abc"
  const fabId = "fab-def"
  const contentId = "content-002"
  const attemptId = "attempt-003"
  const questionId = "questions-x"
  const selectedOptionId = "options-y"
  const location: LocationInfo = {
    lat: 40.760833,
    lng: -111.891111,
  }

  describe("interaction", () => {
    describe("outcome", () => {
      test("assigned", () => {
        const event: EventInteractionOutcome = {
          version: "0.1",
          eventId: "ev-001",
          event: "outcome.assigned",
          context: {
            secondsSinceEpoch: timestamp,
            location: location,
            sessionId: sessionId,
            action: "user-action-xyz",
            actionLogId: "action-log-1",
            fabId: fabId,
            journeyId: journeyId,
            spaceId: spaceId,
            orgId: orgId,
            userId: fabricUserId,
            idp: {
              idpId: idpId,
              userId: externalUserId,
            },
          },
          object: {
            id: "outcome-001",
            type: "outcome",
            assignedId: "prize-123",
            revealed: false,
            claimed: false,
          }
        }
        logEvent("interaction", "outcome", "assigned", event)
      })
    })

    describe("choice", () => {
      test("saved", () => {
        const event: EventInteractionChoice = {
          version: "0.1",
          eventId: "ev-001",
          event: "choice.saved",
          context: {
            secondsSinceEpoch: timestamp,
            location: location,
            sessionId: sessionId,
            action: "user-action-xyz",
            actionLogId: "action-log-2",
            fabId: fabId,
            journeyId: journeyId,
            spaceId: spaceId,
            orgId: orgId,
            userId: fabricUserId,
            idp: {
              idpId: idpId,
              userId: externalUserId,
            },
          },
          object: {
            id: "outcome-001",
            type: "choice",
            questionId: questionId,
            selectedOptionId: selectedOptionId,
          }
        }
        logEvent("interaction", "choice", "assigned", event)
      })
    })

    describe("assessment", () => {
      test("progress", () => {
        const event: EventInteractionAssessment = {
          version: "0.1",
          eventId: "ev-001",
          event: "assessment.progress",
          context: {
            secondsSinceEpoch: timestamp,
            location: location,
            sessionId: sessionId,
            attemptId: attemptId,
            contentId: contentId,
            action: "user-action-xyz",
            actionLogId: "action-log-3",
            fabId: fabId,
            journeyId: journeyId,
            spaceId: spaceId,
            orgId: orgId,
            userId: fabricUserId,
            idp: {
              idpId: idpId,
              userId: externalUserId,
            },
          },
          object: {
            type: "assessment",
            correct: 3,
            questions: 5,
            previousBestCorrect: 4,
          }
        }
        logEvent("interaction", "assessment", "progress", event)
      })

      test("completed", () => {
        const event: EventInteractionAssessment = {
          version: "0.1",
          eventId: "ev-001",
          event: "assessment.completed",
          context: {
            secondsSinceEpoch: timestamp,
            location: location,
            sessionId: sessionId,
            attemptId: attemptId,
            contentId: "content-002",
            action: "user-action-xyz",
            actionLogId: "action-log-3",
            fabId: fabId,
            journeyId: journeyId,
            spaceId: spaceId,
            orgId: orgId,
            userId: fabricUserId,
            idp: {
              idpId: idpId,
              userId: externalUserId,
            },
          },
          object: {
            type: "assessment",
            previousBestCorrect: 4,
            correct: 5,
            questions: 5,
          }
        }
        logEvent("interaction", "assessment", "completed", event)
      })
    })

  })

  describe("purchase", () => {

    describe("money", () => {

      test("payment_completed", () => {
        const event: EventPurchase = {
          version: "0.1",
          eventId: "ev-001",
          event: "purchase.payment_completed",
          context: {
            secondsSinceEpoch: timestamp,
            location: location,
            sessionId: sessionId,
            spaceId: spaceId,
            orgId: orgId,
            userId: fabricUserId,
            idp: {
              idpId: idpId,
              userId: externalUserId,
            },
          },
          object: {
            id: "purchase-001",
            type: "money",
            items: [
              {
                productId: productId,
                quantity: 1,
              }
            ]
          },
        }
        logEvent("purchase", "money", "payment_completed", event)
      })

    })

    describe("points", () => {

      test("payment_completed", () => {
        const event: EventPurchase = {
          version: "0.1",
          eventId: "ev-001",
          event: "purchase.payment_completed",
          context: {
            secondsSinceEpoch: timestamp,
            location: location,
            sessionId: sessionId,
            spaceId: spaceId,
            orgId: orgId,
            userId: fabricUserId,
            idp: {
              idpId: idpId,
              userId: externalUserId,
            },
          },
          object: {
            id: "purchase-002",
            type: "points",
            items: [
              {
                productId: productId,
                quantity: 1,
              }
            ]
          },
        }
        logEvent("purchase", "points", "payment_completed", event)
      })

    })

  })

  describe("reward", () => {
    const bucketId = "gamify-bucket-003"
    const pointsAdded = 5
    const priorBalance = 50
    const priorExperience = 100

    describe("product-points", () => {
      test("provisioned", () => {
        const event: EventReward = {
          version: "0.1",
          eventId: "ev-001",
          event: "reward.provisioned",
          context: {
            secondsSinceEpoch: timestamp,
            location: location,
            sessionId: sessionId,
            spaceId: spaceId,
            fabId: fabId,
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
              product: {
                id: productId,
                name: productName,
              },
              userInventory: {
                id: "inventory-007",
                quantity: 1,
              },
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
        logEvent("reward", "product-points", "provisioned", event)
      })
    })
  })

  describe("session", () => {

    test("signup", () => {
      const event: EventSession = {
        version: "0.1",
        eventId: "ev-001",
        event: "session.signup",
        context: {
          secondsSinceEpoch: timestamp,
          location: location,
          sessionId: sessionId,
          spaceId: spaceId,
          orgId: orgId,
          userId: fabricUserId,
          idp: {
            idpId: idpId,
            userId: externalUserId,
          },
        },
      }
      logEvent("session", "", "signup", event)
    })

    test("signin", () => {
      const event: EventSession = {
        version: "0.1",
        eventId: "ev-001",
        event: "session.signin",
        context: {
          secondsSinceEpoch: timestamp,
          location: location,
          sessionId: sessionId,
          spaceId: spaceId,
          orgId: orgId,
          userId: fabricUserId,
          idp: {
            idpId: idpId,
            userId: externalUserId,
          },
        },
      }
      logEvent("session", "", "signin", event)
    })

    test("entered_space", () => {
      const event: EventSession = {
        version: "0.1",
        eventId: "ev-001",
        event: "session.entered_space",
        context: {
          secondsSinceEpoch: timestamp,
          location: location,
          sessionId: sessionId,
          spaceId: spaceId,
          orgId: orgId,
          userId: fabricUserId,
          idp: {
            idpId: idpId,
            userId: externalUserId,
          },
        },
      }
      logEvent("session", "", "entered_space", event)
    })

  })

  describe("gamify", () => {
    describe("leaderboard", () => {
      test("updated", () => {
        const event: EventLeaderboard = {
          version: "0.1",
          eventId: "ev-001",
          event: "leaderboard.updated",
          context: {
            spaceId: spaceId,
            orgId: orgId,
            secondsSinceEpoch: Date.now(),
          },
          object: {
            leaders: [
              {rank: 1, metric: 499, nameSanitized: "Joe S"},
              {rank: 2, metric: 399, nameSanitized: "Amy R"},
              {rank: 3, metric: 299, nameSanitized: "Ben L"},
            ]
          }
        }
        logEvent("gamify", "leaderboard", "updated", event)
      })
    })

    describe("status_level", () => {
      test("updated", () => {
        const event: EventStatusLevel = {
          version: "0.1",
          eventId: "ev-001",
          event: "status_level.milestone",
          context: {
            spaceId: spaceId,
            orgId: orgId,
            secondsSinceEpoch: Date.now(),
            location,
            sessionId,
            userId: fabricUserId,
            idp: {
              idpId,
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
          }
        }
        logEvent("gamify", "status_level", "milestone", event)
      })
    })

  })

})
