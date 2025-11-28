---
id: "WI-495273"
title: "[Telefonia] - Criar a opção de encerramento de caso avulso com aluno não identificado"
type: "User Story"
state: "Resolved"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Willames Izaias Santos da Silva"
created: "2025-06-02T19:23:01.573Z"
changed: "2025-09-02T12:32:53.12Z"
---
# WI-495273 - [Telefonia] - Criar a opção de encerramento de caso avulso com aluno não identificado

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/495273](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/495273)

## 1. Identificação

- **ID/Ref:** WI-495273
- **Tipo:** User Story
- **Status:** Resolved


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

**Dado que** acesso o sistema como Atendente Voz - Aluno 

**Quando** acessar um caso avulso e não conseguir identificar um aluno 

**Então** o caso deve habilitar a tabulação e o fechamento do caso mediante registro de identificação manual no caso do aluno que entrou em contato, campo: **" Tipo de Não Identificado". **  
  
Obs.: Verificar se a solução pode ser ampliada para todos os casos de Voz.  
  
Situação atual:  
  
![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/749c370c-d6e9-4fcb-8013-135ca0248d7d?fileName=image.png)  


  


Situação que precisa acontecer:  
  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/3146cc13-9bde-451d-81da-c16c4c36c4ee?fileName=image.png)


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como** operador de voz (perfil Atendente Voz - Aluno) 

**Quero** que o caso avulso possa ser tabulado e fechado mesmo sem a identificação de um aluno 

**Com o objetivo de** registrar os atendimentos de alunos de outros curso, ou aluno que ainda não estão identificados no SIA.
