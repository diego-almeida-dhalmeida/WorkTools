---
id: "WI-461868"
title: "[Relacionamento] -  Ajuste no Raio-X para aluno sem informação no Databricks"
type: "Improvement"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 05-2025-Relacionamento"
assignedTo: "Lucas Morisson Loreto Machado"
created: "2025-02-20T22:03:17.817Z"
changed: "2025-06-04T18:28:47.593Z"
---
# WI-461868 - [Relacionamento] -  Ajuste no Raio-X para aluno sem informação no Databricks

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/461868](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/461868)

## 1. Identificação

- **ID/Ref:** WI-461868
- **Tipo:** Improvement
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

**Dado que**  o operador com perfil Atendente Voz - Aluno, ou Atendente-Aluno realizou um atendimento 

**Quando**  ele selecionar as opções do Raio X de uma aluno não possui informações do Raio-X 

**Então**  as telas de Atrito/Evasão, Risco Financeiro, Engajamento e Renovação devem exibir a  mensagem de **" Não existe informações do Raio-X para essa matrícula".**

**  
**

**Dado que  o operador com perfil Atendente Voz - Aluno, ou Atendente-Aluno realizou um atendimento**

****Quando**  ele realizar um atendimento utilizando a matrícula 200402051303 (Miriam Assunção)  
**

****Então**  as telas de Atrito/Evasão, Risco Financeiro, Engajamento e Renovação devem exibir a mensagem de **" Não existe informações do Raio-X para essa matrícula".**  
**

****  
****

**Dado que****** o operador com perfil Atendente Voz - Aluno, ou Atendente-Aluno realizou um atendimento  


**Quando** ele realizar um atendimento utilizando a matrícula 202308505505 (Elaine Cristina)  


Então deverá exibir as informações do Raio-X normalmente.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu** como Atendente Voz - Aluno, ou Atendente-Aluno  


**Quero** que seja exibida mensagem na aba dos dados do Raio-X, indicando que não existem informações para o aluno, caso não haja informações no Data Bricks   


**Para** que eu possa saber que não existem informações de Raio-X para a matrícula  


  


  


**RN 01 - Exibir mensagem nas telas da aba do Raio-X para alunos que não possuem informações no Data Bricks:**  


Caso a matrícula do aluno não tenha informações de Raio-X no Data Bricks, ao invés de ficar processando sem exibir as informações, precisamos exibir a seguinte mensagem (nas abas de Atrito/Evasão, Risco Financeiro, Engajamento e Renovação) destacado em vermelho:

**" Não existe informações do Raio-X para essa matrícula"  
**  
A mensagem deve ficar semelhante à imagem abaixo:  
![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/50517fe9-b5a8-4376-8ced-d58c038c06ad?fileName=image.png)  


  


**RN 02 - Ajuste em todos as abas que refletem o Raio-X**  


  


Este ajuste precisa também ser refletido na **Matrícula do Aluno** , na Aba Raio-X e nas telas do **WhatsApp**  **Chat-SIA  **(telas do Massaging Sassion)**** e **Telefonia (Tarefa)**.
