---
id: "WI-444387"
title: "[Telefonia] Envio de e-mail - Criação de histórico de envio de e-mails por caso (Autosserviços)"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Marcos Vinicius Almeida da Silva"
created: "2024-12-19T23:58:25.7Z"
changed: "2025-06-12T20:11:40.48Z"
---
# WI-444387 - [Telefonia] Envio de e-mail - Criação de histórico de envio de e-mails por caso (Autosserviços)

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/444387](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/444387)

## 1. Identificação

- **ID/Ref:** WI-444387
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

**Cenário 01 - Visualização do histórico de e-mails**  


**Dado que** sou um operador do call center,  


**Quando** acesso a caso do aluno,  


**********Então  **devo ver uma tabela que exibe as informações descritas na regra RN01 de todos os e-mails enviados pela funcionalidade de autosserviços do caso para aquele aluno/matrícula em um determinado caso.

  


**Cenário 02 - Acesso Público ao Histórico de mensagens enviadas**  


**Dado que** sou um operador do call center,  


**Quando** acesso a aba de Detalhes do Caso de um caso qualquer  


**Então** devo ter acesso para visualizar e consultar o histórico de e-mail enviado para aquele aluno no caso em questão, que deve ser pública para todos os atendentes/operadores dentro do call center.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como** operador do call center (Perfil Atendente Voz - Aluno, ou Atendente-Aluno) 

**Quero** na aba de Detalhes do Caso, tanto para casos de voz, como digital (WhasApp e chat), visualizar uma tabela com o histórico de e-mails enviados através da funcionalidade de autosserviços  


**Para que** eu que todos possam ter acesso às mensagens enviadas ao aluno e assim ter um contexto completo sobre as interações do caso.  


  


**RN 01 - Referente as informações da tabela de histórico:**

Incluir no caso uma opção de visualização de tabela que exiba as mensagens de todos os e-mails enviados para aquele aluno/matrícula referentes a um caso. A tabela deve apresentar as seguintes informações:

  * Data e hora
  * Assunto do e-mail
  * Se há ou não anexos
  * Remetente (se foi durante um atendimento, autosserviço ou um e-mail de um atendente do Call Center)
  * Atendente (se houver)
  * Botão, ou link com a possibilidade de visualizar a mensagem completa
