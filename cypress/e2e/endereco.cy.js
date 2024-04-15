/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/enderecoPage'

describe('Funcionalidade endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').clear().type('aluno_ebac@teste.com')
        cy.get('#password').clear().type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Bruno', 'Silva', 'Google', 'Brasil', 'Rua Teodorico', '67', 'Itapuera', 'São Paulo', '54333-000', '87737373', 'bruno22@gmail.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});