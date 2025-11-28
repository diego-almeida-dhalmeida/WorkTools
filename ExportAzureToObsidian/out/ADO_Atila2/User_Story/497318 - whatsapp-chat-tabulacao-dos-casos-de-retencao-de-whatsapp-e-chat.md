---
id: "WI-497318"
title: "[Whatsapp / Chat] - Tabulação dos Casos de Retenção de Whatsapp e Chat"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 05-2025-Relacionamento"
assignedTo: ""
created: "2025-06-06T17:31:18.123Z"
changed: "2025-08-08T14:59:19.553Z"
---
# WI-497318 - [Whatsapp / Chat] - Tabulação dos Casos de Retenção de Whatsapp e Chat

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/497318](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/497318)

## 1. Identificação

- **ID/Ref:** WI-497318
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

****

****

#### Critério 1 – Exibição de campos de tabulação em casos de Retenção Digital

**Dado que** sou um atendente com o perfil "Atendente - Aluno"  
**E** estou acessando um caso com o tipo de registro **Atendimento - Retenção Digital**  
**Quando** o atendimento tiver sido originado via **WhatsApp** ou **Chat**  
**Então** os campos obrigatórios para **tabulação** do caso deverão ser exibidos na tela do Salesforce  
  


#### Critério 2 – Obrigatoriedade da tabulação antes de encerrar o caso 

**Dado que** sou um atendente com o perfil "Atendente - Aluno"  
**E** estou finalizando um caso de **Retenção Digital**  
**Quando** eu tentar encerrar o caso  
**Então** o sistema deverá validar se os campos de tabulação estão preenchidos  
**E** impedir o encerramento caso estejam em branco 

#### Critério 3 – Ocultação dos campos de tabulação em outros tipos de caso 

**Dado que** sou um atendente com o perfil "Atendente - Aluno"  
**E** estou acessando um caso que **não seja** do tipo **Atendimento - Retenção Digital**  
**Quando** o canal do atendimento **não for WhatsApp nem Chat**  
**Então** os campos específicos de tabulação para retenção digital **não deverão** ser exibidos


## 9. Descrição (Abaixo vem do Azure DevOps)

****

******Como** atendente do Call Center de retenção com perfil "Atendente - Aluno"  
**Quero** poder realizar a tabulação dos atendimentos de retenção recebidos via WhatsApp ou Chat  
**Para que** as informações do atendimento sejam registradas corretamente no Salesforce e possam ser analisadas posteriormente

  


**RN1:** A tabulação dos caso de retenção devem possuir, além das opções de tabualção padrão, as tabulações de Retenção:  
  
![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/5308f327-47fe-483e-a542-60da5a87f32c?fileName=image.png)
