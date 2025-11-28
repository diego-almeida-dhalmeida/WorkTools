---
id: "WI-308596"
title: "[Relacionamento] CR - Integração com o OneTrust"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Miriam Assuncao Da Silva Candido"
created: "2023-09-29T21:31:25.21Z"
changed: "2025-01-14T20:04:25.89Z"
---
# WI-308596 - [Relacionamento] CR - Integração com o OneTrust

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/308596](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/308596)

## 1. Identificação

- **ID/Ref:** WI-308596
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

**

Cenário 01: Integração com o OneTrust

Dado que existem informações de consentimento do aluno

Quando receber essas informações do OneTrust e do Salesforce - Captação

Então essas informações deverão ser registradas e atualizadas na tela do aluno e da matrícula, sendo vinculadas ao CPF e marca

  


Resultado esperado 1: Receber as informações de consentimento do aluno do OneTrust e Salesforce - Captação para estar sempre atualizados

  


Resultado esperado 2: Registrar as informações de consentimento no objeto matrícula e objeto conta pessoal, utilizando os identificados de CPF e marca, vinculadas à matrícula

  


Resultados não esperados: 

  * Não receber as informações atualizadas dos demais sistemas

  * Não registrar as informações de consentimento dos objetos, matrícula e conta pessoal, utilizando CPF e marca como identificadores


**


## 9. Descrição (Abaixo vem do Azure DevOps)

**

**

Eu como Salesforce

Quero receber e enviar os dados de opt in e opt out através de integração com o OneTrust

Para que o marketing cloud e o Salesforce - Relacionamento possam identificar os consentimos de opt-in e opt-out dos alunos, crucial para comunicações ativas. **

  


RN01 - Controle de consentimento através da Integração com o OneTrust

  


O OneTrust será o dono da informação de consentimento e será consultado pelo Salesforce e outros sistemas. O consentimento precisa ser aberto para cada canal de comunicação (whatsapp, sms, push, voz, e-mail). Quando houver uma modificação no consentimento, o Salesforce - Relacionamento precisa ser atualizado. 

  


  


RN02 - Registrar o opt in e opt do aluno no Salesforce - Relacionamento

  


As informações de consentimento do aluno precisam estar diferenciadas por marca e ter identificador de CPF, conseguindo identificar quais matrículas correspondem a cada consentimento. O consentimento do aluno precisa estar vinculado aos objetos correspondentes de matrícula do aluno. Além disso, o registro dessa informação também deve ser feito no objeto conta pessoal. 

  


No objeto matrícula, o consentimento para a marca da matrícula precisa estar em um formato similar ao exemplo abaixo:

  


![](https://lh6.googleusercontent.com/fO0lDevuripsOT6ZqDNms0A7SLgWdaknm62ZsLG9ghY0YY3wee4AwHrytX6yrVyJSiArKF9hHAK6BNeHg89jQbllSGY87pIkHYd0CC5ATMTNK1EpNgrt_K_Pcm1bxsyUcWkFWaNZ4EWemLjLypk7H0E)

  


  


  


 

No objeto conta pessoal, todos os consentimentos conectados ao número de CPF do aluno precisam estar listados. É possível selecionar a matrícula que deseja ver, aparecendo junto com as informações do curso e da marca, para ver os detalhes do consentimento de modo similar ao exemplo abaixo:

  


  


  


![](https://lh3.googleusercontent.com/lSVPem9EQXaMBG8kQInHcaj5G5CGBYkvkWfwPQet7_5Pu4iuCL6AJfJDUE-M_HLgwJM6U81X6-DWZJBwdaaWCkFEox7nhSr7qNtxLVHzBuF0AKysxTUBPLirVmMIC1nsJZMsvHzPE2TrivqcU0n62Q8)

![](https://lh6.googleusercontent.com/_wL7sGULbq-gxJHIxadpv85FwUE86XiXKehABDu1kParpgKytJ3NH0gBMjou-Z0gKQBnobvHUavKObaOVXInsa6pIpuYlZmsHDxv10N9PquaL-Kp5p8MB228saaqNPxFcMk5tYpFYXhGuwAS3YH39dE)

**
