---
id: "WI-215069"
title: "[Telefonia] Fluxos Diversos de Encerramento"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2023-02-02T13:50:28.277Z"
changed: "2025-03-10T16:47:46.567Z"
---
# WI-215069 - [Telefonia] Fluxos Diversos de Encerramento

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/215069](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/215069)

## 1. Identificação

- **ID/Ref:** WI-215069
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

.


## 9. Descrição (Abaixo vem do Azure DevOps)

**

Eu , como consultor, supervisor, aluno das marcas da Yduqs ou aluno não identificado

Quero poder encerrar os atendimentos

Para que o caso seja finalizado e o aluno possa solicitar novos atendimentos.

 

Regras de Negócio:

 

RN01 – Encerramento do atendimento pelo aluno

 

Durante o atendimento o aluno identificado ou não identificado pode encerrar a conversa através das seguintes formas:

  * No momento que a árvore de atendimento da URA disponibilizar um desfecho;

  * Abandono do Caso (Informação deverá ser fornecida pela URA).


  


No caso de abandono ou finalização na URA, a pesquisa de satisfação não deve ser enviada.

 

RN02 – Encerramento do atendimento pelo atendente

 

Durante o atendimento de um caso transbordado para atendimento humano, o atendente pode encerrar a conversa através de um botão a ser disponibilizado na tela de atendimento, de acordo com a US [#213907](https://arquiteturaestacio.visualstudio.com/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_workitems/edit/213907)

  


O aluno pode desligar no meio do atendimento humano, mas somente o atendente pode encerrar o atendimento. Caso o aluno abandone/desligue no meio do atendimento humano, o atendente deve ter a possibilidade de retornar a ligação, como definido na US [#215143](https://arquiteturaestacio.visualstudio.com/Atila%202.0/_workitems/edit/215143/)

  


RN03 - Alertar sobre fechar janela de caso sem encerrar caso

Caso o atendente feche o caso sem encerrar o atendimento (sem ter feito a tabulação) o caso deve ser considerado como "Fechado Incorretamente" no descrito na US [#213907 ](https://arquiteturaestacio.visualstudio.com/Atila%202.0/_workitems/edit/213907/)

  


Caso haja o encerramento correto do caso, o caso será marcado como “Fechado” e a pesquisa de satisfação da RN04 deve ser enviada para finalizar o atendimento. 

  


Caso o atendente feche a janela sem antes encerrar o caso (sem ter tabulado o atendimento), o caso será marcado como “Fechado Incorretamente” e a pesquisa de satisfação da RN04 deve ser enviada para finalizar o atendimento. 

  


RN04 – Disponibilizar a pesquisa de satisfação

No final do atendimento, deverá ocorrer o disparo da pesquisa de satisfação, e esta regra de negócio será desenvolvida conforme descrito na US [#201763](https://arquiteturaestacio.visualstudio.com/Atila%202.0/_workitems/edit/201763/)

**
