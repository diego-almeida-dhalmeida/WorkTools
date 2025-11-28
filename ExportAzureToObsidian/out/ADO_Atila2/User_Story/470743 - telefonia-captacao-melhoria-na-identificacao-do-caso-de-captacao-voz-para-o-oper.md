---
id: "WI-470743"
title: "[Telefonia / Captação] - Melhoria na identificação do caso de Captação Voz para o operador de captação"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Renan Robson Lima Carneiro"
created: "2025-03-21T17:23:17.007Z"
changed: "2025-04-30T18:47:34.85Z"
---
# WI-470743 - [Telefonia / Captação] - Melhoria na identificação do caso de Captação Voz para o operador de captação

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/470743](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/470743)

## 1. Identificação

- **ID/Ref:** WI-470743
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

****Critério de aceite 1:  
**  
**

**Dado que**  o operador de Captação - Voz recebeu um atendimento 

**Quando**  ele selecionar a opção "Casos de Captação - Voz" no menu de acesso do Salesforce (Casos) 

**Então**  os casos de atendimento deverão ser exibidos conforme as informações abaixo: 

  


**Filtros:**

Status: Aberto  
Tipo de registro: Captação - Voz 

  


**Campos:**  
1) Numero do caso 

2) Telefone do Contato Receptivo  


3) Assunto

4) Data/Hora de abertura 

5) Nome do aluno  


6) Matricula


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como** operador da captação com perfil ATL Atendimento 

**Quero** poder identificar o caso de "Captação - Voz" com mais facilidade no cockpit de Vendas 

**Com o objetivo** de poder registrar e tabular os caso de Captação - Voz 

  


**Observações:**

Hoje os casos de Captação - Voz não estão sendo "popados" no ambiente de Vendas (Captação) de forma explicita. O objetivo dessa história e evidenciar o caso, ou o número do caso para que o operador possa realizar uma pesquisa e encontrar o caso de forma simplificada. 

  


**Sugestão:  **

Criação de uma lista com os casos de Captação - Voz com informações específicas para a identificação do caso com a ligação vinda da URA.
