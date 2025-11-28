---
id: "WI-232953"
title: "[Telefonia] Integração - Jornada do Aluno Telefonia (Atualização do caso Sales Force com dados da URA)"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Patricia Uruguai"
created: "2023-03-27T13:51:09.433Z"
changed: "2025-03-10T16:48:09.207Z"
---
# WI-232953 - [Telefonia] Integração - Jornada do Aluno Telefonia (Atualização do caso Sales Force com dados da URA)

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/232953](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/232953)

## 1. Identificação

- **ID/Ref:** WI-232953
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

******Cenário 01: Finalização de Caso no DMA******

**Dado**  que eu sou um Aluno

**Quando**  eu demandar a finalização do meu Caso no DMA

**Então**  terei a atualização de informações na tela do Caso no Salesforce referente ao meu atendimento.

  


**Resultado esperado:  **Atualização da Tela de Caso no Salesforce , conforme parâmetros apontados na RN01  


  


**Resultados não esperados:  **

  * Não atualização da tela de Caso no Salesforce;
  * Atualização de parâmetros diferentes dos apontados na RN01 na Tela de Caso no Salesforce.



******Cenário 02: Transferência de atendimento do DMA para a URA******

**Dado**  que eu sou um Aluno que me identifiquei no DMA

**Quando**  eu demandar a transferência do meu Caso do DMA para a URA

**Então**  terei a atualização de informações na tela do Caso no Salesforce referente ao meu atendimento.

  


**Resultado esperado:  **Atualização da Tela de Caso no Salesforce, conforme parâmetros apontados na RN02  


  


**Resultados não esperados:  **

  * Não atualização da tela de Caso no Salesforce;
  * Atualização de parâmetros diferentes dos apontados na RN02 na Tela de Caso no Salesforce



******Cenário 03: Abandono de Caso na URA******

**Dado**  que eu sou um Aluno que demandei atendimento na URA

**Quando**  eu realizar o abandono do meu Caso na URA

**Então**  terei a atualização de informações na tela do Caso no Salesforce referente ao meu atendimento.

  


**Resultado esperado:  **Atualização da Tela de Caso no Salesforce, conforme parâmetros apontados na RN03

  


**Resultados não esperados:  **

  * Não atualização da tela de Caso no Salesforce;
  * Atualização de parâmetros diferentes dos apontados na RN03 na Tela de Caso no Salesforce 



******Cenário 04: Retenção de Caso na URA******

**Dado**  que eu sou um Aluno que demandei atendimento na URA

**Quando**  eu conseguir sanar minhas necessidades na URA e não demandar atendimento humano

**Então**  terei a atualização de informações na tela do Caso no Salesforce referente ao meu atendimento.

  


**Resultado esperado:  **Atualização da Tela de Caso no Salesforce, conforme parâmetros apontados na RN04

  


**Resultados não esperados:  **

  * Não atualização da tela de Caso no Salesforce;
  * Atualização de parâmetros diferentes dos apontados na RN04 na Tela de Caso no Salesforce 

  


******Cenário 05: Transbordo ao Atendimento Humano******

**Dado**  que eu sou um Aluno que demandei atendimento na URA

**Quando**  eu não conseguir sanar minhas necessidades na URA e demandar atendimento humano

**Então**  terei a atualização de informações na tela do Caso no Salesforce referente ao meu atendimento.

  


**Resultado esperado:  **Atualização da Tela de Caso no Salesforce, conforme parâmetros apontados na RN05

  


**Resultados não esperados:  **

  * Não atualização da tela de Caso no Salesforce;
  * Atualização de parâmetros diferentes dos apontados na RN05 na Tela de Caso no Salesforce


## 9. Descrição (Abaixo vem do Azure DevOps)

****

**

Eu como aluno ou candidato  
Quando realizar atendimento via modal telefônico.

Devo ter as informações do meu Caso no Salesforce atualizada à medida que ocorra o progresso de status no atendimento via modal telefônico. 

  


Regras de Negócio:

  


RN01: Abandono de Caso na URA

Para um aluno que tenha seu atendimento direcionado à URA, caso seja fornecido ao aluno a mesma gravação por três vezes sequenciais, sem que haja qualquer tipo de interação por parte do aluno, será configurado abandono do atendimento. Caso o aluno desligue no meio da navegação, também será configurado abandono do atendimento. O Caso associado ao atendimento deverá ter os seguintes parâmetros atualizados na Tela do Salesforce:

  * Data e Hora de mudança de status (Também configurará a data e hora de abandono do Caso);

  * Alteração do Status do Caso para Fechado;

  * Chute (se existente)

  * Deverá ocorrer marcação de Caso Abandonado;

  * Registro do Momento do Abandono do Caso;

    * Etapa do processo - Momento da navegação na URA que aconteceu o abandono

  * Campo de "Transbordou para Humano?" atualizado para Não.




RN02: Retenção de Caso na URA

Para um aluno que tenha seu atendimento direcionado à URA, caso o aluno realize ações que configurem retenção e encerramento de seu atendimento na própria URA (Obtenção de um desfecho sem solicitar transbordo), o Caso associado ao atendimento deverá ter os seguintes parâmetros atualizados na Tela do Salesforce:

  * Data e Hora de mudança de status (Também configurará a data e hora de fechamento do Caso);

  * Alteração do Status do Caso para Fechado;

  * Registro do Desfecho final obtido pelo aluno na URA na Tela de Caso;

  * Campo de "Transbordou para Humano?" atualizado para Não.

  * Chute




RN03: Interação com o PA Virtual

Para um aluno que tenha seu atendimento direciona ao PA Virtual, caso o aluno seja retido no mesmo, sem necessidade ou pedido de transbordo para atendimento humano, o caso associado ao atendimento deverá ter os seguintes parâmetros atualizados na Tela do Salesforce:

  * Data e Hora de mudança de status (Também configurará a data e hora de fechamento do Caso);

  * Alteração do Status do Caso para Fechado;

  * Campo de "Transbordou para Humano?" atualizado para Não.

  * Registro do Desfecho final obtido pelo aluno na Tela de Caso




RN04: Transbordo para Atendimento Humano

Para um aluno que tenha seu atendimento direcionado à URA ou PA Virtual, caso o aluno atinja um desfecho e demande que a continuidade de seu atendimento seja realizada por um agente humano, o Caso associado ao atendimento deverá ter os seguintes parâmetros atualizados na Tela do Salesforce:

  * Data e Hora de mudança de status

    * Momentos de transbordo

  * Atualização do Status do Caso;

  * Atualização do Proprietário do Caso;

  * Campo de "Transbordou para Humano?" atualizado para Sim.




RN05: Identificação do Aluno

Durante a identificação do Aluno, a URA realizará uma integração com o Salesforce para buscar o número da matrícula informado pelo aluno.

Neste momento, deverá ocorrer uma integração para que o Salesforce busque no SIA as informações necessárias para realização de chutes pela URA, para alimentação das mesmas na URA. Estas informações serão incluídas em planilha anexa.

**
