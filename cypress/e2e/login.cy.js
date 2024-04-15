/// <reference types="cypress" /> 
const perfil = require ('../fixtures/perfil.json')

context('Funcionalidade login com sucesso', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
    })

    //aqui usando arquivo de dados
    it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
    });

    //aqui usando fixture
    it.only('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click();
        })
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('aluno_eabc@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click();

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('1233444')
        cy.get('.woocommerce-form > .button').click();

        cy.get('.woocommerce-error > li').should('contain', 'Perdeu a senha?')
    }) 
    
});


