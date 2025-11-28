---
id: "WI-442544"
title: "[SANITY | VOZ] Minsait - Problema no encerramento de atendimento após identificar aluno não identificado (fora do SF)"
type: "Bug Fix"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 04-2024-CoERelac-2 ªOndaTelefonia"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2024-12-11T19:50:22.313Z"
changed: "2025-01-09T19:56:37.71Z"
---
# WI-442544 - [SANITY | VOZ] Minsait - Problema no encerramento de atendimento após identificar aluno não identificado (fora do SF)

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/442544](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/442544)

## 1. Identificação

- **ID/Ref:** WI-442544
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

Teste em UAT3 utilizando para identificação a matrícula-200301808832 que não está no Salesforce  


  


Caso-00887139  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/bc214d56-9984-49ae-bbce-64b3beb84c37?fileName=image.png)  


  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/3287fd6e-f6de-4c67-9dcb-c770ba2dbbfa?fileName=image.png)  


  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/a9ca1366-7b4f-4682-8ab2-461815414e3f?fileName=image.png)  


  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/82f27f57-0641-4184-a030-35fc2adc7994?fileName=image.png)  


  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/1319192e-2ebc-45db-b77e-e979c93caf8e?fileName=image.png)  


  


  


  


Pesquisa de satisfação enviada para o aluno com resposta a pergunta-1 = '5' e a pergunta-2 = '1'. 

**Porém, não popou a tela para tabulação tabulação pelo atendente** , tive que clicar no botão 'Encerrar atendimento'  


  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/96d38c0e-4ad6-47dd-b473-2a96eba47d03?fileName=image.png)  


  


  


**Encontrado outro problema, ao encerrar o atendimento preenchendo a tabulação, a tela é atualizada trazendo os dados iniciais sem a identificação do aluno, mas ao consultar os detalhes do caso as informações estão corretas (isso ocorreu durante o atendimento)**  


**  
**

![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/4c456da4-dd57-4bbd-a403-c961df470084?fileName=image.png)  


  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/3aa8340b-d15c-4095-8187-4e731e6712c2?fileName=image.png)
