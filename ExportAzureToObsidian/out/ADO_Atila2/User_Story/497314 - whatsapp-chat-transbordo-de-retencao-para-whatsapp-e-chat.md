---
id: "WI-497314"
title: "[Whatsapp / Chat] - Transbordo de retenção para Whatsapp e Chat"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 05-2025-Relacionamento"
assignedTo: ""
created: "2025-06-06T17:08:11.423Z"
changed: "2025-08-08T14:59:19.553Z"
---
# WI-497314 - [Whatsapp / Chat] - Transbordo de retenção para Whatsapp e Chat

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/497314](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/497314)

## 1. Identificação

- **ID/Ref:** WI-497314
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

**Dado que** sou um atendente do Call Center de retenção com perfil "Atendente - Aluno"  


**Quando** eu recebo um atendimento de retenção via WhatsApp ou Chat  
**Então** o caso deverá ser criado no Salesforce com o tipo de registro "Atendimento - Retenção Digital"  
  
**Dado que** sou um atendente do Call Center de retenção com perfil "Atendente - Aluno"  
**Quando** é criado um caso com o tema "Retenção" a partir de um transbordo  
**Então** esse caso deverá ser automaticamente direcionado para a fila específica de Retenção para que eu possa atender


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como**  atendente do Call Center de retenção com perfil Atendente - Aluno  


**Quando  **houver um atendimento de retenção (transbordo com o tema de Retenção)  


**Quero  **ter meu atendimento registrado no Salesforce e atendido por uma fila específica de retenção  
  
**RN01:  **Tipo de registro: Retenção - Digital  
Deve existir um tipo de registro diferente (Atendimento - Retenção Digital) para ser possível registrar o atendimento via Whatapp e Chat  
  
**RN02:** O caso criado deverá ser direcionados para uma fila específica de retenção onde o atendente irá realizar o trabalho de atendimento.
