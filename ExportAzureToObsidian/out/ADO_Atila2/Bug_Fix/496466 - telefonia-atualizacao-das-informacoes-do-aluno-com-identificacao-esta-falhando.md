---
id: "WI-496466"
title: "[Telefonia] - Atualização das informações do aluno com identificação está falhando"
type: "Bug Fix"
state: "Resolved"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Lucas Machado Gullaci"
created: "2025-06-04T19:05:35.1Z"
changed: "2025-08-12T13:46:24.56Z"
---
# WI-496466 - [Telefonia] - Atualização das informações do aluno com identificação está falhando

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/496466](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/496466)

## 1. Identificação

- **ID/Ref:** WI-496466
- **Tipo:** Bug Fix
- **Status:** Resolved


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

Após seleção de um aluno para identificação, tela do Salesforce não está atualizando automaticamente, é necessário atualizar a tela manualmente com F5.  


  
Momento da Identificação do aluno:  
![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/ca4909e3-a5b4-43a8-8389-45bf7907a1b3?fileName=image.png)  
  
Tela depois da Identificação, ainda com os dados do aluno anterior:  
![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/be69e464-b038-473c-93ec-5fb5c28e2999?fileName=image.png)  


  


Tela depois da atualização manual (F5):  
![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/35b136c4-7c09-49e0-bbe9-cae757d0c1d2?fileName=image.png)  


  
Em UAT não está atualizando o Farol:  
  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/aa7f63af-228b-4155-b5fe-bf0cbd11f4a7?fileName=image.png)
