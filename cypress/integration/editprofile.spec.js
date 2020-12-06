/// <reference types = "cypress"/>

describe('LandingPage', () =>{
  // it('deve tentar fazer login o e falhar', () =>{
  //   cy.visit('http://localhost:3000/login')
  //   cy.get(':nth-child(2) > .sc-hlTvYk').type("telmo60@yahoo.com")
  //   cy.get(':nth-child(4) > .sc-hlTvYk').type("725630")
  //   cy.get('.MuiButtonBase-root').click()

  //   cy.url().should('include', '/debit_consultation')
  //   cy.url().should('eq', 'http://localhost:3000/debit_consultation')

  // });
  // it('deve tentar editar o perfil e falhar', () =>{

  //   cy.get('[href="/edit_profile"] > .sc-pFZIQ > .sc-jrAGrp').click()
  //   cy.url().should('include', '/edit_profile')
  //   cy.url().should('eq', 'http://localhost:3000/edit_profile')

  //   cy.get('.sc-fvhGYg > .sc-eLgOdN > .sc-hlTvYk').clear()
  //   cy.get('.sc-fvhGYg > .sc-eLgOdN > .sc-hlTvYk').type("Fulano Ciclano")
  //   cy.get(':nth-child(4) > .sc-hlTvYk').clear()
  //   cy.get(':nth-child(4) > .sc-hlTvYk').type("43256316184")

  //   cy.get('.MuiButton-root').click()
  // });


  it('deve fazer login', () =>{
    cy.visit(Cypress.env('LOGIN_URL'));
    cy.url().should('include', Cypress.env('LOGIN_PATH'));
    cy.contains('Digite seus dados de Login')

    cy.get('input[name=User]').type(Cypress.env('LOGIN_USER'));
    cy.get('input[name=Password]').type(Cypress.env('LOGIN_PW'));

    cy.wait(5);
    cy.get('button[name=NextLogin]').click();

    cy.wait(10);
    cy.url().should('eq', Cypress.env('DEBITS_URL'));
    cy.get('.sc-gsTCUz').contains('Login realizado com sucesso');

  });
  it('deve editar o perfil', () =>{

    cy.contains("Edit").click()
    cy.url().should('include', '/edit_profile')
    cy.url().should('eq', 'http://localhost:3000/edit_profile')

    cy.get('input[name=Name]').clear()
    cy.get('input[name=Name]').type("Fulano Ciclano")
    cy.get('input[name=CPF]').clear()
    cy.get('input[name=CPF]').type("43256316184")

    cy.get('button[name=NextEdit]').click()
  });

});



