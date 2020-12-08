/// <reference types = "cypress"/>

describe('PaymentPage', () => {
  it('realizar pagamento dos debitos selecionados', () => {
    cy.visit(Cypress.env('LOGIN_URL'));
    cy.url().should('include', Cypress.env('LOGIN_PATH'));
    cy.wait(7);
    cy.contains('Digite seus dados de Login');

    cy.get('input[name=User]').type(Cypress.env('LOGIN_USER'));
    cy.get('input[name=Password]').type(Cypress.env('LOGIN_PW'));

    cy.wait(5);
    cy.get('button[name=NextLogin]').click();

    cy.wait(10);
    cy.url().should('eq', Cypress.env('DEBITS_URL'));
    cy.get('.sc-gsTCUz').contains('Login realizado com sucesso');

    cy.get('input[name=InputSearch]').type(Cypress.env("LOCATOR"))
    cy.get('button[name=ButtonLocator]').click()

    cy.get('input[name=checkCard]').first().click()

    cy.get('button[name=ToPayment]').click()
    cy.wait(10);
    cy.url().should('eq', Cypress.env('PAYMENT_URL'));


    cy.get( '#demo-simple-select').click()
    cy.get('.MuiList-root > [tabindex="0"]')
    .contains('CPF')
    .click();
    cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(Cypress.env('USER_KEY'));
    cy.get('input[name=Apelido]').type("Pagamento")
    cy.url().should('eq', Cypress.env('PAYMENT_URL'));
    cy.get('button[name=Pay]').click()

    cy.contains(Cypress.env('PAYMENT_TEXT'));


  });

  it('Não realizar pagamento dos debitos selecionados', () => {
    cy.visit(Cypress.env('LOGIN_URL'));
    cy.url().should('include', Cypress.env('LOGIN_PATH'));
    cy.wait(7);
    cy.contains('Digite seus dados de Login');

    cy.get('input[name=User]').type(Cypress.env('LOGIN_USER'));
    cy.get('input[name=Password]').type(Cypress.env('LOGIN_PW'));

    cy.wait(5);
    cy.get('button[name=NextLogin]').click();

    cy.wait(10);
    cy.url().should('eq', Cypress.env('DEBITS_URL'));
    cy.get('.sc-gsTCUz').contains('Login realizado com sucesso');

    cy.get('input[name=InputSearch]').type(Cypress.env("LOCATOR"))
    cy.get('button[name=ButtonLocator]').click()

    cy.get('input[name=checkCard]').first().click()

    cy.get('button[name=ToPayment]').click()
    cy.wait(10);
    cy.url().should('eq', Cypress.env('PAYMENT_URL'));

    cy.get( '#demo-simple-select').click()
    cy.get('.MuiList-root > [tabindex="0"]')
    .contains('CPF')
    .click();
    cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(Cypress.env('USER_KEY_ERROR'));
    cy.get('input[name=Apelido]').type("Pagamento")
    cy.url().should('eq', Cypress.env('PAYMENT_URL'));
    cy.get('button[name=Pay]').click()

    cy.contains("Ops")
  });
});
