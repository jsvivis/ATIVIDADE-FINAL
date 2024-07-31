context('Cadastrar, Editar, Excluir', ()=>{

    beforeEach(()=>{
Cypress.on('uncaught:exception', (err, runnable) =>{
    return false
})
         cy.visit('https://cadastrocars.vercel.app/car/5'); //endereço da aplicação
    })

it.only('Editar Entradas', ()=>{

//Já dentro da página de Edição: >> escolher dentre as opções da Marca
cy.get('.brandField').select('Honda').should('have.value', 'honda'); // 1ª opção da Edição da Marca
cy.get('.brandField').select('Volkswagen').should('have.value', 'ww'); // 2ª opção da Edição da Marca
cy.get('.brandField').select('Mercedes-Benz').should('have.value', 'mb'); // 3ª opção da Edição da Marca
cy.get('.brandField').select('Toyota').should('have.value', 'toyota'); // 4ª opção da Edição da Marca

//Editar: >> Após a Marca já selecionada, editar demais informações
cy.get('.brandField').select('Honda').should('have.value', 'honda');
cy.get('.modelField').clear().type('Accord Advanced Hybrid')
cy.get('.yearField').type('2024')
cy.get('.kmField').clear().type('0')
cy.get('.priceField').clear().type('353000')
cy.contains('.pageLeft', 'Cadastrar').find('button').click();
        

    })
      });


//Editar:
// OBS: Foi identificado uma falha na aplicação, onde durante o teste da entrada em Editar não foi possivel seguir com a 
//sequencia do teste de click no botão de escolha de Editar, pois a funcionalidade não funciona, gerando um erro. Alguns //dos erros gerados:
// * "Timed out retrying after 4000ms: Expected to find element: .pointWindow > :nth-child(1), but never found it."
// * "Timed out retrying after 4000ms: Expected to find element: brandField, but never found it."
//Teste realizado já dentro da página de Edição.