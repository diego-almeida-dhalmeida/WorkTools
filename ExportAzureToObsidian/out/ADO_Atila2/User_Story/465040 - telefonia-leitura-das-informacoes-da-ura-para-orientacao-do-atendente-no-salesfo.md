---
id: "WI-465040"
title: "[Telefonia] - Leitura das informações da URA para orientação do atendente no Salesforce"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 07-2025-Relacionamento"
assignedTo: "Marcos Vinicius Almeida da Silva"
created: "2025-03-06T13:03:15.793Z"
changed: "2025-07-31T19:49:06.55Z"
---
# WI-465040 - [Telefonia] - Leitura das informações da URA para orientação do atendente no Salesforce

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/465040](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/465040)

## 1. Identificação

- **ID/Ref:** WI-465040
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

**Dado que**  estou logado no cockpit de atendimento como operador de voz do call center, com o perfil "Atendente Voz - Aluno"  


**Quando**  acessar a Aba "Jornada"  
**Então**  as informações da Jornada URA devem ser exibidas para o operador


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como** Atendente Voz - Aluno 

**Quero** que as informações de atendimento da URA sejam exibidas no cockpit do atendente dentro da aba "Argumentação"

**Com o objetivo de** melhorar o entendimento do operador com relação aos pontos já explorados pela URA com o aluno 

  


**Obs:  **

  


1) A história será referente aos alunos que forem direcionados a retenção (Retenção - Voz) e que passaram pela Cascata de Retenção da URA. 

  


2) O nome da Aba deverá ser "Jornada URA"

  


3) A informação "jornadaURA" deverá ser atualizada no caso para o recebimento das informações da Cascara de Retenção da URA. 

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/9f058114-062f-4a9c-ab63-70ef2285f84b?fileName=image.png)  


  
Teles para a orientação de criação da funcionalidade:   
  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/447a4637-ede5-462a-ac63-17630d94495c?fileName=image.png)  
  
  
![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/375adc2d-dafd-409d-a1a1-5f7fb2f4a8bf?fileName=image.png)  
  
  
Volumetria para os textos que vierem da URA:  


Até 5 temas que podem ser explorados com o aluno. 

Fazer textos com no máximo 500 caracteres.
