context('Cadastrar, Editar, Excluir', ()=>{

    beforeEach(()=>{
Cypress.on('uncaught:exception', (err, runnable) =>{
    return false
})
         cy.visit('https://cadastrocars.vercel.app/'); //endereço da aplicação
    })

it.only('Excluir Entradas', ()=>{
    
    //Clique nos três pontos
    cy.get('.pointButton').eq(1).click({force:true}); // Clica no primeiro botão com a classe .pointButton
    //Clique no botão Excluir
    cy.get('.pointWindow').contains('Excluir').click(); // Clica no primeiro botão com a classe .pointWindow
    // Verifique se o carro com o texto 'Polo' não existe
    cy.contains('Polo').should('not.exist');
    //Segunda Exclusão
    cy.get('.pointButton').eq(1).click({force:true});
    cy.get('.pointWindow').contains('Excluir').click();
    cy.contains('C300 Exclusivo').should('not.exist');

})
  });

//Editar:
// OBS: Foi identificado uma falha na aplicação, onde durante o teste da entrada de Excluir não foi possivel seguir com a 
//sequencia do teste de click no botão de escolha de Excluir, pois a funcionalidade não funciona, gerando um erro. Alguns 
//dos erros gerados:
// * "Timed out retrying after 4000ms: Expected to find element: .pointWindow > :nth-child(1), but never found it."
// * "Timed out retrying after 4000ms: Expected to find element: brandField, but never found it."
// * "Timed out retrying after 4000ms: Expected to find element: .pointWindow > :nth-child(2), but never found it."
//Teste realizado separadamente.