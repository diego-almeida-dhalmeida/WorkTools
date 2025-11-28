---
id: "WI-483742"
title: "[Relacionamento] - Exibição de textos rápidos associados a serviço na tela de envio de e-mail"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Adriano Meireles Santos"
created: "2025-04-29T19:55:09.05Z"
changed: "2025-08-08T14:59:19.553Z"
---
# WI-483742 - [Relacionamento] - Exibição de textos rápidos associados a serviço na tela de envio de e-mail

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/483742](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/483742)

## 1. Identificação

- **ID/Ref:** WI-483742
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

Critério de Aceite 01

Dado que um atendente com perfil válido esteja acessando a tela de envio de e-mail, 

Quando o botão ou campo de seleção de Texto Rápido for exibido, 

Então o sistema deve permitir que o atendente visualize uma lista de Textos Rápidos filtrados conforme o Serviço do atendimento. 

 

Critério de Aceite 02

Dado que o atendente selecione um Texto Rápido, 

Quando o sistema aplicar o conteúdo, 

Então os campos de Assunto e Corpo do e-mail devem ser preenchidos automaticamente com o conteúdo do modelo. 

 

Critério de Aceite 03

Dado que o e-mail foi selecionado de acordo com o serviço associado, 

Quando o sistema exibir o texto rápidos 

Então o atentamente encontrará apenas textos vinculados ao serviço 

 

Critério de Aceite 04

Dado que um texto rápido foi selecionado, 

Quando o atendente verificar a necessidade de complementação do texto, 

Então o sistema deve lhe permitir editar a mensagem para complemento.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu, como** operador do Call Center com perfil Atendente - Aluno, ou Atendente Voz - Aluno  


**Quero** que seja exibido na tela de envio de e-mail para os alunos uma ferramenta de textos rápidos 

**Com o objetivo de** selecionar rapidamente textos padronizados para comunicação com os alunos 

  


RN01: O sistema deve disponibilizar uma funcionalidade de Textos Rápidos na tela de envio de e-mails para alunos 

 

RN02: Os Textos Rápidos devem conter, no mínimo, Assunto e Corpo da mensagem, podendo ser previamente cadastrados e gerenciados por perfis administrativos. 

 

RN03: A lista de Textos Rápidos exibida deve ser filtrada conforme o Serviço associado ao atendimento, garantindo a padronização da comunicação. 

 

RN04: Ao selecionar um Texto Rápido, o sistema deve preencher automaticamente os campos de Assunto e Corpo do e-mail, permitindo edição posterior pelo atendente.
