---
id: "WI-389479"
title: "Resposta automática no ReclameAqui ao ser criado um novo Caso"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Andre Luiz de Paula Bezerra"
created: "2024-06-25T13:54:16.51Z"
changed: "2024-11-05T20:18:02.79Z"
---
# WI-389479 - Resposta automática no ReclameAqui ao ser criado um novo Caso

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/389479](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/389479)

## 1. Identificação

- **ID/Ref:** WI-389479
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

**Cenário 01 - Visualização da mensagem enviada após a abertura de uma reclamação.  **

**  
**

**Dado que** uma atualização da reclamação deve ser disponibilizada para os alunos,** **

**Quando  uma reclamação for aberta via ReclameAqui, **

**Então** deve ser gerado um novo caso no Service Cloud com as informações dessa reclamação e uma comunicação pública deve ser disparada para esses alunos. 

** **

**Cenário 02 - Validação da mensagem**

**Dado que** a comunicação deve ser padronizada entre as áreas, ** **

**Quando** for disparada a mensagem de atualização do status da solicitação, 

**Então** esta mensagem deve estar de acordo com o(s) modelo(s) especificado(s) pelas áreas de negócio. 

  


**Cenário 03 - Comunicação após 45h sem atuação no chamado**

**Dado que  **devemos atualizar os alunos sobre ao andamentos das reclamações, 

**Quando** uma reclamação estiver em aberto e sem a atuação de um atendente por mais de 45h,** **

**Então** deve ser disparada uma mensagem para o aluno informando que a solicitação dele está em análise das áreas internas.


## 9. Descrição (Abaixo vem do Azure DevOps)

Eu, como **atendente, coordenador, supervisor;**

Quero que sejam enviadas respostas automáticas para o aluno que abriu uma reclamação no ReclameAqui, 

**Para** viabilizar o envio de mensagens padronizadas e garantir uma comunicação assertiva com os alunos. 

  


RN01 

  


Quando for aberta uma reclamação via ReclameAqui e um novo caso gerado no Salesforce, o aluno deve receber uma mensagem informando que a solicitação dele já está sendo atendida por um de nossos agentes.

  


RN02 

  


A mensagem que será enviada deve estar de acordo com o modelo especificado pelas áreas de negócio.  

 

**RN03**

**  
**

Quando uma reclamação está em aberto há 45 horas úteis, deve ser disparada uma comunicação para o aluno informando que a reclamação dele está sendo atendida. 

**  
**
