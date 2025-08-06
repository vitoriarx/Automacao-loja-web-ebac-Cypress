# Automação de Testes E2E – Loja EBAC com Cypress

Este projeto simula testes completos de uma aplicação e-commerce fictícia da EBAC. Através do Cypress, automatizei fluxos essenciais como login, cadastro de usuário, edição de endereço e compra de produto, aplicando boas práticas como uso de page objects, fixtures, comandos customizados e dados dinâmicos com faker.js.

## Objetivo do Projeto

- Criar testes automatizados robustos para fluxos críticos de uma loja virtual
- Simular ações reais de usuários (pré-cadastro, login, compra, alteração de endereço)
- Aplicar padrões profissionais de automação de testes com Cypress
- Demonstrar domínio técnico com código limpo, reutilizável e organizado

## Tecnologias Utilizadas

- Cypress
- Faker.js
- JavaScript ES6+
- Mocha + Chai (nativo no Cypress)
- Page Object Pattern
- Cypress Fixtures & Custom Commands

## Estrutura do Projeto

cypress/
├── e2e/
│ ├── login.cy.js # Testes de login
│ ├── preCadastro.cy.js # Pré-cadastro com dados aleatórios
│ ├── endereco.cy.js # Edição de endereço
│ └── produto.cy.js # Adição de produto ao carrinho
├── fixtures/ # Dados simulados
├── support/
│ ├── commands.js # Comandos customizados
│ └── page-objects/ # Page Objects para melhor organização

## Funcionalidades Testadas

### Login
- Login com dados fixos, arquivo JSON e fixtures
- Cenários de erro com credenciais inválidas

### Pré-Cadastro
- Criação de usuário com faker.js
- Uso de comandos customizados para reaproveitamento

### Endereço
- Edição de endereço de cobrança com dados estáticos e dinâmicos

### Produtos
- Seleção de itens e simulação de adição ao carrinho

## Como Executar Localmente

git clone https://github.com/seu-usuario/Automacao-loja-web-ebac-Cypress.git
cd Automacao-loja-web-ebac-Cypress
npm install
npx cypress open
Ou, para executar em modo headless:

bash
Copiar
Editar
npx cypress run
Aprendizados e Práticas Aplicadas
Estrutura modular usando Page Object Pattern

Requisições com dados dinâmicos usando faker.js

Comandos reutilizáveis com Cypress.Commands

Manutenção da clareza e legibilidade dos testes

Separação de responsabilidades para maior escalabilidade
