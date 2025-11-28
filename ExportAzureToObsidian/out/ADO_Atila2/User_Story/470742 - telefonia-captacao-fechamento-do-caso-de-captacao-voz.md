---
id: "WI-470742"
title: "[Telefonia/Captação] - Fechamento do caso de Captação - Voz"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 05-2025-Relacionamento"
assignedTo: "Lucas Morisson Loreto Machado"
created: "2025-03-21T17:22:05.73Z"
changed: "2025-05-21T22:24:36.773Z"
---
# WI-470742 - [Telefonia/Captação] - Fechamento do caso de Captação - Voz

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/470742](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/470742)

## 1. Identificação

- **ID/Ref:** WI-470742
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

**Critério de aceite 1:**  


  


**Dado que**  o operador de Captação - Voz realizou um atendimento 

**Quando**  já estiver informado um lead, ou oportunidade e preencher a tabulação de um caso de atendimento de Captação - Voz 

**Então**  o caso deverá ser fechados de forma automática


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como**  operador da captação com perfil ATL Atendimento 

**Quero  **que o caso de "Captação - Voz" seja finalizado (Fechado), após se feita a tabulação do caso. 

**Com o objetivo  **de finalizar o registro de atendimento de captação. 

  


**RN1:**  
O caso só poderá ser fechado se já tiver associado a um Lead ou Oportunidade e já tiver sido tabulado.  
**  
**

**RN2:**  
Mudar a ordem dos componentes de associação de Lead e Oportunidade com o componente de tabulação.   
1º Componente de Lead e Oportunidade

2º Componente de tabulação. 

  


**RN3:**  
Exibir o componente de tabulação somente depois do preenchimento do componente de Associação de Lead e Oportunidade.

  


**RN4:**

Com o preenchimento da associação e com a tabulação, o caso deve ser fechado de forma automática.
