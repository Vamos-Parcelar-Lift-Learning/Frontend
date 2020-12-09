/// <reference types = "cypress"/>

describe('LangingAboutus', () =>{
  it('deve tentar redirecionar para a rota about_us e  retornar falha', () =>{
    cy.visit('http://localhost:3000')
    cy.get('[href="/about_us"]').click();
    cy.url().should('include', '/about')
    cy.url().should('eq', 'http://localhost:3000/about')
    });

  it('deve redirecionar para a rota about_us', () =>{
    cy.visit('http://localhost:3000')
    cy.get('[href="/about_us"]').click();
    cy.url().should('include', '/about_us')
    cy.url().should('eq', 'http://localhost:3000/about_us')
    });
  });


