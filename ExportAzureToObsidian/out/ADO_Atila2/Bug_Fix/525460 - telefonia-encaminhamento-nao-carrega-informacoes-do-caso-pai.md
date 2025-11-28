---
id: "WI-525460"
title: "[Telefonia] Encaminhamento não carrega informações do caso pai"
type: "Bug Fix"
state: "Active"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Diego Henrique Nascimento de Almeida"
created: "2025-08-19T14:36:50.217Z"
changed: "2025-09-12T13:53:17.82Z"
---
# WI-525460 - [Telefonia] Encaminhamento não carrega informações do caso pai

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/525460](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/525460)

## 1. Identificação

- **ID/Ref:** WI-525460
- **Tipo:** Bug Fix
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

- 


## 9. Descrição (Abaixo vem do Azure DevOps)

Ao encaminhar um atendimento para o backoffice as informações do aluno, fila e proprietário não estão sendo levadas para o caso filho. 

  


**Caso pai  08154153**

  


  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/13999d79-af4e-480d-9c15-85e71b8f96ec?fileName=image.png)  


  


  


**Caso Filho  08154154**

  


Caso filho sem informações de marca, matricula, origem do caso e o proprietário como atendente SAC ELO, a fila ficou como original do caso pai e não a de BKO SAC.

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/3e5eedb0-6dc0-4a39-b47d-7bf4aa50ba5c?fileName=image.png)
