---
id: "WI-202704"
title: "Evolução Base de Conhecimento - Base de conhecimento do conteudista"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Rebeca Xavier de Almeida"
created: "2022-12-12T14:21:07.83Z"
changed: "2025-03-27T18:55:16.58Z"
---
# WI-202704 - Evolução Base de Conhecimento - Base de conhecimento do conteudista

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/202704](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/202704)

## 1. Identificação

- **ID/Ref:** WI-202704
- **Tipo:** User Story
- **Status:** New


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

**Cenário 1: O conteúdista deseja visualizar todos os campos necessários no relatório**  


**Dado** que eu sou um conteúdista da base de conhecimento 

**Quando** quiser exportar todos os dados da base de conhecimento  


**Então** a base de conhecimento deverá disponibilizar um relatório com todos os campos presentes na base com suas respectivas informações, tanto de criação de conteúdo quanto de alteração.  


  


**Cenário 2: O conteúdista deseja acessar de forma online o relatório na tela do Salesforce**  


**Dado  **que eu sou um conteúdista da base de conhecimento 

**Quando  **quiser visualizar as informações diretamente na tela do SalesForce  


**Então**  a base de conhecimento deverá disponibilizar um relatório online com todos os campos presentes na base com suas respectivas informações, tanto de criação de conteúdo quanto de alteração, sem a necessidade de fazer o download para visualizar os dados.


## 9. Descrição (Abaixo vem do Azure DevOps)

### **Eu** , como conteudista  


**Quero  **realizar a exportação total da base, na base de conhecimento, do Salesforce, 

**Para que**  consiga visualizar todos os processos criados/alterados. 

Regras de Negócio

**R01 – Campos necessários do relatório**

**Todo o histórico de alteração do artigo deverá estar contido neste relatório**

  * **ID do conteúdo**
  * **Versão**
  * **Estrutura de Negócio**
  * **Natureza do atendimento**
  * **Tipo do registro**
  * ****Marca**  
**
  * ******Categoria/Tipo Curso**  
****
  * ********Grupo de Serviço**  
******
  * **********Serviço**********  

  * **************Canal/time****  
**********
  * ****************Direcionamento sobre o tema**  
**************
  * **********Status****  
******
  * ******Data da criação**  
****
  * ******Data da última modificação******
  * ****Última modificação feita por  ****
  * ******Última modificação aprovada por  ******



  


**R02 – Acesso online ao relatório**

Possibilidade de que esse relatório seja aberto de forma online sem a necessidade de fazer o download do arquivo. 

  


  


***AS IS existente no Oracle
