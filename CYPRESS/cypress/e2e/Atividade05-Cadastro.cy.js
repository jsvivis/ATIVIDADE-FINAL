//Testes Práticos Aula 29/07/2024
// #05 - ATIVIDADE Testes de Front-End - Atividade Final

/// <reference types='cypress' />

context('Cadastrar, Editar, Excluir', ()=>{
    //hooks
    //trechos que executam antes e depois do teste
    //before --> antes do todos os testes
    //beforeEach --> antes de cada teste
    //after --> depois de todos os testes
    //afterEach --> depois de cada teste

    beforeEach(()=>{
Cypress.on('uncaught:exception', (err, runnable) =>{
    return false
})
         cy.visit('https://cadastrocars.vercel.app/'); //endereço da aplicação
    })


it('Cadastrar Entradas', ()=>{
// fluxo manual enter
// mapear os elementos que vamos interagir
// descrever as interações com cypress
// adicionar as asserções que vamos precisar
// cy.get --> mapear um elemento

//Entradas:
cy.get('#data-table tbody tr').should('have.length',0)

//Inserir dados:
cy.get('.button').click();

//escolhendo a marca
cy.get('.brandField').select('Honda').should('have.value', 'honda'); // 1ª opção da seleção das Marcas
cy.get('.brandField').select('Volkswagen').should('have.value', 'ww'); // 2ª opção da seleção das Marcas
cy.get('.brandField').select('Mercedes-Benz').should('have.value', 'mb'); // 3ª opção da seleção das Marcas
cy.get('.brandField').select('Toyota').should('have.value', 'toyota'); // 4ª opção da seleção das Marcas

//Marca já Escolhida >> Realizando o cadastro dos demais dados e informações
cy.get('.brandField').select('Honda').should('have.value', 'honda');
cy.get('.modelField').type('CR-V Advanced Hybrid')
cy.get('.yearField').type('2024')
cy.get('.kmField').type('0')
cy.get('.priceField').type('353000')
cy.get('.pageLeft > .button').click();

//Editar:
// OBS: Foi identificado uma falha na aplicação, onde durante o teste da entrada na Edição não foi possivel seguir com a //sequencia do teste de click no botão de escolha do Editar, pois a funcionalidade não funciona, gerando um erro. Alguns dos //erros gerados:
// * "Timed out retrying after 4000ms: Expected to find element: .pointWindow > :nth-child(1), but never found it."
// * "Timed out retrying after 4000ms: Expected to find element: brandField, but never found it."
// * "Timed out retrying after 4000ms: Expected to find element: .pointWindow > :nth-child(1), but never found it."

})
});
