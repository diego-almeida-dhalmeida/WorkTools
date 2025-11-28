---
id: "WI-244313"
title: "[Telefonia] Integração - Preenchimento da Tela de Atendimento  – cockpit"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 03-2024-CoERelac-1ªOndaTelefonia"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2023-04-25T13:11:58.603Z"
changed: "2025-03-07T18:22:00.267Z"
---
# WI-244313 - [Telefonia] Integração - Preenchimento da Tela de Atendimento  – cockpit

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/244313](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/244313)

## 1. Identificação

- **ID/Ref:** WI-244313
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

.


## 9. Descrição (Abaixo vem do Azure DevOps)

****

**

Eu , como atendente da YDUQS

Quero, que quando um atendimento seja direcionado à mim, proveniente do modal telefônico, o aluno seja identificado automaticamente em minha tela pelo número de matrícula fornecido na URA com informações da jornada do atendimento

Para gerar um atendimento mais ágil, sem necessidade de identificações redundantes.

  


Regras de Negócio:

  


RN01: Registro da jornada do aluno na URA

  


 Quando um aluno precisar de transbordo ao atendimento humano, tendo realizado contato pelo modal telefônico, o atendente do Call Center deverá receber automaticamente em sua tela, por meio de integração com o Salesforce, informações referentes às jornadas realizadas pelo aluno (DMA, URA, PAV).  As informações referentes aos seguintes momentos na jornada precisam ser atualizadas:

  


  * Dados Pessoais (Mesmo campo utilizado para WhatsApp e Chat);

  * Detalhes da Matrícula (Mesmo campo utilizado para WhatsApp e Chat);

  * Detalhes do Caso

    * Último Desfecho na navegação da URA

    * Chute Recebido (URA) - Tema e se foi aceito ou não.

    * Rechamada (Informação a ser fornecida pela URA)


  
  


RN02: Registro de informações provenientes do SIA no Salesforce para serem consumidos pelo URA

  


As informações acadêmicas e financeiras do aluno que hoje são verificadas do SIA pela URA deverão ser consumidas diretamente do Salesforce pela tela de experiência do aluno. Para as informações presentes na tela de experiência do aluno, consultar a US [#201400](https://arquiteturaestacio.visualstudio.com/Atila%202.0/_workitems/edit/201400/)

  


Estas informações deverão estar disponíveis sempre que ocorra transbordo do atendimento a um humano. 

  


O Atendente deve ser capaz de consultar as informações do SIA em tempo real no Salesforce. 

**
