---
id: "WI-241843"
title: "Evolução Base de Conhecimento - Ajuste da tela de assistência guiada"
type: "Improvement"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Fabiano Alves Guimaraes"
created: "2023-04-18T17:40:09.057Z"
changed: "2025-03-27T18:57:47.03Z"
---
# WI-241843 - Evolução Base de Conhecimento - Ajuste da tela de assistência guiada

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/241843](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/241843)

## 1. Identificação

- **ID/Ref:** WI-241843
- **Tipo:** Improvement
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

******_Cenário 1: Visualização dos botões e artigos_******  


**Dado**  que eu sou um atendente de uma marca YDUQS 

**Quando**** ** estiver precisando acessar um conteúdo durante o atendimento

**Então**  conseguirei utilizar a assistência guiada de acordo com a estrutura proposta na RN01

Resultado esperado:

  1. Atendente ver somente artigos disponíveis para as filas que está vinculado 
  2. Artigos estarem organizados na estrutura de acordo com indicações da planilha 



Resultado não esperado:

  1. Atendente ver artigos que não são direcionados para sua fila
  2. Artigos não estarem conforme estrutura indicada


## 9. Descrição (Abaixo vem do Azure DevOps)

****

Eu, como usuário do salesforce

Quero visualizar os conteúdos em botões de assistência guiada na base de conhecimento do Salesforce e na tela do artigo de maneira clara

Para que que o atendimento seja mais eficiente

  


Regras de Negócio

RN01 – Visualização dos botões e artigos

Na navegação de assistência guiada, os artigos deve aparecer da seguinte forma na cascata:

  


![](https://lh7-us.googleusercontent.com/TRAJGHPGWoKtsgfQG4nMWFIsDZMtVcfvhkF1X9eCbV6ZmgfkvcJTFgLZXQhsCG_sgWcfYAIZvOOjWleG1O-x1H7bBvtGoI8htjQzn4AY6t9cr-j1jjElGHVk1F9jjv8T3jBbPpQl4N8tsTOmHfnOIMg)

  


As categorias da Base de Conhecimento devem se expandir ao longo da navegação do atendente. Ao chegar em uma categoria que tenha artigos atrelados, eles devem aparecer da maneira detalhada acima.  Os números 1 e 2 mostram o nome de dois artigos diferentes. Os nomes estão em azul, pois, ao clicar nele, o atendente deve ser direcionado para a página expandida do artigo. 

  


Não deve existir a repetição do nome duas vezes, pois ocupa espaço e dificulta a navegação. Além disso, não deve existir um botão chamado “Acessar artigo”. 

  


Aumentar a indentação entre os níveis das categorias para facilitar a navegação dos atendentes.

  


RN02 – Visualização dos artigos na tela expandida

  


A parte do artigo deve ser expandida para ocupar a tela inteira, facilitando a visualização das informações. A sub-aba “Avaliação” deve ter as ferramentas do artigo (avaliação do artigo e feedback do artigo). A sub-aba “Relacionado” terá o histórico de aprovação e Arquivos. 

![](https://lh7-us.googleusercontent.com/62TAIMJ4-8Q13RRW3QR-UmIsjRdAc8lawRmDqWHac1Xb8T5BOVAKNTgLU-1biUoohDEcAEB-KHHMQG0DchNPW8H4SYPJGr3Ji-Ja-b-TfCOBH7EVw1kapCXG7FQZbFbpDv_UVghHQOyvh3VKH3hA0mo)

  


  


RN03 – Criação de novas categorias

  


O conteudista deve conseguir criar categorias com nomes repetidos sem dificuldade, editando com facilidade o campo “nome exclusivo da categoria”. 

  


O conteudista deve conseguir colocar 80 caracteres nos nomes das categorias. Além disso, o conteudista deve conseguir adicionar, para cada categoria criada, negrito, cor e itálico, com o objetivo de diferenciar os níveis e facilitar a navegação do atendente. 

  


RN04 - Limitação do perfil conteudista

 

O conteudista deve conseguir editar as categorias e artigos somente da sua área de atendimento (agrupamento de filas de atendimento/grupos gestores). Ele pode visualizar as categorias e artigos, mas não pode modificar. Um conteudista de Relacionamento não deve conseguir visualizar as categorias nem os artigos de Captação e vice versa. 

 

Ex: Um conteudista do Call Center deve conseguir criar e editar artigos para as filas de atendimento do Call Center.  Caso tente adicionar ou criar um conteudo em uma fila que não seja do Call Center, não deve ter sucesso.

  


_RN05 - Não mostrar categorias sem artigos disponíveis para o usuário_

As categorias que não tem artigos atribuídos, que não tem conteúdo para o atendente visualizar, não devem estar visíveis na navegação. Somente as categorias que levarem para algum artigo devem estar disponíveis na hora da navegação. 

  


RN06 – Backup das categorias e artigos

  


Deve haver uma rotina diária de backup das categorias e artigos da base de conhecimento de forma a manter a estrutura. Deve ser possível recuperar toda a estrutura, os artigos e suas alocações com o backup se necessário. 

  


RN07 - Contagem de Caracteres

Deve ser possível ver quantos caracteres estão sendo/foram utilizados nos campos de pergunta e resposta. Deve ser possível ver o limite de caracteres e quantos faltam para chegar nesse limite.
