---
id: "WI-202707"
title: "Evolução Base de Conhecimento - Log de auditoria"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Rebeca Xavier de Almeida"
created: "2022-12-12T14:22:56.757Z"
changed: "2025-03-27T18:52:23.507Z"
---
# WI-202707 - Evolução Base de Conhecimento - Log de auditoria

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/202707](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/202707)

## 1. Identificação

- **ID/Ref:** WI-202707
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

### Cenário 01: O gestor/conteudista deseja exportar os logs de alteração de conteúdos na base de conhecimento

**Dado  ** que eu sou um gesto/conteúdista da base de conhecimento 

** **

**Quando  **quiser exportar os logs de alteração de conteúdo

 

**Então**  a base de conhecimento deverá disponibilizar um relatório com todas as informações de alteração de conteúdo.

  


  


__________________________________________________________________________________________________________ 

**Refinamento Técnico**

********

  * Pendencias: 
    * ~~Validar com a PO a configuração do Appexchange de relatorios de Base de conhecimento   (já foi configurado o APP Exchange na POC) iremos inserir aqui nessa estoria os relatorios disponiveis~~~~​~~
    * ~~​ Validar com a PO o Gestor nao deveria tambem ter acesso a esse relatorio (Gestor terá acesso)~~
  * Premissas: 
    *   

  * Solução:  

    * Criar um diretorio Conteudista e setar as permissoes para o Perfil de Conteudista
    * Gerar um relatório standard
    * Gerar Grupos Publicos para Conteudista e Gestor
    * Habilitar Field Tracking para os Campos.
    * Criar tipo de relatório novo (Base de Conhecimento x Historico de Alteração)


## 9. Descrição (Abaixo vem do Azure DevOps)

### **Eu** , como gestor/conteudista  


**Quero  **exportar os logs de alteração de um conteúdo, na base de conhecimento, do Salesforce, 

**Para que**  consiga visualizar a data e a hora de cada alteração realizada nos conteúdos 

 

### Regras de Negócio 

**R01 – Campos necessários do relatório**

  * ID conteúdo 
  * Título do artigo 
  * Marca  

  * Data da criação 
  * Data de cada alteração realizada/hora 
  * Atribuído (Nome e CPF) 
  * Versão 



  


***AS IS existente no Oracle
