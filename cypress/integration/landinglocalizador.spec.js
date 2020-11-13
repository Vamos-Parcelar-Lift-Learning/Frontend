/// <reference types = "cypress"/>

describe('LandingPage', () =>{
  it('deve pesquisar o localizador', () =>{
    cy.visit('http://localhost:3000')
    cy.get('[name=InputSearch]').type("7P1PMX");

    cy.server();
    cy.route("GET", "**/locators").as("searchLocalizador")

    cy.get('.sc-crrsfI').click()
    cy.url().should('include', '/debit_consultation')
    cy.url().should('eq', 'http://localhost:3000/debit_consultation')

    // cy.wait('@searchLocalizador').then((xhr) =>{
    //   expect(xhr.status).be.eq(200);
    // })

  });

  it('deve fazer pesquisa', () =>{
    cy.request({
      method:'GET',
      url:'http://localhost:3000/debit_consultation'
    }).then(response =>{
      cy.log(response.body);
    })
  });


});



