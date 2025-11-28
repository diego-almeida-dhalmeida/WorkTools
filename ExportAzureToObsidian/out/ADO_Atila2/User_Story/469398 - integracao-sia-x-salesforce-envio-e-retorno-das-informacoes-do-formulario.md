---
id: "WI-469398"
title: "[Integração SIA x SalesForce]  Envio e Retorno das Informações do Formulário"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2025-03-18T18:16:51.083Z"
changed: "2025-03-25T17:34:45.633Z"
---
# WI-469398 - [Integração SIA x SalesForce]  Envio e Retorno das Informações do Formulário

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/469398](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/469398)

## 1. Identificação

- **ID/Ref:** WI-469398
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

Cenário 1 - Envio das Informações para o Salesforce 

Dado que um aluno preencheu um formulário e abriu um atendimento no SIA 

Quando a solicitação for enviada para o Salesforce 

Então todas as informações do formulário devem estar disponíveis para o atendente. 

 

Cenário 2 - Confirmação de Envio 

Dado que um formulário foi enviado para o Salesforce 

Quando a sincronização for concluída com sucesso 

Então o SIA deve exibir um status de confirmação do envio. 

 

Cenário 3 - Retorno das Informações ao Sistema Próprio 

Dado que um atendimento foi atualizado ou finalizado no Salesforce 

Quando a sincronização ocorrer 

Então as informações devem ser enviadas para o SIA e registradas no histórico do atendimento. 

 

Cenário 4 - Configuração das Notificações 

Dado que um administrador deseja configurar notificações 

Quando ele acessar a seção de notificações no SIA 

Então ele deve poder selecionar os canais de comunicação (portal, WhatsApp, e-mail ou SMS). 

 

Cenário 5 - Envio de Notificações 

Dado que um atendimento teve uma atualização relevante 

Quando o SIA receber o retorno do Salesforce 

Então a notificação deve ser enviada para o aluno nos canais configurados. 

 

Cenário 6 - Registro de Logs 

Dado que a integração entre os sistemas está ativa 

Quando uma informação for enviada ou recebida entre o SIA e o Salesforce 

Então os logs de integração devem registrar todas as ocorrências para rastreabilidade.


## 9. Descrição (Abaixo vem do Azure DevOps)

Eu, como administrador do sistema, 

quero que os formulários preenchidos pelo cliente no sistema próprio sejam enviados automaticamente para o Salesforce no momento da abertura do atendimento, 

**Para que** o atendente tenha acesso imediato às informações e possa dar continuidade ao suporte de forma eficiente. Além disso, quero que o retorno do atendimento no Salesforce seja enviado ao SIA, permitindo que o cliente seja notificado via portal, WhatsApp, e-mail ou SMS. 

 

 

RN001 - Envio das Informações para o Salesforce

  * Quando um aluno preencher um formulário no SIA e abrir um atendimento, todas as informações devem ser enviadas automaticamente para o Salesforce.
  * O Salesforce deve armazenar essas informações e torná-las acessíveis ao atendente no momento do atendimento.
  * O SIA deve exibir um status de confirmação do envio dos dados ao Salesforce.



 

RN002 - Retorno das Informações ao SIA

  * Quando o atendimento for atualizado ou concluído no Salesforce, o status e as informações relevantes devem ser enviados de volta ao SIA. 
  * SIA deve registrar e exibir as informações retornadas do Salesforce para que o aluno possa acompanhar o status do atendimento. 
  * Deve existir um histórico de interações entre os sistemas para auditoria e rastreamento de dados.



 

RN003 - Configuração das Notificações 

  * O administrador deve ter a opção de configurar notificações para o aluno sobre o andamento do atendimento. 
  * As notificações podem ser enviadas via portal do aluno, WhatsApp, e-mail ou SMS. 
  * Deve haver um indicador no sistema próprio para mostrar quais canais de notificação foram ativados.
