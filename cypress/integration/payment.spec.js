/// <reference types = "cypress"/>

describe('PaymentPage', () => {
  it('realizar pagamento dos debitos selecionados', () => {
    cy.visit(Cypress.env('LOGIN_URL'));
    cy.url().should('include', Cypress.env('LOGIN_PATH'));
    cy.wait(7);
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

    cy.get('.sc-dQppl')
      .click()
      .type(Cypress.env('LOCATOR'));
    cy.get('.sc-crrsfI').click();
    cy.get(
      ':nth-child(1) > .sc-kLgntA > [style="flex: 1 1 0%;"] > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-8'
    ).click();
    cy.get('.MuiButton-root').click();

    cy.wait(10);
    cy.url().should('eq', Cypress.env('PAYMENT_URL'));
    cy.get('.sc-fHuLdG > :nth-child(2)').contains('PIX');

    cy.get('.sc-xyEjG > :nth-child(1)').contains('Tipo de chave');
    cy.get('#demo-simple-select').click();
    cy.get('.MuiList-root > [tabindex="0"]')
      .contains('CPF')
      .click();
    cy.get('#demo-simple-select').contains('CPF');
    cy.get('.sc-xyEjG > :nth-child(3)').contains('Chave');
    cy.get('.sc-hTZhsR').type(Cypress.env('USER_KEY'));
    cy.get('.sc-fHuLdG > :nth-child(2)').contains('Valor original:');
    cy.get(':nth-child(3) > .sc-eHfQar').contains('Cashback');
    //cy.get('.sc-hzMMCg').click();
    //cy.get('.sc-hzMMCg').type('10');
    cy.get('.sc-fHuLdG > :nth-child(4) > :nth-child(1)').contains(
      'Valor final:'
    );
    cy.get('.MuiButtonBase-root').click();
    cy.get('.sc-cOajty').contains(Cypress.env('PAYMENT_TEXT'));

    cy.get('[href="/"] > .sc-pFZIQ').contains('Sair');
    cy.url().should('include', Cypress.env('BASE_URL'));
  });

  it('Não realizar pagamento dos debitos selecionados', () => {
    cy.visit(Cypress.env('LOGIN_URL'));
    cy.url().should('include', Cypress.env('LOGIN_PATH'));
    cy.wait(7);
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

    cy.get('.sc-dQppl')
      .click()
      .type(Cypress.env('LOCATOR'));
    cy.get('.sc-crrsfI').click();
    cy.get(
      ':nth-child(1) > .sc-kLgntA > [style="flex: 1 1 0%;"] > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-8'
    ).click();
    cy.get('.MuiButton-root').click();

    cy.wait(10);
    cy.url().should('eq', Cypress.env('PAYMENT_URL'));
    cy.get('.sc-fHuLdG > :nth-child(2)').contains('PIX');

    cy.get('.sc-xyEjG > :nth-child(1)').contains('Tipo de chave');
    cy.get('#demo-simple-select').click();
    cy.get('.MuiList-root > [tabindex="0"]')
      .contains('CPF')
      .click();
    cy.get('#demo-simple-select').contains('CPF');
    cy.get('.sc-xyEjG > :nth-child(3)').contains('Chave');
    cy.get('.sc-hTZhsR').type(Cypress.env('USER_KEY_ERROR'));

    cy.get('.sc-fHuLdG > :nth-child(2)').contains('Valor original:');
    cy.get(':nth-child(3) > .sc-eHfQar').contains('Cashback');
    //cy.get('.sc-hzMMCg').click();
    //cy.get('.sc-hzMMCg').type('10');
    cy.get('.sc-fHuLdG > :nth-child(4) > :nth-child(1)').contains(
      'Valor final:'
    );
    cy.get('.MuiButtonBase-root').click();

    cy.get('[href="/"] > .sc-pFZIQ').contains('Sair');
    cy.url().should('include', Cypress.env('BASE_URL'));
  });
});
