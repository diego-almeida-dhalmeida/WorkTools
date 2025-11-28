---
id: "WI-489193"
title: "[Telefonia/Whatsapp/Chat] - Exibição do Proprietário do Caso no relatório do Backoffice"
type: "User Story"
state: "Active"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 07-2025-Relacionamento"
assignedTo: "Rodolfo Rodrigo da Silva"
created: "2025-05-16T15:12:53.053Z"
changed: "2025-09-03T13:05:14.2Z"
---
# WI-489193 - [Telefonia/Whatsapp/Chat] - Exibição do Proprietário do Caso no relatório do Backoffice

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/489193](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/489193)

## 1. Identificação

- **ID/Ref:** WI-489193
- **Tipo:** User Story
- **Status:** Active


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

**

**Dado que**  estou logado com um perfil (Atendente - Aluno) de usuário de atendimento,  


**Quando**  realizar um encaminhamento para o backoffice  
**Então**  o caso filho criado deverá conter um campo que armazene meu nome de suário intitulado "Encaminhado Por"

**

**  
**

**Dado que** estou logado com um perfil (Atendente Voz - Aluno) de usuário de Backoffice,  


**Quando** acesso o relatório de backoffice  
**Então** devo visualizar no relatório a coluna "Encaminhado Por" com o nome do atendente proprietário do caso no momento antes do encaminhamento.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu Como** Gestor Aluno, ou Supervisor,  


**Quero** visualizar o campo "Criado Por" no relatório de atendimento do Backoffice provenientes de casos de WhatsApp. Chat-SIA e Voz

**Para que** eu possa identificar facilmente qual atendente ou equipe foi responsável pelo tratamento do caso inicialmente.  


  


Hoje temos como "Criado Por" o Mule integration user. O que se deseja é inserir o proprietário no momento do encaminhamento, ou seja, o operador que está realizando o encaminhamento.   
  
Relatório do Backoffice:  
<https://yduqs2020.lightning.force.com/lightning/r/Report/00ONp00000Df4eTMAR/view?queryScope=userFolders>
