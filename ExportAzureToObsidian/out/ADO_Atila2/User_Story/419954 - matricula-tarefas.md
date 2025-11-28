---
id: "WI-419954"
title: "Matricula - Tarefas"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: ""
created: "2024-09-25T19:37:01.697Z"
changed: "2024-11-05T20:18:02.79Z"
---
# WI-419954 - Matricula - Tarefas

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/419954](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/419954)

## 1. Identificação

- **ID/Ref:** WI-419954
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

​**Cenário 01: Visualização das informações da tabela**  


DADO QUE: o usuário durante a consulta às informações da matrícula do aluno  
QUANDO: acessar a tela de tarefas  
ENTÃO: poderá visualizar as informações gerais da matrícula conforme a RN01  
**Resultados esperados  **: visualizar as informações conforme mencionado nas regras de negócio.  
**Resultados não esperados  **: não visualizar as informações conforme mencionado nas regras de negócio.  


  


**Cenário 02: Visualização das informações nas listas relacionadas**  
DADO QUE: o usuário durante a consulta às informações da matrícula do aluno  
QUANDO: acessar as informações de uma das tarefas na lista

ENTÃO: será aberta uma visualização mais detalhada do item selecionado  
**Resultados esperados  **: ser redirecionado corretamente ao clicar no item.  
**Resultados não esperados  **: não ser redirecionado ao clicar no item.


## 9. Descrição (Abaixo vem do Azure DevOps)

**RN01 - Lista Relacionada - Tarefas**

Lista com as tarefas associadas à matrícula do aluno. Tabela ocupando a tela inteira, mostrando todos os itens da lista (ordenadas por prioridade e prazo mais antigo). 

  


Cada item contém: 

  * **Tarefa (título - número da tarefa)**
  * Tipo de tarefa 
  * Descrição da tarefa 
  * Responsável pela tarefa 
  * Prazo da tarefa 
  * Status da tarefa
