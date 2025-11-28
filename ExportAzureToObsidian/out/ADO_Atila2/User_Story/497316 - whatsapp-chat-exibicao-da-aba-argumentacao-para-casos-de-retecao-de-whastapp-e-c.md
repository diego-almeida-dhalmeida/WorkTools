---
id: "WI-497316"
title: "[Whatsapp / Chat] - Exibição da aba Argumentação para casos de reteção de Whastapp e Chat"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 05-2025-Relacionamento"
assignedTo: ""
created: "2025-06-06T17:21:17.24Z"
changed: "2025-08-08T14:59:19.553Z"
---
# WI-497316 - [Whatsapp / Chat] - Exibição da aba Argumentação para casos de reteção de Whastapp e Chat

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/497316](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/497316)

## 1. Identificação

- **ID/Ref:** WI-497316
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

****

**Dado que** sou um atendente do Call Center de retenção com o perfil "Atendente - Aluno"  
**E** estou acessando um caso do tipo **Retenção Digital**  
**Quando** o atendimento tiver sido originado via **WhatsApp** ou **Chat**  


**Então** a aba **Argumentação** deverá ser exibida na interface do Salesforce  
  
**Dado que** sou um atendente do Call Center com o perfil "Atendente - Aluno"  
**E** estou acessando um caso que **não** seja do tipo **Retenção Digital**  
**Quando** o canal de origem do atendimento **não for WhatsApp nem Chat**  
**Então** a aba **Argumentação** **não deverá** ser exibida


## 9. Descrição (Abaixo vem do Azure DevOps)

****

**Eu como**  atendente do Call Center de retenção com perfil "Atendente - Aluno"  
**Quero**  que a aba **Argumentação**  seja exibida nos casos de retenção recebidos via WhatsApp ou Chat  
**Para que**  eu possa consultar os argumentos utilizados durante o atendimento

  


**RN1:** A Aba de Argumentação deve aparecer quando o caso for um do tipo Retenção Digital (Whatsapp/Chat) 

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/574ac60e-9320-44f0-a3d7-499a41e12070?fileName=image.png)
