---
id: "WI-467175"
title: "[SANITY | VOZ] - Campo Assunto não sendo preenchido no transbordo da chamada"
type: "Bug Fix"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 04-2025-Relacionamento"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2025-03-12T19:10:57.523Z"
changed: "2025-03-20T20:27:53.003Z"
---
# WI-467175 - [SANITY | VOZ] - Campo Assunto não sendo preenchido no transbordo da chamada

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/467175](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/467175)

## 1. Identificação

- **ID/Ref:** WI-467175
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

O Campo Assunto, que exibe a informação do assunto vindo da URA, não está sendo preenchido corretamente: 

  


Segue um exemplo com o caso: **08017918**  
  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/fd4ec2e1-85b9-4a2c-9cfb-4be454cd536f?fileName=image.png)  


  


Ao analisar a informação no ATL_UpdateCaseFromURA_API é verificação que a informação está vindo da URA:  
  
![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/f5a7a3f6-f8cf-40a5-83a9-d779e54edffa?fileName=image.png)
