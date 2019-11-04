/// <reference types="Cypress" />

context('Should validate that the home page is displayed based on page title.', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should have the correct page title', () => {
    cy.find();
  })  
   
})