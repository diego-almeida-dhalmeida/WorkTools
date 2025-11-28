---
id: "WI-467107"
title: "Tabulação de Casos"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Andre Luiz de Paula Bezerra"
created: "2025-03-12T18:51:02.733Z"
changed: "2025-03-12T19:20:56.353Z"
---
# WI-467107 - Tabulação de Casos

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/467107](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/467107)

## 1. Identificação

- **ID/Ref:** WI-467107
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

**Cenário 01 - Criação de Casos filhos**

**Dado que** precisamos criar e gerenciar as solicitações feitas para as áreas internas, 

**Então** devemos ter autonomia para gerar casos vinculados à solicitação original**   **

**Quando** for necessária a atuação de áreas internas para a resolução dos chamados. 

**  
**

****Cenário 02 - Notificação de atribuição****

**Dado que** devemos diminuir o tempo de resolução dos casos e manter a comunicação entre os times,

**Então** as áreas responsáveis devem ser notificadas** **

****Quando  for atribuído um novo caso para o nível 2 de atendimento.  ****

****  
****

****Cenário 03 - Acompanhamento de SLAs****

**Dado que** precisamos resolver os requerimentos dentro de um prazo estabelecido,**   **

**Então** o tempo de atendimento dos casos deve ser gerenciado e monitorado ** **

**Quando** uma reclamação for gerada no Service Cloud.

  


**Cenário 04 - Notificação de encerramento do caso filho**

**Dado que** algumas solicitações deve ter atuação de áreas internas,

**Então** o responsável do caso pai deve ser notificado

**Quando**  um caso filho for fechado pela área responsável pela tratativa do chamado.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu, como** atendente, coordenador, supervisor, 

**Quero** acompanhar no Service Cloud os casos que estão atribuídos ao primeiro nível de atendimento (N1), bem como as solicitações que tiveram atuação de outras áreas internas (N2) **   **

**Para** garantir a gestão das solicitações originadas do SIA, auxiliando na fluidez deste processo e no mapeamento dos pontos de melhoria.** **

**  
**

**RN01 - Criação e atribuição de casos filhos para outras áreas  **

**  
**

Os atendentes precisam ter autonomia para abrir casos filhos e atribuí-los às respectivas áreas internas, quando precisarem da atuação dessas equipes. Além disso, esses registros devem estar vinculados ao caso pai, ou seja, o chamado gerado no Service Cloud a partir da reclamação aberta pelo aluno via SIA. 

 

**RN02 - Notificação de atribuição do caso filho**

  


Quando for aberto um caso filho, a área para a qual está sendo atribuída este registro deve ser notificada no Salesforce. 

** **

**RN03 - SLA do tempo de atendimento.  **

  


O tempo de atendimento dos casos filhos deve respeitar os prazos estabelecidos pelas áreas de negócio (SLAs). 

**  
**

**RN04 -   Notificação de fechamento do caso filho**

  


Quando um caso filho for resolvido, o(a) atendente responsável pelo caso pai deve ser notificado(a) para que possa seguir com o atendimento do caso pai.
