---
id: "WI-448617"
title: "[Telefonia] Teste de performance"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 01-2025-Relacionamento"
assignedTo: "Oscar Ivan Casallas Gracia"
created: "2025-01-13T21:21:41.987Z"
changed: "2025-02-04T21:21:17.22Z"
---
# WI-448617 - [Telefonia] Teste de performance

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/448617](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/448617)

## 1. Identificação

- **ID/Ref:** WI-448617
- **Tipo:** User Story
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

Realizar atividades para habilitar os testes de performance para a solução de telefonia junto ao time de SRE Yduqs.   


Dividiremos este trabalho em pelo menos 2 fases de testes, de acordo com a possibilidade técnica viável considerando as limitações do produto Avaya e sua integração com o Salesforce. 

**  O teste será realizado em UAT3.**

## **Fase 1: Teste de Stress: Endpoints Mulesoft e Salesforce**

**Objetivo:  
** Simular as chamadas que a URA faz às APIs do Mulesoft para criação e atualização de casos e tarefas no Salesforce.  
  
**Premissa:**  
Exportar ao final do teste uma lista com os números de caso Salesforce que foram criados durante a execução do teste de performance.  
  
**Volumetria:  ****  
**No histórico de contact center, os maiores picos foram entrada entrada de ligação foram entre 930 e 970 no relacionamento, e 155 na captação, por tanto foi decidido fazer sobre u volume de 1500/hora, ou  25/min. O teste vai demorar 5 mins.

  

**Endpoints:**

createcasetask  
updatecase

  


**Obs.** A consulta de leads e Oportunidades não será testado por ser um volume menor.  
  
  
Exemplo:  
![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/22b29d74-5e13-4038-8141-b0fc15178d0d?fileName=image.png)  


  


## **Fase 2: Teste de Stress: Componente e Eventos Avaya (****Fora de escopo****)**

**Objetivo:**  
Simular o atendimento real das chamadas no discador Avaya e o processamento de eventos da Avaya para continuação do fluxo de telefonia no Salesforce.  
  
**Resolução:  
** Confirmamos em reunião com a Avaya que a mesma não executa teste de performance com altos volumes de carga nos seus clientes, pois isso demandaria uma mobilização de centenas de atendentes para tal execução. O produto deles não suporta ligações e atendimentos simulados no back-end, ou seja, sem possibilidade de automatização.   
A recomendação da Avaya portanto é apenas revisarmos os WORKLOADS esperados na operação da telefonia Yduqs e compartilharmos novamente com eles (CAIQUE), dessa forma vão garantir a infraestrutura necessária para a performance adequada na Nuvem Avaya AXP.
