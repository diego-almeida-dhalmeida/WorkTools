---
id: "WI-483699"
title: "[Relacionamento] - Criação da relação entre Caso e Serviço"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Adriano Meireles Santos"
created: "2025-04-29T18:28:09.62Z"
changed: "2025-08-08T14:59:19.553Z"
---
# WI-483699 - [Relacionamento] - Criação da relação entre Caso e Serviço

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/483699](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/483699)

## 1. Identificação

- **ID/Ref:** WI-483699
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

**Critério de Aceite 01**

**Dado**  **que** um novo Caso foi criado no Salesforce,  


**Quando**  o usuário iniciar o atendimento e selecionar um serviço específico oferecido pelo canal de atendimento através de BOT ,URA, ETC,  


**Então**  o sistema deve vincular o Serviço associado ao Caso.  


  


  


**Critério de Aceite 02**  


**Dado  que** o Caso esteja relacionado a um Serviço,  


**Quando**  o sistema processar o registro,  


**Então**  ele deve automaticamente herdar(trazer) as informações de configuração do Serviço (como Fila, Canal, SLA e Tabulações disponíveis).  


  


  


**Critério de Aceite 03**  


**Dado  que** o Caso está relacionado a um Serviço  


**Quando** o Caso for aberto  


**Então**  as informações do Serviço associado, serão refletidas nele


## 9. Descrição (Abaixo vem do Azure DevOps)

****

**Eu** , como Gestor Aluno,  


**Quero**  que cada Caso que seja criado esteja obrigatoriamente relacionado a um Serviço,  


**Para**  garantir a rastreabilidade, padronização e análise das solicitações feitas pelos alunos  


  


**RN01** : Cada Caso criado no Salesforce deve estar obrigatoriamente vinculado a um Serviço previamente cadastrado e ativo.  


  


  


**RN02** : Regra de atribuição:  


A exibição ou opção de serviço deve ser baseado na persona do aluno.  


Nas opções de serviços automáticos, resolvidos pelos canais digitais, o serviço deve ser selecionado de acordo com a solicitação do aluno (Necessário verificar Serviços por Canal de Atendimento).  


Nas opções de transbordo para o operador, o serviço deve ser associado pela tabulação.

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/e136aa78-75e4-4651-9d4e-0bbb07f2cfde?fileName=image.png)

  


  


****

**RN03** : O Serviço associado deverá exibir no Caso as seguintes informações:  


Os parâmetros de formulário (quando aplicados;)  


A Fila de Atendimento responsável;  


O fluxo de atendimento;  


As Tabulações disponíveis;  


Os SLAs aplicáveis;  


Os Canais permitidos;  


O artigo da base de conhecimento vinculado.
