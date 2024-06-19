/// <reference types="Cypress"/>



describe('Testes Fucional de Cadastro', () => {
    it('Deve realizar o Cadastro com Sucesso', () => {
        cy.visit("https://www.franciscajoias.com.br/")
        cy.get('.mr-4 > .nav-user > .nav-link > .nav-icon > .material-icons').click()
        cy.get('.ui-link-content').click()
        cy.get('#__VID__53').type("teste")
        cy.get('#__VID__55').type("test")
        cy.get('#__VID__58').type("teste2013@gmail.com")
        cy.get('#__VID__61').type("11021989")
        cy.get('#__VID__63').select("Masculino")
        cy.get('#__VID__66').type("31791703011")
        cy.get('#__VID__68').type(81984238877)
        cy.get('#__VID__72').type(19992705)
        cy.get('#__VID__78').type(19992705)
        cy.get('.-lg').click()

        cy.get('[href="/"] > .ui-link-content > span').click()
        cy.get('.h-100 > .nav-menu > .menu-icon > .material-icons').click()
        cy.get('.row.pt-3 > :nth-child(1) > .side-link > span').click()
        cy.get('.col > .flex-grow-1 > .container-fluid > :nth-child(2) > :nth-    child(4) > .product-card > .h-100 > .product-image > #MF_card_product > #MF_card_product_item').click()
        cy.get('.col > .flex-grow-1 > .container-fluid > :nth-child(2) > :nth-child(16) > .product-card > .h-100 > .product-image > #MF_card_product > #MF_card_product_item').click()
        cy.get('.col > .flex-grow-1 > .container-fluid > :nth-child(2) > :nth-child(8) > .product-card > .h-100 > .product-image > .img-fluid').click()
        cy.get('#button-buy-6489292-19205016-40567043 > span').click()
        cy.get('.modal__content > .cart-redirect-modal > .container > :nth-child(2) > .col-12 > .text-center > .mt-3 > .btn > span').select("IR PARA O CARRINHO")
        cy.get('[aria-label="Increment"]').click()
        cy.get('#sb').click()
        cy.get('.col-link > .ui-button > .ui-button-content > div').click()
      




    
          

    });
});







