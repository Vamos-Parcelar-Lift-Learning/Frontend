/// <reference types = "cypress"/>

describe('Debit', () =>{
  it('deve visualizar o qrcode', () =>{
    cy.visit(`${process.env.REACT_APP_API_URL}/login`)
    cy.get('input[name=User]').type("telmo61@yahoo.com")
    cy.get('input[name=Password]').type("725650")
    cy.get('button[name=NextLogin').click()

    cy.url().should('include', '/debit_consultation')
    cy.url().should('eq', 'http://localhost:3000/debit_consultation')

    cy.get('input[name=InputSearch]').type("7P1PMX")
    cy.get('button[name=ButtonLocator').click()

    cy.get('input[name=checkCard').first().click()

    cy.get('button[name=ToPayment').click()

    cy.url().should('eq', 'http://localhost:3000/payment')
    cy.get('button[name=Pay').click()

    cy.contains("Utilize seu aparelho celular para fazer a leitura do Qrcode acima, efetue o pagamento e aguarde.")
    });
});
