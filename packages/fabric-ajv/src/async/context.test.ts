import { ContextSession, ContextSessionAssessment, ContextSessionFab, LocationInfo } from '@fabric-space/fabric-async'
import Ajv from 'ajv'
import { describe, test, expect } from 'vitest'
import { SchemaContextSession, SchemaContextSessionAssessment, SchemaContextSessionFab, SchemaContextUserActivity } from './context'

const ajv = new Ajv({allErrors: true})

describe('context', () => {
  const userId = "users-001"
  const sessionId = "sessions-001"
  const actionLogId = "actions-001"
  const action = "revealed"
  const attemptId = "attemps-001"
  const contentId = "content-001"
  const fabId = "fabs-001"
  const journeyId = "journeys-001"
  const spaceId = "spaces-001"
  const orgId = "orgs-001"
  const timestamp = Math.floor(Date.now()/1000)
  const location: LocationInfo = {
    lat: 40.760833,
    lng: -111.891111,
  }

  const dataSession: ContextSession = {
    location,
    secondsSinceEpoch: timestamp,
    orgId,
    spaceId,
    userId,
    sessionId,
  }

  const dataFab: ContextSessionFab = {
    location,
    secondsSinceEpoch: timestamp,
    orgId,
    spaceId,
    journeyId,
    fabId,
    action,
    actionLogId,
    userId,
    sessionId,
  }

  const dataAssessment: ContextSessionAssessment = {
    location,
    secondsSinceEpoch: timestamp,
    orgId,
    spaceId,
    journeyId,
    fabId,
    action,
    actionLogId,
    userId,
    sessionId,
    contentId,
    attemptId,
  }

  describe('SchemaContextSession', () => {
    const validator = ajv.compile(SchemaContextSession)

    test('it works', () => {

      const serialized = JSON.stringify(dataSession)
      const deserialized = JSON.parse(serialized)
      validator(deserialized)
      expect(validator.errors).toBeFalsy()
    })

  })

  describe('SchemaContextSessionFab', () => {
    const validator = ajv.compile(SchemaContextSessionFab)

    test('it works', () => {

      const serialized = JSON.stringify(dataFab)
      const deserialized = JSON.parse(serialized)
      validator(deserialized)
      expect(validator.errors).toBeFalsy()
    })

  })

  describe('SchemaContextSessionAssessment', () => {
    const validator = ajv.compile(SchemaContextSessionAssessment)

    test('it works', () => {

      const serialized = JSON.stringify(dataAssessment)
      const deserialized = JSON.parse(serialized)
      validator(deserialized)
      expect(validator.errors).toBeFalsy()
    })
  })

  describe('SchemaContextUserActivity', () => {
    const validator = ajv.compile(SchemaContextUserActivity)

    test('it works for session', () => {
      const serialized = JSON.stringify(dataSession)
      const deserialized = JSON.parse(serialized)
      validator(deserialized)
      expect(validator.errors).toBeFalsy()
    })

    test('it works for fab', () => {
      const serialized = JSON.stringify(dataFab)
      const deserialized = JSON.parse(serialized)
      validator(deserialized)
      expect(validator.errors).toBeFalsy()
    })

    test('it works for assessment', () => {
      const serialized = JSON.stringify(dataAssessment)
      const deserialized = JSON.parse(serialized)
      validator(deserialized)
      expect(validator.errors).toBeFalsy()
    })
  })
})
