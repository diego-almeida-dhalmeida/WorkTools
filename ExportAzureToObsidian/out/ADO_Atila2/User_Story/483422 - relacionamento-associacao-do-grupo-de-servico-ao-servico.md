---
id: "WI-483422"
title: "[Relacionamento] - Associação do Grupo de Serviço ao Serviço"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Adriano Meireles Santos"
created: "2025-04-29T13:04:15.417Z"
changed: "2025-08-08T14:59:19.553Z"
---
# WI-483422 - [Relacionamento] - Associação do Grupo de Serviço ao Serviço

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/483422](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/483422)

## 1. Identificação

- **ID/Ref:** WI-483422
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

****

**Critério de aceite 01**  


**Dado** que acessei o sistema como Gestor Aluno 

**Quando** for preencher um cadastro de grupo  de serviço  


**Então,** o sistema deve registrar o ID e devo informar a descrição do Grupo 

 

**Critério de aceite 02**

**Dado** que estou adicionando ou atualizando um serviço 

**Quando  **for informar o grupo ao qual o serviço pertence 

**Então,**  utilizarei o campo Grupo de serviço para selecionar o Grupo aderente. 

 

**Dado** que um novo serviço é criado, 

**Quando  **o Usuário Gestor Aluno tentar salvar o serviço sem a seleção de um Grupo de Serviço, 

**Então,**  o sistema deve informar que a seleção do Grupo de Serviço é obrigatória.


## 9. Descrição (Abaixo vem do Azure DevOps)

****

****

**Eu, como**  Usuário Gestor Aluno 

**Quero** a criação de cadastro de um Grupo de Serviço. 

**Para** que os serviços criados, sejam agrupados dentro de seu grupo específico. Como exemplo, serviços como "Análise de bolsa convênio", que pertence ao Grupo de Serviço "Financeiro". 

  


**RN01** \- O grupo de serviço deve ter como campos:  


ID (Automático)  


Descrição  


**  **

**RN02** \- Grupo de serviço 

O grupo de serviço vinculada a serviço, sendo assim, todos os Serviço devem estar associados a um grupo de serviço no momento de sua criação e atualização.
