/// <reference types = "cypress"/>

describe('LandingPage', () =>{

  it('deve pesquisar uma rota nao existe e retornar falha', () =>{
    cy.visit('http://localhost:3000')
    cy.get('[name=InputSearch]').type("7P1TMX");

    cy.server();
    cy.route("GET", "**/locators").as("searchLocalizador")

    cy.get('.sc-crrsfI').click()
    cy.url().should('include', '/debit_consultation')
    cy.url().should('eq', 'http://localhost:3000/debit_consultation')


  });


  it('deve pesquisar o localizador e retornar com sucesso a pagina de consulta de debitos', () =>{
    cy.visit('http://localhost:3000')
    cy.get('[name=InputSearch]').type("7P1PMX");

    cy.server();
    cy.route("GET", "**/locators").as("searchLocalizador")

    cy.get('.sc-crrsfI').click()
    cy.url().should('include', '/debit_consultation')
    cy.url().should('eq', 'http://localhost:3000/debit_consultation')

  });

  it('deve retornar a rota get', () =>{
    cy.request({
      method:'GET',
      url:'http://localhost:3000/debit_consultation'
    }).then(response =>{
      cy.log(response.body);
    })
  });

});



