---
id: "WI-476178"
title: "[Telefonia/Captação] - Inclusão da pesquisa automática do candidato para lead e oportunidade no caso de Captação - Voz"
type: "User Story"
state: "Active"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Rodolfo Rodrigo da Silva"
created: "2025-04-04T19:41:22.83Z"
changed: "2025-09-02T12:36:49.89Z"
---
# WI-476178 - [Telefonia/Captação] - Inclusão da pesquisa automática do candidato para lead e oportunidade no caso de Captação - Voz

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/476178](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/476178)

## 1. Identificação

- **ID/Ref:** WI-476178
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

**Dado que** eu estou logado no ambiente de Vendas como atendente ATL - Atendimento  
**Quando** receber uma ligação no conector Avaya  
**Então** , o caso Captação - Voz deverá abrir automaticamente a tela de busca com os resultados de lead e/ou oportunidade (Detalhe [#476186](https://dev.azure.com/ArquiteturaEstacio/Atila%202.0/_workitems/edit/476186/))


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como** atendente ATL - Atendimento  
**Quero** quando abrir o caso, ter uma pesquisa automática para o candidato utilizando o número de telefone binado.  
**Para**  identificar se há algum lead e/ou oportunidade vinculada ao número do candidato. 

**RN01 -  **Se houver Lead, deve existir uma tela (campo) do resultado da busca com o(s) lead(s).

**RN02 -  **Se houver Oportunidade, deve existir uma tela(campo) do resultado da busca com a(s) oportunidade(s).

**RN03 -  **Se houver Leads e Oportunidades, deve existir uma tela(campo) do resultado da busca com o(s) Lead(s) e a(s) oportunidade(s).

**RN04  **\- Se não houver nada. Deve haver uma mensagem para criação de Lead e Oportunidade.  
  


Referencia: Busca geral do Salesforce com Lead e Oportunidade

![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/4b78fa3d-b2a9-40e9-889b-5d2791fcbdf0?fileName=image.png)
