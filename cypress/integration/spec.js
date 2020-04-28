/// <reference types="cypress" />
describe('Example app', () => {
  it('loads', () => {
    cy.visit('/') // goes to the base url set in "cypress.json"
    cy.contains('Learn React').should('be.visible')
    cy.wait(1000)
  })
})
