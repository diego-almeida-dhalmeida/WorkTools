---
id: "WI-202706"
title: "Evolução Base de Conhecimento - Conteúdos acessados"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Rebeca Xavier de Almeida"
created: "2022-12-12T14:22:05.74Z"
changed: "2025-04-28T21:33:26.737Z"
---
# WI-202706 - Evolução Base de Conhecimento - Conteúdos acessados

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/202706](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/202706)

## 1. Identificação

- **ID/Ref:** WI-202706
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

### Cenário 01: O conteudista deseja exportar os conteúdos acessados na base de conhecimento

**Dado  ** que eu sou um conteúdista da base de conhecimento 

** **

**Quando** quiser exportar os conteúdos acessados a base de conhecimento

 

**Então**  a base de conhecimento deberá disponibilizar um relatório com todas as informações de conteúdos acessados.

  


  


### Cenário 02: O conteudista deseja visualizar os atendentes que acessaram um conteúdo

**Dado  ** que eu sou um conteúdista da base de conhecimento 

** **

**Quando  **quiser visualizar quais atendentes acessaram um conteúdo

 

**Então**** ** poderei clicar no número de acessos de conteúdo e assim abrirá uma listagem contendo nome completo, CPF e canal de atendimento do atendente,


## 9. Descrição (Abaixo vem do Azure DevOps)

### **Eu** , como conteudista  


### 

**Quero  **exportar os conteúdos acessados, na base de conhecimento, do Salesforce, 

**Para que**  consiga visualizar a quantidade acessos feitos a um único conteúdo 

### Regras de Negócio 

**R01 - Campos necessários do relatório**

  * ID do conteúdo 
  * Resumo 
  * ~~Tempo médio de acesso no conteúdo~~(necessidade em discussão futura) 
  * Quantidade de acesso do atendimento no conteúdo 
  * Conteúdos não acessados 



OBS: Mostrar os conteúdos não acessados, sinalizados que ainda não foram acessados. 

  * Quanto tempo sem acesso 
  * Total 



  


**R02 - Visualização dos atendente que acessaram um conteúdo**  


**  
**

Quando um conteúdo tiver 1 ou mais acessos, ao clicar nesse número conseguirei visualizar o nome, CPF e canal de atendimento de cada atendente que acessou o conteúdo.

  


  


***AS IS existente no Oracle
