/// <reference types="cypress" />

context('Actions', () => {
	beforeEach(() => {
    cy.visit('/')
  })

  it('Tests basic functionality', () => {

    cy.get('.white-border-btn ')
      .should('have.text', 'Get Started').click()
	  
	cy.url().should('eq', Cypress.config().baseUrl + '/get-in-touch/')
	
	cy.get('a.header-cta-nav')
	  .should('have.text', 'Contact Us')
	
  })
	
})