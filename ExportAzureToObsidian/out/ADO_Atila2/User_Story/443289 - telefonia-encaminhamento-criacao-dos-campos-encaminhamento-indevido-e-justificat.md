---
id: "WI-443289"
title: "[Telefonia] Encaminhamento - Criação dos campos “Encaminhamento Indevido” e “Justificativa do Encaminhamento Indevido”"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 04-2024-CoERelac-2 ªOndaTelefonia"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2024-12-16T17:48:14.5Z"
changed: "2025-03-19T02:04:26.453Z"
---
# WI-443289 - [Telefonia] Encaminhamento - Criação dos campos “Encaminhamento Indevido” e “Justificativa do Encaminhamento Indevido”

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/443289](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/443289)

## 1. Identificação

- **ID/Ref:** WI-443289
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

****

**Roteiro de teste:**

  1. Abrir o SalesForce e entrar com o perfil operador BKO usuário: marcos.dsantos.ter@estacio.br
  2. Abrir a tela de lista de casos de Backoffice do operador e selecionar um que esteja com status "Atribuído". 
  3. Encerrar o caso, marcando a flag de "encaminhamento indevido" e preencher a justificativa no modal de encerramento. 



**  
**

**  
**

**Critérios de Aceitação:**

  


**1\. Encerramento de Casos Indevidos:**  


 

**Dado que** estou encerrando um caso atribuído de forma indevida ao backoffice, 

**Quando** for realizar o fechamento do mesmo 

**então o** sistema deve solicitar a **" Justificativa do Encaminhamento Indevido"** antes de permitir o encerramento do caso.  


O status do caso deve ser alterado para "Fechado" após a justificativa ser fornecida.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como** operador de backoffice (Com perfil "Atendente Voz - Aluno")  


**Gostaria de  **ter uma tela de fila de casos encaminhados,  
**Para que** eu possa atender aos alunos de forma eficiente, com controle adequado de status e atribuições, garantindo que os casos sejam tratados corretamente até o fechamento.

  


**RN4 -  Regras de Fechamento do Caso:**

  * Durante o encerramento do caso deverá existir uma flag "Encaminhamento Indevido" para que o atendente de backoffice possa realizar a marcação - Essa situação é exclusiva para o fechamento dos casos que foram encaminhados pelo Backoffice. O campo deverá ser arquivado na seção "Motivos de Encaminhamento" em um campo com o título de "Encaminhamento Indevido" \- Somente Leitura;  
  

  * Também deverá existir um campo "Justificativa do Encaminhamento Indevido", que deverá ser de preenchimento obrigatório caso o flag "Encaminhamento Indevido" esteja marcado. O campo deverá ser arquivado na seção "Motivos de Encaminhamento" em um campo com o título de "Justificativa do Encaminhamento Indevido" \- Somente Leitura;



\--------------------------------------------------------------------------

Observações de complemento da história:

  


Sobre o Encaminhamento para o BKO:

  


O encaminhamento para o BackOffice deve ser realizado pelo botão "Encaminhar" e as informações preenchidas no Modal de Encaminhamento devem ser registradas nos Detalhes do Caso na aba "Motivo de Encaminhamento"

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/ed73a3dc-4b1d-4b86-b2e3-6162e3133ffd?fileName=image.png)  


  


Um caso Encaminhado é identificado com o preenchimento dos campos de Tabulação N1, Tabulação N2 e Tabulação N3.

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/43898aaa-85c5-43c5-96ab-988a6da1c852?fileName=image.png)  


  


As informações de “Encaminhamento Indevido” e “Justificativa do Encaminhamento Indevido” devem estar disponíveis na aba 

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/13686285-f0cd-478e-93bb-b7f3fefb9c76?fileName=image.png)  


  


As informações de “Encaminhamento Indevido” e “Justificativa do Encaminhamento Indevido” devem estar na Aba "Motivo do Contato":

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/22269b05-61f5-4de5-b202-2a899dd69bc9?fileName=image.png)  


  


Sobre o **fechamento do caso:**

  


O fluxo de encerramento do caso, para todos os casos de voz, foi criado com base na Tarefa no botão Encerra Atendimento:

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/cf8b288d-f40a-4390-8207-fccd7ff38f15?fileName=image.png)  


  


Com isso, os campos de “Encaminhamento Indevido” e “Justificativa do Encaminhamento Indevido” devem ser criados dentro desse modal e serem exibidos somente na situação do campo Tabulação N1 estar preenchido.

  


**  
**

**  
**
