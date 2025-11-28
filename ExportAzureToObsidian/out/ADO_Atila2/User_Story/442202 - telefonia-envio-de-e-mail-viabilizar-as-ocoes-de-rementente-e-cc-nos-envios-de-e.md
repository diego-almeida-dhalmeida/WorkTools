---
id: "WI-442202"
title: "[Telefonia] Envio de e-mail - Viabilizar as oções de Rementente e \"CC\" nos envios de e-mail do Salesforce"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 02-2025-Relacionamento"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2024-12-10T15:34:57.85Z"
changed: "2025-03-07T18:03:02.093Z"
---
# WI-442202 - [Telefonia] Envio de e-mail - Viabilizar as oções de Rementente e "CC" nos envios de e-mail do Salesforce

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/442202](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/442202)

## 1. Identificação

- **ID/Ref:** WI-442202
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

**Cenário 01 - Envio com E-mail Institucional**

**Dado** que sou um Atendente Voz-Aluno do Call Center,  


**Quando** enviar um e-mail,  


**Então** o e-mail deve ser enviado com um endereço institucional da marca, como "noreply.atendimento@estacio.br" (conforme a matrícula do aluno). 

  


**Cenário 02 - Verificação dos e-mails por Voz e Digital**  


**Dado** que sou um Atendente-Aluno do Call Center,  


**Quando** enviar um e-mail,  


**Então** o e-mail deve ser enviado com um endereço institucional da marca, como "noreply.atendimento@estacio.br" (conforme a matrícula do aluno). 

  


**Cenário 03 - Envio de E-mail com CC**  


**Dado  **que sou um operador do call center,  


**Quando  **envio um e-mail para o aluno,  


**Então  **devo ter a opção de incluir um "CC", para qualquer e-mail.


## 9. Descrição (Abaixo vem do Azure DevOps)

****

**Eu como**  Atendente Voz-Aluno ou Atendente-Aluno do Call Center,  


**Quero**  na tela de Envio de Email da tarefa, poder enviar e-mail com um remetente institucional e cópia (CC) para qualquer e-mail  


**Para que**  as mensagens sejam enviadas corretamente para seus destinos conforme os processos de negócios. 

**  
**

**RN01 - Configuração do e-mail segundo marca**

  * Realizar o envio com um e-mail institucional da marca:  
  

    * noreply.atendimento@estacio.br 
    * noreplyatendimento@wyden.edu.br 
    * noreply_atendimento@ibmec.edu.br 
    * noreply-atendimento@idomed.com.br
