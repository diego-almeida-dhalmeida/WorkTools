---
id: "WI-389475"
title: "Carga da Base histórica de reclamações - ReclameAqui"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Andre Luiz de Paula Bezerra"
created: "2024-06-25T13:53:18.923Z"
changed: "2024-11-05T20:18:02.79Z"
---
# WI-389475 - Carga da Base histórica de reclamações - ReclameAqui

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/389475](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/389475)

## 1. Identificação

- **ID/Ref:** WI-389475
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

Cenário 01**:  ****Visão das informações referentes à reclamação na tela do Caso.  **  

  


Dado que precisamos visualizar no Service Cloud as reclamações criadas no RA, com todos os parâmetros relevantes para as áreas de negócio. 

**Quando  **forem criados os casos históricos no Salesforce. 

**Então** todos os dados relevantes para as áreas de negócio devem aparecer na tela de registro do caso.   


  


Cenário 02**: Visualização do responsável por cada caso.  **

  


**Dado que  **precisamos visualizar no Service Cloud quem são os responsáveis por cada chamado,

**Quando**** ** as reclamações históricas forem criadas no Salesforce,

**Então**  este dado deverá estar disponível para visualização e geração de indicadores (relatórios e dashs).

  


Cenário 03**: Visualização do status de resolução dos casos.  **

  


**Dado que****** precisamos visualizar no Service Cloud os status de conclusão das solicitações,

**Quando****** forem inseridas as reclamações históricas no Salesforce

**Então** deve estar disponível os dados de conclusão dessas informações (se foi resolvido e se o(a) aluno(a) está satisfeito com a resolução).

Cenário 04**: Visualização do tempo de resolução das reclamações históricas.  **

  


**Dado que  **precisamos visualizar no Service Cloud o período que um chamado está em aberto e quando foi concluído,

**Quando**** ** os casos históricos forem criados no Salesforce,

**Então**  este dado deverá estar disponível para visualização e geração de indicadores.


## 9. Descrição (Abaixo vem do Azure DevOps)

Eu, como **atendente, supervisor e coordenador**

Quero que sejam registradas as reclamações históricas que foram abertas via ReclameAqui.

**Para  **viabilizar** ** uma visão holística das interações feitas com o aluno através na plataforma Salesforce.

  


RN01 - Informações de reclamações históricas na tela de Caso.   


  


Todas as informações relacionadas às solicitações históricas que foram feitas pelo(a) aluno(a) no ReclameAqui, e que são relevantes para as áreas de negócio, devem aparecer na tela do caso que foi aberto no Salesforce. 

  


RN02 -  Visão dos atendentes responsáveis pelas reclamações históricas.  


  


Os casos gerados a partir das reclamações abertas no RA devem estar atribuídos ao usuário responsável pela tratativa daquela solicitação. 

  


RN03 - Visualização do status de resolução da reclamação   


  


Deve ser exibido nos casos históricos se a reclamação foi resolvida ou não, e se o(a) aluno(a) ficou satisfeito(a) com a resolução do incidente. 

  


RN04 -  Visão do tempo de resolução dos chamados históricos no Salesforce.   


  


Os casos que foram gerados a partir de reclamações históricas do RA devem estar preenchidos com a data da criação e data da conclusão da reclamação.
