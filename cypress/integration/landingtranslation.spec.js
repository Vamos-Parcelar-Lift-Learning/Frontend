/// <reference types = "cypress"/>

describe('LangingLocalization', () =>{
  it('deve trocar a localização para ingles e falhar', () =>{
    cy.visit(Cypress.env('BASE_URL'));
    cy.contains("English").click();
    cy.contains("Faça o Pagamento dos seus débitos fácil")
    });

    it('deve trocar a localização para portugues e falhar', () =>{
      cy.visit(Cypress.env('BASE_URL'));
      cy.contains("Português").click();
      cy.contains("Make Paying your debits easy")
      });


  it('deve trocar a localização para ingles com sucesso', () =>{
    cy.visit(Cypress.env('BASE_URL'));
    cy.contains("English").click();
    cy.contains("Make Paying your debits easy")
    });

    it('deve trocar a localização para portugues com sucesso', () =>{
      cy.visit(Cypress.env('BASE_URL'));
      cy.contains("Português").click();
      cy.contains("Faça o Pagamento dos seus débitos fácil")
      });
  });


