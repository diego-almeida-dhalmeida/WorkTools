---
id: "WI-390305"
title: "Integração Salesforce x Service Now"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Andre Luiz de Paula Bezerra"
created: "2024-06-27T12:20:29.73Z"
changed: "2024-11-05T20:18:02.79Z"
---
# WI-390305 - Integração Salesforce x Service Now

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/390305](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/390305)

## 1. Identificação

- **ID/Ref:** WI-390305
- **Tipo:** User Story
- **Status:** New


## 2. Contexto
- **Objetivo do Caso de Uso:** 
- **Descrição Resumida:** 


## 3. Fluxo Principal
1. 
2. 
3. 


## 4. Fluxos Alternativos
- 


## 5. Fluxos de Exceção
- 


## 6. Regras de Negócio
- 


## 7. Requisitos Não Funcionais
- 


## 8. Métricas e Critérios de Aceite

Cenário 01**:  ****Visão das informações referentes ao caso na tela do chamado do SN.  **  

  


Dado que precisamos visualizar no Service Now os detalhes do Caso gerado no Salesforce, com todos os parâmetros relevantes para as áreas de negócio, 

**Quando  **for** ** aberto um novo chamado no Service Now via integração com o ServiceCloud. 

**Então  **esses dados deverão ser exibidos na tela de registro do chamado.   


  


Cenário 02**: Visualização do responsável por cada caso.  **

  


**Dado que  **precisamos visualizar no Service Now quem são os responsáveis por cada chamado,

**Quando  **um novo registro for criado no Service Now,

**Então**  este dado deverá estar disponível para visualização e geração de indicadores.

  


Cenário 03**: Visualização da idade dos casos.  **

  


**Dado que  **precisamos visualizar no Service Now o período que um chamado está em aberto,

**Quando  **um novo chamado for criado no Service Now,

**Então**  este dado deverá estar disponível para visualização e geração de indicadores


## 9. Descrição (Abaixo vem do Azure DevOps)

Eu, como **atendente, supervisor e coordenador**

Quero que sejam criados chamados no Service Now a partir do Service Cloud 

**Para** ter a possibilidade de atribuíbuir esses registros para o nível 3 de atendimento e garantir a atuação das áreas internas, bem como a visão geral do atendimento das reclamações.

  


RN01 - Informações do caso na tela de detalhes do chamado.   


  


Todas as informações relacionadas às solicitações que foram feitas pelo(a) aluno(a) no ReclameAqui, e que são relevantes para as áreas de negócio, devem aparecer na tela do chamado que foi aberto no ServiceNow a partir caso gerado no Salesforce. 

  


RN02 - Visão dos casos criados por responsável/proprietário.   


  


Os chamados gerados a partir dos casos abertos no Service Cloud devem estar atribuídos a um usuário ou fila, para que os agentes possam atuar no chamado. 

    


RN03 - Visão da "idade do caso".   


  


Os chamados originados a partir de casos devem estar preenchidos com a data da criação e período que a solicitação está em aberto.
