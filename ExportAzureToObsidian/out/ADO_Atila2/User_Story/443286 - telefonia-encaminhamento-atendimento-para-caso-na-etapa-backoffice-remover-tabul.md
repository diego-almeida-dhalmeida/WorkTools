---
id: "WI-443286"
title: "[Telefonia] Encaminhamento/Atendimento - Para caso na etapa backoffice remover tabulação pendente e fechar no X"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 04-2024-CoERelac-2 ªOndaTelefonia"
assignedTo: "Diego Felipe"
created: "2024-12-16T17:41:01.797Z"
changed: "2025-03-21T17:56:55.387Z"
---
# WI-443286 - [Telefonia] Encaminhamento/Atendimento - Para caso na etapa backoffice remover tabulação pendente e fechar no X

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/443286](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/443286)

## 1. Identificação

- **ID/Ref:** WI-443286
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

Roteiro de teste:

  1. Abrir o SalesForce e entrar com o perfil operador BKO usuário: marcos.dsantos.ter@estacio.br
  2. Abrir a tela de lista de casos de Backoffice do operador e selecionar um que esteja com status "Atribuído". 
  3. Minimizar o caso, clicando no "X", sem que seja necessário tabular. 



  


**  
**

**Critérios de Aceitação:**

  


**1\. Minimização do caso**

**Dado que**  quero minimizar um caso em andamento como operador de BKO para tira-lo do meu campo de visão sem o encerrar 

**Quando**  clicar no "x" na aba do caso 

**Então**  o caso deverá ser minimizado e sair da tela, sem encerrar 

  


  


**  
**

**  
**

**  
**


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como** operador de backoffice (Com perfil "Atendente Voz - Aluno")  


**Quero** poder minimizar meus casos já encaminhados, sem impedimento de tabulação,  
**Para que** eu possa atender aos alunos de forma eficiente, com controle adequado de status e atribuições, garantindo que os casos sejam tratados corretamente até o fechamento.

  


**RN1 -  Regras de Fechamento do Caso:**

  * Remover a regra que exige "Tabulação pendente" para os casos encaminhados para o Backoffice. O atendente poderá "minimizar" **(tirar de seu campo de visão)** o caso diretamente na aba, clicando no botão "X". Isso não deve encerrar o caso, apenas minimizá-lo. O encerramento do caso deverá ocorrer através do botão "Encerrar Atendimento", garantindo o controle do fluxo de fechamento do caso.   
  




  


  


  


  


  


**  
**

**  
**
