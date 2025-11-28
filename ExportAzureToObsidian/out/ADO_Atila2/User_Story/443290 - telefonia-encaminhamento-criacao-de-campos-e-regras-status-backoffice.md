---
id: "WI-443290"
title: "[Telefonia] Encaminhamento - Criação de campos e regras “Status Backoffice”"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 04-2024-CoERelac-2 ªOndaTelefonia"
assignedTo: "Diego Felipe"
created: "2024-12-16T17:51:22.223Z"
changed: "2025-05-21T22:28:12.47Z"
---
# WI-443290 - [Telefonia] Encaminhamento - Criação de campos e regras “Status Backoffice”

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/443290](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/443290)

## 1. Identificação

- **ID/Ref:** WI-443290
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

****

**Roteiro de teste:**

  1. Abrir o Salesforce e entrar com o operador  Marcos Antonio Macedo Dos Santos (marcos.dsantos.ter@estacio.br)
  2. Abrir a tela de lista de casos de Backoffice do operador e selecionar um. 
  3. Verificar a existência de pelo menos um caso com cada um dos status detalhados na RN01. 
  4. Alterar o status de um caso em andamento, e verificar a alteração no campo. 
  5. Abrir um caso de atendimento não associado ao Backoffice e garantir que o campo esteja vazio. 



****

**  
**

**Critérios de Aceitação:**

  


**1\. Controle de Fluxo de Atendimento:**  


  


**Dado que** o operador iniciou o tratamento de um caso, 

**quando** o status for alterado para "Em Andamento", 

**então** o sistema deve registrar a data e a hora dessa mudança.  


  


O sistema deve garantir que o status "Fechado" não seja alterado a menos que o tratamento tenha sido finalizado e o caso tenha sido completado.  


  


**  
**

**  
**

**  
**

**  
**


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como** operador de backoffice (Com perfil "Atendente Voz - Aluno")  
**Quero  **visualizar o campo Status Backoffice  
**Para que** eu possa acompanhar os casos de forma eficiente, com controle adequado de status e atribuições, garantindo que os casos sejam tratados corretamente até o fechamento.




  


**RN1 -  Criação do campo de Status Backoffice:**  


  


Os casos devem ter os seguintes status de marcação - Necessário a criação de um novo campo "Status Backoffice", na seção "Motivos de Encaminhamento", que deverá ser incluída a lista de campos: Aberto, Atribuído, Em andamento, Pendente e Fechado; e regras de automação conforme a lista abaixo: 

  


**Vazio**(não aparece nada escrito quando o caso não tiver sido enviado ao Backoffice) 

  


**" Aberto":** Quando o caso tiver sido encaminhado para o Backoffice e está na fila, mas ainda não foi atribuído a um operador (Automático) 

  


**" Atribuído": **Quando o caso foi atribuído ao operador, mas ainda não foi iniciado. (Automático)

  


**" Em Andamento":** O operador iniciou o tratamento do caso. Esse status será alterado manualmente pelo operador quando ele começar a trabalhar no caso.  
  


**" Pendente":** O operador poderá selecionar manualmente o status "Pendente" para indicar que o caso está aguardando algum evento externo ou ação adicional para continuar. Na opção do caso sair de pendente o operador poderá alterar a opção para "Em andamento" manualmente;  
  


**" Fechado": **O caso será fechado quando o operador concluir o tratamento e marcar o caso como encerrado. (Automático) - Uma vez o caso fechado não será possível editar mais o caso.  


  


  


  


  


  


  


**  
**

**  
**
