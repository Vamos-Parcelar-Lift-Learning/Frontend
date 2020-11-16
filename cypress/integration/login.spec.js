/// <reference types = "cypress"/>

describe('LogInPage', () => {
  it('realizar login', () => {
    cy.visit(Cypress.env('LOGIN_URL'));
    cy.url().should('include', Cypress.env('LOGIN_PATH'));
    cy.get('.sc-jGVbCA').contains('Digite seus dados de Login');

    cy.get('.sc-Fyfyc > :nth-child(1)').contains('Usuário');
    cy.get(':nth-child(2) > .sc-hOqqkJ').type(Cypress.env('LOGIN_USER'));
    cy.get('.sc-Fyfyc > :nth-child(3)').contains('Senha');
    cy.get(':nth-child(4) > .sc-hOqqkJ').type(Cypress.env('LOGIN_PW'));

    cy.wait(5);
    cy.get('.MuiButtonBase-root').click();

    cy.wait(10);
    cy.url().should('eq', Cypress.env('DEBITS_URL'));
    cy.get('.sc-gsTCUz').contains('Login realizado com sucesso');
    cy.get('[href="/"] > .sc-pFZIQ').contains('Sair');
    cy.url().should('include', Cypress.env('BASE_URL'));
  });

  it('Não realizar login', () => {
    cy.visit(Cypress.env('LOGIN_URL'));
    cy.url().should('include', Cypress.env('LOGIN_PATH'));
    cy.get('.sc-jGVbCA').contains('Digite seus dados de Login');

    cy.get('.sc-Fyfyc > :nth-child(1)').contains('Usuário');
    cy.get(':nth-child(2) > .sc-hOqqkJ').type(Cypress.env('LOGIN_USER_ERROR'));
    cy.get('.sc-Fyfyc > :nth-child(3)').contains('Senha');
    cy.get(':nth-child(4) > .sc-hOqqkJ').type(Cypress.env('LOGIN_PW_ERROR'));

    cy.wait(5);
    cy.get('.MuiButtonBase-root').click();

    cy.wait(10);
    cy.get('.sc-gsTCUz').contains('Ops');
    cy.url().should('eq', Cypress.env('LOGIN_URL'));
  });
});
