/// <reference types = "cypress"/>

describe('LangingLogin', () =>{
  it('deve tentar redirecionar para a rota login e retornar falha', () =>{
    cy.visit(Cypress.env('BASE_URL'));
    cy.contains('Entrar').click();
    cy.url().should('include', '/log')
    cy.url().should('eq', 'http://localhost:3000/log')
    });

  it('deve redirecionar para a rota login', () =>{
    cy.visit(Cypress.env('BASE_URL'));
    cy.contains('Entrar').click();
    cy.url().should('include', '/login')
    cy.url().should('eq', Cypress.env('LOGIN_URL'));
    });
  });




