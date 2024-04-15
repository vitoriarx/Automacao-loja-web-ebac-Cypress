/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/enderecoPage'
const dadosEndereco = require('../fixtures/endereco.json')

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

    it.only('Deve fazer cadastro de faturamento com sucesso - Usando arquivos de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep, 
            dadosEndereco[1].telefone,
            dadosEndereco[1].email

        
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});