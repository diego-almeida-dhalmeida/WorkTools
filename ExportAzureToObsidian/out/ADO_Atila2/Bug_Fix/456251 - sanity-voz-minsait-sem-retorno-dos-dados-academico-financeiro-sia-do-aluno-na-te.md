---
id: "WI-456251"
title: "[SANITY | VOZ] Minsait - Sem retorno dos dados acadêmico/financeiro SIA do aluno na tela do atendente voz (PRD) - P2"
type: "Bug Fix"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 04-2025-Relacionamento"
assignedTo: "Lucas Morisson Loreto Machado"
created: "2025-02-05T20:38:05.68Z"
changed: "2025-03-12T02:03:52.083Z"
---
# WI-456251 - [SANITY | VOZ] Minsait - Sem retorno dos dados acadêmico/financeiro SIA do aluno na tela do atendente voz (PRD) - P2

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/456251](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/456251)

## 1. Identificação

- **ID/Ref:** WI-456251
- **Tipo:** Bug Fix
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

- 


## 9. Descrição (Abaixo vem do Azure DevOps)

@Carlos Henrique Costa Cavalcanti @Maria Virginia Matheus @Simone dos Santos Feliciano

  


Estamos com problema na consulta dos dados acadêmicos e financeiros dos alunos vindos do SIA na **tela do atendente de voz no ambiente PRD.**

Segue abaixo o resumo do que está ocorrendo com a visualização dos dados acadêmicos/financeiros dos alunos e em anexo as evidências desses **testes realizados no ambiente UAT**. 

  


Tela do cadastro do aluno – **Funcionando OK**  


Tela do atendente WhatsApp – **Funcionando OK**  


Tela do atendente Chat – **NÃO OK (precisamos verificar o motivo)**  


Tela do atendente Telefonia – **Funcionando OK**  


  


Seguem as evidencias durante os **testes de telefonia no _ambiente de produção_** , onde os dados acadêmicos/financeiros na **tela do atendente de voz** , _não são exibidos durante o atendimento_ para nenhuma matrícula em PRD 

  


O acesso foi feito com usuário Miriam Assunção 

Caso: 07681135

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/5eec9e1b-a3d0-4af7-9399-5cb69a06226e?fileName=image.png)  


  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/fbc131bc-cbff-4728-8235-4affa1f7331b?fileName=image.png)  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/0062b727-a6a2-481e-ad35-5efca4adcd32?fileName=image.png)  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/41744b24-6dc9-4fdc-ad39-3da199f992e2?fileName=image.png)  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/c74cbeaa-0b15-49f7-9f75-f55f80e5e5c6?fileName=image.png)  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/5f9b7939-aa73-4fb3-9400-424bc3af47bc?fileName=image.png)  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/790945f4-f932-44fb-9a62-0abbdf3228d6?fileName=image.png)  


  


**  
**
