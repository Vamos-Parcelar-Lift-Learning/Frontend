/// <reference types = "cypress"/>

describe('LogInPage', () => {
  it('realizar login', () => {
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
    cy.contains('Sair').click();
    cy.url().should('include', Cypress.env('BASE_URL'));
  });

  it('Não realizar login', () => {
    cy.visit(Cypress.env('LOGIN_URL'));
    cy.url().should('include', Cypress.env('LOGIN_PATH'));
    cy.contains('Digite seus dados de Login')

    cy.get('input[name=User]').type(Cypress.env('LOGIN_USER_ERROR'));
    cy.get('input[name=Password]').type(Cypress.env('LOGIN_PW_ERROR'));

    cy.wait(5);
    cy.get('button[name=NextLogin]').click();

    cy.wait(10);
    //cy.get('.sc-gsTCUz').contains('Ops');
    cy.url().should('eq', Cypress.env('LOGIN_URL'));
  });
});
