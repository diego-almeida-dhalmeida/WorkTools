---
id: "WI-312932"
title: "[Telefonia] Carga da Árvore de Serviços na URA/Script Points"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Marcos Vinicius Almeida da Silva"
created: "2023-10-17T17:03:39.89Z"
changed: "2025-08-27T16:11:13.23Z"
---
# WI-312932 - [Telefonia] Carga da Árvore de Serviços na URA/Script Points

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/312932](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/312932)

## 1. Identificação

- **ID/Ref:** WI-312932
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

.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu** , como operador do Salesforce 

**Quero** ter acesso aos dados de navegação do aluno na URA, a partir das informações fornecidas pela Mutant 

**Para** melhorar a experiência do aluno no atendimento e realizar análises 

 

**RN01 – Jornada do Aluno na URA**

Deverá ser realizada uma carga, conforme planilha anexa, dos desfechos, chutes e caminhos disponibilizados ao aluno na URA. Existirá uma carga diferente para cada marca (Estácio, Wyden, Ibmec e IDOMED) 

Estas informações deverão ser registradas na tela do Caso de acordo com o caminho percorrido pelo aluno na navegação na URA. 

A URA será responsável por fornecer ao Salesforce no ato do encerramento do atendimento na URA a jornada do aluno. 

Na carga disponibilizada será sinalizado quais são todos os desfechos e chutes que deverão ser cadastrados na plataforma e disponibilizados ao atendente humano na tela de atendimento. 

 

**RN02 -** **Carga de Desfechos x Serviços**

Deverá ser realizada uma carga De-Para de Desfechos x Serviços para correlação dos desfechos do canal de Voz, aos serviços cadastrados no Salesforce. 

Com base nesta carga, deverá ocorrer o preenchimento do Campo de “Assunto” na tela de caso, da mesma forma que realizado para os canais de WhatsApp e Chat, conforme [#262312](https://arquiteturaestacio.visualstudio.com/Atila%202.0/_workitems/edit/262312/) .
