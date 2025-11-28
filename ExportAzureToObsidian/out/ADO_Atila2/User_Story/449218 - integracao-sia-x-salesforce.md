---
id: "WI-449218"
title: "Integração SIA x Salesforce"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: ""
created: "2025-01-15T14:02:40.327Z"
changed: "2025-04-10T18:17:46Z"
---
# WI-449218 - Integração SIA x Salesforce

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/449218](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/449218)

## 1. Identificação

- **ID/Ref:** WI-449218
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

- 


## 9. Descrição (Abaixo vem do Azure DevOps)

Eu, como **atendente, supervisor e coordenador**

Quero que sejam integradas todas as solicitações feitas com pelo aluno via SIA com o Service Cloud do Salesforce,

**Para  **viabilizar** ** uma visão holística das interações feitas com o aluno através na plataforma Salesforce.

  


RN01 - Informações da reclamação na tela de Caso.   


  


Todas as informações relacionadas aos requerimentos que foram abertos pelo(a) aluno(a) no SIA, e que são relevantes para as áreas de negócio, devem aparecer na tela do caso que foi aberto no Salesforce a partir desta reclamação. 

  


RN02 - Visão dos casos criados por responsável/proprietário.   


  


Os casos gerados a partir dos requerimentos abertos no SIA devem estar atribuídos a um usuário ou fila automaticamente, para que os agentes possam aceitar e dar andamento ao chamado. 

    


RN03 - Visão da "idade do caso".   


  


Os casos originados a partir de reclamações do requerimentos devem estar preenchidos com a data da criação e período que a solicitação está em aberto. 

  


**RN05 - Verificação de reclamações duplicadas**

**  
**

Os casos criados no Salesforce devem estar vinculados a um aluno/matrícula e, no caso de existir mais de uma reclamação atribuída a este registro, deve ser exibido um alerta para o proprietário do caso.  

  


**RN06 - Visão de solicitações abertas por aluno/persona**

**  
**

Os casos criados no Salesforce devem estar vinculados a um aluno/matrícula e, deve ser verificado se já existem solicitações em aberto para aquele aluno. Caso se trate de uma crítica, deve existir evidência da criação da solicitação no SIA. Em caso de sugestão ou elogio, não é necessária essa evidência (ou premissa), no entanto, é necessário gerar um alerta caso já existam solicitações abertas para aquele aluno.  

  


**RN07 - Casos Criados erroneamente**

**  
**

Os registros de reclamações criados no Salesforce e que não necessitam de uma ação do time YDUQS poderão ser enviados para uma fila, aonde serão excluídos dentro do período estabelecido pelas áreas de negócio.
