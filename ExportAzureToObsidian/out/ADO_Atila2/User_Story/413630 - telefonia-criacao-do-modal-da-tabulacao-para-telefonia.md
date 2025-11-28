---
id: "WI-413630"
title: "[Telefonia] Criação do Modal da tabulação para telefonia"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 01-2024-CoERelac"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2024-09-05T21:13:05.3Z"
changed: "2025-03-07T18:07:18.773Z"
---
# WI-413630 - [Telefonia] Criação do Modal da tabulação para telefonia

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/413630](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/413630)

## 1. Identificação

- **ID/Ref:** WI-413630
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

**Cenário 01:  Acesso às Ferramentas de Atendimento Telefônico:**

**DADO QUE:**  o aluno entrou em contato pela central de atendimento através do número 0800 888 6973  
**QUANDO:**  digitar a matrícula ou CPF, e na sequência digitou as opções “8-outros assuntos” e “3-nenhuma das informações” para transbordo - falar com atendente  
**ENTÃO:**** ** a chamada deve ser direcionada para o aluno dentro do cockpit do operador

****  
****

****Cenário 02: Transferência do caso sem ele estar tabulado**  
**

****

**Dado** que eu sou atendente do Call Center.

**Quando**** ** for realizar a transferência do caso para outro operador, ou para a pesquisa de satisfação clicando no icone ⇄ do conector Avaya.

**Então  **o caso deverá ser transferido e deverá ser exibido o modal de tabulação para o atendente.

 

**Resultado esperado:**

Realizar a transferência juntamente com a exibição do modal de tabulação.

  


**  
Cenário 03: Transferência com o caso já tabulado**  


**Dado que**  eu sou atendente do Call Center 

**Quando**  for realizar a transferência do caso para outro operador, ou para a pesquisa de satisfação

**Então**  o caso deverá ser transferido sem a necessidade de exibição do modal de tabulação 

** **

**Resultado esperado:**

Realizar a transferência sem a exibição do modal de tabulação 

  


**Cenário 04: Tabulação**  


**Dado que**  eu sou atendente do Call Center 

**Quando**  for realizar a tabulação do caso 

**Então**  todos os campos de tabulação (Motivo atendimento 1, motivo atendimento 2 e motivo atendimento 3) deverão ser preenchidos caso exista a opção para marcar, para habilitar o salvamento da tabulação no caso e assim seu encerramento.

** **

**Resultado esperado:**

Realizar o preenchimento obrigatório de todos os campos de tabulação que estiverem ativos; 

  


**Cenário 05: Tabulação do caso filho**  


**Dado que**  eu sou atendente do Call Center 

**Quando**  for realizar uma nova transferência de um caso já transferido para mim

**Então**  todo o processo de tabulação do caso filho deverá ser respeitado conforme a história em questão, ou seja, as regras 1, 2 e 3 deverão ser aplicadas.

** **

**Resultado esperado:**

Realizar a tabulação do caso filho conforme as regras 1, 2 e 3 dessa história. 

  


**Cenário 06: Garantir tempo de espera para atualização do caso e seu encerramento ( ACW (after call work))**  


**Dado que**  eu sou atendente do Call Center 

**Quando**  for realizar uma nova transferência de um caso já transferido para mim

**Então  **o sistema deverá aguardar um tempo de 15 segundo para habilitar uma nova ligação telefonica para o atendente

** **

**Resultado esperado:**

Ao se realizar uma transferência, uma nova ligação telefônica deverá ser iniciada somente 15 segundos depois da transferência.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu Como**  "Atendente Voz - Aluno" no Salesforce  


**Quero** que seja exibido um modal para tabulação do caso no momento em que eu realizar uma transferência de ligação  
**Para que**  o caso seja tabulado e encerrado logo após a transferência realizada.  
  


**RN1:**  Esquema gráfico explicando a dinâmica para a abertura do modal no momento da transferência:

 

![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/6cbf319f-1345-4208-a630-0878eeffc100?fileName=image.png)  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/3b039f37-daba-4a50-8f97-c8220047278f?fileName=image.png)  


  


No momento em que o operador solicita a transferência no botão ⇄ do conector Avaya, então o modal deve aparecer; 

  


**RN2)** No momento em que se realize a transferência da ligação é necessária verificar se a tabulação da referida ligação transferida, se já foi preenchida corretamente. Caso não tenha sigo preenchida, então deverá ser apresentado um modal com todos os campos de tabulação. 

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/3b113072-78d3-401b-a2d3-16958c795f1a?fileName=image.png)

  


**RN3)** **Os campos de tabulação são obrigatórios de preenchimento** \- Os 3 campos de tabulação da tela: 

Motivo atendimento 1; 

Motivo atendimento 2; 

Motivo atendimento 3;   


  


Nem sempre todos os motivos de atendimento existiram, a regra deve valer para todos nos níveis que exitem pelo menos 1 opção.

  


**RN4) **Todos os campos obrigatórios de tabulação devem ser preenchidos para habilitar o salvamento da informação; 

  


**RN5) **O caso quando for transferido, ou seja, estiver com o novo atendente, terá também de realizar a tabulação caso realize uma nova transferência [Caso filho]; 

  


**RN5)  **O ACW deverá ser configurado com um tempo de 15 segundos.
