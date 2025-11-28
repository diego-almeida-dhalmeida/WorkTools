---
id: "WI-448522"
title: "[Telefonia/Captação] Mutant - Ajustes para Assunto e Captura de Telefone Binado no Caso de Captação"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 01-2025-Relacionamento"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2025-01-13T19:21:22.487Z"
changed: "2025-04-04T19:34:46.693Z"
---
# WI-448522 - [Telefonia/Captação] Mutant - Ajustes para Assunto e Captura de Telefone Binado no Caso de Captação

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/448522](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/448522)

## 1. Identificação

- **ID/Ref:** WI-448522
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

**Dado que** um novo _case_ seja criado relacionado à captação,  


**Quando** o _case_ for registrado,  
**Então** o assunto deverá ser automaticamente preenchido como "Captação - Voz"

  
**Dado que** o _case_ seja criado,  
**Quando** o número de telefone binado estiver disponível,  
**Então** o sistema deverá capturar automaticamente o número e registrá-lo no campo de número de contato do _case_.

  


Possui ação da Mutant para ambos os critérios de aceite.


## 9. Descrição (Abaixo vem do Azure DevOps)

******Eu como  **operador do Call Center com o perfil de Atl Atendimento  


**Gostaria** que, no aplicativo Vendas, o assunto do _caso  _seja automaticamente preenchido como "Captação - Voz" e que o número de telefone binado (número de contato - **somente leitura**) seja capturado  
**Para que** as informações do _case_ sejam registradas de forma padronizada e completa, garantindo maior eficiência no atendimento e rastreabilidade dos dados.  


  


**Obs:** O funcionamento e fluxo das informações deve ser o mesmo dos que ocorrem hoje no aplicativo Atendimento - Aluno.
