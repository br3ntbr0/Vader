/// <reference types="Cypress" />

context('Should validate that the server is running.', () => {
  cy.request('http://localhost:3000')
    .should((response) => {
     expect(response.status).to.eq(200)
  })


})




