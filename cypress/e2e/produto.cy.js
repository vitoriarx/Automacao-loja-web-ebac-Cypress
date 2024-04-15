/// <reference types="cypress" />

describe('Funcionalidade página de produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]').first().click()
        //.first() pega o primeiro item
        //.last() pega o último item
        //.eq(3) pega o item na posição que ele estiver
        //.contains('kekk') pega o conteúdo daquele elemento
    });

    it('Deve adicionar um item ao carrinho', () => {
        cy.get('[class="product-block grid"]').first().click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(2) //o clear serve para limpar o campo e só após fazer a adição do valor/texto
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 2)
    });

    it.only('Deve adiconar produtos ao carrinho - Usando comandos customizados', () => {
        cy.addProduto('Ariel Roll Sleeve Sweatshirt', 3)
    })

});