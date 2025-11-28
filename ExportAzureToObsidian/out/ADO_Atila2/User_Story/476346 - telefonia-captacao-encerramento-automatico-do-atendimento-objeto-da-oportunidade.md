---
id: "WI-476346"
title: "[Telefonia/Captação] - Encerramento automático do atendimento (Objeto) da oportunidade"
type: "User Story"
state: "Active"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Willames Izaias Santos da Silva"
created: "2025-04-07T10:18:49.93Z"
changed: "2025-09-02T12:38:34.52Z"
---
# WI-476346 - [Telefonia/Captação] - Encerramento automático do atendimento (Objeto) da oportunidade

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/476346](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/476346)

## 1. Identificação

- **ID/Ref:** WI-476346
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

****

****Critério de aceite 01** **

Dado que o atendimento da oportunidade foi finalizado pelo ATL-Atendimento

**Quando**** ** eu preencher a tabulação

**Então**  o caso será finalizado automaticamente.

**  
**


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como** atendente ATL - Atendimento, 

**Quero** que o atendimento da Oportunidade seja encerrado automaticamente após o encerramento do Caso captação voz.

**Para** que o fluxo de atendimento do Objeto Oportunidade seja finalizado.  
  
Obs.: Tipos de Caso ATL Captação, apenas.  
  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/b714c571-2469-48a0-96af-5a8632f50957?fileName=image.png)  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/6c3be2c3-8321-4070-a988-73bf5f3ea616?fileName=image.png)

**RN01  ****-  **A Oportunidade deverá ter o atendimento encerrado quando a tabulação for preenchida. (tabulação é um campo do caso)

  


**RN02****-** O encerramento do atendimento só acontece após o preenchimento obrigatório da tabulação.
