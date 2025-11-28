---
id: "WI-525560"
title: "[Telefonia] Ao Realizar o callback e finalizar com PSAT modal não é aberto"
type: "Bug Fix"
state: "Active"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Reabastecimento-02-2025-Relacionamento"
assignedTo: "Diego Henrique Nascimento de Almeida"
created: "2025-08-19T17:40:35.687Z"
changed: "2025-09-15T20:14:43.343Z"
---
# WI-525560 - [Telefonia] Ao Realizar o callback e finalizar com PSAT modal não é aberto

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/525560](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/525560)

## 1. Identificação

- **ID/Ref:** WI-525560
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

Avaliar possibilidade de tabulacao automatica apos callback sem a depencia de uma solucao Avaya em relacao aos eventos.


## 9. Descrição (Abaixo vem do Azure DevOps)

Modal de tabulação não é aberto após envio para PSAT, após clicar em encerrar atendimento no botão Encerrar Caso é apresentado o erro abaixo. 

  
  


Case: 08154214  
  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/3e590e71-e0ab-4386-a751-649e32030a25?fileName=image.png)  


**_  
  
Copied from Repro Steps when changed from Bug Fix to Tech Story_**  


Receber o caso da ura => Transferencia sem supervisao para PSAT
