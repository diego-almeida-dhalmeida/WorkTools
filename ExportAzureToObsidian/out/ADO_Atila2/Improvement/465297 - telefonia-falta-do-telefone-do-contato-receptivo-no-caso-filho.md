---
id: "WI-465297"
title: "[Telefonia] - Falta do telefone do contato receptivo no caso filho"
type: "Improvement"
state: "Resolved"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 05-2025-Relacionamento"
assignedTo: "Marcos Vinicius Almeida da Silva"
created: "2025-03-06T19:49:42.24Z"
changed: "2025-07-31T19:49:06.55Z"
---
# WI-465297 - [Telefonia] - Falta do telefone do contato receptivo no caso filho

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/465297](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/465297)

## 1. Identificação

- **ID/Ref:** WI-465297
- **Tipo:** Improvement
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

**Critério de aceite:**

  


Se logar como Atendente voz - Aluno 

Iniciar um caso de SAC (ligação para 0800 888 6970) 

Realizar a transferência para supervisor, ou Atendente Voz - Aluno (retenção) 

  


O caso filho derivado para o Supervisor ou Atendente Voz - Aluno (retenção) deverá conter o telefone receptivo


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como** Atendente Voz - Aluno 

**Quero** que o telefone receptivo seja exibo na tela do caso filho após a realização de uma transferência para o supervisor, ou Atendente Voz - Aluno (retenção) 

**Com o objetivo de** garantir as informações de contato com o aluno (call reconnect) caso seja necessário. 

  


  


**Observações da melhoria:**  
  


Foi verificado que no momento da transferência de uma caso, tanto para o supervisor, como para a outra EPS (operador de retenção), a informação do telefone receptivo não está sendo exibida. É necessário exibir a informação para que o operador que recebe a transferência possa religar para o aluno caso seja necessário. 

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/def21527-f50b-4ca7-a38c-bc6bcdf90438?fileName=image.png)
