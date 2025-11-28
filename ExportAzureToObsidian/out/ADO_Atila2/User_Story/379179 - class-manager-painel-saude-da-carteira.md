---
id: "WI-379179"
title: "[Class Manager] Painel Saúde da Carteira"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2024-05-23T14:59:31.043Z"
changed: "2024-10-09T22:16:01.14Z"
---
# WI-379179 - [Class Manager] Painel Saúde da Carteira

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/379179](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/379179)

## 1. Identificação

- **ID/Ref:** WI-379179
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

.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu  **como atendente responsável por uma carteira de atendimento 

**Quero  **ter acesso a um painel que resume os atendimentos de uma carteira

**Para  **que eu possa avaliar como estão os atendimentos

  
  


**_REGRAS DE NEGÓCIO:_****__**

 ****

**_RN01: Visuais do painel_**

O painel deverá consolidar os casos de atendimentos em qualquer canal dos alunos que fazem partes das carteiras de atendimento, sendo composto pelos seguintes visuais:   


  
BIG NUMBERS

  * Quantidade de atendimentos (receptivos + ativos)
  * Quantidade de atendimentos receptivos
  * Quantidade de atendimentos receptivos com transbordo
  * Quantidade de atendimentos receptivos sem transbordo  

  * Quantidade de contatos ativos
  * Quantidade de contatos ativos com transbordo
  * Quantidade de contatos ativos sem transbordo
  * Quantidade de Alunos  




GRÁFICOS

  * Satisfação de atendimento
  * Resolutividade de atendimento
  * Atendimentos receptivos sem transbordo por motivo de não transbordo
  * Atendimentos ativos sem transbordo por motivo de não transbordo  

  * Atendimentos por canal
  * Satisfação por canal
  * Resolutividade por canal
  * Atendimentos por matrícula
  * Satisfação por matrícula
  * Resolutividade por matrícula



  


**_RN02: Filtros_**

O painel deverá conter os seguintes filtros:  


  * Canal
  * Data de criação do caso
  * Atendimentos Class Manager ou Geral
  * Carteira



**Ex. de layout:**  
![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/4e3a376a-3a1e-49d6-aaf5-61cbdf094c87?fileName=image.png)
