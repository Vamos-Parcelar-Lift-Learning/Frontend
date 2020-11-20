/// <reference types = "cypress"/>

describe('LangingLocalization', () =>{
  it('deve trocar a localização para ingles', () =>{
    cy.visit('http://localhost:3000')
    cy.get(':nth-child(1) > .MuiButton-label').click();
    cy.contains("Make Paying your debits easy")
    });

    it('deve trocar a localização para portugues', () =>{
      cy.visit('http://localhost:3000')
      cy.get('.sc-hHftDr > :nth-child(2)').click();
      cy.contains("Faça o Pagamento dos seus débitos fácil")
      });
  });

