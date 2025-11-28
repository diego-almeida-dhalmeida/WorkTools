---
id: "WI-435857"
title: "[Telefonia] Encaminhamento de para o time do Backoffice"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 03-2024-CoERelac-1ªOndaTelefonia"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2024-11-18T23:18:47.79Z"
changed: "2025-02-25T14:01:32.017Z"
---
# WI-435857 - [Telefonia] Encaminhamento de para o time do Backoffice

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/435857](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/435857)

## 1. Identificação

- **ID/Ref:** WI-435857
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

#### Cenário 01: Permissões Limitadas ao Atendimento de Voz

#### 

DADO QUE: O atendente de voz está logado no Salesforce com perfil “Atendimento Voz – Aluno” e papel “Atendente Voz ELO” ou “Atendente Voz Konecta”

QUANDO: Visualizar a tela posicionada no cockpit do operador

ENTÃO: Deve visualizar apenas as abas relacionadas ao atendimento telefônico, para aceite desse cenário.  


  


  


Cenário 02: Acesso às Ferramentas de Atendimento Telefônico:  


  


DADO QUE: o aluno entrou em contato pela central de atendimento através do número 0800 888 6973

QUANDO: digitar a matrícula ou CPF, e na sequência digitou as opções “8-outros assuntos” e “3-nenhuma das informações” para transbordo - falar com atendente

ENTÃO: a chamada deve ser direcionada para o aluno dentro do cockpit do operador  
  
Cenário 03: Encaminhamento

**DADO QUE** o atendente N1 identifica que o problema do cliente exige análise especializada,  
**QUANDO** ele acessa o sistema para realizar o encaminhamento,  
**ENTÃO** o sistema deve permitir o encaminhamento do caso por meio de um modal de encaminhamento que deve conter os seguintes campos:  
  
Tipo de Solicitação;  
Motivo de atendimento 1;  
Motivo de atendimento 2;  
Motivo de atendimento 3;  
Descrição;  
Observação do encaminhamento; 

Com os campos preenchidos ele deve poder salvar o motivo de encaminhamento e encaminhar o caso. 

#### 

#### Cenário 03: Encaminhamento para a Fila do Backoffice

**DADO QUE** o atendente N1 decide que o caso deve ser tratado pelo backoffice,  
**QUANDO** ele realiza o encaminhamento;   
**ENTÃO** o sistema deve encaminhar o caso para a fila correspondente. As opções de fila podem ser: BO SAC Konecta e BO Retenção Elo.

#### 

#### Cenário 04: Registro detalhado no Caso

**DADO QUE** o atendente N1 está criando um caso,  
**QUANDO** ele preenche o formulário de detalhamento do problema,  
**ENTÃO** o sistema deve registrar as informações do modal de encaminhamento no caso.

#### 

#### Cenário 05: Notificação ao N2 (Push)

**DADO QUE** o caso foi encaminhado para a fila do backoffice,  
**QUANDO** a equipe N2 recebe a notificação no sistema,  
**ENTÃO** ela deve visualizar todas as informações registradas pelo primeiro atendente, incluindo anexos e histórico, para dar continuidade ao atendimento. 

#### 

#### Cenário 06: Fechamento do caso

**DADO QUE** o backoffice finalizou a análise e solução do caso,  
**QUANDO** o N2 registra a resolução no sistema (Fechamento do caso),  
**ENTÃO** o sistema deve atualizar o status do caso para "Resolvido" e notificar o aluno que o problema foi finalizado enviando um e-mail de notificação.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Como um**  Atendente Voz - Aluno  


**Eu quero**  encaminhar um caso para o time de atendimento específico do backoffice (N2 interno),  
**Para que** o caso possa ser tratado de forma assíncrona 

> >   
> 

  


**RN1:** A tela da tarefa do caso deverá ter um botão chamado **Encaminhar** para os casos de N2 que o atendente identificar: 

  


Somente casos com origem "SAC-Voz", e "Renteção-Voz" e Status "Novo" terão essa funcionalidade disponível;  
  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/ed212af0-08a7-4c5a-a986-2f25ad63bc0d?fileName=image.png)

  


**RN2:** Ao acionar o encaminhamento a seguinte tela deverá ser aberta para direcionar o caso. A propriedade do caso será da respectiva fila. O status do caso será alterado para "Em andamento".

  


Deverão ser criados os seguintes campos:  
Tipo de Solicitação de encaminhamento; 

Motivo encaminhamento 1 

Motivo encaminhamento 2  
Motivo encaminhamento 3  


  


Obs: Os campos, "Tipo de Solicitação", "Motivo encaminhamento 1", "Motivo encaminhamento 2" e "Motivo encaminhamento 3" devem possuir as mesmas opções de tabulação do modal de encarramento de caso.

  


"Descrição" do encaminhamento e o campo "Observações do Encaminhamento" também deverá ser criado e ser inserido na tela do caso:

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/fd3f19e9-7f85-4f2a-bc48-b9f8a3b759ba?fileName=image.png)  


  


**RN3:**  
  


Os campos:  


Tipo de Solicitação de encaminhamento; 

Motivo encaminhamento 1 

Motivo encaminhamento 2  
Motivo encaminhamento 3

"Descrição"  


Observações do Encaminhamento  


  


Devem aparecer como uma nova seção no mesmo formato do box "Motivo do Contato" com o título "Motivo de encaminhamento".

  


  


**RN4:** Feita a tabulação e informado o motivo do encaminhamento, o atendente do Backoffice deverá acessar uma fila de tarefas de Backoffice para tratar os casos encaminhados. Temos como filas de atendimento as seguintes opções que deverão ser criadas:

  
BO SAC Konecta; 

BO Retenção Elo. 

  


A escolha da fila deve se dar conforme o esquema abaixo, onde relação é sempre de 1 para 1, ou seja, se eu estiver no atendimento SAC Elo, ou SAC Konecta, então devo encaminhar para o "**BO SAC Konecta** ". Caso esteja no atendimento Retenção ELO, então devo encaminhar para o "**BO Retenção Elo** ". 

  


Resumindo para que a seleção possa ser feita de forma automática:  
  


Se o tipo de registro for "Retenção", então direcionar para a fila BO Retenção ELO;

Se o tipo de registro for "Atendimento Aluno", então direcionar para a fila BO SAC Konecta;  


  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/8032d4bd-88aa-4634-9d4f-aeda12ac6dd1?fileName=image.png)  
  


**RN5:**  
Deverá existir uma tela com as informações dos casos encaminhados (Listas de visualização) uma para cada fila de atendimento, BO SAC Konecta, BO Retenção Elo. 

  


Os campos da lista devem ser:

  


Numero do Caso;

Assunto;

Tipo de Solicitação;

Marca;

Status; 

Data/hora abertura;  


  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/62d5eab7-f7b0-4bae-a535-d0eff1bd727a?fileName=image.png)  


  


O atendente do backoffice, ao localizar determinado caso a ser atendido na lista, deve "assumir" o caso (ação manual do atendente em mudar a propriedade do caso para si);

  


O atendente do backoffice poderá finalizar o atendimento do caso acessando a tarefa, registrando as anotações relevantes e efetuando a finalização do atendimento com status de "Fechado" (Funcionalidade já existente);  


  


Uma vez que o caso que foi encaminhado seja finalizado, será disparado um email automático para o aluno com assunto e corpo pré-definido:

**Assunto:**  Atualização sobre seu Chamado  
  
**Corpo:**

**\----------------------------  
** Prezado(a) [Nome do Aluno],

Informamos que o seu chamado numero #numero do chamado# registrado no Call Center da Yduqs foi finalizado. Caso tenha alguma dúvida ou precise de suporte adicional, estamos à disposição para auxiliá-lo(a). 

Agradecemos por entrar em contato e continuamos à disposição para atendê-lo(a) sempre que necessário. 

Atenciosamente,  
Equipe de Atendimento  
Yduqs 

\---------------------------- 

**RN6:**  
Todos os usuários ativos da respectiva fila receberão uma notificação push sobre um novo caso encaminhado, com a mensagem: "Existe um novo encaminhamento para ser tratado. Número do caso: #numero# e assunto #assunto#".
