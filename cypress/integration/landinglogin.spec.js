/// <reference types = "cypress"/>

describe('LangingLogin', () =>{
  it('deve redirecionar para a rota login', () =>{
    cy.visit('http://localhost:3000')
    cy.get('[href="/login"]').click();
    cy.url().should('include', '/login')
    cy.url().should('eq', 'http://localhost:3000/login')
    });
  });




