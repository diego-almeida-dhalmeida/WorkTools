---
id: "WI-390378"
title: "Construção da tela no Salesforce para abertura de ticket no ServiceNow e atendimento N3"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Andre Luiz de Paula Bezerra"
created: "2024-06-27T14:21:11.66Z"
changed: "2024-11-05T20:18:02.79Z"
---
# WI-390378 - Construção da tela no Salesforce para abertura de ticket no ServiceNow e atendimento N3

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/390378](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/390378)

## 1. Identificação

- **ID/Ref:** WI-390378
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

**Cenário 01 - Criação de chamado no Service Now a partir do Salesforce.**

**  
**

**Dado que** um caso atribuído ao nível 3 de atendimento deve ser registrado também no ServiceNow, 

**Quando** for necessária a atuação de uma área interna da companhia, 

**Então** devo ter a autonomia para criar um caso filho atríbuido para o N3 no Salesforce, e este registro deve ser espelhado no ServiceNow como um chamado. 

**  
**

**Cenário 02 - Regras de atribuição do chamado.**

**  
**

**Dado que  **um chamado criado no ServiceNow deve ser atribuído para a área responsável,

**Quando****** for criado um novo ticket,

**Então  **esse registro deve ser atribuído automaticamente para a área responsável de acordo com os critérios de atribuição estabelecidos pelas áreas de negócio.

**  
**

**Cenário 03 - Noificação de abertura de chamado**

**Dado que** as áreas internas devem manter a rastreabilidade e gestão dos chamados,** **

**Quando** for aberto um novo ticket no ServiceNow, 

**Então** a área responsável deve ser notificada. 

** **


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu, como** atendente 

**Quero** atribuir um chamado para o nível 3 de atendimento através do ServiceCloud 

**Para** solicitar a atuação das áreas internas da companhia na resolução de chamados abertos via ReclameAqui ou Salesforce.** **

**  
**

**

**RN01 - Campos necessários para abertura de chamados no ServiceNow**

  


Necessário que todos os campos necessários para abertura de um ticket no ServiceNow estejam na tela de criação de novo caso no Salesforce, assim como o acesso de edição para o atendente. 

  


**RN02 - Atribuição do chamado**

  


Quando for criado um chamado no ServiceNow a partir do Salesforce, necessário que esse ticket seja atribuído ao responsável de acordo com os critérios estabelecidos pelas áreas de negócio. 

  


**RN03 - Notificação de abertura de chamado**  

  


Quando um caso for criado e atribuído ao nível 3, em paralelo deverá ser criado um ticket no ServiceNow e a área responsável pela resolução desse chamado deverá ser notificada. 

  
**
