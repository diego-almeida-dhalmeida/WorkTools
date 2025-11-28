---
id: "WI-376192"
title: "[Class Manager] WhatsApp - Comunicação Ativa"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2024-05-15T18:40:44.35Z"
changed: "2025-01-23T09:40:39.193Z"
---
# WI-376192 - [Class Manager] WhatsApp - Comunicação Ativa

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/376192](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/376192)

## 1. Identificação

- **ID/Ref:** WI-376192
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

**  
RN01: Disparo de mensagem ativa de WhatsApp**

DADO QUE: Um atendente está associado a uma fila responsável por uma Carteira de Atendimento. QUANDO: O atendente enviar uma comunicação ativa para um aluno via WhatsApp. ENTÃO: A mensagem deverá ser enviada para o aluno dentro da Carteira de Atendimento. RESULTADO ESPERADO: A mensagem é entregue ao aluno e registrada no sistema. RESULTADO NÃO ESPERADO: A mensagem não é entregue ou é enviada para um aluno fora da Carteira de Atendimento. 

**RN02: Disparo de mensagem ativa de WhatsApp para múltiplos alunos**

DADO QUE: Um atendente está associado a uma fila responsável por uma Carteira de Atendimento. QUANDO: O atendente enviar comunicações ativas simultâneas para um grupo de alunos via WhatsApp. ENTÃO: As mensagens deverão ser enviadas para os alunos dentro da Carteira de Atendimento. RESULTADO ESPERADO: As mensagens são entregues aos alunos e registradas no sistema. RESULTADO NÃO ESPERADO: As mensagens não são entregues ou são enviadas para alunos fora da Carteira de Atendimento. 

**RN03: Críticas de envio - aluno único**

**Cenário 1: Aluno fora da carteira** DADO QUE: Um aluno está fora da Carteira de Atendimento do atendente. QUANDO: O atendente tentar enviar uma mensagem para o aluno. ENTÃO: A mensagem não deverá ser enviada e uma janela de erro deverá aparecer. RESULTADO ESPERADO: Mensagem de erro "Este aluno está fora da sua carteira de atendimento. Revise o responsável pela carteira antes de seguir com a mensagem." é exibida e o envio é bloqueado. RESULTADO NÃO ESPERADO: A mensagem é enviada para o aluno fora da Carteira de Atendimento. 

**Cenário 2: Aluno com caso em aberto** DADO QUE: Um aluno tem casos em aberto. QUANDO: O atendente tentar enviar uma mensagem para o aluno. ENTÃO: A mensagem não deverá ser enviada e uma janela de erro deverá aparecer. RESULTADO ESPERADO: Mensagem de erro "Não é possível enviar mensagem no momento, os seguintes atendimentos estão em aberto. [Lista de casos]" é exibida e o envio é bloqueado. RESULTADO NÃO ESPERADO: A mensagem é enviada apesar dos casos em aberto. 

**Cenário 3: Aluno com messaging session em andamento** DADO QUE: Um aluno tem uma messaging session em andamento. QUANDO: O atendente tentar enviar uma mensagem para o aluno. ENTÃO: A mensagem não deverá ser enviada e uma janela de erro deverá aparecer. RESULTADO ESPERADO: Mensagem de erro "Esta matrícula tem uma sessão em andamento no momento com o número cadastrado na conta. Tente novamente mais tarde. [lista de msg]" é exibida e o envio é bloqueado. RESULTADO NÃO ESPERADO: A mensagem é enviada apesar da sessão em andamento. 

**RN03: Críticas de envio - múltiplos alunos**

**Cenário 1: Alunos fora da carteira** DADO QUE: Alguns alunos estão fora da Carteira de Atendimento do atendente. QUANDO: O atendente tentar enviar uma mensagem para esses alunos. ENTÃO: A mensagem não deverá ser enviada e uma janela de erro deverá aparecer. RESULTADO ESPERADO: Mensagem de erro "[número de alunos] alunos estão fora da sua carteira de atendimento. Revise o responsável por suas carteiras antes de seguir com a mensagem.[Lista de matrículas]" é exibida e o envio é bloqueado para esses alunos, com opção de "Enviar para matrículas válidas". RESULTADO NÃO ESPERADO: A mensagem é enviada para alunos fora da Carteira de Atendimento. 

**Cenário 2: Alunos com casos em aberto** DADO QUE: Alguns alunos têm casos em aberto. QUANDO: O atendente tentar enviar uma mensagem para esses alunos. ENTÃO: A mensagem não deverá ser enviada e uma janela de erro deverá aparecer. RESULTADO ESPERADO: Mensagem de erro "Não é possível enviar mensagem no momento para [número de matrículas] matrículas, os seguintes atendimentos estão em aberto no momento. [Lista de casos]" é exibida e o envio é bloqueado para esses alunos, com opção de "Enviar para matrículas válidas". RESULTADO NÃO ESPERADO: A mensagem é enviada apesar dos casos em aberto. 

**Cenário 3: Alunos com messaging session em andamento** DADO QUE: Alguns alunos têm uma messaging session em andamento. QUANDO: O atendente tentar enviar uma mensagem para esses alunos. ENTÃO: A mensagem não deverá ser enviada e uma janela de erro deverá aparecer. RESULTADO ESPERADO: Mensagem de erro "Não é possível enviar mensagem no momento para [número de matrículas] matrículas, as seguintes sessões estão em andamento no momento com o número cadastrado na conta. [lista de msg]" é exibida e o envio é bloqueado para esses alunos, com opção de "Enviar para matrículas válidas". RESULTADO NÃO ESPERADO: A mensagem é enviada apesar da sessão em andamento. 

**RN04: Interação do aluno com a comunicação ativa**

**Cenário 1: Aluno interage dentro do período limite** DADO QUE: O aluno recebeu a comunicação ativa. QUANDO: O aluno interage com a comunicação dentro do período limite da sessão. ENTÃO: O BOT deverá seguir com o processo de transbordo detalhado na estória #375921, partindo do ponto em que o aluno escolhe falar com o atendente Class Manager. RESULTADO ESPERADO: O processo de transbordo é iniciado corretamente. RESULTADO NÃO ESPERADO: O processo de transbordo não é iniciado ou ocorre de forma incorreta. 

**Cenário 2: Aluno não interage dentro do período limite** DADO QUE: O aluno recebeu a comunicação ativa. QUANDO: O aluno não interage com a comunicação dentro do período limite da sessão. ENTÃO: O caso deverá ser encerrado. RESULTADO ESPERADO: O caso é encerrado corretamente. RESULTADO NÃO ESPERADO: O caso permanece aberto ou é encerrado incorretamente. 

**RN05: Marcações no caso**

DADO QUE: Uma comunicação ativa é enviada para um aluno. QUANDO: O caso é criado ou atualizado. ENTÃO: As seguintes marcações deverão ser feitas no caso: 

  * Contato Ativo 
  * Atendente Contato Ativo 
  * Telefone Contato Ativo 
  * Carteira de atendimento (preenchido com a carteira, campo lookup) 
  * Flag Class Manager (marcar para todos os casos de comunicação ativa enviada a partir de um encarteirador Class Manager) 
  * Tabulação (Aluno sem interação, Motivo N1: Comunicação Ativa, Motivo N2: Sem interação) RESULTADO ESPERADO: As marcações são feitas corretamente conforme descrito. RESULTADO NÃO ESPERADO: As marcações são feitas incorretamente ou não são feitas. 



**RN06: Não disparo da pesquisa de satisfação**

DADO QUE: Um atendimento é iniciado por comunicação ativa. QUANDO: O atendimento é encerrado, seja no BOT ou com atendimento humano. ENTÃO: A pesquisa de satisfação não deverá ser disparada. RESULTADO ESPERADO: A pesquisa de satisfação não é enviada após o encerramento do atendimento. RESULTADO NÃO ESPERADO: A pesquisa de satisfação é enviada indevidamente após o encerramento do atendimento.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu  **como aluno de qualquer marca YDUQS que faça parte de uma carteira

**Quero  **ter a possibilidade de receber comunicações ativas via WhatsApp do Class Manager responsável pela minha carteira

**Para  **receber um atendimento mais qualificado

  
  


_REGRAS DE NEGÓCIO:_  
_Fluxo geral de navegação no BOT em anexo_ _( "Class Manager - Comunicação ativa")____ou através do link<https://miro.com/app/board/uXjVKSOrngE=/> (no card "WhatsApp - Comunicação Ativa")_

 

**  
**

****RN01: Disparo de mensagem ativa de WhatsApp**  
**

Os atendentes associados às filas responsáveis por alguma Carteira de Atendimento deverão poder enviar comunicações ativas para os alunos das suas respectivas carteiras via WhatsApp. 

  


****RN02: Disparo de mensagem ativa de WhatsApp para múltiplos alunos**  
**

Os atendentes associados às filas responsáveis por alguma Carteira de Atendimento deverão poder enviar comunicações ativas de forma simultânea para um grupo de alunos das suas respectivas carteiras via WhatsApp.

  


**RN03: Críticas de envio - aluno único**

Antes de enviar uma uma mensagem, a algumas regras deverão ser respeitadas.  
Caso algum dos critérios não seja identificados, a mensagem não será enviada e uma janela de erro deverá aparecer para o atendente.  


  


**Critérios para impossibilidade de envio para:**  


  * **Alunos fora da carteira**
    * Gatilho: Clicar no botão "Enviar mensagem" na tela da matrícula 
    * Mensagem de crítica: "Este aluno está fora da sua carteira de atendimento. Revise o responsável pela carteira antes de seguir com a mensagem."
    * Opções: botão de fechar 
  * **Alunos com caso em aberto ( <> fechado ou fechado incorretamente)**
    * Gatilho: Clicar no botão de enviar mensagem no modal de envio 
    * Mensagem de crítica: "Não é possível enviar mensagem no momento, os seguintes atendimentos estão em aberto. [Lista de casos]"
    * Opções: botão de fechar  

  * **Alunos com messaging session em andamento ( <> fechado)**
    * Gatilho: Clicar no botão de enviar mensagem no modal de envio 
    * Mensagem de crítica: "Está matrícula tem uma sessão em andamento no momento com o número cadastrado na conta. Tente novamente mais tarde. [lista de msg]"
    * Opções: botão de fechar  




  


****RN03: Críticas de envio - múltiplos alunos****

Antes de enviar uma uma mensagem, a algumas regras deverão ser respeitadas.  
Caso algum dos critérios não seja identificados, a mensagem não será enviada e uma janela de erro deverá aparecer para o atendente.  


  


**Critérios para impossibilidade de envio para:**  


  * **Alunos fora da carteira**
    * Gatilho: Clicar no botão "Enviar mensagem" na tela da matrícula
    * Mensagem de crítica: "[número de alunos] alunos estão fora da sua carteira de atendimento. Revise o responsável por suas carteiras antes de seguir com a mensagem.[Lista de matrículas]"
    * Opções: 
      * botão de fechar 
      * botão "Enviar para matrículas válidas"
  * **Alunos com caso em aberto ( <> fechado ou fechado incorretamente)**
    * Gatilho: Clicar no botão de enviar mensagem no modal de envio 
    * Mensagem de crítica: "Não é possível enviar mensagem no momento para [número de matrículas] matrículas, os seguintes atendimentos estão em aberto no momento. [Lista de casos]"
    * Opções: 
      * botão de fechar 
      * botão "Enviar para matrículas válidas"
    *   

  * **Alunos com messaging session em andamento ( <> fechado)**
    * Gatilho: Clicar no botão de enviar mensagem no modal de envio 
    * Mensagem de crítica: "Não é possível enviar mensagem no momento para [número de matrículas] matrículas, as seguintes sessões estão em andamento no momento com o número cadastrado na conta. [lista de msg]"
    * Opções:  

      * botão de fechar 
      * botão "Enviar para matrículas válidas"



  


[número de alunos] = número de alunos que não poderão receber a mensagem por terem atingido um critério de impossibilidade de envio  


  


**RN04: Interação do aluno com a comunicação ativa**

Após receber a comunicação ativa, o caso deverá ficar em espera aguardando a resposta do aluno, podendo ocorrer 2 cenários: 

  * **Aluno interage com a comunicação dentro do período limite da sessão.**  
O BOT deverá então seguir com o processo de transbordo detalhado na estória [#375921](https://dev.azure.com/ArquiteturaEstacio/Atila%202.0/_workitems/edit/375921/), partindo do ponto em que o aluno escolhe falar com o atendente Class Manager  

  * **Aluno não interage com a comunicação dentro do período limite da sessão.  
** Encerrar o caso  




  


****RN05: Marcações no caso**  
**

  * **Contato Ativo** ~~Encantamento~~  (remover "Encantamento" do nome")
  * **Atendente Contato Ativo  
**
  * **Telefone Contato Ativo**
  * **Carteira de atendimento**  
Caso aluno esteja vinculado à alguma carteira de atendimento, o campo deverá ser preenchido com a carteira (campo lookup)**  
**
  * **Flag Class Manager**  
Marcar para todos os casos de comunicação ativa enviada a partir de um encarteirador Class Manager
  * **Tabulação**  


    * Aluno sem interação
      * Motivo N1: Comunicação Ativa
      * Motivo N2: Sem interação



**  
**

**RN06: Não disparo da pesquisa de satisfação**

A pesquisa de satisfação não deverá ser disparada após atendimento iniciado por comunicação ativa, tendo ele sido encerrado no BOT ou com atendimento humano.

  


**  
**
