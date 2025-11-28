---
id: "WI-419960"
title: "Atendimento - Geral"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: ""
created: "2024-09-25T19:56:30.097Z"
changed: "2024-11-05T20:18:02.79Z"
---
# WI-419960 - Atendimento - Geral

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/419960](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/419960)

## 1. Identificação

- **ID/Ref:** WI-419960
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

​**Cenário 01: Visualização das informações em comum às abas**  


DADO QUE: o usuário durante o atendimento

QUANDO: acessar qualquer uma das abas de atendimento (Voz/Chat/WhatsApp)  
ENTÃO: poderá visualizar as informações gerais do atendimento conforme as Regras de Negócio  
**Resultados esperados  **: visualizar as informações conforme mencionado nas regras de negócio.  
**Resultados não esperados  **: não visualizar as informações conforme mencionado nas regras de negócio.  


  


**Cenário 02: Funcionamento dos faróis**  
DADO QUE: o usuário durante o atendimento  
QUANDO: clicar em um dos farois  
ENTÃO: será redirecionado para a página contendo as informações daquele farol conforme a RN03

**Resultados esperados  **: ser redirecionado corretamente ao clicar no item.  
**Resultados não esperados  **: não ser redirecionado ao clicar no item.

  


**Cenário 03: Visualização das informações do tipo de atendimento**  
DADO QUE: o usuário durante o atendimento  
QUANDO: acessar qualquer uma das abas de atendimento (Voz/Chat/WhatsApp)  
ENTÃO: poderá visualizar as informações relativas àquele tipo de atendimento, conforme as RNs 02, 04 e 05.

**Resultados esperados  **: visualizar apenas as informações relativas àquele tipo de atendimento conforme mencionado nas regras de negócio.  
**Resultados não esperados  **: não visualizar, ou visualisar outras informações relativas que não as daquele tipo de atendimento


## 9. Descrição (Abaixo vem do Azure DevOps)

Eu, como usuário do Salesforce, 

Quero visualizar as informações gerais do atendimento do aluno, 

Para que eu possa fornecer um atendimento mais completo e direcionado.

RN01 – Tipo de Atendimento (AS IS) 

A depender do tipo de atendimento, o header e o bloco que ocupa 1/3 da tela a esquerda irão mudar, de acordo com o tipo de objeto do sistema. Fora isso, todas as outras propriedades (os blocos nos 2/3 à direita da tela) serão iguais entre os três objetos. Os três tipos são: 

  * Messaging Session (para atendimentos no WhatsApp) 

  * Chat Transcription (para atendimentos via chat) 

  * Tarefas (para atendimentos de voz) 




RN02 – Header (AS IS) 

Header com título do atendimento, a depender do tipo de objeto. 

  * Número da Messaging Session 

  * Número da Transcrição de Chat 

  * Número da tarefa (de atendimento de voz) 




RN03 – Banner de informações lateral \- Faróis

Banner com sinalização dos alarmes (oriundas de sistemas externos), com informações visuais (no formato de faróis) e links para as abas dos respectivos alarmes, localizado à esquerda, no topo, ocupando 1/3 da tela: 

  * Atritado (Relacionamento)
  * Renovado (Acadêmico)
  * Rechamada (Relacionamento)
  * Inadimplente (Financeiro)
  * Documentação Pendente (Acadêmico)



RN04a – Bloco de chat (Messaging e Chat) 

Bloco com chat para interação com o aluno, localizado à esquerda, abaixo dos faróis, ocupando 1/3 da tela.  

RN04b – Bloco de anotações (Voz) 

Bloco com espaço para o atendente fazer anotações sobre o atendimento, localizado à esquerda, abaixo dos faróis, ocupando 1/3 da tela.

RN05 - Sub-aba - Argumentação (AS IS)

Apenas para atendimentos de retenção - Voz (AS IS)

RN06 - Sub-aba - Base de conhecimento

AS IS

RN07 - Sub-aba - Autosserviços

AS IS
