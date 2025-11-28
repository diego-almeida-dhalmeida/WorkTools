---
id: "WI-215144"
title: "[Telefonia] Integração CTI Avaya - EPS ELO"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2023-02-02T14:51:18.367Z"
changed: "2025-03-07T18:22:56.4Z"
---
# WI-215144 - [Telefonia] Integração CTI Avaya - EPS ELO

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/215144](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/215144)

## 1. Identificação

- **ID/Ref:** WI-215144
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

**Cenário 01: Demanda da Integração**  


  


**Dado que** o aluno solicitou o transbordo do atendimento 

**Quando** a ligação for transferida para um atendente

**Então** A ligação deverá ser transferida para um atendente através do conector Avaya sem interrupções ou falhas perceptíveis.

  
Resultado esperado:  


  1. Transferência da ligação do aluno para o atendente da URA para o Salesforce 
  2. Seleção de uma atendente para o atendimento 
  3. Envio das informações do caso + atendente para o salesforce para o atendente da fila 



Resultado não esperado: 

  1. A transferência ser realizada sem as informações do caso 



**Cenário 02: Demanda da Integração**  


  


**Dado que**** ** o aluno solicitou o transbordo do atendimento

**Quando** o atendente abrir a cominicação com o aluno 

**Então** as seguintes informações deverão ser necessariamente atualizadas na tela do Caso:  


  


Fila de Atendimento do Caso;  


Tempo de Início do transbordo;  


Último Desfecho;  


Campo “Transbordou para Humano?”;  


Campo “Transbordo fora do horário”;  


Campo “Fechamento do atendimento na URA”. 

  


**Resultado esperado:**

  1. Todas as informações sendo transferidas de forma correta para os campos do Salesforce 



**Resultado não espero:**

  1. O não envio das informações para os campos do Salesforce 
  2. As informações não serem preenchidas corretamente 



**Cenário 03: Integração Avaya x Salesforce**  


  


**Dado** que eu sou um atendente

**Quando** o atender a ligação com o aluno

**Então** deverá ocorrer uma integração entre o Avaya e o Salesforce para direcionar o caso ao operador dentro do Salesforce e realizar a atualização de alguns parâmetros na tela de caso. As seguintes informações deverão ser necessariamente atualizadas na tela de Caso:

  


Proprietário do Caso;  


ID CTI;  


Fim do transbordo;  


Início do primeiro atendimento humano;  


Cálculo do tempo de atendimento na URA;  


Cálculo do tempo de espera.  


  


Além disso, a integração deverá ser responsável por abrir automaticamente a tela de atendimento do Salesforce para o operador humano, atribuído como proprietário do Caso.  


  


**Resultado esperado:**  


  * Preenchimentos correto de dos campos aqui apontados.
  * Atribuição do atendente escolhido como proprietário do caso.



**Resultado não esperado:**  


  * Falhas no preenchimento de dos campos aqui apontados.
  * A não atribuição do atendente escolhido como proprietário do caso
  * Deixas o caso com um proprietário diferente do atendente



  


**Cenário 04: Transferência de Atendimento**  


  


**Dado  **que eu sou um atendente

**Quando  **precisar transferir uma ligação para outro atendente

**Então  **deverá ocorrer uma integração entre o Avaya e o Salesforce para direcionar o caso para o outro operador dentro do Salesforce enviando as seguintes informações:

  


Proprietário do Caso;  


Fila de atendimento;  


Número de transferências.

  


Além disso, a integração deverá ser responsável por abrir automaticamente a tela de atendimento do Salesforce para o operador humano, atribuído como proprietário do Caso.  


O atendente que estava fazendo o atendimento anteriormente deverá ter sua tela de atendimento encerrada no momento que efetivar a transferência de atendimento.  


  


**Resultado esperado:**  


  * Preenchimentos correto de dos campos aqui apontados.
  * Atribuição do atendente escolhido como proprietário do caso.
  * Encerramento do atendimento por parte do operador que repassou o caso.



**Resultado não esperado:**  


  * Falhas no preenchimento de dos campos aqui apontados.
  * A não atribuição do atendente escolhido como proprietário do caso
  * Não encerrar o atendimento por parte do operador que repassou o caso.



**Cenário 05: Encerramento do Atendimento**  


  


**Dado  **que eu sou um atendente

**Quando  **precisar encerrar um atendimento utilizando o “Modal de Encerramento de Caso”, realizar a tabulação do caso e encerrar o atendimento via Salesforce,

**Então  **deverá ocorrer uma integração com o Avaya para finalizar o atendimento em andamento no Avaya. Esta ação será a responsável pela liberação da capacidade do operador de realizar um novo atendimento. 

  


**Resultado esperado:**  


  * Encerramento do caso ao se utilizar o "Modal de Encerramento de Caso"
  * Liberar o operador para a realização de outro atendimento



**Resultado não esperado:**  


  * Falhas no encerramento do atendimento
  * O operador não ficar liberado para outro atendimento. 



  


**Cenário 06: Queda na Ligação - Durante Atendimento Humano**  


  


**Dado  **que eu sou um atendente

**Quando**** ** uma ligação cair durante o meu atendimento

**Então** deverá ocorrer uma integração do Avaya com o Salesforce para sinalizar à plataforma do ocorrido e habilitar o operador a realização do procedimento de rechamada para retomar contato com o aluno. Este procedimento está descrito na [#215143](https://dev.azure.com/ArquiteturaEstacio/Atila%202.0/_workitems/edit/215143/)  
**E** a queda na ligação não implicará no fechamento automático do Caso se o aluno tiver demandado atendimento humano. A queda na ligação fechará o caso automaticamente apenas se tiver ocorrido na URA.

  


**Resultado esperado:**  


  * Encerramento do caso ao se utilizar o "Modal de Encerramento de Caso"
  * Liberar o operador para a realização de outro atendimento



**Resultado não esperado:**  


  * Falhas no encerramento do atendimento
  * O operador não ficar liberado para outro atendimento. 



  


**RN06 – Queda na Ligação - Durante Atendimento Humano**

Uma vez que ocorra uma queda na ligação com o aluno, não deverá ocorrer o fechamento automático do Caso.  


  


Deverá ocorrer uma integração do Avaya com o Salesforce para sinalizar à plataforma do ocorrido e habilitar o operador a realização do procedimento de rechamada para retomar contato com o aluno. Este procedimento está descrito na #215143 .


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu** , como Aluno  


**Quero** ser capaz de ser redirecionado ao atendimento humano na EPS ELO, por meio de integração com CTI Avaya

**Para obter** resolução ao meu Caso, quando o mesmo não puder ser resolvido na URA.  


  


Regras de Negócio:  
  


**RN01: Demanda da Integração**

Para um aluno que esteja navegando na URA ou no PA Virtual, que demandar a necessidade de falar com um atendente humano, deverá ocorrer uma integração com CTI Avaya para transferência do atendimento da URA para a EPS.  


  


A URA deverá fornecer à Avaya a informação da fila de atendimento para qual o Caso deverá ser direcionado, e a Avaya será responsável por direcionar o atendimento para algum operador cadastrado na fila de atendimento.  


  


**RN02: Integração URA x Salesforce**

Após o aluno demandar a transferência do atendimento, deverá ocorrer uma integração entre a URA e o Salesforce para atualização do Caso.  


  


As seguintes informações deverão necessariamente ser atualizadas na tela do Caso:  


  


Fila de Atendimento do Caso;  


Tempo de Início do transbordo;  


Último Desfecho;  


Campo “Transbordou para Humano?”;  


Campo “Transbordo fora do horário”;  


Campo “Fechamento do atendimento na URA”.  


As informações da navegação do aluno na URA deverão ser fornecidas ao Salesforce neste momento, para visualização do atendente humano, tais como desfecho obtido e chute oferecido.  
  


**RN03: Integração Avaya x Salesforce**

Após o atendimento ser transferido para o operador humano, deverá ocorrer uma integração entre o Avaya e o Salesforce para direcionar o caso ao operador dentro do Salesforce e realizar a atualização de alguns parâmetros na tela de caso.  


  


As seguintes informações deverão ser necessariamente atualizadas na tela de Caso:  


  


Proprietário do Caso;  


ID CTI;  


Fim do transbordo;  


Início do primeiro atendimento humano;  


Cálculo do tempo de atendimento na URA;  


Cálculo do tempo de espera.  


  


Além disso, a integração deverá ser responsável por abrir automaticamente a tela de atendimento do Salesforce para o operador humano, atribuído como proprietário do Caso.  
  


**RN04 – Transferência de Atendimento**

No cenário de demanda de transferência de atendimento de um operador para outro, deverá ocorrer integração entre o Avaya e o Salesforce para atualização do Caso com as seguintes informações:  


  


Proprietário do Caso;  


Fila de atendimento;  


Número de transferências.  


  


Além disso, a integração deverá ser responsável por abrir automaticamente a tela de atendimento do Salesforce para o operador humano, atribuído como o novo proprietário do Caso.  


  


O atendente que estava fazendo o atendimento anteriormente deverá ter sua tela de atendimento encerrada no momento que efetivar a transferência de atendimento.  


  


**RN05 – Encerramento do Atendimento**

Para encerrar um atendimento em andamento, um operador deverá utilizar o “Modal de Encerramento de Caso”, disponível na ferramenta do Salesforce.  


  


Após o operador utilizar o botão de encerramento de atendimento, realizar a tabulação do caso e encerrar o atendimento via Salesforce, deverá ocorrer uma integração com o Avaya para finalizar o atendimento em andamento no Avaya. Esta ação será a responsável pela liberação da capacidade do operador de realizar um novo atendimento.  


  


**RN06 – Queda na Ligação - Durante Atendimento Humano**

Uma vez que ocorra uma queda na ligação com o aluno, não deverá ocorrer o fechamento automático do Caso.  


  


Deverá ocorrer uma integração do Avaya com o Salesforce para sinalizar à plataforma do ocorrido e habilitar o operador a realização do procedimento de rechamada para retomar contato com o aluno. Este procedimento está descrito na #215143 .  


  


A queda na ligação não implicará no fechamento automático do Caso se o aluno tiver demandado atendimento humano. A queda na ligação fechará o caso automaticamente apenas se tiver ocorrido na URA.
