---
id: "WI-476206"
title: "[Telefonia/Captação] - Registro de criação de lead improdutivo"
type: "User Story"
state: "Active"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: ""
created: "2025-04-04T20:25:04.67Z"
changed: "2025-08-08T14:59:19.553Z"
---
# WI-476206 - [Telefonia/Captação] - Registro de criação de lead improdutivo

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/476206](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/476206)

## 1. Identificação

- **ID/Ref:** WI-476206
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

****

**Dado** que o candidato não conseguiu se identificar  
**Quando** a chamada foi interrompida por qualquer motivo, antes da conclusão da captação, através de telefone, cpf ou inscrição  
**Então** o Salesforce deverá registrar essa chamada, como lead improdutivo através do número de telefone que fez a ligação.


## 9. Descrição (Abaixo vem do Azure DevOps)

****

****

****

**Eu como**  atendente ATL - Atendimento,  
**Quero**  que seja criado automaticamente um lead improdutivo no Salescloud quando houver uma interrupção de chamada antes de qualquer identificação.  
**Para** que possa ser medida a quantidade de chamadas interrompidas sempre que o candidato chegar a fila de captação, mas a URA não conseguir identificar a quem pertence o telefone, cpf ou inscrição.  
  
**RN01 - Será necessário fazer a tabulação para encerrar o atendimento de lead improdutivo.  
** O atendente deverá encerrar o atendimento, seguindo o processo de tabulação.

**Obs: Está criado um vinculo entre URA e SALESFORCE para identificar as chamadas que caíram antes do transbordo.**
