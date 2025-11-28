---
id: "WI-419172"
title: "Matrícula - Acadêmico"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: ""
created: "2024-09-23T22:39:55.41Z"
changed: "2024-11-05T20:18:02.79Z"
---
# WI-419172 - Matrícula - Acadêmico

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/419172](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/419172)

## 1. Identificação

- **ID/Ref:** WI-419172
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

**Cenário 01: Visualização das informações na tela de Acadêmico**  


DADO QUE: o usuário durante a consulta às informações acadêmicas  
QUANDO: acessar a aba Acadêmico da Matrícula  
ENTÃO: poderá visualizar as informações acadêmicas como mencionado nas Regras de Negócio.  
**Resultados esperados  **: visualizar as informações conforme mencionado nas regras de negócio.  
**Resultados não esperados  **: não visualizar as informações conforme mencionado nas regras de negócio

  


**Cenário 02: Visualização das informações na RN02 de acordo com marca, modalidade e curso do aluno**  


DADO QUE: o usuário durante a consulta às informações acadêmicas  
QUANDO: visualizar as informações que dependem da marca, modalidade e curso na RN02  
ENTÃO: poderá visualizar as informações com os filtros como mencionado nas Regras de Negócio.  
**Resultados esperados  **: visualizar as informações corretas para marca, modalidade e curso conforme mencionado nas regras de negócio.  
**Resultados não esperados  **: não visualizar as informações conforme mencionado nas regras de negócio.o


## 9. Descrição (Abaixo vem do Azure DevOps)

Eu, como usuário do Salesforce, 

Quero visualizar as informações acadêmicas da matrícula do aluno, 

Para que eu possa fornecer um atendimento mais completo e direcionado. 

Regras de Negócio 

Geral + 

RN01 – Sub-abas 

Na parte central da tela, abaixo da divisão de abas, ficará a divisão das sub-abas, nesta ordem: 

  * Engajamento 

  * Detalhes Acadêmicos 

  * Disciplinas Matriculadas 

  * Disciplinas Cursadas 

  * Disciplinas a Cursar 




RN02 – Sub-aba \- Engajamento 

Blocos com informações localizado no meio da tela, abaixo da lista de abas/sub-abas: 

Desempenho Acadêmico 

CR  | Aluno sem interação (flag)   
---|---  
Percentual de disciplinas aprovadas/cursadas  | Já realizou estágio obrigatório? (S/N)   
Percentual de disciplinas cursadas/total  | Já realizou estágio não obrigatório? (S/N)   
Frequência em aulas  | Data de expedição do diploma   
Latecomer (S/N)  | Data de colação   
  
 

Acesso às plataformas 

(obs: dias sem acesso x lógica de coloração variável com relevância de acordo com marca e modalidade – vindo do BI Saúde do aluno) 

SIA  | Zero dúvidas   
---|---  
APP  | BDQ   
SAVA  | SIRIUS   
  
 

Avaliações 

(obs: % de realizações, assim como no BI Saúde do Aluno – aparecer apenas os campos das avaliações de acordo com marca/modalidade/curso do aluno) 

AV1  | Socioemocional (S/N)   
---|---  
AV2  | Simulados   
AVS  | Trabalho final   
  
 

![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/376f0318-2eac-45a8-bc38-b447047fb4df?fileName=image.png)  


  


RN03 – Sub-aba – Detalhes Acadêmicos 

Blocos com informações localizado no meio da tela, abaixo da lista de abas/sub-abas: 

Detalhes do curso 

Período de entrada  | Grupo marca   
---|---  
Período atual do aluno  | Turno   
Período flexível  | Código do curso   
Habilitação  | Número da habilitação   
Currículo  |    
  
 

Informações Unidade/Polo 

Campus/Polo  | Regional EAD   
---|---  
IES  | HUB   
Regional  | Núcleo   
  
 

Forma de Ingresso 

Forma de Ingresso (FDI)  | Número do candidato   
---|---  
Número de inscrição  | Oportunidade (lookup)   
  
 

![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/1790ce04-8040-4d47-9330-0cda93534cec?fileName=image.png)  


RN04 – Sub-aba – Disciplinas Matriculadas 

AS IS 

RN05 – Sub-aba – Disciplinas Cursadas 

AS IS 

RN06 – Sub-aba – Disciplinas a Cursar 

AS IS
