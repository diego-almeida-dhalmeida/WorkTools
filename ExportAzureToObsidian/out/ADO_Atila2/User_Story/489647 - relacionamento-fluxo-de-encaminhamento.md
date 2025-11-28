---
id: "WI-489647"
title: "[Relacionamento] Fluxo de Encaminhamento"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Adriano Meireles Santos"
created: "2025-05-19T13:58:46.503Z"
changed: "2025-08-08T14:59:19.553Z"
---
# WI-489647 - [Relacionamento] Fluxo de Encaminhamento

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/489647](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/489647)

## 1. Identificação

- **ID/Ref:** WI-489647
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

Critérios de Aceite 01

Dado que eu Gestor Aluno estou criando um Fluxo de Encaminhamento, 

Quando for criar uma etapa, 

Então o nome e a fila dessa etapa devem ser obrigatoriamente preenchidos. 

 

Critérios de Aceite 02

Dado que o Gestor Aluno achou necessário criar uma anotação 

Quando o Fluxo de Encaminhamento tem etapas a serem criadas 

Então ele usará o campo de  "Descrição da Etapa"

 

Critérios de Aceite 03

Dado que o Gestor Aluno está criando um novo Serviço 

Quando ele associar um Fluxo de Encaminhamento a esse Serviço 

Então ele poderá reutilizar esse fluxo em outros serviços 

 

Critérios de Aceite 04

Dado que o Gestor Aluno está cadastrando um novo Serviço 

Quando for feita a associação do Fluxo ao  Serviço 

Então, o Fluxo deve ficar associado ao Serviço obrigatoriamente.


## 9. Descrição (Abaixo vem do Azure DevOps)

Eu, como Gestor Aluno, 

Quero a criação de um Fluxo de Encaminhamento 

Para que os Serviços atendidos sigam um roteiro claro de execução, passando pelas etapas corretas e pelos responsáveis adequados, garantindo agilidade e qualidade no processo. 

 

 

RN01 – Definição de etapas do Fluxo de encaminhamento

O Fluxo de Encaminhamento deve permitir a definição de múltiplas etapas sequenciais, cada uma com: 

  * Nome da etapa;
  * Fila responsável;



 

RN02 – Descrição da Etapa

Após a criação de uma etapa do fluxo, haverá a disponibilização de um campo de texto de preenchimento opcional chamado "Descrição da etapa". Esse campo servirá como nota de observação para o Gestor Aluno que estiver criando o Fluxo, e estará visível no serviço no momento da seleção desse fluxo.

 

RN03 – Reuso de fluxos

O sistema deve permitir reutilizar fluxos existentes entre serviços semelhantes, evitando retrabalho. 

 

RN04 - Associação com o Serviço

O fluxo de encaminhamento deve ser associado aos serviços ofertados aos alunos
