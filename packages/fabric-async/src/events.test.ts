import { 
  describe,
  test,
} from 'vitest'

import {
  EventLeaderboard,
  EventPurchase,
  EventReward,
  EventSession,
  EventAttempt,
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

  describe("attempt", () => {
    describe("outcome", () => {
      test("assigned", () => {
        const event: EventAttempt = {
          version: "0.1",
          eventId: "ev-001",
          event: "attempt.updated",
          context: {
            secondsSinceEpoch: timestamp,
            location: location,
            sessionId: sessionId,
            attemptId: attemptId,
            contentId: contentId,
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
            user: {
              id: fabricUserId,
              idp: {
                idpId: idpId,
                userId: externalUserId,
              },
            },
            outcomes: [
              {
                id: "outcome-001",
                type: "outcome",
                assignedId: "prize-123",
                revealed: false,
                claimed: false,
              },
            ],
          },
          object: {
            id: attemptId,
            type: "user_attempt",
          }
        }
        logEvent("attempt", "outcome", "assigned", event)
      })
    })

    describe("choice", () => {
      test("saved", () => {
        const event: EventAttempt = {
          version: "0.1",
          eventId: "ev-001",
          event: "attempt.progress",
          context: {
            secondsSinceEpoch: timestamp,
            location: location,
            sessionId: sessionId,
            attemptId: attemptId,
            contentId: contentId,
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
            user: {
              id: fabricUserId,
            },
            choices: [
              {
                id: "choice-001",
                type: "choice",
                questionId: questionId,
                selectedOptionId: selectedOptionId,
              },
            ],
          },
          object: {
            id: attemptId,
            type: "user_attempt",
          }
        }
        logEvent("attempt", "choice", "assigned", event)
      })
    })

    describe("assessment", () => {
      test("progress", () => {
        const event: EventAttempt = {
          version: "0.1",
          eventId: "ev-001",
          event: "attempt.progress",
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
            user: {
              id: fabricUserId,
            },
            assessments: [
              {
                type: "assessment",
                correct: 3,
                questions: 5,
                previousBestCorrect: 4,
              },
            ],
            choices: [
              {
                id: "choice-001",
                type: "choice",
                questionId: "q-001",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-002",
                type: "choice",
                questionId: "q-002",
                selectedOptionId: "opt-002",
              },
              {
                id: "choice-003",
                type: "choice",
                questionId: "q-003",
                selectedOptionId: "opt-002",
              },
            ],
          },
          object: {
            id: attemptId,
            type: "user_attempt",
          }
        }
        logEvent("attempt", "assessment", "progress", event)
      })

      test("completed", () => {
        const event: EventAttempt = {
          version: "0.1",
          eventId: "ev-001",
          event: "attempt.completed",
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
            completed: true,
            user: {
              id: fabricUserId,
              idp: {
                idpId: idpId,
                userId: externalUserId,
              },
            },
            fab: {
              id: fabId,
              name: "Trivia Fab",
              projectId: journeyId,
              contentSetId: contentId,
            },
            assessments: [
              {
                type: "assessment",
                previousBestCorrect: 4,
                correct: 5,
                questions: 5,
              },
            ],
            choices: [
              {
                id: "choice-001",
                type: "choice",
                questionId: "q-001",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-002",
                type: "choice",
                questionId: "q-002",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-003",
                type: "choice",
                questionId: "q-003",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-004",
                type: "choice",
                questionId: "q-004",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-005",
                type: "choice",
                questionId: "q-005",
                selectedOptionId: "opt-001",
              },
            ],
          },
          object: {
            id: attemptId,
            type: "user_attempt",
            sideEffects: {
              receipt: {
                id: "purchase-001",
                type: "gift",
                items: [
                  {
                    productId,
                    quantity: 1,
                  },
                ],
              },
              walletItems: [
                {
                  id: "wallet-item-001",
                  type: "product",
                  userInventory: {
                    id: "wallet-item-001",
                    quantity: 1,
                  },
                  product: {
                    id: productId,
                    name: productName,
                  },
                },
              ],
              pointsCredits: [
                {
                  id: "points-credit-001",
                  type: "point",
                  bucketId: "bucket-001",
                  value: 100,
                  current: {
                    balance: 125,
                    experience: 125,
                  },
                },
              ],
            },
          }
        }
        logEvent("attempt", "assessment", "completed", event)
      })

      test("completedWithRewards - webhook payload example", () => {
        // Comprehensive test case demonstrating a complete attempt.completed event
        // with all context, attempt, and reward/XP information for webhook consumers
        const xpEarned = 250
        const totalUserXP = 1250
        const event: EventAttempt = {
          version: "0.1",
          eventId: "ev-webhook-001",
          event: "attempt.completed",
          context: {
            // Timing and location context
            secondsSinceEpoch: timestamp,
            location: location,
            // Session and space context
            sessionId: sessionId,
            spaceId: spaceId,
            orgId: orgId,
            // Journey and fab context
            journeyId: journeyId,
            fabId: fabId,
            // Attempt context
            attemptId: attemptId,
            contentId: contentId,
            action: "quiz-completed",
            actionLogId: "action-log-quest-001",
            // User context (tenant's user ID)
            userId: fabricUserId,
            idp: {
              idpId: idpId,
              userId: externalUserId,
            },
            // Attempt completion status
            completed: true,
            // User details for webhook consumer
            user: {
              id: fabricUserId,
              idp: {
                idpId: idpId,
                userId: externalUserId,
              },
            },
            // Fab/game details
            fab: {
              id: fabId,
              name: "Trivia Quest Championship",
              projectId: journeyId,
              contentSetId: contentId,
            },
            // Assessment results
            assessments: [
              {
                type: "assessment",
                previousBestCorrect: 3,
                correct: 5,
                questions: 5,
              },
            ],
            choices: [
              {
                id: "choice-001",
                type: "choice",
                questionId: "q-001",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-002",
                type: "choice",
                questionId: "q-002",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-003",
                type: "choice",
                questionId: "q-003",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-004",
                type: "choice",
                questionId: "q-004",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-005",
                type: "choice",
                questionId: "q-005",
                selectedOptionId: "opt-001",
              },
            ],
          },
          object: {
            // Attempt identity
            id: attemptId,
            type: "user_attempt",
            // Side effects and rewards from this attempt
            sideEffects: {
              // XP earned from this attempt
              pointsCredits: [
                {
                  id: "xp-credit-quest-001",
                  type: "point",
                  bucketId: "xp-bucket-main",
                  value: xpEarned,
                  current: {
                    // XP totals: balance and experience (both typically same for XP)
                    balance: totalUserXP,
                    experience: totalUserXP,
                  },
                },
              ],
              // Optional: wallet items earned
              walletItems: [
                {
                  id: "wallet-badge-001",
                  type: "product",
                  userInventory: {
                    id: "inventory-badge-001",
                    quantity: 1,
                  },
                  product: {
                    id: "product-badge-master",
                    name: "Quiz Master Badge",
                    description: "Earned by completing a perfect quiz",
                  },
                },
              ],
              // Optional: receipt/purchase confirmation if items were purchased
              receipt: {
                id: "receipt-quest-001",
                type: "gift",
                items: [
                  {
                    productId: "product-badge-master",
                    quantity: 1,
                  },
                ],
              },
            },
          }
        }
        logEvent("attempt", "assessment", "completedWithRewards", event)
      })

      test("completedMinimal - no side effects", () => {
        // Test case with attempt completed but no rewards or side effects
        const event: EventAttempt = {
          version: "0.1",
          eventId: "ev-minimal-001",
          event: "attempt.completed",
          context: {
            secondsSinceEpoch: timestamp,
            location: location,
            sessionId: sessionId,
            attemptId: attemptId,
            contentId: contentId,
            action: "survey-completed",
            actionLogId: "action-log-survey",
            fabId: fabId,
            journeyId: journeyId,
            spaceId: spaceId,
            orgId: orgId,
            userId: fabricUserId,
            completed: true,
            user: {
              id: fabricUserId,
            },
            assessments: [
              {
                type: "assessment",
                correct: 0,
                questions: 1,
              },
            ],
            choices: [
              {
                id: "choice-001",
                type: "choice",
                questionId: "q-001",
                selectedOptionId: "opt-002",
              },
            ],
          },
          object: {
            id: attemptId,
            type: "user_attempt",
            // No sideEffects at all
          }
        }
        logEvent("attempt", "assessment", "completedMinimal", event)
      })

      test("completedMultiPoints - multiple points from same bucket", () => {
        // Test case demonstrating multiple point awards from the same bucket
        // (e.g., XP from different achievements/sources within one attempt)
        const event: EventAttempt = {
          version: "0.1",
          eventId: "ev-multipoint-001",
          event: "attempt.completed",
          context: {
            secondsSinceEpoch: timestamp,
            location: location,
            sessionId: sessionId,
            attemptId: attemptId,
            contentId: contentId,
            action: "achievement-unlocked",
            actionLogId: "action-log-achievement",
            fabId: fabId,
            journeyId: journeyId,
            spaceId: spaceId,
            orgId: orgId,
            userId: fabricUserId,
            completed: true,
            user: {
              id: fabricUserId,
              idp: {
                idpId: idpId,
                userId: externalUserId,
              },
            },
            assessments: [
              {
                type: "assessment",
                correct: 5,
                questions: 5,
              },
            ],
            choices: [
              {
                id: "choice-001",
                type: "choice",
                questionId: "q-001",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-002",
                type: "choice",
                questionId: "q-002",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-003",
                type: "choice",
                questionId: "q-003",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-004",
                type: "choice",
                questionId: "q-004",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-005",
                type: "choice",
                questionId: "q-005",
                selectedOptionId: "opt-001",
              },
            ],
          },
          object: {
            id: attemptId,
            type: "user_attempt",
            sideEffects: {
              // Multiple point awards from the same bucket
              pointsCredits: [
                {
                  id: "xp-credit-completion",
                  type: "point",
                  bucketId: "experience",
                  value: 100,
                  current: {
                    balance: 5100,
                    experience: 5100,
                  },
                },
                {
                  id: "xp-credit-perfect-score",
                  type: "point",
                  bucketId: "experience",
                  value: 50,
                  current: {
                    balance: 5150,
                    experience: 5150,
                  },
                },
                {
                  id: "xp-credit-speed-bonus",
                  type: "point",
                  bucketId: "experience",
                  value: 25,
                  current: {
                    balance: 5175,
                    experience: 5175,
                  },
                },
              ],
            },
          }
        }
        logEvent("attempt", "assessment", "completedMultiPoints", event)
      })

      test("completedMultiProducts - multiple wallet items", () => {
        // Test case demonstrating multiple products/items earned
        const event: EventAttempt = {
          version: "0.1",
          eventId: "ev-multiproduct-001",
          event: "attempt.completed",
          context: {
            secondsSinceEpoch: timestamp,
            location: location,
            sessionId: sessionId,
            attemptId: attemptId,
            contentId: contentId,
            action: "quest-completed",
            actionLogId: "action-log-quest",
            fabId: fabId,
            journeyId: journeyId,
            spaceId: spaceId,
            orgId: orgId,
            userId: fabricUserId,
            completed: true,
            user: {
              id: fabricUserId,
            },
            assessments: [
              {
                type: "assessment",
                correct: 10,
                questions: 10,
              },
            ],
            choices: [
              {
                id: "choice-001",
                type: "choice",
                questionId: "q-001",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-002",
                type: "choice",
                questionId: "q-002",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-003",
                type: "choice",
                questionId: "q-003",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-004",
                type: "choice",
                questionId: "q-004",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-005",
                type: "choice",
                questionId: "q-005",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-006",
                type: "choice",
                questionId: "q-006",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-007",
                type: "choice",
                questionId: "q-007",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-008",
                type: "choice",
                questionId: "q-008",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-009",
                type: "choice",
                questionId: "q-009",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-010",
                type: "choice",
                questionId: "q-010",
                selectedOptionId: "opt-001",
              },
            ],
          },
          object: {
            id: attemptId,
            type: "user_attempt",
            sideEffects: {
              // Multiple products/items in inventory
              walletItems: [
                {
                  id: "wallet-sword-001",
                  type: "product",
                  userInventory: {
                    id: "inv-sword-001",
                    quantity: 1,
                  },
                  product: {
                    id: "item-legendary-sword",
                    name: "Legendary Sword",
                    description: "A powerful weapon for the victor",
                  },
                },
                {
                  id: "wallet-armor-001",
                  type: "product",
                  userInventory: {
                    id: "inv-armor-001",
                    quantity: 1,
                  },
                  product: {
                    id: "item-dragon-armor",
                    name: "Dragon Armor",
                    description: "Legendary protective gear",
                  },
                },
                {
                  id: "wallet-potion-001",
                  type: "product",
                  userInventory: {
                    id: "inv-potion-001",
                    quantity: 5,
                  },
                  product: {
                    id: "item-health-potion",
                    name: "Health Potion",
                  },
                },
              ],
            },
          }
        }
        logEvent("attempt", "assessment", "completedMultiProducts", event)
      })

      test("completedMultiDimensions - multi-dimensional scores", () => {
        // Test case demonstrating scores with multiple dimensions
        const event: EventAttempt = {
          version: "0.1",
          eventId: "ev-multiscore-001",
          event: "attempt.completed",
          context: {
            secondsSinceEpoch: timestamp,
            location: location,
            sessionId: sessionId,
            attemptId: attemptId,
            contentId: contentId,
            action: "skill-evaluation",
            actionLogId: "action-log-skill",
            fabId: fabId,
            journeyId: journeyId,
            spaceId: spaceId,
            orgId: orgId,
            userId: fabricUserId,
            completed: true,
            user: {
              id: fabricUserId,
            },
            assessments: [
              {
                type: "assessment",
                correct: 8,
                questions: 10,
              },
            ],
            choices: [
              {
                id: "choice-001",
                type: "choice",
                questionId: "q-001",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-002",
                type: "choice",
                questionId: "q-002",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-003",
                type: "choice",
                questionId: "q-003",
                selectedOptionId: "opt-002",
              },
              {
                id: "choice-004",
                type: "choice",
                questionId: "q-004",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-005",
                type: "choice",
                questionId: "q-005",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-006",
                type: "choice",
                questionId: "q-006",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-007",
                type: "choice",
                questionId: "q-007",
                selectedOptionId: "opt-002",
              },
              {
                id: "choice-008",
                type: "choice",
                questionId: "q-008",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-009",
                type: "choice",
                questionId: "q-009",
                selectedOptionId: "opt-002",
              },
              {
                id: "choice-010",
                type: "choice",
                questionId: "q-010",
                selectedOptionId: "opt-002",
              },
            ],
          },
          object: {
            id: attemptId,
            type: "user_attempt",
            sideEffects: {
              scores: [
                {
                  dimensionId: "dimension-math",
                  amount: 85,
                },
                {
                  dimensionId: "dimension-communication",
                  amount: 92,
                },
                {
                  dimensionId: "dimension-problem-solving",
                  amount: 78,
                },
                {
                  dimensionId: "dimension-collaboration",
                  amount: 88,
                },
              ],
            },
          }
        }
        logEvent("attempt", "assessment", "completedMultiDimensions", event)
      })

      test("completedComprehensive - all side effects combined", () => {
        // Comprehensive test combining all side effect types and multiple items
        const event: EventAttempt = {
          version: "0.1",
          eventId: "ev-comprehensive-001",
          event: "attempt.completed",
          context: {
            secondsSinceEpoch: timestamp,
            location: location,
            sessionId: sessionId,
            attemptId: attemptId,
            contentId: contentId,
            action: "final-boss-defeated",
            actionLogId: "action-log-boss",
            fabId: fabId,
            journeyId: journeyId,
            spaceId: spaceId,
            orgId: orgId,
            userId: fabricUserId,
            completed: true,
            user: {
              id: fabricUserId,
              idp: {
                idpId: idpId,
                userId: externalUserId,
              },
            },
            fab: {
              id: fabId,
              name: "Epic Dungeon Raid",
              projectId: journeyId,
              contentSetId: contentId,
            },
            assessments: [
              {
                type: "assessment",
                previousBestCorrect: 5,
                correct: 20,
                questions: 20,
              },
            ],
            choices: [
              {
                id: "choice-001",
                type: "choice",
                questionId: "q-001",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-002",
                type: "choice",
                questionId: "q-002",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-003",
                type: "choice",
                questionId: "q-003",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-004",
                type: "choice",
                questionId: "q-004",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-005",
                type: "choice",
                questionId: "q-005",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-006",
                type: "choice",
                questionId: "q-006",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-007",
                type: "choice",
                questionId: "q-007",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-008",
                type: "choice",
                questionId: "q-008",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-009",
                type: "choice",
                questionId: "q-009",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-010",
                type: "choice",
                questionId: "q-010",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-011",
                type: "choice",
                questionId: "q-011",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-012",
                type: "choice",
                questionId: "q-012",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-013",
                type: "choice",
                questionId: "q-013",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-014",
                type: "choice",
                questionId: "q-014",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-015",
                type: "choice",
                questionId: "q-015",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-016",
                type: "choice",
                questionId: "q-016",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-017",
                type: "choice",
                questionId: "q-017",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-018",
                type: "choice",
                questionId: "q-018",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-019",
                type: "choice",
                questionId: "q-019",
                selectedOptionId: "opt-001",
              },
              {
                id: "choice-020",
                type: "choice",
                questionId: "q-020",
                selectedOptionId: "opt-001",
              },
            ],
          },
          object: {
            id: attemptId,
            type: "user_attempt",
            sideEffects: {
              // Multiple point types earned
              pointsCredits: [
                {
                  id: "xp-boss-defeat",
                  type: "point",
                  bucketId: "experience",
                  value: 500,
                  current: {
                    balance: 10000,
                    experience: 10000,
                  },
                },
                {
                  id: "xp-boss-completion-bonus",
                  type: "point",
                  bucketId: "experience",
                  value: 250,
                  current: {
                    balance: 10250,
                    experience: 10250,
                  },
                },
              ],
              // Multiple products earned
              walletItems: [
                {
                  id: "drop-legendary-staff",
                  type: "product",
                  userInventory: {
                    id: "inv-staff-001",
                    quantity: 1,
                  },
                  product: {
                    id: "weapon-legendary-staff",
                    name: "Legendary Staff",
                    description: "Dropped from the final boss",
                  },
                },
                {
                  id: "drop-recipe-potion",
                  type: "product",
                  userInventory: {
                    id: "inv-recipe-001",
                    quantity: 1,
                  },
                  product: {
                    id: "recipe-super-potion",
                    name: "Recipe: Super Potion",
                  },
                },
              ],
              // Receipt of purchase/gift
              receipt: {
                id: "receipt-boss-loot",
                type: "gift",
                items: [
                  {
                    productId: "weapon-legendary-staff",
                    quantity: 1,
                  },
                  {
                    productId: "recipe-super-potion",
                    quantity: 1,
                  },
                ],
              },
              // Multi-dimensional score totals
              scores: [
                {
                  dimensionId: "damage-dealt",
                  amount: 5000,
                },
                {
                  dimensionId: "strategy-used",
                  amount: 95,
                },
                {
                  dimensionId: "time-efficiency",
                  amount: 87,
                },
              ],
            },
          }
        }
        logEvent("attempt", "assessment", "completedComprehensive", event)
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

    describe("gift", () => {

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
            type: "gift",
            items: [
              {
                productId: productId,
                quantity: 1,
              }
            ]
          },
        }
        logEvent("purchase", "gift", "payment_completed", event)
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
