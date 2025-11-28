---
id: "WI-495803"
title: "[Telefonia] Novas Skills/Filas/Tabulação para Konecta"
type: "User Story"
state: "Resolved"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Willames Izaias Santos da Silva"
created: "2025-06-03T19:36:14.137Z"
changed: "2025-09-02T12:31:31.917Z"
---
# WI-495803 - [Telefonia] Novas Skills/Filas/Tabulação para Konecta

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/495803](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/495803)

## 1. Identificação

- **ID/Ref:** WI-495803
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

**Dado que** estou logado no cockpit de atendimento como operador do call center, com o perfil "Atendente Voz - Aluno"  


**Quando** receber uma ligação  
**Então** as Skills Names devem estar criadas no Salesforce para garantir que os casos sejam tabulados corretamente.  


  


**Dado que**  estou logado no cockpit de atendimento como operador do call center, com o perfil "Atendente Voz - Aluno"  


**Quando**  receber uma transferência  
**Então**  as Skills Names devem estar criadas no Salesforce para garantir que os casos sejam tabulados corretamente.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como**  operador do call center (Perfil Atendente Voz - Aluno) 

**Quero  **que, dentro do cockpit de atendimento, que as Skills Names, filas e tabulação estejam atualizadas no Salesforce  


**Para que**  no momento de recebimento de uma ligação, ou transferência, os casos sejam abertos corretamente e possam ser encerrados corretamente:  
  
![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/93e457f2-4a5b-4909-823d-2f4d3ab75245?fileName=image.png)  
  
**RN1:**** ** Criar Skill no objeto ATL_SkillnameByChannel__mdt:

  


Segundo a planilha de Matriz de transferência anexada na história conforme a colunas B e F da aba UPDATESKILLS-FILAS-SF: [listavdns-ConfiguraçãoSalesforce.xlsx](https://estacio.sharepoint.com/:x:/s/IT_Architecture/EbosWPU34wVBv_O1YBI0s-cBs7SzkCLkVUf-OBSrP1iI5g?e=VLiZXD), considerar apenas as 6 novas linhas do documento segundo a imagem em anexo.  


  


**RN2:** Criar fila de atendimento para suas respectivas Skills:

  


Segundo a planilha de Matriz de transferência anexada na história com referência na aba UPDATESKILLS-FILAS-SF: [listavdns-ConfiguraçãoSalesforce.xlsx](https://estacio.sharepoint.com/:x:/s/IT_Architecture/EbosWPU34wVBv_O1YBI0s-cBs7SzkCLkVUf-OBSrP1iI5g?e=VLiZXD)  


  


**RN3:**  Criar tabulações associada à fila de atendimento com referência na aba UPDATESKILLS-FILAS-SF: [listavdns-ConfiguraçãoSalesforce.xlsx](https://estacio.sharepoint.com/:x:/s/IT_Architecture/EbosWPU34wVBv_O1YBI0s-cBs7SzkCLkVUf-OBSrP1iI5g?e=VLiZXD):  
  


Criar a tabulação para SAC com base da tabulação realizada para a fila "K_SAC_EST_O_CC".  


Criar a tabulação para Retenção com base da tabulação realizada para a fila "E_RET_EST_O_PRINCIP".  
  
OBS: Manter a padronização para os campos abaixo na imagem:  
  
![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/774f050b-93ec-4d74-910f-b642e792fb7e?fileName=image.png)  


  
 SELECT Id, Name, Owner.Name, OwnerId, ATL_External_Id__c, ATL_Tabulacao_de_Atendimento__r.Id, ATL_Tabulacao_de_Atendimento__r.Name, ATL_Tabulacao_de_Atendimento__r.ATL_isRetencao__c, ATL_Tabulacao_de_Atendimento__r.ATL_GrupoServico__c, ATL_Tabulacao_de_Atendimento__r.ATL_Servico__c, ATL_Tabulacao_de_Atendimento__r.ATL_Motivo_Atendimento_1__c, ATL_Tabulacao_de_Atendimento__r.ATL_Motivo_Atendimento_2__c, ATL_Tabulacao_de_Atendimento__r.ATL_Motivo_Atendimento_3__c  
FROM ATL_Fila_por_Tabulacao__c   
WHERE Owner.Name in ('E_RET_EST_O_PRINCIP')
