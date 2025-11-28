---
id: "WI-495719"
title: "[Relacionamento] - Pró ativo de cobrança para rentabilização"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 05-2025-Relacionamento"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2025-06-03T18:24:08.177Z"
changed: "2025-08-08T14:59:19.553Z"
---
# WI-495719 - [Relacionamento] - Pró ativo de cobrança para rentabilização

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/495719](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/495719)

## 1. Identificação

- **ID/Ref:** WI-495719
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

Exibição de Campanha Disponível  


  


**Dado que** um aluno possui uma oferta de campanha disponível, 

**Quando** o operador iniciar o atendimento, 

**Então** o sistema deve exibir um alerta visual informando que há uma campanha ativa para aquele aluno.  


  


Sinalização do atendimento pela interface

**  
**

**Dado que**  o operador iniciou um atendimento com um aluno que possui campanha de rentabilização,

**Quando  **a tela de atendimento for carregada, 

**Então  **o operador deve sinalizar a comunicação da campanha pelos botões disponíveis na interface da comunicação. 

  


Botão “Aluno Propenso” e Consulta da Oferta  


  


**Dado que** o operador recebeu o alerta de campanha, 

**Quando** clicar no botão “Aluno Propenso”, 

**Então** o sistema deve abrir uma tela com os detalhes da oferta e permitir que o operador informe se a campanha foi apresentada ao aluno.  


  


Registro da Sinalização da Oferta  


  


**Dado que** o operador finalizou a apresentação da oferta, 

**Quando** ele registrar a sinalização no sistema, 

**Então** essa informação deve ser salva e refletida no relatório de utilização.


## 9. Descrição (Abaixo vem do Azure DevOps)

******Eu como**  operador de atendimento voz (Atendente Voz - Aluno),  


**Quero** visualizar campanhas de rentabilização disponíveis para o aluno durante o atendimento,  
**Para** que eu possa oferecer propostas relevantes e contribuir com a rentabilização, renovação ou cobrança.  
  
  
Exemplo de tela para rentabilização:  
  
![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/aa1f8969-85d9-42fc-acf9-0be6831fcaec?fileName=image.png)
