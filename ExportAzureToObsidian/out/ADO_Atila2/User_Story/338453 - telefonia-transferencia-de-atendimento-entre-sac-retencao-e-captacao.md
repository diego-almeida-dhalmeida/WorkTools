---
id: "WI-338453"
title: "[Telefonia] Transferência de atendimento entre SAC, Retenção e Captação"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 01-2024-CoERelac"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2024-01-22T22:03:28.313Z"
changed: "2025-04-15T17:59:44.05Z"
---
# WI-338453 - [Telefonia] Transferência de atendimento entre SAC, Retenção e Captação

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/338453](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/338453)

## 1. Identificação

- **ID/Ref:** WI-338453
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

**Cenário 01:  Transferência em Voz: Sac, Retenção e Captação**

**Dado que**  uma ligação receptiva que inicie em SAC-Voz ou Captação-Voz 

**Quando** a ligação for transbordada para atendimento humano e houver necessidade de transferência 

**Então** deverá ser possível o atendente transferir para Retenção-Voz, e vice-versa, deverá ser possível transferir de Retenção-Voz para SAC-Voz ou Captação-Voz

 

**Resultado esperado:**

  1. Permitir transferência Retenção-Voz para SAC-Voz ou Captação-Voz; 
  2. Permitir transferência SAC-Voz ou Captação-Voz para Retenção-Voz; 
  3. Quando houver a transferência entre os tipos de registro, um novo caso filho deve ser aberto; 
  4. O status do caso pai deve ser mudado para "Transferência" até último caso do atendimento fechar (caso filho);
  5. A tela do atendente deve aparecer com os campos corretos de retenção, caso o atendente de retenção receba uma ligação vindo de SAC-VOZ; 
  6. Permitir ter mais de uma transferência, com todos os casos relacionados a um atendimento, conectados como caso pai/filho/neto 



 

**Resultados não esperados:**

A NEGAÇÃO de todos os casos indicados como ESPERADOS.

** **

**Cenário 02: Registro de atendimentos com transferência - caso pai**

**Dado que** haja transferência entre os 3 tipos de registro (SAC-Voz, Retenção-Voz, Captação-Voz) 

**Quando** ocorrer a transferência de um caso pai 

**Então** teremos o registro de atendimentos com transferência no caso pai 

** **

**Resultado esperado:**

  1. O caso pai (caso original) deve ser tabulado normalmente e o atendente deve selecionar o botão de “Transferência”, permitindo transferir o atendimento para qualquer fila; 
  2. Todo o caso filho deve estar registrado no caso pai (todos os casos conectados); 
  3. A partir do momento que ocorrer a transferência com sucesso, o status do caso deve ser alterado para “Transferência”, e será fechado com esse status; 
  4. O tempo total dos atendimentos dessa sequência de ligações deve ficar registrado no primeiro caso (caso pai original). 



**  
**

**Resultados não esperados:**

A NEGAÇÃO das 4 etapas citadas para o registro de atendimentos no caso pai; 

Permitir que o atendente transfira o atendimento para qualquer fila, depois que o apertar o botão de ‘encerrar atendimento’. 

 

**Cenário 03: Registro de atendimentos com transferência - caso filho**

**Dado que** haja transferência do caso pai para caso filho 

**Quando** ocorrer a transferência para um caso filho 

**Então**  deve ser aberto um novo caso com informações do caso original 

 

**Resultado esperado:**

  1. Deve ser aberto um novo caso filho no tipo de registro que foi transferido com informações do caso de origem (informações do aluno, matrícula e número do caso pai) com direcionamento para o caso; 
  2. Os casos que forem para SAC, Retenção e Captação, devem ter a origem registrada com identificação “SAC-Voz”, “Retenção-Voz” e "Captação-Voz" respectivamente; 
  3. Deve ficar registrada a relação entre todos os casos envolvidos na transferência (com possibilidade de haver mais de uma transferência): 
     1. O caso original ficar registrado como caso pai; 
     2. O caso filho ter o caso pai registrado nele. 
  4. As informações da navegação na URA devem ficar somente no caso pai. 



** **

**Resultados não esperados:**

A NEGAÇÃO das 4 situações citadas para o registro de atendimentos no caso filho; 

** **

**Cenário 04: Botão para pedir a transferência**

**Dado que** o atendente necessite fazer uma transferência para outra fila de atendimento 

**Quando** clicar no botão para realizar a transferência para outra fila que esteja liberada no seu perfil de atendimento (limitado no momento para filas de VOZ de SAC para Retenção) 

**Então** O atendente deve conseguir escrever uma pequena descrição explicando o motivo da transferência. 

** **

**Resultado esperado:**

Clicar no botão para realizar a transferência e escrever obrigatoriamente, uma pequena descrição explicando o motivo da transferência 

**Resultados não esperados:**

A NEGAÇÃO dos casos indicados como ESPERADOS;

** **

**Cenário 05: Mensagem de transferência**

**Dado que** o atendente faça uma transferência para outra fila de atendimento 

**Quando** o outro atendente receber essa solicitação de transferência com a descrição do motivo 

**Então** Poderá aceitar ou rejeitar a transferência. 

 

**Resultado esperado:**

  1. Na tela do atendente que o caso foi transferido, deve abrir um PopUp com a pequena descrição do atendente anterior para ele entender o motivo da transferência, e os botões com opções de "Aceitar" ou "Rejeitar" a transferência. 
  2. Para Transferência: 
     1. **Aceita** : um novo caso deve ser aberto no novo tipo de registro com a origem correta; 
     2. **Rejeitada** : o caso antigo deve se manter aberto sem a criação de um novo. 



** **

**Resultados não esperados:**

A NEGAÇÃO de todos os casos indicados como ESPERADOS.

** **

**Cenário 06: Transferência de proprietário**

**Dado que** haja necessidade do atendente fazer uma transferência do atendimento 

**Quando** não houver fila para transferência onde os dois atendentes o atendente que está transferindo e o que está recebendo 

**Então** deve haver um momento de conferência para os dois atendentes (que está transferindo e o que está recebendo), possam se comunicam SEM o aluno, para melhor atendimento


## 9. Descrição (Abaixo vem do Azure DevOps)

****

****

**

**

**Eu****como** atendente do Call Center de VOZ  
Quando houver um atendimento do canal  
Quero ter a possibilidade de transferir o meu atendimento para outras áreas (retenção, captação e sac) e ter o atendimento registrado no Salesforce.  
  
**RN01: Transferência em Voz: Sac, Retenção e Captação  
****  
**Caso uma ligação inicie em SAC Voz ou Captação, deve ser possível transferir para Retenção-Voz e vice-versa. Essa necessidade de transferência entre tipos de registros está descrita na US[#201498](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_workitems/edit/201498) RN07, adicionando Retenção, que não está citada na US.  
  
Sempre que houver uma transferência entre os tipos de registro, um novo caso (caso filho) deve ser aberto, sempre sendo atrelado ao caso pai como detalhado na RN02. O status do caso pai deve ser mudado para "Transferência" até o último caso 'filho'/último caso do atendimento fechar. 

  


Caso ocorra essa transferência para um tipo de registro diferente, a tela do atendente deve mudar para a tela correspondente. Por exemplo, se um atendente de retenção receber uma ligação vindo de SAC-VOZ, a tela do atendente deve aparecer com os campos corretos de retenção. 

  


É importante ressaltar que deve ser possível ter até mais de uma transferência. Por exemplo, um caso pai pode ter um caso filho e um caso neto. Todos os casos relacionados a um atendimento devem estar conectados.

  


RN02: Registro de atendimentos com transferência - caso pai

  


Se ocorrer uma transferência entre os 3 tipos de registro (SAC-Voz, Retenção-Voz, Captação-Voz), as seguintes etapas devem acontecer no caso pai:

  1. O caso pai (caso original) deve ser tabulado normalmente e ao invés de apertar o botão de encerrar atendimento, o atendente deve selecionar o botão de transferência. Ele deve conseguir transferir para qualquer fila.

  2. Todo o caso filho deve estar registrado no caso pai.

  3. O status do caso deve ser “Transferência” a partir do momento que ocorreu a transferência com sucesso. O caso será fechado com esse status.

  4. O tempo total dos atendimentos dessa sequência de ligações deve ficar registrado no primeiro caso (caso pai original).


  


RN03: Registro de atendimentos com transferência - caso filho

  1. Deve ser aberto um novo caso no tipo de registro que foi transferido com as seguintes informações do caso original:

     1. Informações do aluno

     2. Informações da matrícula

     3. Número do pai com direcionamento para o caso 

  2. O caso aberto deve ter o campo “Origem” atualizado com a informação correta como descrito na US [#338443](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_workitems/edit/338443) RN02. 

  3. A relação entre todos casos envolvidos na transferência deve ficar registrada:

     1. O caso original deve ficar registrado como caso pai.

     2. o caso filho deve sempre ter o caso pai registrado nele. 


  


É importante ressaltar que deve ser possível ter mais de uma transferência. Todos os casos relacionados a um atendimento devem estar conectados. No caso pai deve sempre aparecer o caso filho e no caso filho deve sempre aparecer o caso pai. 

  


As informações da navegação na URA devem ficar somente no caso pai. 

  


RN04: Botão para pedir a transferência

Na tela do atendente (de todos os tipos de registro) deve aparecer um botão de transferência no modal de encerramento com a possibilidade de transferir para outra fila de atendimento (captação, retenção, etc).

  


O atendente deve conseguir escrever uma pequena descrição explicando o motivo da transferência. 

  


RN05: Mensagem de transferência

Na tela do atendente deve abrir um popup com a opção de aceitar ou rejeitar a transferência. Nesse popup deve ter a descrição do atendente anterior para ele entender o motivo da transferência. Embaixo o atendente deve ter ter os botões de Aceitar e Rejeitar.

  


Se a transferência for aceita, um novo caso deve ser aberto no novo tipo de registro com a origem correta. Se a transferência for rejeitada, o caso antigo deve se manter aberto sem a criação de um novo. 

  


  


RN06: Transferência de proprietário

Deve haver um momento de conferência quando não houver fila onde os dois atendentes (o que está transferindo e o que está recebendo) se comunicam para melhor atender o aluno.
