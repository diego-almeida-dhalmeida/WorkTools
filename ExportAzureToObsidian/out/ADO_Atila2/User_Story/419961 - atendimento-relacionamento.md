---
id: "WI-419961"
title: "Atendimento - Relacionamento"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: ""
created: "2024-09-25T19:58:40.403Z"
changed: "2024-11-05T20:18:02.79Z"
---
# WI-419961 - Atendimento - Relacionamento

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/419961](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/419961)

## 1. Identificação

- **ID/Ref:** WI-419961
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

**Cenário 01: Visualização das informações na tela de Relacionamento**  


DADO QUE: o usuário durante a consulta às informações de relacionamento com o aluno  
QUANDO: acessar a aba Relacionamento da Atendimento  
ENTÃO: poderá visualizar as informações de relacionamento como mencionado nas Regras de Negócio.  
**Resultados esperados  **: visualizar as informações conforme mencionado nas regras de negócio.  
**Resultados não esperados  **: não visualizar as informações conforme mencionado nas regras de negócio

  


**Cenário 02: Redirecionamento para as telas de informações complementares**  


DADO QUE: o usuário durante a consulta às informações de relacionamento com o aluno  
QUANDO: clicar em um dos links de Dados Pessoais, Detalhes da matrícula, detalhes do Caso, Motivos de atendiemtno para o caso pai ou Histórico de Atendimento, conforme as RNs 02 e 06  
ENTÃO: será redirecionado para a página referente às informações selecionadas  
**Resultados esperados  **: ser redirecionado corretamente para a página desejada.  
**Resultados não esperados  **: não ser redirecionado corretamente para a página desejada.


## 9. Descrição (Abaixo vem do Azure DevOps)

Eu, como usuário do Salesforce,   


Quero visualizar as informações de relacionamento com o aluno durante o atendimento,  
Para que eu possa fornecer um atendimento mais completo e direcionado. 

Regras de Negócio 

Geral + 

RN01 – Sub-abas 

Na parte direita da tela, abaixo da divisão de abas, ficará a divisão das sub-abas, nesta ordem: 

  * Atendimento

  * Atrito/Evasão 

  * Renovação 

  * Satisfação

  * Histórico de Atendimento




RN02 – Sub-aba – Atendimento 

Blocos com informações localizado à direita, ocupando 2/3 da tela, abaixo da lista de abas/sub-abas, trazendo informações e contextualização do Atendimento:

  * Dados Pessoais (informações da Conta) (AS IS)
  * Detalhes da matrícula (AS IS + incluir campos abaixo)
    * Safra
    * DIS
  * Detalhes do caso (AS IS)
  * Motivos de atendimento para o Caso pai (AS IS)



![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/f74caa98-b01f-406d-962c-446170f11781?fileName=image.png)  


  


RN03 – Sub-aba – Atrito/Evasão 

Blocos com informações localizado à direita, ocupando 2/3 da tela, abaixo da lista de abas/sub-abas (mesmas informações e layout das telas de matrícula): 

Atrito 

Aluno atritado  | Reclamações em andamento   
---|---  
Rechamada  | Liberação da matrícula via processo judicial   
Processo judicial/administrativo em andamento  |    
  
 

Evasão 

Aluno evadiu durante o curso?  | Propensão a evadir no semestre atual?   
---|---  
Data de agendamento da entrevista  | Hora de agendamento da entrevista   
Status do requerimento de evasão  | Aluno compareceu à entrevista de cancelamento?   
  
  


RN04 – Sub-aba – Renovação 

Blocos com informações localizado à direita, ocupando 2/3 da tela, abaixo da lista de abas/sub-abas (mesmas informações e layout das telas de matrícula):

Renovação 

Renovado?  | Data de renovação   
---|---  
Aceite contrato educacional  | Data aceite contrato educacinal   
Possui boleto de renovação  | Situação de boleto de renovação   
Propensão a renovação  |    
  
 

RN05 – Sub-aba – Satisfação 

Blocos com informações localizado à direita, ocupando 2/3 da tela, abaixo da lista de abas/sub-abas (mesmas informações e layout das telas de matrícula): 

Satisfação total 

Satisfação média  | Resolutividade média   
---|---  
NPS  |    
  
 

Satisfação por canal 

Satisfação média (WhatsApp)  | Resolutividade média (WhatsApp)   
---|---  
Satisfação média (Chat)  | Resolutividade média (Chat)   
Satisfação média (Voz)  | Resolutividade média (Voz)   
  
  


RN06 – Sub-aba – Histórico de atendimento

Lista relacionada contendo as informações do histórico de atendimento, localizado à direita, ocupando 2/3 da tela, abaixo da lista de abas/sub-abas:

  * N° do caso (sendo possível clicar para abrir mais detalhes) 
  * Início do caso
  * Status do caso
  * Canal de abertura
  * Último desfecho



  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/da647801-1131-4fa5-9a9c-bb8006ef1200?fileName=image.png)
