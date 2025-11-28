---
id: "WI-423262"
title: "[Telefonia] Criação do perfil de atendente de voz"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 03-2024-CoERelac-1ªOndaTelefonia"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2024-10-06T21:40:21.18Z"
changed: "2025-03-07T18:21:47.743Z"
---
# WI-423262 - [Telefonia] Criação do perfil de atendente de voz

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/423262](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/423262)

## 1. Identificação

- **ID/Ref:** WI-423262
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

**Critérios de Aceite**

**  
**

**Cenário 01: Permissões Limitadas ao Atendimento de Voz**

**DADO QUE:** O atendente de voz está logado no Salesforce com perfil “Atendimento Voz – Aluno” e papel “Atendente Voz ELO” ou “Atendente Voz Konecta”

**QUANDO:**  Visualizar a tela posicionada no cockpit do operador

**ENTÃO:**  Deve visualizar apenas as abas relacionadas ao atendimento telefônico, para aceite desse cenário.

**Resultado esperado:  **Visualizar o Aplicativo " Atendimento Voz – Aluno" no seu perfil, com as abas relacionadas ao atendimento telefônico como "Chamadas", "Casos", "Contatos" e "Fila de Voz".

**Resultado não esperado:  **Não visualizar no Salesforce as funcionalidades de WhatasApp e Chat, referente às telas: Sessões do Massaging, Usuários do Massaging, Transcrições do Chat.

  


**Cenário 02:  Acesso às Ferramentas de Atendimento Telefônico:**

**DADO QUE:** o aluno entrou em contato pela central de atendimento através do número 0800 888 6973

**QUANDO:**  digitar a matrícula ou CPF, e na sequência digitou as opções “8-outros assuntos” e “3-nenhuma das informações” para transbordo - falar com atendente

**ENTÃO:**** ** a chamada deve ser direcionada para o aluno dentro do cockpit do operador 

  


**DADO QUE:** O atendente de voz está logado no Salesforce com perfil “Atendimento Voz – Aluno” e papel “Atendente Voz ELO” ou “Atendente Voz Konecta” com status “Disponível” para receber ligação

**QUANDO:**  A receber a ligação do aluno para iniciar o atendimento

**ENTÃO:**** ** O atendente deve receber a chamada telefônica do aluno na tela do cockpit do operador, para aceite desse cenário

**Resultado esperado:  **Visualizar no caso do atendimento, os dados do aluno identificado com as informações pessoais, acadêmicas e financeiras do aluno durante o atendimento, na tela de cockpit de atendimento do operador ter a visão dos itens citados abaixo:

**Para o aluno que entrou em contato e não se identificou - “Não identificado”:**

1)      Visualizar o botão “Identificar aluno”, caso o aluno não tenha se identificado no início da ligação, permitindo registrar a identificação do aluno durante o atendimento;

**Para o aluno que se identificou com matrícula/CPF quando entrou em contato -  “Identificado”:**

2)      Visualizar os faróis na aba principal do “Relacionamento – Voz”, com as informações em um formato de ícone, com a cor do farol. Ao passar o mouse em cima, o nome do campo deve ficar visível (aluno atritado, documentação pendente, etc);

3)      Visualizar os botões "Enviar E-mail" e "Encerrar Atendimento";

4)      Visualizar a aba “Raio-X” com informações do aluno através das abas filhas “Atendimento”, “Atrito/Evasão”, “Risco Financeiro”, "Engajamento", "Renovação" e "Histórico do Atendimento";

5)      Visualizar a aba “Acadêmico” com informações acadêmicas do aluno através das abas filhas "Disciplinas Matriculadas", "Disciplinas Cursadas" e "Disciplinas a Cursar";

6)      Visualizar a aba “Financeiro” com informações financeiras do aluno através das abas filhas “Detalhes Financeiros”, "Financiamentos", "Bolsas" e "Pagamentos";

7)      Visualizar a aba “Autosserviços” com os autosserviços que o atendente poderá solicitar para o aluno durante o atendimento, através dos botões “Imposto de Renda”, "Documentos Pendentes", "Reset de Senha", “Consultar Boletos”, “Declaração de Matrícula” e "Histórico Escolar".

**Resultado não esperado:  **Não visualizar o caso do atendimento no cockpit do operador, nem os dados do aluno identificado com as informações pessoais, acadêmicas e financeiras do aluno durante o atendimento.  


  


**Cenário 03:  Configuração dos papéis - EPS ELO:**

**DADO QUE:** O atendente de voz da EPS ELO 

**QUANDO:**  logado no Salesforce com perfil “Atendimento Voz – Aluno

**ENTÃO:**  deve ter o papel “Atendente Voz ELO”, para aceite desse cenário.

  


**Cenário 04:  Configuração dos papéis - EPS Konecta:**

**DADO QUE:** O atendente de voz da EPS Konecta

**QUANDO:  **Logado no Salesforce com perfil “Atendimento Voz – Aluno

**ENTÃO:**** ** Deve ter o papel “Atendente Voz Konecta”, para aceite desse cenário.

  


**Cenário 05:  Configuração de ambos os papéis - EPS ELO e EPS Konecta:**

**DADO QUE:** O atendente de voz da EPS ELO e EPS Konecta

**QUANDO:**  Logado no Salesforce com perfil “Atendimento Voz – Aluno

**ENTÃO:**  Não poderão editar nenhuma informação relacionada aos dados do aluno no Salesforce, para aceite desse cenário.


## 9. Descrição (Abaixo vem do Azure DevOps)

****

****

**Eu Como** Atendente de voz no Salesforce  
**Quero** ter um perfil de atendente de voz (Nome do Perfil: **Atendente Voz - Aluno**),  
**Para que** eu tenha acesso apenas às telas de atendimento de voz.

  


**RN1:**  Permissões Limitadas ao Atendimento de Voz:  
  


O perfil de atendente de voz deve ter acesso restrito exclusivamente às funcionalidades de atendimento de voz no Salesforce, sendo assim, o atendente de voz deve ter seu perfil copiado do perfil "**Atendente - Aluno** ", porém removido o acesso às funcionalidades de WhatasApp e Chat, referente as telas: Sessões do Massaging, Usuários do Massaging, Transcrições do Chat.   
  
Todos os outros objetos do perfil "**Atendente - Aluno** " deverão ser mantidos para o perfil de voz (**Atendente Voz - Aluno**) no Aplicativo "**Atendimento - Aluno** ".  


  


****RN** 2:** Acesso às Ferramentas de Atendimento Telefônico:   
  


O atendente deve visualizar, atender e gerenciar chamadas de clientes usando o painel de atendimento de voz.   


Deve ter acesso às informações do aluno relacionadas a chamadas, incluindo histórico de chamadas e anotações (campo descrição).  


O atendente deverá também realizar a identificação do aluno. 

  


**As telas que devem entrar no perfil são: Raio-X, Acadêmico, Financeiro e Autosserviços e telas filhas.**

  


**Tela de cockpit de atendimento:**

![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/a173335b-afe0-4e90-9c74-6a04c12b046e?fileName=image.png)  


  


**Observação:** Os botões a serem exibidos devem ser: "**Enviar E-mail** " e "**Encerrar Atendimento** ".

  


**Detalhe da tela de identificação do Aluno (Quando o aluno não foi identificado):**

![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/0e1c57ae-9b70-43c7-9b8d-86517ac590ba?fileName=image.png)  


  


**Observação:  **Os botões a serem exibidos devem ser: "**Identificar Aluno** ".  


  


**Detalhe do Raio X:**  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/4bc0d931-354b-4ac9-a465-4078bc5d20cd?fileName=image.png)  


  


**Detalhe do Acadêmico:**  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/7455d39e-27ee-43f7-959f-aa25488abe9b?fileName=image.png)  


  


**Detalhe do Financeiro:**  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/e4278a67-6435-41bd-8215-091141254d76?fileName=image.png)  


  


**Detalhe do Autosserviço:**

![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/49786d43-66b1-4497-ad8e-6a4a393d57d1?fileName=image.png)  


  


****RN3** :** Configuração dos papéis:   
  


O perfil "**Atendente Voz - Aluno** " deverá ter o papel "**Atendente Voz ELO** " que deverá ser associado aos atender da EPS ELO, e "**Atendente Voz Konecta** " que deverá ser associado aos atendentes da EPS Konecta. Tais papeis já exitem nas definições de papel do Salesforce:

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/31f1308d-6e4e-484a-9b02-50e38976fb76?fileName=image.png)  


  


É necessário verificar/garantir que os papais "**Atendente Voz Elo** " e "**Atendente Voz Konecta** " não poderão editar nenhuma informação relacionada aos dados do aluno. 

  


O papel de voz deve ser configurado de modo que futuras atualizações do Salesforce não afetem a limitação de acesso a outros canais específicos.
