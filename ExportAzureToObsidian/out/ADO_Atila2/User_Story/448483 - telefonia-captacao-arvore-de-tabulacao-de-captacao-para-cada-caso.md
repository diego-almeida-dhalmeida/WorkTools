---
id: "WI-448483"
title: "[Telefonia/Captação] - Árvore de tabulação de captação para cada caso"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 04-2025-Relacionamento"
assignedTo: "Lucas Morisson Loreto Machado"
created: "2025-01-13T18:43:15.033Z"
changed: "2025-04-04T19:35:35.673Z"
---
# WI-448483 - [Telefonia/Captação] - Árvore de tabulação de captação para cada caso

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/448483](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/448483)

## 1. Identificação

- **ID/Ref:** WI-448483
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

**Critérios de Aceitação:**

**Dado que** o agente esteja visualizando um caso no Salesforce,  
**Quando** acessar a seção de tabulação,  
**Então** deverá ser exibida a árvore de tabulação de captação, permitindo a seleção de categorias (Motivo de atendimentio 1) e subcategorias (Motivo de atendimentio 2) relacionadas ao caso.

  
**Dado que** a árvore de tabulação de captação esteja associada ao caso,  
**Quando** o agente salvar o registro,  
**Então** as informações selecionadas na árvore de tabulação deverão ser exibidas no histórico do caso.

  
**Dado que** a árvore de tabulação contenha múltiplos níveis,  
**Quando** o agente selecionar uma categoria pai,  
**Então** apenas as subcategorias correspondentes deverão ser exibidas, até que a tabulação seja finalizada.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como  **operador do Call Center com o perfil de Atl Atendimento  


**Gostaria** de associar a árvore de tabulação de captação a cada caso,  
**Para que** seja possível classificar e categorizar os atendimentos de maneira padronizada e organizada, facilitando o acompanhamento, análise e tomada de decisões.  


  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/b23d9ea0-e50d-47a1-a90d-ec08ea2a4b40?fileName=image.png)  


  


Obs: 

  * **Especificar os campos da tabulação que precisam ser preenchidos. Serão criados campos novos para o preenchimento da tabulação do caso.**
  * Necessário incluir o arquivo de tabulação na história. 



[Tabulação - Atendimento Manual  1.xlsx](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/b600e9c1-9e70-4187-9c6f-7e91df461e98?fileName=Tabula%C3%A7%C3%A3o%20-%20Atendimento%20Manual%20%201.xlsx&download=true)
