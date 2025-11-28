---
id: "WI-533015"
title: "Criação do Objeto - Registro de atendimento"
type: "Tech Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Giovana Calderani Yaekashi"
created: "2025-09-08T18:23:48.78Z"
changed: "2025-09-15T19:13:49.417Z"
---
# WI-533015 - Criação do Objeto - Registro de atendimento

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/533015](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/533015)

## 1. Identificação

- **ID/Ref:** WI-533015
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

* Id de Registro de atendimento /campo automático
  * Descrição - campo texto longo 
    * Campo destinado para o operador/atendente registrar efetivamente o que foi feito 



  * Caso - campo look up (relacionamento entre os objetos) 
  * Serviço - campo look up (relacionamento entre os objetos) 
  * Status - campo picklist (Status__c) 
    * Novo 
    * Em andamento 
    * Aguardando retorno - Solicitante 
    * Resolvido/Finalizado


## 9. Descrição (Abaixo vem do Azure DevOps)

Registra a execução do atendimento com base no que foi previamente parametrizado no objeto Serviço. Serve para formalizar todas as ações necessárias do operador para garantir retorno ao aluno.
