---
id: "WI-413634"
title: "[Telefonia] Marcação de caso - Criação dos campos e adição do layout no case - Campo quantidade de chamadas na rechamada"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 04-2025-Relacionamento"
assignedTo: "Lucas Morisson Loreto Machado"
created: "2024-09-05T21:15:13.93Z"
changed: "2025-04-08T19:49:29.72Z"
---
# WI-413634 - [Telefonia] Marcação de caso - Criação dos campos e adição do layout no case - Campo quantidade de chamadas na rechamada

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/413634](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/413634)

## 1. Identificação

- **ID/Ref:** WI-413634
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

****

**Critérios de Aceite**

**  
**

**Cenário 01:  campos a serem visualizados:  
****  
DADO QUE:**  O atendente de voz está logado no Salesforce com perfil “Atendimento Voz – Aluno” e papel “Atendente Voz ELO” ou “Atendente Voz Konecta”

**QUANDO:**  Visualizar a tela posicionada em Detalhes do Caso

**ENTÃO:**  Deve visualizar os campos de marcação preenchidos conforme a identificação do caso no ECH conforme a listagem na RN1.

  


**Cenário 02:  Visualização das informações:**

**DADO QUE:**  o aluno entrou em contato pela central de atendimento através do número 0800 888 6970

**QUANDO:**  digitar a matrícula ou CPF, e na sequência digitou as opções “8-outros assuntos” e “3-nenhuma das informações” para transbordo - falar com atendente

**ENTÃO:**** ** a chamada deve ser direcionada para o aluno dentro do cockpit do operador e o usuário deverá selecionar a opção Caso e ir na aba Detalhes e visualizar as informações de marcação do caso conforme a RN2.


## 9. Descrição (Abaixo vem do Azure DevOps)

**#469538770 - Chamado SF  
  
Eu como **um atendente de voz 

**Gostaria** de visualizar dados oriundos telefonia referente a marcação de quantidade de chamadas feitas pelo atendente para o aluno caso a ligação caia

**Com o objetivo** dos times de gerenciamento possam gerenciar o canal de voz.

  


Esquema de dados criado pelo time da arquitetura:

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/b6bca9bd-fd72-4668-88d6-e2aec06e31f0?fileName=image.png)  


  


Arquivo com as referências dos dados que precisam ser anexados no caso. 

  


[ECH-MapaDeDados.xlsx](https://estacio.sharepoint.com/:x:/s/IT_Architecture/Eb_aFAOCNh1BrbK9DbzDz_0BxedoLmAMYkQ6DprkbtvbOg?e=lQiMa6)  


  


OBS: O ponto precisa ser desenvolvido pela arquitetura para avançarmos com a história. Os dados serão armazenados no Athena (AWS). 

![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/bfa3e684-6fdc-4dbc-ad3d-e90b64c80943?fileName=image.png)  


  


**RN1: Dados a serem inseridos no caso:  
**

  


**Campo:  **Quantidade de chamadas.

  


**RN2: Apresentação das informações:**  


**  
**

As informações referentes a quantidades de chamadas deve aparecer após a área marcada conforme as imagem a seguir:

  
![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/d090ae2f-9254-4459-b335-7740f33147fb?fileName=image.png)
