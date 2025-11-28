---
id: "WI-443325"
title: "[Telefonia] Encaminhamento/perfil - Criação do perfil de Supervisor Voz"
type: "User Story"
state: "Resolved"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 04-2024-CoERelac-2 ªOndaTelefonia"
assignedTo: "Marcos Vinicius Almeida da Silva"
created: "2024-12-16T18:53:08.003Z"
changed: "2025-07-31T19:49:06.55Z"
---
# WI-443325 - [Telefonia] Encaminhamento/perfil - Criação do perfil de Supervisor Voz

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/443325](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/443325)

## 1. Identificação

- **ID/Ref:** WI-443325
- **Tipo:** User Story
- **Status:** Resolved


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

****

**Roteiro de teste:**

  1. Abrir o Salesforce como ANA PAULA LIMA PINTO - analima.ter@estacio.br (Senha:Avaya@2024!1)
  2. Abrir a tela de lista de casos de Backoffice do operador e garantir que possui as permissões de visualização necessárias. 
  3. Selecionar um caso que esteja com status "Aberto" e atribuí-lo a um atendente. 
  4. Verificar se o status do caso foi alterado para "Atribuído". 
  5. Logar como o atendente escolhido e verificar se o caso atribuído está disponível 



****

**  
**

**Cenário 01: Visualização das informações EPS Konecta:**  


 

**Dado que**  um Supervisor Voz, com papel de "Gestor Voz Konecta" acessou o Salesforce 

**Quando**  ele acessar o sistema para gerenciar os casos 

**Então**  deve poder ter os mesmos atributos do perfil de "Atendente Voz Aluno" e visualizar todos os casos de voz dos atendentes cadastrados que estão abaixo de sua hierarquia de papéis 

  


**Cenário 02: Visualização das informações EPS Elo:**  


  


**Dado que**  um Supervisor Voz, com papel de "Gestor Voz Elo" acessou o Salesforce 

**Quando**  ele acessar o sistema para gerenciar os casos 

**Então**  deve poder ter os mesmos atributos do perfil de "Atendente Voz Aluno" e visualizar todos os casos de voz dos atendentes cadastrados que estão abaixo de sua hierarquia de papéis


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu  ****como**  "Supervisor Voz" e com o papel de "Gestor Voz Elo" ou "Gestor Voz Konecta" 

**Gostaria,  **no caso (Campo "Proprietário"), fosse possível modificar o dono mediante necessidade e demais funcionalidades do perfil atual utilizando o novo perfil "Supervisor" Voz clonado do perfil "Atendente Aluno - Voz" 

**Para** ser possível gerenciar as atribuições dos casos e agilizar os atendimentos
