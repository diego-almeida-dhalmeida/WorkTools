---
id: "WI-488538"
title: "[Telefonia] Atualização das Skills/Filas/Tabulação para Elo / Konecta"
type: "User Story"
state: "Resolved"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 07-2025-Relacionamento"
assignedTo: "Marcos Vinicius Almeida da Silva"
created: "2025-05-14T18:46:13.09Z"
changed: "2025-07-31T19:49:07.003Z"
---
# WI-488538 - [Telefonia] Atualização das Skills/Filas/Tabulação para Elo / Konecta

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/488538](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/488538)

## 1. Identificação

- **ID/Ref:** WI-488538
- **Tipo:** User Story
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

**Dado que** estou logado no cockpit de atendimento como operador do call center, com o perfil "Atendente Voz - Aluno" ou "Atendente-Aluno"  


**Quando** receber uma ligação  
**Então** as Skills Names devem ser criadas no Salesforce para garantir que os casos sejam tabulados corretamente.  


  


**Dado que**  estou logado no cockpit de atendimento como operador do call center, com o perfil "Atendente Voz - Aluno" ou "Atendente-Aluno"  


**Quando**  receber uma transferência  
**Então**  as Skills Names devem ser criadas no Salesforce para garantir que os casos sejam tabulados corretamente.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como**  operador do call center (Perfil Atendente Voz - Aluno, ou Atendente-Aluno) 

**Quero  **que, dentro do cockpit de atendimento, que as Skills Names, filas e tabulação estejam atualizadas no Salesforce  


**Para que**  no momento de recebimento de uma ligação, ou transferência, os casos sejam abertos corretamente e possam ser encerrados corretamente.  
  
**RN1:**** ** Criar/Renomear Skill no objeto ATL_SkillnameByChannel__mdt:

  


Segundo a planilha de Matriz de transferência anexada na história conforme a colunas B e F da aba UPDATESKILLS-FILAS-SF: [listavdns-ConfiguraçãoSalesforce.xlsx](https://estacio.sharepoint.com/:x:/s/IT_Architecture/EbosWPU34wVBv_O1YBI0s-cBs7SzkCLkVUf-OBSrP1iI5g?e=VLiZXD)  


  


**RN2:** Criar/Renomear fila de atendimento para suas respectivas Skills:

  


Segundo a planilha de Matriz de transferência anexada na história conforme a coluna K da aba UPDATESKILLS-FILAS-SF: [listavdns-ConfiguraçãoSalesforce.xlsx](https://estacio.sharepoint.com/:x:/s/IT_Architecture/EbosWPU34wVBv_O1YBI0s-cBs7SzkCLkVUf-OBSrP1iI5g?e=VLiZXD)  


  


**RN3:**  Criar tabulações associada à fila de atendimento referente a coluna L da aba UPDATESKILLS-FILAS-SF: [listavdns-ConfiguraçãoSalesforce.xlsx](https://estacio.sharepoint.com/:x:/s/IT_Architecture/EbosWPU34wVBv_O1YBI0s-cBs7SzkCLkVUf-OBSrP1iI5g?e=VLiZXD):  
  


Criar a tabulação para SAC com base da tabulação realizada para a fila "K_SAC_EST_O_CC".  


Criar a tabulação para Retenção com base da tabulação realizada para a fila "ELO_VOZ RET CC ESTACIO".  


  


**RN4:**  
  


Ao se realizar os ajustes na filas e tabulação, identificamos que uma árvore de tabulação está com as opções duplicadas. Hoje são 473 registros na árvore de tabulação de SAC. Na Wyden temos 946. É necessário realizar o ajuste.  


  


**ÁRVORE DUPLICADA DA KONECTA SAC WYDEN**  
SELECT Id, Name, Owner.Name, OwnerId, ATL_External_Id__c, ATL_Tabulacao_de_Atendimento__r.ATL_GrupoServico__c, ATL_Tabulacao_de_Atendimento__r.ATL_Servico__c, ATL_Tabulacao_de_Atendimento__r.ATL_Motivo_Atendimento_1__c, ATL_Tabulacao_de_Atendimento__r.ATL_Motivo_Atendimento_2__c, ATL_Tabulacao_de_Atendimento__r.ATL_Motivo_Atendimento_3__c

FROM ATL_Fila_por_Tabulacao__c

WHERE Owner.Name LIKE '%K_SAC_WYD_O_CC%'

A tabulação pode ser baseada na fila atual "Kon SAC CC Estácio". 

 ![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/2cf4505c-f546-410c-85b6-f805d6480dc3?fileName=image.png)
