---
id: "WI-419962"
title: "Atendimento - Acadêmico"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: ""
created: "2024-09-25T19:58:55.36Z"
changed: "2024-11-05T20:18:02.79Z"
---
# WI-419962 - Atendimento - Acadêmico

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/419962](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/419962)

## 1. Identificação

- **ID/Ref:** WI-419962
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
QUANDO: acessar a aba Acadêmico do Atendimento  
ENTÃO: poderá visualizar as informações de atendimento como mencionado nas Regras de Negócio.  
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

Quero visualizar as informações acadêmicas do aluno durante o atendimento, 

Para que eu possa fornecer um atendimento mais completo e direcionado. 

Regras de Negócio 

Geral + 

RN01 – Sub-abas 

Na parte direita da tela, abaixo da divisão de abas, ficará a divisão das sub-abas, nesta ordem: 

  * Engajamento 

  * Detalhes Acadêmicos 

  * Disciplinas Matriculadas 

  * Disciplinas Cursadas 

  * Disciplinas a Cursar 




RN02 – Sub-aba \- Engajamento 

Blocos com informações localizado à direita, ocupando 2/3 da tela, abaixo da lista de abas/sub-abas (mesmas informações e layout das telas de matrícula): 

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
  
  


RN03 – Sub-aba – Detalhes Acadêmicos 

Blocos com informações localizado à direita, ocupando 2/3 da tela, abaixo da lista de abas/sub-abas (mesmas informações e layout das telas de matrícula): 

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
  
  


RN04 – Sub-aba – Disciplinas Matriculadas 

AS IS 

RN05 – Sub-aba – Disciplinas Cursadas 

AS IS 

RN06 – Sub-aba – Disciplinas a Cursar 

AS IS 

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/d163f719-5fc6-44e1-9af1-368ec58ed878?fileName=image.png)  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/0a65d21c-1c2e-44c4-a873-50fe93b28807?fileName=image.png)
