/// <reference types = "cypress"/>


describe('LandingPage', () => {
  it('deve pesquisar o localizador', () => {
    cy.visit(Cypress.env('BASE_URL'));
    cy.get('[name=InputSearch]').type(Cypress.env('LOCATOR'));

    cy.server();
    cy.route('GET', '**/locators').as('searchLocalizador');

    cy.get('.sc-fFubgz').click();
    cy.url().should('include', Cypress.env('DEBITS_PATH'));
    cy.url().should('eq', Cypress.env('DEBITS_URL'));

    // cy.wait('@searchLocalizador').then((xhr) =>{
    //   expect(xhr.status).be.eq(200);
    // })
  });

  it('deve fazer pesquisa', () => {
    cy.request({
      method: 'GET',
      url: Cypress.env('DEBITS_URL')
    }).then(response => {
      cy.log(response.body);
    });
  });
});
