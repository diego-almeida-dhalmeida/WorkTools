---
id: "WI-443282"
title: "[Telefonia] Encaminhamento - Criar lista de visualização Meus Casos Backoffice"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 04-2024-CoERelac-2 ªOndaTelefonia"
assignedTo: "Diego Felipe"
created: "2024-12-16T17:37:40.447Z"
changed: "2025-03-07T18:04:43.423Z"
---
# WI-443282 - [Telefonia] Encaminhamento - Criar lista de visualização Meus Casos Backoffice

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/443282](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/443282)

## 1. Identificação

- **ID/Ref:** WI-443282
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

**Roteiro de teste:**

  1. Abrir o SalesForce e entrar no conector Avaya como Sara Nascimento (perfil operador BKO) (usuário: sara.nascimento.ter@estacio.br / senha: Avaya@1234).
  2. Abrir a tela de lista de casos de Backoffice do operador e garantir que todas as informações listadas nas RNs estão presentes. 



**  
**

**Critérios de Aceitação:**

  


**1\. Visualização dos caso na lista de "**Meus Casos em Andamento "**:**  


  


**Dado que**  estou realizando atendimentos de backoffice 

**Quando** houver a necessidade de acessar um caso em que estou atendendo 

**então** devo ser capaz de selecionar um caso em uma lista de atendimentos com casos exclusivos meus com os "Status Backoffice" de "Atribuído", "Em andamento", "Pendente";  


  


**2\. Visualização dos caso na lista de "****Todos os  Meus Casos**"**:**  


  


**Dado que**  estou realizando atendimentos de backoffice 

**Quando  **houver a necessidade de acessar um caso em que estou atendendo 

**então  **devo ser capaz de visualizar todos os casos que estão no meu nome, com qualquer "Status Backoffice".


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como** operador de backoffice (Com perfil "Atendente Voz - Aluno")  


**Gostaria de  **ter uma tela de listas de visualização  
**Para que** eu possa visualizar os meus casos de backoffice de forma simples e prática

**RN1 -  Lista de visualização de Casos do Operador:**  


  


Cada operador deve ter uma lista de visualização exclusiva de casos atribuídos a ele, sem visualização de casos de outros operadores. (Meus casos) 

  


**RN2 -  Lista de visualização "Meus Casos em Andamento":**  


**  
**

Tal lista deve possuir o seguinte filtro:

Tabulação N1 diferente de vazio, casos atribuídos para o meu nome, com os "Status Backoffice" de "Atribuído", "Em andamento", "Pendente"

  


**RN3 -  Lista de visualização "Todos os Meus Casos":**  


  


Tal lista deve possuir o seguinte filtro:

Tabulação N1 diferente de vazio, casos atribuídos para o meu nome, com qualquer "Status Backoffice".
