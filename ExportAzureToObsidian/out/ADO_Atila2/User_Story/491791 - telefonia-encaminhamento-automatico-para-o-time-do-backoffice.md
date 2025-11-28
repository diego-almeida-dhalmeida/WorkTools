---
id: "WI-491791"
title: "[Telefonia] - Encaminhamento automático para o time do backoffice"
type: "User Story"
state: "Active"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Adriano Meireles Santos"
created: "2025-05-22T20:05:53.117Z"
changed: "2025-08-08T14:59:19.553Z"
---
# WI-491791 - [Telefonia] - Encaminhamento automático para o time do backoffice

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/491791](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/491791)

## 1. Identificação

- **ID/Ref:** WI-491791
- **Tipo:** User Story
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

**Dado que** o caso foi encaminhado para a fila do time de backoffice  


**Quando** houver ao menos um atendente disponível com casos com status Fechados, ou Pendente  


**Então** o caso deve ser automaticamente atribuído a esse atendente  
  
**Dado que** o caso foi encaminhado para a fila do time de backoffice  
**Quando** não houver nenhum atendente disponível no momento  
**Então** o caso deve permanecer na fila até que um atendente fique disponível  


  


**Dado que** um operador está com status de férias, folga ou atestado  
**Quando** o sistema for distribuir automaticamente um novo caso  
**Então** esse operador não deve ser considerado elegível para receber atribuições de casos do backoffice  
  
**Dado que**  ocorreu uma falha na atribuição automática do caso  
**Quando**  o sistema não conseguir completar a operação  
**Então**  o caso deve ser movido para uma fila de erro com uma flag de erro visível para supervisão


## 9. Descrição (Abaixo vem do Azure DevOps)

******Eu como** Atendente Voz - Aluno, e Atendente -Aluno  


**Quero** que casos encaminhados para o backoffice sejam automaticamente atribuídos a um atendente do time  
**Para que** o atendimento especializado seja iniciado de forma eficiente, sem depender de intervenção manual.

  


**RN1:** É considerado um atendente candidato a receber um atendimento aquele que não está com nenhum caso aberto, ou em andamento. 

  


**RN2:** Os casos devem seguir para os operadores em esquema de fila, ou seja, o caso mais antigo deve ser atribuído primeiro aos operadores. 

  


**RN3:** Caso o operador não esteja disponível no sistema (Licença médica, férias, etc) então os casos não devem ser atribuídos a ele.
