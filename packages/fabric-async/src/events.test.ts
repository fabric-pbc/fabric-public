import { 
  describe,
  test,
} from 'vitest'

import {
  EventLeaderboard,
  EventPurchase,
  EventReward,
  EventSession,
} from './events'

import {
  LocationInfo,
} from './base'

function logEvent<T extends {}>(category: string, model: string, eventName: string, event: T) {
  console.log(`${category}, ${model}, ${eventName}:\n${JSON.stringify(event, null, 2)}`)
}

describe("events", () => {
  const timestamp = Date.now()
  const idpId = "abc"
  const userId = "external-user-123"
  const sessionId = "session-456"
  const spaceId = "space-007"
  const orgId = "org-888"
  const productId = "products-567"
  const location: LocationInfo = {
    lat: 40.760833,
    lng: -111.891111,
  }

  describe("purchase", () => {

    describe("money", () => {

      test("payment_completed", () => {
        const event: EventPurchase = {
          event: "purchase.payment_completed",
          timestamp: timestamp,
          location: location,
          sessionId: sessionId,
          spaceId: spaceId,
          orgId: orgId,
          idp: {
            idpId: idpId,
            userId: userId,
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
          event: "purchase.payment_completed",
          timestamp: timestamp,
          location: location,
          sessionId: sessionId,
          spaceId: spaceId,
          orgId: orgId,
          idp: {
            idpId: idpId,
            userId: userId,
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
    const badgeId = "badge-004"

    describe("badge", () => {

      test("created", () => {
        const event: EventReward = {
          event: "reward.created",
          timestamp: timestamp,
          location: location,
          sessionId: sessionId,
          spaceId: spaceId,
          orgId: orgId,
          idp: {
            idpId: idpId,
            userId: userId,
          },
          object: {
            id: "reward-001",
            type: "badge",
            bucketId: bucketId,
            badgeId: badgeId,
          },
        }
        logEvent("reward", "badge", "created", event)
      })

    })

    describe("point", () => {
      const pointsAdded = 5
      const priorBalance = 50
      const priorExperience = 100

      test("created", () => {
        const event: EventReward = {
          event: "reward.created",
          timestamp: timestamp,
          location: location,
          sessionId: sessionId,
          spaceId: spaceId,
          orgId: orgId,
          idp: {
            idpId: idpId,
            userId: userId,
          },
          object: {
            id: "reward-001",
            type: "point",
            bucketId: bucketId,
            value: pointsAdded,
            current: {
              balance: priorBalance + pointsAdded,
              experience: priorExperience + pointsAdded,
            }
          },
        }
        logEvent("reward", "point", "created", event)
      })

    })

  })

  describe("session", () => {

    test("signup", () => {
      const event: EventSession = {
        event: "session.signup",
        timestamp: timestamp,
        location: location,
        sessionId: sessionId,
        spaceId: spaceId,
        orgId: orgId,
        idp: {
          idpId: idpId,
          userId: userId,
        },
      }
      logEvent("session", "", "signup", event)
    })

    test("signin", () => {
      const event: EventSession = {
        event: "session.signin",
        timestamp: timestamp,
        location: location,
        sessionId: sessionId,
        spaceId: spaceId,
        orgId: orgId,
        idp: {
          idpId: idpId,
          userId: userId,
        },
      }
      logEvent("session", "", "signin", event)
    })

    test("entered_space", () => {
      const event: EventSession = {
        event: "session.entered_space",
        timestamp: timestamp,
        location: location,
        sessionId: sessionId,
        spaceId: spaceId,
        orgId: orgId,
        idp: {
          idpId: idpId,
          userId: userId,
        },
      }
      logEvent("session", "", "entered_space", event)
    })

  })

  describe("gamify", () => {
    describe("leaderboard", () => {
      test("updated", () => {
        const event: EventLeaderboard = {
          event: "leaderboard.updated",
          spaceId: spaceId,
          orgId: orgId,
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
  })

})
