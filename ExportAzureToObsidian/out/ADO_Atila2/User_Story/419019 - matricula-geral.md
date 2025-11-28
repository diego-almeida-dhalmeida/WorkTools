---
id: "WI-419019"
title: "Matricula - Geral"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: ""
created: "2024-09-23T19:46:18.187Z"
changed: "2024-11-05T20:18:02.79Z"
---
# WI-419019 - Matricula - Geral

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/419019](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/419019)

## 1. Identificação

- **ID/Ref:** WI-419019
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

​**Cenário 01: Visualização das informações em comum às abas**  
DADO QUE: o usuário durante a consulta à Matrícula  
QUANDO: acessar a aba Geral da Matrícula  
ENTÃO: poderá visualizar as informações gerais da matrícula conforme as RNs 01 a 04  
**Resultados esperados** : visualizar as informações conforme mencionado nas regras de negócio.  
**Resultados não esperados** : não visualizar as informações conforme mencionado nas regras de negócio.  


  


**Cenário 02: Visualização das informações nas listas relacionadas e Marketing Cloud**  
DADO QUE: o usuário durante a consulta à Matricula  
QUANDO: acessar as informações em uma das listas relacionadas ou do Marketing Cloud  
ENTÃO: será redirecionado para as respectivas páginas dos itens da lista selecionada ou Marketing Cloud, conforme as RNs 05, 06 e 07.  
**Resultados esperados** : ser redirecionado corretamente ao clicar no item.  
**Resultados não esperados** : não ser redirecionado ao clicar no item.


## 9. Descrição (Abaixo vem do Azure DevOps)

Geral   


Seções que são iguais para múltiplas abas: 

RN01 – Header (AS IS) 

Header com resumo das informações da matrícula: 

  * Número da matrícula (título) 

  * Marca 

  * Modalidade 

  * Nome do Curso 

  * Conta (relacionar com a conta mãe) 




RN02 – Bloco de informações lateral - Informações Cadastrais 

Bloco com informações cadastrais, localizado à esquerda, no topo da página, ocupando 1/3 da tela: 

  * Nome da Conta 

  * Número da Matrícula 

  * Marca 

  * Modalidade 

  * Curso 

  * Tipo Curso 

  * Status da Matrícula 

  * Safra 

  * Status Calouro/Veterano 

  * DIS 

  * Funcionário/dependente 




RN03 – Bloco de informações lateral - Alarmes 

Bloco com sinalização dos alarmes (oriundas de sistemas externos), localizado à esquerda, abaixo das Informações Cadastrais, ocupando 1/3 da tela: 

  * NPS Medallia ou ISA (trazer sempre o mais recente) 

  * Saúde do Estudante (farol) 

  * Atrito 

  * Marcação VIP Code 

  * Renovação (farol) 

  * Inadimplência (Collection Score - farol) 

  * Documentação pendente 




RN04 – Bloco de informações lateral - Contato 

Bloco com informações de contato, localizado à esquerda, abaixo dos Alarmes, ocupando 1/3 da tela: 

  * Celular (organizado por ordem de prefe^rencia de contato) 

  * E-mail 

  * One Thrust por canal 




RN05 – Lista relacionada - Tarefas 

Lista relacionada mostrando 3 tarefas relacionadas à matrícula (ordenadas por prioridade e prazo mais antigo), com um botão para exibir mais. Alinhado à direita, no topo, ocupando 1/3 da tela. 

  * Número da Tarefa (título - clicar leva para a tarefa) 

  * Tipo de Tarefa 

  * Prioridade 

  * Prazo 




RN06 – Banner \- Marketing Cloud 

Alinhado à direita, abaixo de Tarefas, ocupando 1/3 da tela. 

AS IS 

RN07 – Lista relacionada - Casos 

Lista relacionada mostrando os 3 últimos Casos relacionados à matrícula, com um botão para exibir mais. Alinhado à direita, abaixo do Marketing Cloud, ocupando 1/3 da tela. 

  * Número do Caso (título - clicar leva para o caso) 

  * Assunto 

  * Prioridade 




  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/629002d8-6549-4fd0-b9c7-d7584260b8cb?fileName=image.png)
