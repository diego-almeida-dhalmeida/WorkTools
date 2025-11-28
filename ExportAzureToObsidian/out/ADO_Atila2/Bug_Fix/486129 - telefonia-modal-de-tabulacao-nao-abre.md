---
id: "WI-486129"
title: "[Telefonia] - Modal de Tabulação não abre"
type: "Bug Fix"
state: "Resolved"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 07-2025-Relacionamento"
assignedTo: "Marcos Vinicius Almeida da Silva"
created: "2025-05-07T19:07:31.677Z"
changed: "2025-07-31T19:49:06.55Z"
---
# WI-486129 - [Telefonia] - Modal de Tabulação não abre

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/486129](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/486129)

## 1. Identificação

- **ID/Ref:** WI-486129
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

Em teste realizado em UAT, Identificamos comportamento inadequado do SF para eventos do conector que funcionaram conforme esperado: 

  


Realizamos o cenário de testes 6.1a) Atendente SAC KON faz consulta para Supervisor SAC KON que rejeita a consulta. Na sequência, a consulta é realizada novamente, mas dessa vez ocorre a transferência. Até este momento todas as criações de caso filho e seu pop-up, assim como a abertura do modal de tabulação, ocorreram corretamente. 

  


No momento em que o Supervisor realiza a transferência para PSAT, temos novo evento de Transfer, mas o modal não é aberto.  Chequei o ATL_Habilita_ModalTab__c do caso filho e ele está como false, portanto deveria ter sido identificado na query do updateCaseAndChildCaseForTransferEvent. Sugiro debugarmos, reproduzindo o cenário.  
  


  


Segue, abaixo, detalhe dos eventos e do teste realizado.

![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/9f9135b9-8ad6-4ad7-b28a-24e3e2285ee4?fileName=image.png)
