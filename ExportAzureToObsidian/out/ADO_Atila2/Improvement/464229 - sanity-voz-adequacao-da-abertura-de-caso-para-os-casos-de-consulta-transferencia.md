---
id: "WI-464229"
title: "[Sanity | VOZ] - Adequação da abertura de caso para os casos de consulta/transferencia"
type: "Improvement"
state: "Resolved"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 07-2025-Relacionamento"
assignedTo: "Marcos Vinicius Almeida da Silva"
created: "2025-02-27T02:52:53.01Z"
changed: "2025-07-31T19:49:06.55Z"
---
# WI-464229 - [Sanity | VOZ] - Adequação da abertura de caso para os casos de consulta/transferencia

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/464229](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/464229)

## 1. Identificação

- **ID/Ref:** WI-464229
- **Tipo:** Improvement
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

- 


## 9. Descrição (Abaixo vem do Azure DevOps)

Nova solução atribuída para a história em 24/04/2025:  


  


**Eu como** operador do call center com perfil de Atendente Voz - Aluno 

**Quero** que um caso filho seja criado e exibido (popado) quando realizar uma consulta, ou transferência para um supervisor, ou operador e o modal de encerramento seja exibido ao final do atendimento 

**Para que** o fluxo de atendimento seja realizado viabilizando seu rastreamento com os operadores do Call Center  
  
**OBS:** Essa história não se aplica para casos em que ocorra um reconexão e posteriormente a necessidade de uma consulta ou transferência.  
  
Novos cenários que devem ser considerados na história:  
  
**1\. Realização da Consulta**

**  
**

_Atendente 1:    
_Com aluno na linha e caso pai aberto em tela, atendente aperta botão de consulta (OutboundEvent + AnswerEvent - sem asaiuui).  
  


_Atendente 2 / Supervisor:_    
Ligação é atendida (IncomingEvent + AnswerEvent - com asauui).  


Salesforce Cria e abre em tela caso filho vinculado ao pai.  


  


**2.1 Aceite da consulta:  
**  


_Atendente 1:    
_Realiza a transferência dentro da consulta (ReleaseEvent/Transfer).

Caso pai deve ser marcado como transferido e modal de tabulação deve abrir automaticamente.  


  


__Atendente 2 / Supervisor:_  _

Atendente 1 sai da linha e inicia atendimento ao aluno.  
Caso filho já está aberto em tela.  


Realiza atendimento ao aluno 

Se precisar de nova consulta/transferencia, repete os passos acima. 

  


**2.2 Rejeição da consulta  
**  


_Atendente 1:_    
Desliga a consulta (ReleaseEvent/Drop), aluno é retornado em linha.

Caso pai continua aberto em tela e atendimento segue.  


Para realizar nova consulta, segue o procedimento novamente.  


  


___Atendente 2 / Supervisor:_  __

Ligação é desconectada (ReleaseEvent/Drop)  


Modal de tabulação abre automaticamente para atendente.  
  
**3\. Transferência direta**

  
_Atendente 1:_  


Com aluno na linha e caso pai aberto em tela, seleciona o botão de transferência e seleciona a fila (ReleaseEvent/Transfer).  


Caso pai deve ser marcado como transferido e modal de tabulação deve abrir automaticamente.  
  


_Atendente 2 /___Supervisor___ :_  


Ligação é atendida (IncomingEvent + AnswerEvent - com asauui).  


Salesforce Cria e abre em tela caso filho vinculado ao pai.  
  


****4\. Encerramento do Atendimento  
  
** ____Atendente 1 /  _Atendente 2 / Supervisor:_ __  


Ao finalizar, realiza transferência para PSAT (ReleaseEvent/Transfer)  


Modal de tabulação abre automaticamente para atendente. 

  
**  


  


\----------------------------------------------------------------------------------- 

Histórico anterior a nova solução elaborado:  
  
Problema na "consulta" gerando abertura de caso filho  
  


Está sendo criado de forma incorreta um caso no momento da consulta com o Operador (Atendente-Voz Aluno), ou Supervisor (Atendente-Voz Aluno com papel de Gestor Voz).

  


Temos como ocorrência de exemplo do problema os casos 08113930 (Pai), dando origem ao caso 8114096 (filho). 

  


O correto é a criação do caso somente no momento da Transferência. 

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/b264f583-ce7a-45df-9215-c378772aaa70?fileName=image.png)  


  


Histórico do caso 

![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/7d1ce752-a351-4a11-abe0-b1ac6ba23ff6?fileName=image.png)  


  


  


  


**_  
  
Copied from Repro Steps when changed from Bug Fix to Improvement_**  
** _  
  
Copied from Description when changed from User Story to Bug Fix_**  


O caso 08051725 foi criado de forma incorreta no momento da Consulta do Operador Konecta com um Operador Elo de Retenção. E no momento da transferência foi criado um caso com a indicação de "Privilégios Insuficientes". O mesmo ocorreu em uma transferência entre Operador e Supervisor. 

  


O correto é a criação do caso somente no momento da Transferência. A consulta não deve disparar o modal para o operador que está realizando a transferência e nem a criação de caso para o operador ou supervisor que está recebendo o caso. 

  


  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/cd438212-9d89-4dae-a90c-0e47dbb935da?fileName=image.png)  


  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/14b24480-8ea4-4baf-b639-1cae9b47a084?fileName=image.png)  


  


Transferência entre Operador e Supervisor: 

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/eafa8169-0d20-4ad9-be4c-bdeb6fc3675a?fileName=image.png)  


  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/1d3c1b39-8834-4e60-8eaa-1427f9b0d900?fileName=image.png)
