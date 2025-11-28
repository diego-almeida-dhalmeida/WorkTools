---
id: "WI-447105"
title: "[Relacionamento] Criação do perfil de Administrador de Relacionamento"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2025-01-08T21:32:54.033Z"
changed: "2025-08-08T14:59:19.553Z"
---
# WI-447105 - [Relacionamento] Criação do perfil de Administrador de Relacionamento

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/447105](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/447105)

## 1. Identificação

- **ID/Ref:** WI-447105
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

Cenário 01 - Criação e Edição de Novas Tabulações  


**Dado** que sou um Administrador de Relacionamento,  


**Quando** acesso a funcionalidade de criação de tabulações,  


**Então** devo ser capaz de criar e editar tabulações no sistema.  


  


Cenário 02 - Criação de Novas Filas de Atendimento  


**Dado** que sou um Administrador de Relacionamento,  


**Quando** acesso a funcionalidade de criação de filas,  


**Então** devo ser capaz de criar novas filas de atendimento.  


  


Cenário 03 - Criação de Motivos de Atendimento  


**Dado** que sou um Administrador de Relacionamento,  


**Quando** acesso o gerenciador de objetos,  


**Então** devo ser capaz de criar e editar os motivos de atendimento (n1, n2 e n3), serviços e grupos de serviço para as tabulações.  


  


Cenário 04 - Importação em Massa  


**Dado** que sou um Administrador de Relacionamento,  


**Quando** desejo realizar importações e edições em massa para tabulações e filas por tabulação,  


**Então** devo ser capaz de importar as informações a partir de um arquivo Excel ou CSV de forma simplificada, conforme a RN04.


## 9. Descrição (Abaixo vem do Azure DevOps)

****

**Eu** , como Administrador de Relacionamento,  


**Quero** criar novas tabulações e filas de atendimento,  


**Para** que eu possa gerenciar eficientemente os atendimentos e organizar os motivos e serviços relacionados.  


  


Regras de Negócio:  


RN01 - Criação e Edição de Tabulações  


O Administrador de Relacionamento deve ser capaz de editar e criar novas tabulações através do item do menu Tabulações de Atendimento.  


  


RN02 - Criação e Edição de Filas de Atendimento  


O Administrador de Relacionamento deve ser capaz de editar e criar novas filas de atendimento através do item do menu Filas por Tabulação.  


  


RN03 - Criação de Motivos de Atendimento  


Nas configurações do sistema, através do gerenciador de objetos > Tabulação de Atendimento > Campos e Relacionamentos, o Administrador de Relacionamento deve ser capaz de editar e criar novos motivos de atendimento (n1, n2 e n3), serviços e grupos de serviço.  


  


RN04 - Importação e Edição em Massa  


O Administrador de Relacionamento deve ter acesso a uma ferramenta que facilite a importação e edição em massa de tabulações e filas a partir de arquivos Excel ou CSV, sem depender do SalesForce Inspector.  


  


Para criar uma nova tabulação, devem ser informados os campos abaixo:

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/04eedeef-1a38-49e0-a052-ca9b76505730?fileName=image.png)  
  


Motivo de Atendimento 1  


Motivo de Atendimento 2 (se houver)  


Motivo de Atendimento 3 (se houver)  


Grupo de Serviço  


Serviço  


Ativo (true/false)  


  


Para criar cada instância de associação de Fila por Tabulação, devem ser informados os campos abaixo:  


  


Tabulação de Atendimento associada (Tab-xxxx)  


Proprietário (fila responsável por aquela tabulação)  


External Id (nome que distingue as associações, pode ser gerado automaticamente no formato: [Proprietário]_Tab_xxxx)
