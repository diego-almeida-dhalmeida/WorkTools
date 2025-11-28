---
id: "WI-204337"
title: "[Telefonia] Criação do Caso"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2022-12-23T13:24:27.513Z"
changed: "2025-03-07T18:04:20.15Z"
---
# WI-204337 - [Telefonia] Criação do Caso

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/204337](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/204337)

## 1. Identificação

- **ID/Ref:** WI-204337
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

**Cenário 01:  Logado como Atendimento de Voz para receber ligação do aluno**

**  
**

**DADO QUE:  **O atendente de voz está logado no Salesforce com perfil “Atendimento Voz – Aluno” e papel “Atendente Voz ELO” ou “Atendente Voz Konecta”

**QUANDO:  **Visualizar a tela posicionada no cockpit do operador

**ENTÃO:  **Deve visualizar apenas as abas relacionadas ao atendimento telefônico, para aceite desse cenário.

**  
**

**Resultado esperado:  **Visualizar o Aplicativo " Atendimento Voz – Aluno" no seu perfil, com as abas relacionadas ao atendimento telefônico como "Chamadas", "Casos", "Contatos" e "Fila de Voz".

**  
**

**Resultado não esperado:  **Não visualizar no Salesforce as funcionalidades de WhatasApp e Chat, referente às telas: Sessões do Massaging, Usuários do Massaging, Transcrições do Chat.

 

**DADO QUE:**  o aluno entrou em contato pela central de atendimento através do número 0800 888 6973

**QUANDO:**  digitar a matrícula ou CPF, e na sequência digitou as opções “8-outros assuntos” e “3-nenhuma das informações” para transbordo - falar com atendente

**ENTÃO:**  a chamada deve ser direcionada para o aluno dentro do cockpit do operador

 

**DADO QUE:**  O atendente de voz está logado no Salesforce com perfil “Atendimento Voz – Aluno” e papel “Atendente Voz ELO” ou “Atendente Voz Konecta” com status “Disponível” para receber ligação

**QUANDO:  **A receber a ligação do aluno para iniciar o atendimento

**ENTÃO:  **O atendente deve receber a chamada telefônica do aluno na tela do cockpit do operador, para aceite desse cenário

**Cenário 02: Registro das informações no Salesforce**  


**  
**

DADO QUE: Um Aluno Estácio, IBMEC, IDOMED ou Wyden transbordou um contato pelo modal telefônico

QUANDO: a qualquer momento

ENTÃO: deve ter seu atendimento registrado no Salesforce

  


**Resultado esperado : **

  * Toda ligação deve ser registrada como um caso no Salesforce, seja o aluno identificado ou não.

  * Ligações que seguem o fluxo do aluno na URA devem ter casos criados no tipo de registro “Atendimento - Aluno”

  * As informações referentes à navegação do aluno na URA devem ser registradas no Salesforce, sendo atualizadas no final da navegação do aluno na URA.

  * As informações do caso listadas acima devem ser preenchidas de acordo com as informações do atendimento


  


**Resultados não esperado :**

  * Ligações feitas não serem registradas no Salesforce, seja em captação ou relacionamento 

  * Informações da navegação do aluno na URA não registradas no Salesforce. 

  * Informações incorretas registradas no caso do atendimento


  


**Cenário 03: Registro de informações por integração**

  


**DADO QUE:** Um Aluno Estácio, IBMEC, IDOMED ou Wyden realize um contato pelo modal telefônico

**QUANDO:  **a qualquer momento

**ENTÃO **deve ter suas informações do atendimento registradas no Salesforce

  


**Resultado esperado : **

  * Dados da realização e sucesso dos Callbacks devem ser registrados no Caso do Salesforce

  * Informações sobre os desfechos e tempos de atendimento/navegação na URA devem ser registrados no Salesforce

  * Informação sobre a oferta de chute durante a navegação da URA deve ser registrada no Caso, falando se o chute foi aceito pelo aluno. 

  * Registrar no caso se houver abandono

  * O número usado pelo contato receptivo deve ser registrado no caso do aluno. 

  * Registrar respostas da pesquisa de satisfação


  


**Resultados não esperado :**

  * Não identificar e registrar as ofertas de Callback e chute. 

  * Não registrar se o caso foi abandonado, seja esse abandono na URA ou no Atendimento Humano

  * Não identificar e registrar o número utilizado no contato receptivo

  * Não registrar respostas da pesquisa de satisfação


  
  


**Cenário 04: Registro de Rechamada**

  


DADO QUE: Um Aluno Estácio, IBMEC, IDOMED ou Wyden realize um contato pelo modal telefônico

QUANDO: estiver fazendo uma rechamada (entrando em contato novamente dentro de 24 horas)

ENTÃO: deve ter sua ligação identificada como rechamada

  


**Resultado esperado : **

  * Caso o aluno tenha entrado em contato pelo canal de voz, o caso deve ser identificado como rechamada no mesmo canal. 

  * Caso o aluno tenha entrado em contato por outro canal, o caso deve ser identificado como rechamada por outros canais. 


  


**Resultado não esperado : **

  * Não conseguir identificar se o aluno está fazendo uma rechamada, seja ela pelo mesmo canal ou outro canal.


## 9. Descrição (Abaixo vem do Azure DevOps)

****

**

**

Eu como aluno das marcas Estácio, Wyden, IDOMED ou IBMEC

Quando iniciar um atendimento via modal telefônico

Quero ter meu atendimento registrado no Salesforce.

  


Regras de Negócio:

  


RN01: Registro de Casos 

Toda ligação, seja o aluno identificado ou não, precisa ser registrada no Salesforce com um Caso. O tipo de registro do caso deve ser considerado “Atendimento - Aluno”. Caso o aluno selecione o fluxo de captação na URA, não deve ser criado um caso no Salesforce - Relacionamento.

A data e hora de abertura do Caso também deverão ser registradas na Tela de Caso, independentemente da identificação do aluno.

RN02: Atendimento na URA

Ao iniciar a navegação na URA, o aluno deverá se identificar como descrito na US [#201521](https://dev.azure.com/ArquiteturaEstacio/Atila%202.0/_workitems/edit/201521/) para que ocorra a atualização das informações de identificação de um Caso no Salesforce. Após a identificação bem sucedida do aluno na URA e finalização do atendimento na URA, o número do asset deverá ser registrado na Tela de Caso. 

Se a identificação for mal sucedida, o Caso deverá ser associado a um aluno não identificado.

Essa atualização ocorrerá no final na navegação do aluno na URA, seja em casos de retenção, abandono, ou transbordo. 

RN03: Dados na Tela de Caso

Todos os Casos criados, decorrentes de atendimento via Telefonia, deverão possuir obrigatoriamente todos os campos mencionados na Tabela abaixo. Todos os campos marcados como obrigatórios deverão possuir preenchimento para qualquer caso aberto via Telefonia.

**

**

Informações Sobre o Caso  
---  
Campo | Observação | Obrigatório  
Número do caso | Interno do aplicativo Salesforce | Sim  
Origem do caso | Voz | Sim  
Marca |   | Sim  
Nome da conta | Nome de conta do Aluno | Não  
Matrícula | Matrícula do Aluno no Atendimento (o Aluno pode ter mais de uma matrícula, mas o atendimento será para somente uma) | Não  
Nome Social |   
| Não  
Proprietário do caso | Quem Registra o Caso | Sim  
Área de Atendimento | Relacionamento | Sim  
Tipo de Solicitação |   | Sim  
Status | Fechado, Fechado Incorretamente e Novo  
  
| Sim  
Rechamada no Mesmo Canal | Aluno entrou em contato nas últimas 24 horas pelo canal de voz. Essa informação deve manter salvo a informação na hora que o caso foi criado. Por exemplo: Caso o aluno tenha entrado em contato nas 24hrs antes desse caso ser criado, essa informação deve ficar registrada no caso.   
| Sim  
Rechamada Todos os Canais | Aluno entrou em contato nas últimas 24 horas por qualquer canal (Voz, WhatsApp, Chat) Essa informação deve manter salvo a informação na hora que o caso foi criado. Por exemplo: Caso o aluno tenha entrado em contato nas 24hrs antes desse caso ser criado, essa informação deve ficar registrada no caso.  | Sim  
Prioridade |   | Não   
  
Aluno Não Identificado  
Campo | Observação | Obrigatório  
Flag de Aluno Não Identificado |   | Não  
Tipo de Não Identificado |   | Não  
Nome do Aluno Não Identificado |   | Não  
CPF do Aluno Não Identificado |   | Não  
Telefone de Contato do Aluno Não Identificado |   | Não  
E-mail do Aluno Não Identificado |   | Não  
Atendimento na URA  
Campo | Observação | Obrigatório  
Caso Abandonado? |   | Não  
Momento do Abandono |   | Não  
Qual foi o chute | Caso tenha tido um chute, preencher com o nome do chute. Caso não tenha tido chute, deixar em branco | Não  
Chute aceito? |   
| Não  
Transbordou para Humano? |   | Sim  
Flag de Transbordo Fora do Horário |   | Não  
Último Desfecho |   
| Sim  
Assunto |   | Sim  
Callback  
Campo | Observação | Obrigatório  
Houve Callback? |   
| Não  
Número do aluno usado no contato receptivo |   
| Sim  
Quantidade de CallBacks bem sucedidos |   
| Não  
Motivo do Contato  
Campo | Observação | Obrigatório  
Assunto |   
| Sim  
Tabulação 1 |   | Sim  
Tabulação 2 |   | Não   
Tabulação 3 |   | Não  
Descrição |   
| Sim  
Tempos de Atendimento  
Campo | Observação | Obrigatório  
Início do Caso |   | Sim   
Início e Fechamento do Atendimento no BOT |   | Não  
Início do Transbordo |   | Não  
Fim do Transbordo |   | Não  
Início do Primeiro Atendimento Humano |   | Não  
Fim do Último Atendimento Humano |   | Não  
Início do Atendimento no BackOffice |   | Não  
Data/Hora de Fechamento |   | Sim  
Tempos Calculados de Atendimento  
Campo | Observação | Obrigatório  
Tempo de Atendimento BOT (Minutos) |   | Não  
Tempo de Espera (Minutos) |   | Não  
Tempo de Atendimento Humano (Minutos) |   | Não  
Tempo de BackOffice (Minutos) |   | Não  
Tempo de Atendimento (Minutos) |   | Sim   
Transferências e Inatividades  
Campo | Observação | Obrigatório  
Quantidade de Transferências |   | Não   
Pesquisa de Satisfação  
Campo | Observação | Obrigatório  
Nível de Satisfação |   | Não  
Solicitação Resolvida? |   | Não  
Área de Atendimento da Pesquisa | (URA ou Atendimento Humano) | Não   
  
  
**  


**

**

**
