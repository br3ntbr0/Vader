/// <reference types="Cypress" />

context('Checking the title of the loaded window.', () => {
  it('Checks the window title to ensure it matches the title described the application HTML.', () => {
    cy.visit('http://localhost:3000')
    // similar to above examples, cy.window() yields application's Window
    // object and we tell Cypress to retry until that object has property "AppReady"
    // and its value is `true`.
    //cy.title().should.contain('Project Vader: A Proof of Concept Application')
  })
})

/*
context('Should validate that the home page is displayed based on page title.', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should have the correct page title', () => {
    cy.find();
  })  
   
})
*/