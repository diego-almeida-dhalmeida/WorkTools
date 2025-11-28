---
id: "WI-417960"
title: "[Winter 25 - UAT] Carga de Asset/Account por demanda (Chat/WhatsApp)"
type: "Bug Fix"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 03-2024-CoERelac-1ªOndaTelefonia"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2024-09-19T18:40:06.047Z"
changed: "2025-05-12T19:56:30.23Z"
---
# WI-417960 - [Winter 25 - UAT] Carga de Asset/Account por demanda (Chat/WhatsApp)

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/417960](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/417960)

## 1. Identificação

- **ID/Ref:** WI-417960
- **Tipo:** Bug Fix
- **Status:** Closed


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

Teste de carga por demanda-202211371008 (contato pelo WhatsApp) => ERRO, não realiza a carga dos dados do aluno do SIA para o Salesforce quando um aluno com matrícula inativa entra pelo WhatsApp e solicita atendimento (a primeira API funciona ok, trazendo o nome, curso, tipo curso e a indicação de matrícula inativa. Porém, quando seleciona a matrícula para atendimento com a opção-1, o processo da carga SIA-Salesforce não ocorre, retornando OPS no diálogo)  


  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/b0df2356-aaf3-48f7-b44c-f933714d0e91?fileName=image.png)  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/7aa4e1bb-3995-42e3-b665-61e7bc4bb722?fileName=image.png)  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/45cfac7c-6b45-44da-a4b4-67369606c570?fileName=image.png)  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/99383053-a36d-4d04-8179-8eabae1bfa45?fileName=image.png)  


  


Precisaremos do apoio das equipes técnicas para análise do problema:  


SIA - @Carlos Henrique Abrantes   


Mule - @Wellington Assis de Paula   


SF - @Renan Robson Lima Carneiro
