---
id: "WI-533011"
title: "Criação do objeto - Serviço"
type: "Tech Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Giovana Calderani Yaekashi"
created: "2025-09-08T18:18:08.017Z"
changed: "2025-09-15T19:13:28.863Z"
---
# WI-533011 - Criação do objeto - Serviço

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/533011](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/533011)

## 1. Identificação

- **ID/Ref:** WI-533011
- **Tipo:** Tech Story
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

* Grupo de serviço - campo picklist (ServiceGroupPkl__c)
  * Canais de atendimento - campo multi-picklist (ServiceChannelsMpk__c) 
  * Filas de atendimento - campo multi-picklist (ServiceQueuesMpk__c) 
  * Tipo de curso - campo multi-picklist (CourseMpk__c) 
  * Marca - campo picklist ou multi-picklist (BrandMpk__c) 
  * Modalidade - campo multi-picklist (ModalityMpk__c) 
  * Tabulações associadas (ServiceClassification?) 
    * Relacionamento com tabulações já mapeadas. 






  * Observação - campo texto longo (ServiceObservationTxt__c) 
    * Informações complementares sobre o serviço 
  * Descrição - campo texto longo (validar necessidade com a área de negócio) 
    * Detalhamento do serviço


## 9. Descrição (Abaixo vem do Azure DevOps)

Objeto responsável por cadastrar e parametrizar todas as regras e condições de determinado atendimento.
