---
id: "WI-213907"
title: "[Telefonia] Encerramento de Caso"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 03-2024-CoERelac-1ªOndaTelefonia"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2023-01-30T23:40:32.913Z"
changed: "2025-03-07T18:19:16.823Z"
---
# WI-213907 - [Telefonia] Encerramento de Caso

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/213907](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/213907)

## 1. Identificação

- **ID/Ref:** WI-213907
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

- 


## 9. Descrição (Abaixo vem do Azure DevOps)

****

**

Eu , como Atendente

Quero atualizar dados no meu Atendimento

Para que possa finalizar e fechar o caso em questão.

 

Regras de Negócio

RN01 – Efetivar encerramento do Caso

O Atendente deverá ter um botão para encerrar o Atendimento, que deverá ser disponibilizado no canto superior direito na tela de atendimento de telefonia. Este deverá ser o mesmo botão já disponibilizado para os canais de WhatsApp e Chat.

RN02 – Validação dos dados de Atendimento Humano

No ato do encerramento os dados de preenchimento obrigatório deverão ser criticados:

  * Tipo da Solicitação;

  * Solicitação Procede?;

  * Tabulação 1

  * Tabulação 2 (se aplicável)

  * Tabulação 3 (se aplicável)

  * Descrição (não obrigatório)


  


No ato do encerramento os dados de preenchimento obrigatório, detalhados na US [#204337](https://arquiteturaestacio.visualstudio.com/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_workitems/edit/204337) , deverão ser criticados. O atendente não deverá conseguir finalizar o atendimento caso os campos obrigatórios estejam em branco. Deverá ser obrigatório realizar a tabulação até o último nível. 

  


RN03 – Alteração do Campo Status

No fechamento do caso o campo Status deverá ser alterado para  “Fechado”.

RN04 – Gravação dos dados de Caso

No encerramento do Caso todos os seus dados deverão estar gravados de acordo com o descrito na US [#204337](https://arquiteturaestacio.visualstudio.com/Atila%202.0/_workitems/edit/204337/)

Todos os campos obrigatórios deverão ser preenchidos na tela de caso para realização do seu encerramento corretamente

RN05 - Fechar janela de caso sem encerrar o atendimento

Caso o atendente feche a janela do atendimento sem antes ter encerrado o caso (feito a tabulação) o caso deve ser considerado como "Fechado Incorretamente". 

**
