---
id: "WI-479993"
title: "[Telefonia/Captação] - Associação automática da Oportunidade com o caso de captação - voz"
type: "User Story"
state: "Active"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Marcos Vinicius Almeida da Silva"
created: "2025-04-15T15:14:59.957Z"
changed: "2025-08-08T14:59:19.553Z"
---
# WI-479993 - [Telefonia/Captação] - Associação automática da Oportunidade com o caso de captação - voz

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/479993](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/479993)

## 1. Identificação

- **ID/Ref:** WI-479993
- **Tipo:** User Story
- **Status:** Active


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

****

**Critério de aceite 01**

**Dado** que a URA localizou várias oportunidades 

**Quando  **a lista for “popada” na tela de atendimento 

**Então** o atendente selecionará manualmente a oportunidade pertinente ao atendimento 

  


**Critério de aceite 02**

**Dado** que a URA localizou apenas uma Oportunidade 

**Quando  **o caso o atendimento for iniciado 

**Então** a Oportunidade Única, será aberta automaticamente 

 

**Critério de aceite 03**

**Dado** que a Oportunidade, por regra, é prioridade em relação ao Lead 

**Quando  **a URA identificar uma Oportunidade e um ou mais Leads 

**Então** a Oportunidade Única, será aberta automaticamente 

  


**Critério de aceite 04**

**Dado** que a URA localizou várias Oportunidades e vários Leads 

**Quando  **a lista for “popada” na tela de atendimento   


**Então** o atendente selecionará manualmente a Oportunidade pertinente ao atendimento 

 

**Critério de aceite 05**

**Dado** que o componente de Casos() dentro da oportunidade trará os casos relacionados a Oportunidade. 

**Quando  **o atendente consultar o componente   


**Então** ele encontrará o motivo da tabulação de cada caso listado 

**  **

**Critério de aceite 06**

**Dado** que o componente de Casos() dentro da Oportunidade trará os casos relacionados a Oportunidade. 

**Quando  **um novo caso for criado para a mesma Oportunidade  


**Então** o relatório personalizado de Case x Oportunidade, também será atualizado


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como** , Atendente ATL – Atendimento,

**Quero**  que a Oportunidade encontrada, seja vinculada automaticamente ao caso de captação voz

**Quando** essa oportunidade for aberta.

**Para**   que o caso, fique visível dentro da oportunidade

 

**RN01  ****–  **O atendente só precisará selecionar a oportunidade, se a URA identicar duas Oportunidades ou mais.

**RN02  ****–** Caso haja apenas uma oportunidade, a mesma deve ser aberta automaticamente.

**RN03  ****–  A oportunidade é prioridade sobre o lead. **Quando a URA identificar uma Oportunidade e vários leads, deve ser aberta a Oportunidade automaticamente.

**RN04  ****–  No caso da abertura da Lista com vários Leads e Oportunidades – **O atendente fará a seleção ao conversar com o candidato

**RN05 – O componente de Casos()**  dentro da Oportunidade **precisa trazer para o atendente **o motivo da tabulação.

**RN06 – O componente de Casos() dentro da Oportunidade precisa estar relacionado a essa Oportunidade –** Essa informação alimenta um relatório personalizado de Case x Oportunidade.  
  
A associação do Caso a oportunidade acontece no inicio do atendimento, quando uma ou mais Oportunidades já existirem ou forem identificadas no inicio do atendimento.   
![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/8125bce2-5e7d-49d1-9654-ad709f74ece6?fileName=image.png)
