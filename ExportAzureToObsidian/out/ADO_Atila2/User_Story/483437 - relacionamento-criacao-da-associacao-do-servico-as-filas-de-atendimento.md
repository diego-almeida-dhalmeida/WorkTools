---
id: "WI-483437"
title: "[Relacionamento] - Criação da associação do Serviço as Filas de Atendimento"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Adriano Meireles Santos"
created: "2025-04-29T13:15:37.49Z"
changed: "2025-08-08T14:59:19.553Z"
---
# WI-483437 - [Relacionamento] - Criação da associação do Serviço as Filas de Atendimento

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/483437](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/483437)

## 1. Identificação

- **ID/Ref:** WI-483437
- **Tipo:** User Story
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

**Critério de Aceite 01**  


**Dado que**  O usuário Gestor aluno está criando ou editando o Serviço  


**Quando  **for finalizado o processo de criação,  


**Então  **ao menos uma Fila de Atendimento estará associada ao Serviço.  


  


**Critério de Aceite 02**  


**Dado que**  O usuário Gestor aluno está criando ou editando o Serviço  
**Quando  **for finalizado o processo de criação,  


**Então  **o sistema deve validar que ao menos uma Fila de Atendimento está associada ao Serviço, impedindo a finalização caso nenhuma fila tenha sido vinculada.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu** , como Usuário Gestor de Aluno,  


**Quero  **associar uma Fila de Atendimento a um ou mais serviços,  


**Para  **garantir que cada solicitação seja direcionada corretamente para o time responsável.  


  


**RN01** : Uma ou mais filas de atendimento devem ser associadas a um Serviço no momento de sua criação ou atualização.  


   


**RN02** : Se o serviço não estiver associado a no mínimo uma Fila de Atendimento, o usuário deverá receber um alerta para associar a pelo menos uma Fila antes de finalizar a criação do Serviço.
