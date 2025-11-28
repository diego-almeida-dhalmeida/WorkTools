---
id: "WI-428302"
title: "[Telefonia] Criação das permissões de supervisor"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 03-2024-CoERelac-1ªOndaTelefonia"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2024-10-24T02:31:33.043Z"
changed: "2025-03-07T18:21:37.313Z"
---
# WI-428302 - [Telefonia] Criação das permissões de supervisor

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/428302](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/428302)

## 1. Identificação

- **ID/Ref:** WI-428302
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

**Cenário 01: Visualização das informações:  
**

** **

**Dado que** o supervisor acessou o salesforce ele 

**Quando** ele acessar a tela de caso 

**Então** deve poder visualizar todos os casos de voz dos atendentes cadastrados que estão abaixo de sua hierarquia de papéis 

  


**Cenário 02: Geração de relatórios  
 **

**Dado que**  o supervisor acessou o salesforce ele 

**Quando** ele quiser criar, ou verificar um relatório (publico ou privado) 

**Então** deverá ter acesso às ferramentas de criação de relatório


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu** , como "Gestor Voz Elo ou Gestor Voz Konecta" utilizando o perfil de "Atendente Voz Aluno"

**Quero**  ter acesso aos casos de todos os atendentes que estão abaixo de mim na estrutura de papéis

**Para**  que seja possível monitorar o andamento do atendimento das operações.

  


**Regras de Negócio:**  


 ** **

**RN01 - Ações Específicas**

  


Pela lógica do atendimento do Supervisor, devemos ter as seguintes ações disponíveis: 

  * Ter permissão de criar relatórios, pastas e painéis utilizando as informações dos casos de voz;  
  




**RN01 - Atualização de Perfis**

  


O Perfil que deverá ser utilizado é o "Atendente Voz Aluno" que possuirá a possibilidade de criar relatórios para executar a função de Supervisor;
