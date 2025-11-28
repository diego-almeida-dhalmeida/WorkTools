---
id: "WI-467064"
title: "Integração SIA x Salesforce"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: ""
created: "2025-03-12T18:02:27.203Z"
changed: "2025-08-08T14:59:19.553Z"
---
# WI-467064 - Integração SIA x Salesforce

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/467064](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/467064)

## 1. Identificação

- **ID/Ref:** WI-467064
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

Cenário 01**:  ****Visão das informações referentes ao requerimento na tela do Caso.  **  

  


Dado que precisamos visualizar no Service Cloud os requerimentos abertos no SIA, com todos os parâmetros relevantes para as áreas de negócio. 

**Quando  **for** ** aberto um novo caso no Salesforce via integração com SIA.

**Então  **esses dados deverão ser exibidos na tela de registro do chamado.   


  


Cenário 02**: Visualização do responsável por cada caso.  **

  


**Dado que  **precisamos visualizar no Service Cloud quem são os responsáveis por cada chamado,

**Quando  **um novo registro de caso for criado no Salesforce,

**Então**  este dado deverá estar disponível para visualização e geração de indicadores.

  


Cenário 03**: Visualização da idade dos casos.  **

  


**Dado que  **precisamos visualizar no Service Cloud o período que um chamado está em aberto,

**Quando  **um novo registro de caso for criado no Salesforce,

**Então**  este dado deverá estar disponível para visualização e geração de indicadores


## 9. Descrição (Abaixo vem do Azure DevOps)

Eu, como **atendente, supervisor e coordenador**

**Quero****  que **os requerimentos abertos no SIA sejam registrados no Service Cloud do Salesforce,

**Para** viabilizar uma visualização centralizada e padronizada 

dos solicitações/requerimentos abertos pelo aluno no SIA.

  

RN01 - Informações do requerimento na tela de Caso.   


  


Todas as informações relacionadas aos requerimentos abertos pelo(a) aluno(a) no SIA, e que são relevantes para as áreas de negócio, devem aparecer na tela do caso que foi aberto no Salesforce a partir desta reclamação. 

  


RN02 - Visão dos casos criados por responsável/proprietário.   


  


Os casos gerados a partir das solicitações abertas no SIA devem estar atribuídos a um usuário ou fila automaticamente, para que os agentes possam aceitar e dar andamento ao chamado. 

    


RN03 - Visão da "idade do caso".   


  


Os casos originados a partir dos requerimentos do SIA devem estar preenchidos com a data da criação e período que a solicitação está em aberto. 

  


**RN05 - Verificação de reclamações duplicadas**

**  
**

Os casos criados no Salesforce devem estar vinculados a um aluno/matrícula e, no caso de existir mais de um requerimento atribuído a este registro, deve ser exibido um alerta para o proprietário do caso.  

  


**RN06 - Casos Criados erroneamente**

**  
**

Os registros criados no Salesforce e que não necessitam de uma ação do time YDUQS poderão ser enviados para uma fila, aonde serão excluídos dentro do período estabelecido pelas áreas de negócio.
