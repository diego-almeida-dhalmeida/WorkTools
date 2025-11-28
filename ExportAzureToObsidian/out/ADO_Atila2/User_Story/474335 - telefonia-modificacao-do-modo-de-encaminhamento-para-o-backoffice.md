---
id: "WI-474335"
title: "[Telefonia] - Modificação do modo de encaminhamento para o Backoffice"
type: "User Story"
state: "Active"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Reabastecimento-02-2025-Relacionamento"
assignedTo: "Giovana Calderani Yaekashi"
created: "2025-03-31T22:06:28.38Z"
changed: "2025-09-15T20:14:43.343Z"
---
# WI-474335 - [Telefonia] - Modificação do modo de encaminhamento para o Backoffice

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/474335](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/474335)

## 1. Identificação

- **ID/Ref:** WI-474335
- **Tipo:** User Story
- **Status:** Active


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

Fluxo para testes da funcionalidade:  


  


1) Após realizar uma ligação para o número 0800 888 6970  


2) Realizar o login no Salesforce com o operador Atendente 1 SAC Konecta 

3) Utilizar a matrícula 201908573317  


4) Escolher o caminho 5 para o transbordo  


5) Utilizar no conector avaya o usuário agente01@estacio.br, senha: Avaya@1234  


6) Realizar o encaminhamento do caso para o Backoffice no botão Encaminhar  


  


**Critério de aceite 1:**  


  


**Dados** que acesso o sistema de telefonia como um operador com perfil Atendente Voz - Aluno  


**Quando** um encaminhamento for realizado para o backoffice  


**Então** um novo caso (caso filho) deverá ser criado para o time do backoffice e associado as listas de atendimento **BO SAC Konecta** e **BO Retenção Elo** conforme a Fila de Atendimento do caso Pai (mesma regra existente hoje)  


  


**Critério de aceite 2:**  


  


**Dados** que acesso o sistema de telefonia como um operador com perfil Atendente Voz - Aluno  


**Quando**  um encaminhamento terminar de ser realizado para o backoffice  


**Então** o caso Pai em atendimento deverá ser tabulado e encerrado pelo atendente.  


****  


**Critério de aceite 3:**  


  


**Dados  **que acesso o sistema de telefonia como um operador com perfil Atendente Voz - Aluno do backoffice  


**Quando**  realizar o atendimento de um caso das filas **BO SAC Konecta** e **BO Retenção Elo**  


**Então  **o caso filho deverá ter as mesmas regras de atendimento existentes hoje para caso do backoffice (conforme feature [#447664](https://dev.azure.com/ArquiteturaEstacio/Atila%202.0/_workitems/edit/447664/))

  


**Critério de aceite 4:**  





**Dados  **que acesso o sistema de telefonia como um operador com perfil Supervisor ou Gestor-aluno   


**Quando**  acessar o relatório de Atendimento de Backoffice  


**Então  **o caso filho deverá conter os seguintes campos disponíveis para visualização dos dados no relatório:  
  


****

Fila  


Nº de Protocolo  


Status do caso  


Status do backoffice  


Tabulação Nível 1 (Encaminhamento)  


Tabulação Nível 2 (Encaminhamento)  


Tabulação Nível 3 (Encaminhamento)  


Motivo Tabulação 1 (Encerramento)  


Motivo Tabulação 2 (Encerramento)  


Motivo Tabulação 3 (Encerramento)  


Encaminhamento Indevido  


**Dias Úteis em Aberto* - Campo calculado dentro do relatório**  


Área interna  


Data Criação  


Data Atualização  


Data de Fechamento  


**Encaminhado por - Campos a ser criado**  


Atribuído para (Proprietário do caso)  


Nome  


CPF Aluno  


Matrícula  


Modalidade

****

**Endereço do Relatório em PRD:  **

<https://yduqs2020.lightning.force.com/lightning/r/Report/00ONp00000Df4eTMAR/view?queryScope=userFolders>

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/020c65e6-7e39-45ca-b19d-34ecda9170d2?fileName=image.png)  
  
  


**OBS - Avaliar a possibilidade de criação dos seguintes campos:**  
  
Dias Uteis sem Atualizar  
Dias Corridos em Aberto  
Tratado Dentro do SLA (Período de 5 dias úteis)  
  


Faixa de Tratamento 

Data da Extração


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como** operador do Call Center com perfil de Atendente Voz - Aluno 

**Quero** que o encaminhamento para o backoffice seja feito através da geração de um novo caso (caso filho) 

**Com o objetivo de** poder realizar a tabulação e fechamento do caso pai ao final da ligação 

  


Relação com a história [#463367](https://dev.azure.com/ArquiteturaEstacio/Atila%202.0/_workitems/edit/463367/)

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/83ec1d6d-244a-427f-849c-bef528008b29?fileName=image.png)
