---
id: "WI-419963"
title: "Atendimento - Financeiro"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: ""
created: "2024-09-25T19:59:08.48Z"
changed: "2024-11-05T20:18:02.79Z"
---
# WI-419963 - Atendimento - Financeiro

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/419963](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/419963)

## 1. Identificação

- **ID/Ref:** WI-419963
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

**Cenário 01: Visualização das informações na tela de Financeiro**  


DADO QUE: o usuário durante a consulta às informações acadêmicas  
QUANDO: acessar a aba Financeiro do Atendimento  
ENTÃO: poderá visualizar as informações financeiras como mencionado nas Regras de Negócio.  
**Resultados esperados  **: visualizar as informações conforme mencionado nas regras de negócio.  
**Resultados não esperados  **: não visualizar as informações conforme mencionado nas regras de negócio

  


**Cenário 02: Visualização das informações na RN02 de acordo com existência do responsável financeiro**  


DADO QUE: o usuário durante a consulta às informações financeiras  
QUANDO: visualizar as informações que dependem se o aluno posui um responsável financeiro ou não, na RN02  
ENTÃO: poderá visualizar as informações com os filtros como mencionado nas Regras de Negócio.  
**Resultados esperados  **: visualizar as informações de responsável financeiro caso haja, e ocultar, caso não haja  
**Resultados não esperados  **: aparecer campos de responsável financeiro, quando não houver um, ou não aparecer quando houver

  


****

**Cenário 03: Funcionamento do Botão "Preview dos Boletos"**  
DADO QUE: o usuário durante a consulta às informações financeira  
QUANDO: clicar no botão "Preview dos boletos"  
ENTÃO: será exibida uma pré-visualização dos boletos do aluno.  
**Resultados esperados  **: visualizar a pré-visualização dos boletos corretamente.  
**Resultados não esperados  **: não conseguir visualizar a pré-visualização dos boletos. 

  


**Cenário 04: Funcionamento do Botão "Baixar Boletos**  
DADO QUE: o usuário durante a consulta às informações financeira  
QUANDO: clicar no botão "Baixar boletos"  
ENTÃO: o sistema deve iniciar o download dos boletos do aluno.  
**Resultados esperados  **: o download dos boletos deve ser iniciado com sucesso.  
**Resultados não esperados  **: o download não deve iniciar ou falhar. 

**  
**

**Cenário 05: Funcionamento do Botão "Enviar por E-mail"**  
DADO QUE: o usuário durante a consulta às informações financeira  
QUANDO: clicar no botão "Enviar por e-mail"  
ENTÃO: o sistema deve solicitar a confirmação para enviar os boletos por e-mail.  
**Resultados esperados  **: receber uma mensagem de confirmação e, ao confirmar, os boletos devem ser enviados para o e-mail cadastrado do aluno.  
**Resultados não esperados  **: não receber a mensagem de confirmação ou não conseguir enviar os boletos por e-mail.


## 9. Descrição (Abaixo vem do Azure DevOps)

Eu, como usuário do Salesforce, 

Quero visualizar as informações financeiras do aluno durante o atendimento, 

Para que eu possa fornecer um atendimento mais completo e direcionado. 

Regras de Negócio 

Geral + 

RN01 – Sub-abas 

Na parte direita da tela, abaixo da divisão de abas, ficará a divisão das sub-abas, nesta ordem: 

  * Detalhes Financeiros 

  * Pagamento 

  * Financiamento 

  * Bolsa 




RN02 – Sub-aba – Detalhes Financeiros 

Blocos com informações localizado à direita, ocupando 2/3 da tela, abaixo da lista de abas/sub-abas (mesmas informações e layout das telas de matrícula):  

Risco financeiro 

Boletos vecidos  | Boletos a vencer   
---|---  
Boletos pagos  | Boletos não pagos   
Valor inadimplente  | Contestação   
Aluno possui promessa de pagamento vigente?  | Aluno possui negociação vigente?   
Aluno possui renegociação vigente?  | Bloqueio de ligação de cobrança?   
  
 

Formas de pagamento 

Bloqueio de pagamento por cartão de crédito  | Débito automático   
---|---  
Recorrência de pagamento  | Forma preferencial de pagamento   
  
 

Detalhes financeiros 

Responsável financeiro (S/N)  | CPF/CNPJ do responsável   
---|---  
Nome responsável  | E-mail do responsável   
Indicador responsável financeiro  |    
  
 

RN03 – Sub-aba – Pagamento 

AS IS 

RN04 – Sub-aba – Financiamento 

AS IS 

RN05 – Sub-aba – Bolsa 

AS IS 

RN06 – Botões – Boletos 

Botoes para conferir e enviar os boletos do aluno: 

  * Preview dos boletos 

  * Baixar boletos 

  * Enviar por e-mail 




  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/a0a2819d-273a-4baa-ba13-3ed0a3bd406b?fileName=image.png)
