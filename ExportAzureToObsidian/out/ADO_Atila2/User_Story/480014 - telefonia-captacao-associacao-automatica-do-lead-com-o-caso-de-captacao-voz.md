---
id: "WI-480014"
title: "[Telefonia/Captação] - Associação automática do lead com o caso de captação - voz"
type: "User Story"
state: "Active"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Marcos Vinicius Almeida da Silva"
created: "2025-04-15T15:45:43.477Z"
changed: "2025-08-08T14:59:19.553Z"
---
# WI-480014 - [Telefonia/Captação] - Associação automática do lead com o caso de captação - voz

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/480014](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/480014)

## 1. Identificação

- **ID/Ref:** WI-480014
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

Critério de aceite 01  


**Dado** que a URA localizou dois ou mais leads, ou localizou dois ou mais leads e oportunidades 

**Quando** o atendimento iniciar 

**Então** a lista de Leads e Oportunidades será “popada” automaticamente 

  


  


Critério de aceite 02  


**Dado** que a Lista de Leads e Oportunidades foi aberta, 

**Quando** o caso do atendimento for iniciado 

**Então** o atendente selecionará o Lead manualmente 

  


  


Critério de aceite 03  


**Dado** que a URA identificou apenas um Lead, 

**Quando** o caso do atendimento for iniciado 

**Então** o Lead será “popado” automaticamente 

  


  


Critério de aceite 04  


**Dado** que o componente de Casos() dentro do Lead trará os casos relacionados ao Lead. 

**Quando** o atendente consultar o componente 

**Então** ele encontrará o motivo da tabulação de cada caso listado  


  


  


Critério de aceite 05  


**Dado** que o componente de Casos() dentro do Lead trará os casos relacionados ao Lead. 

**Quando** um novo caso for criado para a mesmo Lead 

**Então** o relatório personalizado de Lead x Oportunidade, também será atualizado


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como** , Atendente ATL – Atendimento,

**Quero**  que o Lead encontrado pela URA, seja vinculada automaticamente ao caso de captação voz.

**Quando** esse Lead for aberto

**Para**  para que o caso, fique visível dentro do Lead

 

 

**RN01  ****–  O atendente só precisará selecionar um Lead**:   
Se a URA não identificar nenhuma oportunidade e identificar dois ou mais Leads

Se a URA identificar dois ou mais Leads e Oportunidades

**RN02  ****–  No caso da abertura da Lista com vários Leads e Oportunidades – **O atendente fará a seleção ao conversar com o candidato  
**RN03  ****–** Caso haja apenas um Lead, o mesmo deve ser aberto automaticamente.

**RN04 – O componente de Casos() precisa trazer para o atendente** o motivo da tabulação.

**RN05 – O componente de Casos() dentro do Lead precisa estar relacionado a esse Lead –** Essa informação  alimenta um relatório personalizado de Case x Lead
