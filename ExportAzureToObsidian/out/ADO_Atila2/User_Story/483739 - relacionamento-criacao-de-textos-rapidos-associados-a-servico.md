---
id: "WI-483739"
title: "[Relacionamento] - Criação de textos rápidos associados a serviço"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Adriano Meireles Santos"
created: "2025-04-29T19:49:40.13Z"
changed: "2025-08-08T14:59:19.553Z"
---
# WI-483739 - [Relacionamento] - Criação de textos rápidos associados a serviço

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/483739](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/483739)

## 1. Identificação

- **ID/Ref:** WI-483739
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

Dado que um Gestor-Aluno está configurando Textos Rápidos, 

Quando for salvar um novo texto, 

Então o sistema deve exigir o preenchimento de Assunto, Corpo e a associação a um Serviço válido.  
  


Critério de Aceite 02

Dado que um atendente esteja respondendo a um aluno por e-mail a partir de um Caso, 

Quando abrir a tela de e-mail, 

Então o sistema deve exibir uma lista de Textos Rápidos filtrados pelo Serviço relacionado ao Caso.  
  


Critério de Aceite 03

Dado que o atendente selecionou um Texto Rápido, 

Quando o sistema preencher o Assunto e Corpo do e-mail, 

Então o conteúdo deve refletir exatamente o texto cadastrado, mas permitir que o atendente personalize antes do envio. 

  


Critério de Aceite 04

Dado que não existem Textos Rápidos vinculados ao Serviço, 

Quando o atendente abrir a tela de e-mail, 

Então o sistema deve exibir a área em branco e, opcionalmente, informar que não há modelos disponíveis para o serviço.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu, como** Gestor-Aluno  


**Quero** um cadastro de textos rápidos com Assunto e Corpo para serem exibidos na tela de criação de e-mail para os alunos 

**Com o objetivo de** organizar as comunicações que são relativas ao serviço solicitado 

  


**RN01:** Deve existir um cadastro de Textos Rápidos contendo, no mínimo, os campos:

  * Nome do texto
  * Assunto do e-mail
  * Corpo do e-mail
  * Serviço associado



**RN02:** Cada Texto Rápido deve estar obrigatoriamente vinculado a um Serviço específico.

**RN03:** Ao criar um e-mail a partir de um Caso, o sistema deve exibir apenas os Textos Rápidos relacionados ao Serviço daquele atendimento.  


  


RN04: O usuário poderá criar um e-mail caso não haja texto rápido vinculado ao serviço
