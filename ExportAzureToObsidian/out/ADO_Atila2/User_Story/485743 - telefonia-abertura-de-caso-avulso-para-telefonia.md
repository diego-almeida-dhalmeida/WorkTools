---
id: "WI-485743"
title: "[Telefonia] - Abertura de caso avulso para telefonia"
type: "User Story"
state: "Resolved"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 07-2025-Relacionamento"
assignedTo: "Marcos Vinicius Almeida da Silva"
created: "2025-05-06T20:12:27.323Z"
changed: "2025-07-31T19:49:06.55Z"
---
# WI-485743 - [Telefonia] - Abertura de caso avulso para telefonia

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/485743](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/485743)

## 1. Identificação

- **ID/Ref:** WI-485743
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

**Critério de Aceite 1** – Exibição do botão "Criar caso não identificado"  


**Dado que** estou na tela padrão do caso de atendimento com Perfil Atendente Voz – Aluno  


**Quando**  houve uma falha na abertura automática de caso via conector Avaya  


**Então** deve estar disponível um botão com a opção "Criar caso"  


  


**Critério de Aceite 2** – Criação de caso de aluno não identificado  


**Dado que** o atendente clicou no botão "Criar caso não identificado"  


**Quando** o sistema gerar o novo caso  


**Então** ele deve ser classificado como um caso de aluno não identificado, com os campos do aluno em branco até que o botão "Identificar Aluno" seja utilizado  


  


**Critério de Aceite 3** – Preenchimento de dados pelo botão "Identificar Aluno"  


**Dado que** estou visualizando um caso de aluno não identificado  


**Quando** clico no botão "Identificar Aluno"  


**Então** os dados do aluno devem ser preenchidos automaticamente no caso, conforme a identificação realizada  


  


**Critério de Aceite 4** – Seleção do tipo de atendimento (SAC ou Retenção)  


**Dado que** estou criando um caso não identificado  


**Quando** seleciono a origem do caso como "Avulso Voz"  


**Então** devo poder escolher entre as opções "SAC" ou "Retenção" como tipo de atendimento


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como** operador do call center com Perfil Atendente Voz - Aluno 

**Quero ter  **um botão para criação de caso avulso na tela padrão de caso de atendimento 

**Com o objetivo de** viabilizar para o atendente a possibilidade de registro de atendimento caso ocorra algum problema na abertura de caso pelo conector Avaya. 

  


**RN01:** O caso dese ser criado como um caso avulso, onde as informações do aluno serão preenchidas automaticamente pelo botão "Identificar Aluno"

  


**RN02** : O Caso deve ser criado com os seguintes valores para os campos abaixo, sendo todos os campos obrigatórios:  
  


Parâmetros em que o atendente deve escolher uma opção (Obrigatório):  


  


**Tipos de registro  (Atendente deverá selecionar): **

"Atendimento - Aluno"  


"Atendimento - Retenção"  


  


**Origem do caso - Campo dependente:    **

SAC - Voz - Se houver a seleção de **Tipos de registro:  **"Atendimento - Aluno"

Retenção - Voz \- Se houver a seleção de **Tipos de registro:  **"Atendimento - Retenção"  
  


**Fila de atendimento:**

**Deverá ser criada as filas SAC Avulso e Retenção Avulso**

**SAC**-Voz** Avulso**\- Se houver a seleção de **Tipos de registro:  **"Atendimento - Aluno"  


**Retenção-Voz Avulso**  \- Se houver a seleção de **Tipos de registro:  **"Atendimento - Retenção"

  


**Marca  ****(Atendente deverá selecionar) : **  
Estácio

Wyden

Ibmec

Idomed 

  


**Parâmetros fixos para o caso:**

  


**Status:** Aberto 

**Assunto:** Caso Avulso  


**Aluno não identificado:** Verdadeiro  


**Proprietário:** Atendente que estiver criando o caso

  


**RN04:** Criar a tarefa associada ao caso, realizando a ação de abertura de caso na tela de cockpit;
