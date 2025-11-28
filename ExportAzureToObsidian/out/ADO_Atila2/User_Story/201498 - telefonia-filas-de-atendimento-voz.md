---
id: "WI-201498"
title: "[Telefonia] Filas de atendimento - Voz"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2022-12-06T13:15:02.18Z"
changed: "2025-03-07T18:22:49.663Z"
---
# WI-201498 - [Telefonia] Filas de atendimento - Voz

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/201498](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/201498)

## 1. Identificação

- **ID/Ref:** WI-201498
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

**Critério de aceite: Redirecionamento para fila correta.**

**Dado**  que eu sou um aluno de uma marca YDUQS

 

**Quando**  eu entrar em contato com a instituição via telefonia

 

**Então**  serei direcionado para a fila de atendimento de minha marca

  


**Resultado esperado:**

O aluno deve conseguir ser direcionado para fila de atendimento da sua marca (Estácio, IBMEC, Wyden e IDOMED). 

  


Uma vez tendo sido direcionado para sua fila de atendimento, o aluno deve ser capaz de receber atendimento híbrido, quando necessário (Estácio|Wyden ou IBMEC|IDOMED) 

  


**Resultados não esperados:**

Aluno sendo direcionado para fila de atendimento que não seja a fila de atendimento de sua marca;

Aluno sendo direcionado para atendimento híbrido quando não houver fila em sua própria marca; 

Aluno sendo direcionado para atendimento híbrido não contemplado pela sua marca;


## 9. Descrição (Abaixo vem do Azure DevOps)

**Descrição da estória:**

**Eu  **como aluno de uma marca YDUQS

**Quero**  ao entrar em contato com a instituição via canal de voz, entrar na fila de atendimento de minha marca, referente ao menu em que estava navegando na URA, quando for necessário direcionamento ao atendimento humano.

  


**Para que**  eu receba o melhor atendimento possível.

**Regras de Negócio**

**R01 – ESTÁCIO GRADUAÇÃO E PÓS GRADUAÇÃO**

Quando um aluno de graduação ou pós graduação Estácio é direcionado para atendimento humano, ele deve cair em uma fila de atendimento da Estácio.

  


Uma carga sinalizando quais são as filas de atendimento, e tabulações disponíveis para cada fila será anexada à US

** **

**R02 – WYDEN GRADUAÇÃO E PÓS GRADUAÇÃO**

Quando um aluno de graduação ou pós graduação Wyden é direcionado para atendimento humano, ele deve cair em uma fila de atendimento da Wyden.

  


Uma carga sinalizando quais são as filas de atendimento, e tabulações disponíveis para cada fila será anexada à US

  


**                                                           ** 

**R03 – IBMEC GRADUAÇÃO E PÓS GRADUAÇÃO**

Quando um aluno de graduação ou pós graduação Ibmec é direcionado para atendimento humano, ele deve cair em uma fila de atendimento da Ibmec.

  


Uma carga sinalizando quais são as filas de atendimento, e tabulações disponíveis para cada fila será anexada à US

  


  


**R04 – IDOMED GRADUAÇÃO E PÓS GRADUAÇÃO**

Quando um aluno de graduação ou pós graduação IDOMED é direcionado para atendimento humano, ele deve cair em uma fila de atendimento da IDOMED.

  


Uma carga sinalizando quais são as filas de atendimento, e tabulações disponíveis para cada fila será anexada à US

  


**R05 – Base de Conhecimento**

Deverá ser possível disponibilizar uma estrutura de base de conhecimento para visualização e utilização de cada fila de atendimento. Um atendente que estiver em uma fila de atendimento X não deverá visualizar conteúdos disponíveis apenas para fila de atendimento Y  
  


**R06 - Registro na tela de Caso**

Sempre que um aluno seja direcionado para uma fila de atendimento, deverá ocorrer a atualização da fila e do proprietário do caso na tela de Caso. 

Um novo direcionamento sempre acontecerá em momentos de transbordo e transferência de atendimento. 

  


**R07 - Direcionamento de/para fila de captação**

Sempre que um caso seja direcionado ou recebido de uma fila de atendimento de captação, deverá ocorrer a atualização do campo "Tipo de Registro do Caso". 

  


Caso um atendimento seja direcionado para uma fila de captação, o campo de "Tipo de Registro do Caso" deverá ter a informação de "Atendimento - Aluno" substituída pelo Tipo de Registro específico de captação.

  


Caso um atendimento seja recebido a partir de uma fila de captação o campo de "Tipo de Registro do Caso" deverá ser atualizado, com o tipo de registro substituído para "Atendimento - Aluno".
