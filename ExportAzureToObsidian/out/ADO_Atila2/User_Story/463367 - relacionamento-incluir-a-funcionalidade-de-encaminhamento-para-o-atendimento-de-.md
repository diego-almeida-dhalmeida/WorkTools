---
id: "WI-463367"
title: "Relacionamento - Incluir a funcionalidade de encaminhamento para o atendimento de Whatsapp e Chat"
type: "User Story"
state: "Resolved"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 06-2025-Relacionamento"
assignedTo: "Marcos Vinicius Almeida da Silva"
created: "2025-02-25T13:50:31.77Z"
changed: "2025-07-31T19:49:06.55Z"
---
# WI-463367 - Relacionamento - Incluir a funcionalidade de encaminhamento para o atendimento de Whatsapp e Chat

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/463367](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/463367)

## 1. Identificação

- **ID/Ref:** WI-463367
- **Tipo:** User Story
- **Status:** Resolved


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

Fluxo para testes da funcionalidade: 

  * Telefone do WhatsApp de UAT3 que vocês utilizam:  
Estácio: 55 21 97942-0736  
Wyden: 55 21 98087-6506  
Ibmec: 55 21 98060-2613  
  

  * Matrícula para teste do fluxo do WhatsApp:  
Matricula: 201908573317   
Fluxo:   
1: 201908573317 - GESTÃO DA TECNOLOGIA DA INFORMAÇÃO - GRADUAÇÃO TECNOLÓGICA - (Inativa)  
10: Apoio ao Estudante  
2: Outros contatos  
3: Falar com um agente  
  

  * Atendente para teste do fluxo do WhatsApp (conforme matrícula):  
ALANA DA SILVA MONTANHEIRO  
alana.dasilva.ter@estacio.br  
  

  * Matrícula para teste do fluxo do Chat:  
Matricula: 202411026266  
  

  * Atendente para teste do fluxo do Chat (conforme matrícula):  
ALLAN BRUNO DOS SANTOS DA SILVA  
allan.ssiilva.ter@estacio.br 



**  
**

**Critério de aceite 1:**  
~~O funcionamento dessa história é para ser o mesmo da história[#435857](https://dev.azure.com/ArquiteturaEstacio/Atila%202.0/_workitems/edit/435857/), só que adaptado para os casos de Whatsapp e Chat.~~

**  
**

**Alteração definida em 28/03/2025:**

**

O funcionamento dessa história deve ser semelhante ao da história  [#435857](https://dev.azure.com/ArquiteturaEstacio/Atila%202.0/_workitems/edit/435857/), porém será necessário realizar adaptações para os casos de Whatsapp e Chat.

**

**  
**

****= >Alterar a solicitação atual **para que: **

  * No lugar de encaminhar o caso para o backoffice, _gerar um novo caso_  e enviá-lo ao backoffice, em seguida encerrar o atendimento com o aluno da mesma forma que é atualmente, sem mudanças no processo. 
  * É necessário deixar o relacionamento entre os casos (pai e filho), para caso o operador do backoffice precise consultar o caso pai possa realizá-lo.



**Critério de aceite 2:**  
O atendendo do backoffice hoje tem o perfil "Atendente Voz - Aluno", porém deverá receber os caso os Atendentes - Aluno (que são atendentes hoje do digital - WhatsApp e Chat). 

  
**Critério de aceite 3:**  


Regras de exibição do botão:   
Casos com origem "Whatsapp", "Chat - SIA" com Status "Novo" ou "Aberta" terão a funcionalidade de Encaminhamento disponível.  
  
**Critério de aceite 4:**  
Devemos ter o botão de encaminhamento nas telas do "Messaging Session" e "Transcrições De Chat".  
  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/64bd65f2-db78-4d2d-94ff-1586f0fe545e?fileName=image.png)


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como** Atendente-Aluno 

**Quero** poder encaminhar casos que precisarem ser tratados pelo backoffice, na tela de cockpit de atendimento de WhatsApp e Chat 

**Com o objetivo** do atendimento para o aluno poder ser realizado pelas áreas internas da empresa.
