---
id: "WI-389481"
title: "Visão do Supervisor no Service Cloud - Omni-Channel"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Andre Luiz de Paula Bezerra"
created: "2024-06-25T13:54:57.593Z"
changed: "2024-11-05T20:18:02.79Z"
---
# WI-389481 - Visão do Supervisor no Service Cloud - Omni-Channel

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/389481](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/389481)

## 1. Identificação

- **ID/Ref:** WI-389481
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

**Cenário 01 - Tela de Monitoramento do Supervisor**

**  
**

**Dado que** preciso visualizar e gerenciar quais os agentes que estão disponíveis, 

**Quando** acessar a tela do supervisor do Omni Channel 

**Então** devem aparecer: 

  * Quantidade de casos atribuídos por agente. 
  * Status (logado, ausente ou offline). 
  * Tempo de login. 
  * Quantidade de casos atribuídos. 
  * Capacidade (o quanto está disponível para que sejam atribuídos novos chamados).    



**  
**

**Cenário 02 - Regras de Roteamento**

**  
**

**Dado que** as reclamações devem ter atribuídas para um atendente o mais rápido possível, 

**Quando** um registro de caso for atribuído a uma fila e um agente estiver logado; ou com capacidade de atribuição de novos itens de trabalho,   

**Então** o caso deverá ser atribuído para esse usuário automaticamente, de acordo com os critérios de atribuição especificados pelas áreas de negócio.

  


**Cenário 03 - Redistribuição de casos**

  


**Dado que** precisamos reduzir o tempo de resolução das reclamações,

**Quando** um caso estiver sem atuação de um responsável por determinado período,** **

**Então** deve estar habilitada a possibilidade do supervisor/coordenador reatribuir esse registro manualmente.

**  
**

**Cenário 04 -**  **Personalização de quantidade de casos por atendente.**

**Dado que** precisamos dar vazão às demandas no menor tempo possível e paralelizar o processo de atendimento, 

**Quando** entrarem novas reclamações,**   **

**Então** a quantidade de casos que poderão ser atribuídos para cada agente ao mesmo tempo deve ser configurada de acordo com a volumetria especificada pelas áreas de negócio.** **

**  
**


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu, como** supervisor e coordenador, 

**Quero** monitorar os casos que estão em atendimento, bem como a volumetria de itens de trabalho por agente/atendente   ** **

**Para**  garantir um atendimento mais ágil e mapear pontos de melhoria nesse processo. 

  


**RN01 -  Visualização de agentes logados**

**  
**

A visão de quais atendentes estão logados ou ausentes deve estar configurada na tela de monitoramento do supervisor, junto com a volumetria de trabalho atribuída a cada um. 

  


****RN02 -**  **Regras de Roteamento**  
**

****  
****

Uma vez que um caso já foi direcionado para uma fila, esse registro deve ser automaticamente distribuido para um agente, de acordo com a disponibilidade dos atendentes logados e critérios de atribuição especificados pelas áreas de negócio.  

 

**RN03 - Redistribuição de casos**

**  
**

Quando uma reclamação/caso ficar sem a atuação de um agente responsável por determinado período, deve estar habilitada a opção de o supervisor/coordenador reatribuir o registro para outro agente.  ** **

  


**RN04 - Personalização da volumetria de trabalho por agente**

**  
**

A quantidade de casos que será atribuída para o mesmo agente deve ser configurável no Service Cloud e estar de acordo com as regras de negócio.
