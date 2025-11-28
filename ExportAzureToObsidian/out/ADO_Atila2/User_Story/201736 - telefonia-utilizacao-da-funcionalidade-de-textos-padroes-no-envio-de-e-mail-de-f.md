---
id: "WI-201736"
title: "[Telefonia] Utilização da funcionalidade de textos padrões no envio de e-mail de finalização do atendimento"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2022-12-06T19:24:36.27Z"
changed: "2025-03-10T16:49:32.017Z"
---
# WI-201736 - [Telefonia] Utilização da funcionalidade de textos padrões no envio de e-mail de finalização do atendimento

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/201736](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/201736)

## 1. Identificação

- **ID/Ref:** WI-201736
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

**CRITÉRIO DE ACEITE:**

**Critério 01**

**Dado**  que eu sou um analista

 

**Quando**  eu estiver na tela de adição/edição/exclusão de textos padrões. 

 

**Então** Poderei preencher os seguintes campos: Título do conteúdo, tipo, texto e comentário. 

** **

**Critério 02**

**Dado**  que eu sou um analista

 

**Quando**  eu estiver na tela de adição/edição/exclusão de textos padrões. 

**Então** só poderei enviar para inclusão quando tiver preenchido os campos obrigatórios: Título do conteúdo, Tipo e Texto

** **

**Critério 03******

 

**Dado**  que eu sou um analista 

** **

**Quando**  eu estiver na tela de adição/edição/exclusão de textos padrões. 

 

**Então**  Deverá ter disponível um local onde ficam armazenados vídeos tutoriais e respostas padrões que posso excluir ou editar

 

**Critério 04******

 

**Dado**  que eu sou um analista 

** **

**Quando**   eu seleciono um texto/ vídeo tutorial já existente

 

**Então**   ele deverá ser projetado na área de visualização para que possa vê-lo por completo e, assim, decidir se salvo alguma edição ou excluo o conteúdo. 

 

**Critério 05******

 

**Dado**  que eu sou um analista 

** **

**Quando**   eu clico nos botões de salvar ou excluir

 

**Então**   deverá surgir um pop up de confirmação e a ação só será concluída quando o analista clicar em confirmar. Bem como a ação será desfeita quando o analista clicar em cancelar.


## 9. Descrição (Abaixo vem do Azure DevOps)

### 

### Descrição da estória

**Eu** , como analista

**Quero  **cadastrar, excluir e editar os meus conteúdos, na base de textos padrões, do Salesforce,

**Para que**  os alunos sejam respondidos da melhor forma possível via e-mail após a finalização de um atendimento

### Regras de Negócio

**R01   \- Utilização de Mailing**

Após a finalização de um atendimento, deverá ser possibilitado para que um atendente humano envie um e-mail ao aluno.  
  
Após o encerramento do atendimento pelo atendente, deverá ser habilitado um botão no canto superior direito da tela de Caso, para que possa enviar um e-mail ao aluno. O nome do botão deverá ser "Enviar E-mail".  
  
Apenas um atendente que realizou atendimento do Caso poderá ter o permissionamento de envio de e-mail a um aluno.   
  
Sempre que um atendente quiser enviar um e-mail para um aluno, o destinatário deverá ser o e-mail cadastrado na conta do aluno demandante do atendimento.

Apenas um e-mail deverá ser possibilitado de ser enviado por Caso.

Se o aluno não tiver e-mail registrado na tela de conta, deverá ser impossibilitado ao atendente de enviar o e-mail 

  
**R02 - Tela de Envio de E-mail**

Após o operador finalizar o atendimento e pressionar o botão para enviar um e-mail para o aluno, deverá abrir uma tela para que ele possa redigir o conteúdo a ser enviado ao aluno. Deverá ser possibilitado ao operador utilizar textos padrões já cadastrados pelo seu supervisor ou gestor durante o envio do e-mail.  
  
Um layout proposto para a tela está representado na imagem abaixo: 

![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/8e23d154-f9a6-4d77-b2e6-d7f2ac2dc7b4?fileName=image.png)  


**R03 – Campos obrigatórios**

  * Assunto
  * Texto



Caso não sejam atendidas as regras acima, deverá ser disparada mensagem de erro, citando os nomes dos campos com pendência quando o analista clicar no botão de salvar: "Os seguintes campos obrigatórios devem ser preenchidos: campo 1, campo 2..." (deverá exibir apenas os nomes dos campos com pendência).

**R04 – Edição e exclusão de conteúdo dos textos padrões**

Todo gerenciamento de criação, edição, exclusão e compartilhamento dos textos padrões e pastas, deverá ser realizado por supervisores e gestores.  
  
O Cadastramento e compartilhamento deverá ser realizado de forma similar a existência da funcionalidade de textos-rápidos.  
  
Os atendentes não deverão ter a possibilidade de criar ou editar textos-padrão, porém, poderão redigir manualmente a mensagem a ser enviada ao aluno em campo livre, conforme imagem da R02.  
  


**R05 – Mensagem de confirmação**

Ao clicar tanto no botão de enviar quanto no de excluir, deve ser exibido um pop up de confirmação com as opções: “confirmar” e “cancelar”. Se o analista clicar em confirmar, a ação solicitada pelo operador deverá ser efetivada. Se clicar em cancelar, o operador retornará para tela de envio de e-mails.  


  
**R06 - Campo de envio de Texto Livre**

**  
**

Deverá existir um campo de envio de texto livre na tela de envio de textos por e-mail. 

  


A habilitação deste campo deverá ser parametrizável pelo gestor do atendente. 

  


O atendente sempre poderá enviar um e-mail ao aluno utilizando os textos padrão já cadastrados pelos seus supervisores e gestores. O atendente só poderá utilizar o campo de texto livre caso tenha sido habilitado pelo seu gestor. 

  


**R07 - E-mail Remetente**

**  
**

O remetente de envio de e-mail deverá ser segregado por marca. Cada marca terá um remetente centralizado para realização dos disparos aos alunos. 

  


Os e-mails serão: 

  


Estácio: 

Wyden: 

Ibmec: 

IDOMED:
