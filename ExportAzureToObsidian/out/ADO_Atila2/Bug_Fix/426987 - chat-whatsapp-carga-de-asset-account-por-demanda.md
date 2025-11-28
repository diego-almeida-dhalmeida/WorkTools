---
id: "WI-426987"
title: "[Chat/WhatsApp] Carga de Asset/Account por demanda"
type: "Bug Fix"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 03-2024-CoERelac-1ªOndaTelefonia"
assignedTo: "Andre Luiz da Silva"
created: "2024-10-21T13:51:59.85Z"
changed: "2025-05-12T19:57:18.6Z"
---
# WI-426987 - [Chat/WhatsApp] Carga de Asset/Account por demanda

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/426987](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/426987)

## 1. Identificação

- **ID/Ref:** WI-426987
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

@Carlos Henrique da Costa Cavalcanti @Renan Robson Lima Carneiro @Maria Virginia Matheus

Testes realizados com a @Mayara Miranda Saderio nos ambientes de PRD (WhatsApp) e UAT (Chat/WhatsApp) 

  


**WhatsApp - PRD - 201802480161 (Inativa: Trancado)**  


Quando o aluno entra em contato pelo WhatsApp com uma matrícula inativa que não existe no Salesforce, através da API o Salesforce busca no SIA os dados do nome do aluno, nome do curso e tipo de curso para exibir na tela, e questionar se o aluno deseja entrar em contato através dessa matrícula digitada. A partir do momento que o aluno seleciona a opçãp-1 para falar sobre a matrícula inativa digitada, a matrícula do aluno não é carregada o Salesforce (asset/account), ele retorna OPS e fica em loop solicitando a identificação ao aluno  


  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/8ee8242b-9541-4050-8586-cd0f76661303?fileName=image.png)  


  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/56cad2d2-cb1b-4545-9528-878f02ae2890?fileName=image.png)  


  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/3cf93462-de58-4f1d-812f-40dd7e3a3e32?fileName=image.png)  


  


  


**Chat - UAT - 202009312251   (Inativa: Trancado)**

Teste do Chat feito em UAT, porque não temos matrículas de alunos funcionários para realizarmos em produção 

Da mesma forma, quando o aluno se loga no SIA do aluno com matrícula/senha, com uma matrícula inativa que não existe no Salesforce, o bot não entra. Porém, registra o caso sem indicação de qual aluno que foi atendido, mas quando voltamos a fazer a pesquisa pela matrícula no SF, mostra o caso aberto mas na tela não tem a indicação da matrícula que foi atendida (alertando que isso estava ocorrendo com TODAS as matrículas quando houve a subida do sábado dia 12/10 da release do Winter 25, pode ter alguma relação) 

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/eedb438e-0408-4909-b681-5e5ce3b0f76e?fileName=image.png)  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/66b9076f-3220-41b7-a419-d65862a8662b?fileName=image.png)  


  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/93be683a-56f9-4559-99c8-467cce9259df?fileName=image.png)  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/296d328a-f767-4bab-a843-da52cd4feb46?fileName=image.png)  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/982d3d55-d960-45c3-a86c-8fe5aa7b4097?fileName=image.png)  


  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/93b9c6e4-9479-4b58-8092-7b4bbb8098ac?fileName=image.png)  


  


  


  


**Outro teste com matrícula do IBMEC:**

**Chat - UAT - 201651249091  (**Inativa** : Em abandono)**

![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/1fc6a901-a618-4088-a5da-fd2f22364769?fileName=image.png)

![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/e5bb08af-5a87-4b61-9694-d7e4cb30ae6e?fileName=image.png)  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/b484dde9-5242-42f8-a496-ade1b978082d?fileName=image.png)

![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/0cef8c1b-f933-4d50-a8c3-134251134f65?fileName=image.png)  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/3c8a22c3-7975-4e6b-8411-6d05cef79e76?fileName=image.png)  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/22a8b109-f0f9-4014-a6e5-675dbcccb7be?fileName=image.png)  


  


  


Teste realizado com matrícula inativa no WhatsApp UAT para complementar:  
WhatsApp - UAT - 202004019511 (Inativa: Trancado)  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/6f53a380-ac99-4b63-bb18-d7bc5d222fd1?fileName=image.png)  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/3e1a26d0-d562-4b99-8e03-38131a135a48?fileName=image.png)  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/3fd01fd7-7ca2-4074-bf45-42461ebed952?fileName=image.png)
