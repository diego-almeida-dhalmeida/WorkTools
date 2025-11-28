---
id: "WI-475558"
title: "[Relacionamento] - Criação de perfil hibrido para WhatsApp, Chat e Voz"
type: "User Story"
state: "Active"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Marcos Vinicius Almeida da Silva"
created: "2025-04-03T17:25:15.64Z"
changed: "2025-08-05T17:24:19.967Z"
---
# WI-475558 - [Relacionamento] - Criação de perfil hibrido para WhatsApp, Chat e Voz

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/475558](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/475558)

## 1. Identificação

- **ID/Ref:** WI-475558
- **Tipo:** User Story
- **Status:** Active


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

**Critério de aceite  
**

**  
**

**Dado que  **eu entro no sistema na área de atendimento como supervisor em uma tela de gerenciamento de usuários

**Quando**  escolher um conjunto de usuários para atenderem Whatsapp e Chat 

**Então** , devo conseguir atribuir esse perfil a esse canal de atendimento

  


****

**Dado que  **eu entro no sistema na área de atendimento como supervisor em uma tela de gerenciamento de usuários

**Quando**  escolher um conjunto de usuários para atenderem Voz

**Então** , devo conseguir atribuir esse perfil a esse canal de atendimento


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como**  Supervisor (perfil Supervisor) de atendimento   


**Quero** poder dar acesso aos operadores tanto ao Omnichannel (WhatsApp e Chat) como o atendimento de telefonia via Connector da Avaya (chaveamento)  
**Para que** os agentes possam atender clientes por múltiplos canais de comunicação de forma eficiente.  


  


**R1:**  O usuário criado com este perfil deve conseguir acessar o Omnichannel e atender interações via WhatsApp e Chat

  


**R2:  **O usuário deve ter permissão para utilizar a telefonia integrada ao Salesforce por meio do conector Avata, conseguindo receber chamadas.

  


**R3:**  O atendimento deve ser exclusivo de Digital ou Telefonia. 

  


**R4:** A mudança deve ocorrer somente quando o operador não estiver em atendimento. 

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/a9f63de8-edcc-49ae-9fb3-7458e3875f4a?fileName=image.png)
