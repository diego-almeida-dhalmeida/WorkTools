---
id: "WI-442788"
title: "[Telefonia] Criação de filas adicionais para Base de Conhecimento"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 04-2024-CoERelac-2 ªOndaTelefonia"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2024-12-12T20:25:29.61Z"
changed: "2025-01-17T21:40:53.203Z"
---
# WI-442788 - [Telefonia] Criação de filas adicionais para Base de Conhecimento

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/442788](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/442788)

## 1. Identificação

- **ID/Ref:** WI-442788
- **Tipo:** User Story
- **Status:** Closed


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

**Cenário 01: Acesso ao componente personalizado que representa as categorias de artigos**

**Dado que  **atendentes de telefonia precisam acessar os artigos vinculados às respectivas categorias da área,** **

**Quando  **os usuários com esse perfil acessarem a plataforma, durante um atendimento 

**Então  **deverão visualizar a visão de árvore das categorias dos artigos, incluindo as novas categorias adicionadas na RN02. 

  


**Cenário 02: Categoria distribuída por marca e canal  **

**Dado que  **atendentes de telefonia (Conteudista) precisam acessar os artigos vinculados às respectivas categorias da área,** **

**Quando**** ** for exibido o componente representando as categorias de artigos

**Então**** ** essas categorias dos artigos devem estar segmentadas por marca, canal e fila de atendimento.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu, como  **Atendente Voz - Aluno do time de telefonia 

**Quero  **ter acesso à visão de árvore das categorias de artigos cadastrados na base de conhecimento do Call Center, de acordo com a marca e o canal a qual o aluno está vinculado 

**Para  **democratizar o acesso a esse conteúdo para o grupo YDUQS. 

  


**RN01 - Visão de árvore Base de conhecimento  **

**  
**

Os usuários que realizam o atendimento (**Atendente Voz - Aluno**) de solicitações de voz devem ter acesso à visão de árvore que está na aba "Base de conhecimento", na tela de registro do Messaging Session/Tarefa de Voz.  
  


**RN02 - Visão por grupos de atendimento especiais**  


  


Devem ser **adicionadas** as seguintes filas às categorias da base de conhecimento, considerando os grupos de atendimento além das marcas:

  


Canais Críticos 

Backoffice 

Retenção
