---
id: "WI-201677"
title: "[Telefonia] Dashboard - Motivos de Contato"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Eduardo Brum Fernandes Pimentel"
created: "2022-12-06T18:15:23.31Z"
changed: "2025-03-07T18:22:35.22Z"
---
# WI-201677 - [Telefonia] Dashboard - Motivos de Contato

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/201677](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/201677)

## 1. Identificação

- **ID/Ref:** WI-201677
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

.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Descrição da estória:**

 

**Eu** , como gerente/coordenador ou analista, preciso visualizar em um **dashboard  **que mostre os motivos de contato classificados pelos atendentes.

 

**Eu** , como gerente/coordenador ou analista, preciso visualizar em um **dashboard  **que mostre os pontos finais dos atendimentos retidos pela URA.

 

**Regras de Negócio:  
  
RN01 - Construção do Painel**

 

Deverá ser aproveitado o relatório já utilizado para whatsapp (estória: [#201412](https://arquiteturaestacio.visualstudio.com/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_workitems/edit/201412)), mas será voltado para os atendimentos realizados na telefonia - Modal de Voz. 

Os seguintes visuais deverão ser incluídos no painel: 

  


**Volume de contato por motivo de contato (1 e 2)** -> Atendimento Humano = Quantidade de atendimentos humanos classificados com os motivos de contato 1 e 2 (de acordo com a árvore de tabulação) em visual apresentando a volumetria por motivo de contato;  


  


**Volume de contato por motivo de contato (1, 2 e 3)** -> Atendimento Humano = Quantidade de atendimentos humanos classificados com os motivos de contato 1, 2 e 3 (de acordo com a árvore de tabulação) em visual apresentando a volumetria por motivo de contato;  


  


**Média de Nota de Satisfação por Motivo de Contato (1)** = Soma das notas de avaliação de cada um dos motivos de contato, dividido pelo volume observado de respondentes desse mesmo motivo de contato;  


  


**Média de Nota de Satisfação por Motivo de Contato (1 e 2)** = Soma das notas de avaliação de cada um dos motivos de contato, dividido pelo volume observado de respondentes desse mesmo motivo de contato;  


  


**Média de Nota de Satisfação por Motivo de Contato (2 e 3)** = Soma das notas de avaliação de cada um dos motivos de contato, dividido pelo volume observado de respondentes desse mesmo motivo de contato;  


  


**Média de Resolutividade por Motivo de Contato (1)** = Soma de todos os "SIM" marcados na pergunta de resolutividade de cada um dos motivos de contato, dividido pelo volume observado de respondentes desse mesmo motivo de contato;  


  


**Média de Resolutividade por Motivo de Contato (1 e 2)** = Soma de todos os "SIM" marcados na pergunta de resolutividade de cada um dos motivos de contato, dividido pelo volume observado de respondentes desse mesmo motivo de contato;  


  


**Média de Resolutividade por Motivo de Contato (2 e 3)** = Soma de todos os "SIM" marcados na pergunta de resolutividade de cada um dos motivos de contato, dividido pelo volume observado de respondentes desse mesmo motivo de contato;  


  


**Média de TMA por Motivo de Contato (1)** = Soma de TMA de cada um dos motivos de contato, dividido pelos atendimentos humanos realizados por cada um desses motivos;  


  


**Média de TMA por Motivo de Contato (1 e 2)** = Soma de TMA de cada um dos motivos de contato, dividido pelos atendimentos humanos realizados por cada um desses motivos;  


  


**Média de TMA por Motivo de Contato (2 e 3)** = Soma de TMA de cada um dos motivos de contato, dividido pelos atendimentos humanos realizados por cada um desses motivos;  


  


**% Volume de contato por desfecho** -> Atendimento Humano = Quantidade de atendimentos humanos realizados para um determinado desfecho, dividida pela quantidade total de atendimentos humanos, dentro do mesmo período;  


  


**% Volume de contato por desfecho** -> Retidos URA= Quantidade de atendimentos retidos na URA para um determinado desfecho, dividida pela quantidade de total de atendimentos retidos na URA, em um mesmo período;  


  


**% Volume de contato por desfecho** -> Retidos URA= Quantidade de atendimentos para um determinado desfecho, dividido pela quantidade de total de atendimentos em um mesmo período;  


Distribuição de operadores por motivo de contato;  


  


**Distribuição de motivos de contato por operador.  
**

  


  


RN2: V**isualização do Painel**  


 

Este painel estará disponível diretamente no Sales Force apenas para os perfis de Supervisor, Gestor e Curador.

  


**RN3: Filtros do Painel**

**  
**

Para este painel, deverão ser aplicados 3 filtros, sendo eles: 

  


  * Data de Hora de Abertura do Caso;
  * Fila de Atendimento;
  * Marca  


RN04: Painéis para criar  


  


Deverão ser criados dois painéis exatamente iguais.   


  


Um dos painéis será destinado à operação da Konecta, que deverá ser restrito às Marcas Estácio e Wyden  


Outro painel será destinado à operação da ELO, que deverá ser restrito às Marcas Ibmec e IDOMED​
