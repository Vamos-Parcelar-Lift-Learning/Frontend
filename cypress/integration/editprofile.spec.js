/// <reference types = "cypress"/>

describe('LandingPage', () =>{
  it('deve pesquisar o localizador', () =>{
    cy.visit('http://localhost:3000/login')
    cy.get(':nth-child(2) > .sc-hlTvYk').type("telmo61@yahoo.com")
    cy.get(':nth-child(4) > .sc-hlTvYk').type("725650")
    cy.get('.MuiButtonBase-root').click()

    cy.url().should('include', '/debit_consultation')
    cy.url().should('eq', 'http://localhost:3000/debit_consultation')

    cy.get('[href="/edit_profile"] > .sc-pFZIQ > .sc-jrAGrp').click()
    cy.url().should('include', '/edit_profile')
    cy.url().should('eq', 'http://localhost:3000/edit_profile')

    cy.get('.sc-fvhGYg > .sc-eLgOdN > .sc-hlTvYk').clear()
    cy.get('.sc-fvhGYg > .sc-eLgOdN > .sc-hlTvYk').type("Fulano Ciclano")
    cy.get(':nth-child(4) > .sc-hlTvYk').clear()
    cy.get(':nth-child(4) > .sc-hlTvYk').type("43256316184")

    // cy.get('.MuiButton-root').click()
  });

});



