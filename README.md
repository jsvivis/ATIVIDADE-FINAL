# **Plano de Teste - Atividade Final**

># **Filtragem de Testes de Cadastros, Edição e Exclusão de Dados**

 ## >>**CadastroCar’s **<< 
A CadastroCar’s é uma aplicação para gerenciamento de veículos, que pode ser utilizada desde grandes concessionárias, até mesmo pequenos revendedores locais.
Uma aplicação simples e de fácil utilização, que vem trazendo grandes otimizações e organizações dentro do setor automobilístico, tendo em vista suas possibilidades de expansão.

 ## >>**Objetivos**<< 
* Testar as entradas de novos cadastros e dados, além dos campos de preenchimento.
* Listar os resultados cadastrados e ou mensagens de possíveis erros.
* Testar a edição das informações cadastradas.
* Testar a tentativa de exclusão dos cadastros e ou possíveis erros.

 ## >>**Escopo**<<
A CadastroCar’s passará pelo teste funcional.
Do qual serão verificados as funcionalidades e retorno do sistema.
Certificando-se que as entradas de dados, retornos e adições estejam em pleno funcionamento assim como a possibilidade de exclusão dos cadastros dos veículos.

 ## >>**Ferramentas Utilizadas**<<
 * Selenium;
 * Cypress;
 * Google;
 * VSCode;
   
 ## >>**Requisitos à Testar / Testes**<<
1. Verifica que a entrada de dados esteja em funcionamento.
2. Verifica que o cadastro das informações esteja em comprimento de suas funções dentro dos campos necessários, trazendo os resultados dos novos cadastros.
3. Verifica que a escolha e edição de dados estejam sendo executados e concluídos, trazendo os resultados das novas edições.
4. Verifica que a escolha e exclusão de dados cumpra suas etapas e funcionalidades, e posteriormente atualize as exclusões.

 ## >>**Resumo do Resultado**<<
**Testes no WebDriver e Selenium IDE:** 
Todos os testes realizados sem nenhuma complicação e resultados obtidos com excelência conforme esperado de suas funcionalidades.
Obs:. Mesmo não tendo gerado nenhum erro dentro dos testes da aplicação, foi observado que durante o cadastro ou edição de dados, 
poderia ser registrado valores e anos negativos, sem nenhuma mensagem de erro ou mudança e correção. Como descrito anteriormente, 
reafirmo que não gerou erros, mas ressalvo essa observação para futuras correções dentro da aplicação.

**Testes no Cypress:** 
Realizado os testes de Cadastros, Edição e Exclusão de dados e os mesmos obtiveram um excelente resultado dentro de suas funcionalidades e perspectivas.

**Considerações sobre os testes de edição e exclusão de dados no Cypress:** 
Ao realizar os testes na aplicação para direcionamento de página para as funcionalidades de edição e exclusão de dados, 
foi identificado uma ressalva quanto a funcionalidade do botão de opções da aplicação. Pois durante o teste foi visto que não 
seria possível realizar o clique do ícone do botão de escolha das opções de Editar e Excluir, gerando assim alguns erros durante a execução do teste. 
Exemplos de alguns dos erros apresentados:
* "Timed out retrying after 4000ms: Expected to find element: .pointWindow > :nth-child(1), but never found it."
* "Timed out retrying after 4000ms: Expected to find element: brandField, but never found it."
* "Timed out retrying after 4000ms: Expected to find element: .pointWindow > :nth-child(2), but never found it."

 ## >>**Conclusão**<<
Todos os testes de entrada de cadastro de dados, edição e tentativa de exclusão dentro da aplicação  CadastroCar’s, foram realizados e finalizados com sucesso e 
êxito em cada uma de suas realizações e tarefas propostas. 
Salvo considerações em resultados de algumas decorrências encontradas no retorno da aplicação.
