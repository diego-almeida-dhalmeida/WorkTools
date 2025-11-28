---
id: "WI-444254"
title: "[Telefonia] Criar de área de upload para os casos do Salesforce"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 02-2025-Relacionamento"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2024-12-19T14:47:22.83Z"
changed: "2025-03-07T18:03:11.94Z"
---
# WI-444254 - [Telefonia] Criar de área de upload para os casos do Salesforce

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/444254](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/444254)

## 1. Identificação

- **ID/Ref:** WI-444254
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

**Cenário 01 - Upload de Arquivo**  


**Dado que** sou um Atendente Voz-Aluno do Call Center,  


**Quando** realizar um upload de um arquivo para um caso  


**Então** o arquivo deverá ser anexado em uma área do caso com as informações de nome, data e hora  


  


**Cenário 02 - tipos de arquivo**  


**Dado que**  sou um Atendente Voz-Aluno do Call Center,  


**Quando  **realizar um upload de um arquivo diferente que JPG, JPEG, PNG ou PDF  


**Então  **o sistema deverá realizar uma crítica informando que o os arquivos só podem ser JPG, JPEG, PNG ou PDF


## 9. Descrição (Abaixo vem do Azure DevOps)

****

**Eu como**  Atendente Voz-Aluno ou Atendente-Aluno do Call Center,  


**Quero  **dentro de um caso, tanto para casos de voz, como digital (Whasapp e chat), anexar arquivos de imagem e/ou pdf.  


**Para que**  as mensagens sejam enviadas com arquivos em anexo conforme a necessidade. 

  


**RN01 - Upload de arquivo  
**

  * É necessário que o caso possua uma área onde o operador possa realizar uploads de arquivos. Os envios devem gerar as seguintes informações para consulta: nome do arquivo, data e hora do envio. 






**RN02 - Tipos de arquivo  
**

  * Deve ser possível enviar arquivos de imagem (JPG, JPEG, PNG) e arquivos em PDF. 



  


[30/01/25] - Caique informou que caixa de upload fica na tarefa do caso e o(S) arquivo(s) fica(m) associado(s) ao caso.
