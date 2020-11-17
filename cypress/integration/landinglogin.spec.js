/// <reference types = "cypress"/>

describe('LangingLogin', () =>{
  it('deve tentar redirecionar para a rota login e retornar falha', () =>{
    cy.visit('http://localhost:3000')
    cy.get('[href="/login"]').click();
    cy.url().should('include', '/log')
    cy.url().should('eq', 'http://localhost:3000/log')
    });

  it('deve redirecionar para a rota login', () =>{
    cy.visit('http://localhost:3000')
    cy.get('[href="/login"]').click();
    cy.url().should('include', '/login')
    cy.url().should('eq', 'http://localhost:3000/login')
    });
  });




