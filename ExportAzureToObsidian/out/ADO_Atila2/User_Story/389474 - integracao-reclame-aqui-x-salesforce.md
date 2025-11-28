---
id: "WI-389474"
title: "Integração Reclame Aqui x Salesforce"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Andre Luiz de Paula Bezerra"
created: "2024-06-25T13:52:37.62Z"
changed: "2024-11-05T20:18:02.79Z"
---
# WI-389474 - Integração Reclame Aqui x Salesforce

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/389474](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/389474)

## 1. Identificação

- **ID/Ref:** WI-389474
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

Cenário 01**:****Visão das informações referentes à reclamação na tela do Caso.  **  

  


Dado que precisamos visualizar no Service Cloud as reclamações criadas no RA, com todos os parâmetros relevantes para as áreas de negócio. 

**Quando  **for** ** aberto um novo caso no Salesforce via integração com RA.

**Então  **esses dados deverão ser exibidos na tela de registro do chamado.   


  


Cenário 02**: Visualização do responsável por cada caso.  **

  


**Dado que  **precisamos visualizar no Service Cloud quem são os responsáveis por cada chamado,

**Quando** um novo registro de caso for criado no Salesforce,

**Então**  este dado deverá estar disponível para visualização e geração de indicadores.

  


Cenário 03**: Visualização da idade dos casos.  **

  


**Dado que  **precisamos visualizar no Service Cloud o período que um chamado está em aberto,

**Quando  **um novo registro de caso for criado no Salesforce,

**Então**  este dado deverá estar disponível para visualização e geração de indicadores


## 9. Descrição (Abaixo vem do Azure DevOps)

Eu, como **atendente, supervisor e coordenador**

Quero que sejam integradas todas as comunicações feitas com o aluno via ReclameAqui com o Service Cloud do Salesforce,

**Para  **viabilizar** ** uma visão holística das interações feitas com o aluno através na plataforma Salesforce.

  


RN01 - Informações da reclamação na tela de Caso.   


  


Todas as informações relacionadas às solicitações que foram feitas pelo(a) aluno(a) no ReclameAqui, e que são relevantes para as áreas de negócio, devem aparecer na tela do caso que foi aberto no Salesforce a partir desta reclamação. 

  


RN02 - Visão dos casos criados por responsável/proprietário.   


  


Os casos gerados a partir das reclamações abertas no RA devem estar atribuídos a um usuário ou fila automaticamente, para que os agentes possam aceitar e dar andamento ao chamado. 

    


RN03 - Visão da "idade do caso".   


  


Os casos originados a partir de reclamações do RA devem estar preenchidos com a data da criação e período que a solicitação está em aberto. 

  


**RN05 - Verificação de reclamações duplicadas**

**  
**

Os casos criados no Salesforce devem estar vinculados a um aluno/matrícula e, no caso de existir mais de uma reclamação atribuída a este registro, deve ser exibido um alerta para o proprietário do caso.  

  


**RN06 - Casos Criados erroneamente**

**  
**

Os registros de reclamações criados no Salesforce e que não necessitam de uma ação do time YDUQS poderão ser enviados para uma fila, aonde serão excluídos dentro do período estabelecido pelas áreas de negócio.
