---
id: "WI-338449"
title: "[Relacionamento] CR -  Fila de espera dinâmica"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2024-01-22T21:42:14.283Z"
changed: "2024-10-21T02:15:22.41Z"
---
# WI-338449 - [Relacionamento] CR -  Fila de espera dinâmica

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/338449](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/338449)

## 1. Identificação

- **ID/Ref:** WI-338449
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

**Critério de Aceitação 1: Funcionalidade de Confirmação de Transbordo:**  


  


O sistema deve ser capaz de identificar quando um aluno solicita transbordo para atendimento humano.  


  * Se o número de alunos na fila de espera exceder o valor parametrizável definido pelo time de gestão: 
  * O sistema deve enviar automaticamente uma mensagem para o aluno questionando se deseja ser direcionado para o atendimento humano. 
  * O texto dessa mensagem deve ser configurável pelo time de gestão. 
  * O aluno deve ter a opção de confirmar ou cancelar o transbordo. 
  * Se o aluno confirmar o transbordo, ele deve ser direcionado para o atendimento humano. 
  * Se o aluno cancelar o transbordo, o sistema deve mantê-lo no atendimento automatizado. 
  * Se o número de alunos na fila de espera for igual ou inferior ao valor parametrizável definido pelo time de gestão, o sistema deve direcionar automaticamente o aluno para o atendimento humano, seguindo o processo padrão. 



Todos os aspectos desta funcionalidade, incluindo o valor parametrizável da fila de espera e o texto da mensagem de confirmação do transbordo, devem ser configuráveis pelo time de gestão para diferentes marcas e canais.  


  


**Critério de Aceitação 2: Funcionalidade de Confirmação de Transbordo com Opções de Navegação e Marcação:**  


  


O sistema deve enviar uma mensagem de confirmação de transbordo para o aluno.  


Junto com a mensagem de confirmação, o sistema deve oferecer as seguintes opções de navegação:  


  * Falar com um agente: Opção para efetuar o transbordo para atendimento humano. 
  * Voltar ao menu inicial: Opção para retornar ao menu inicial do sistema. 
  * Encerrar atendimento: Opção para encerrar o atendimento. 
  * Após a confirmação do transbordo pelo aluno, o sistema deve preencher os seguintes campos: 
  * Confirmação de transbordo: Registro da resposta do aluno à confirmação. 
  * Falar com um agente: Registrado como verdadeiro caso o aluno escolha a opção "Falar com um agente"; caso contrário, é registrado como falso. 
  * Voltar ao menu inicial: Registrado como verdadeiro caso o aluno escolha a opção "Voltar ao menu inicial"; caso contrário, é registrado como falso. 
  * Encerrar atendimento: Registrado como verdadeiro caso o aluno escolha a opção "Encerrar atendimento"; caso contrário, é registrado como falso. 
  * Sem interação: Registrado como verdadeiro caso o aluno não responda à confirmação; caso contrário, é registrado como falso. 
  * Data/hora da confirmação: Registrado com a data e hora em que o aluno confirmou o transbordo. 
  * Fila para qual solicitou transbordo: Registrado com a fila para a qual o aluno solicitou transbordo. 



Todos os campos mencionados devem ser preenchidos corretamente e registrados para cada interação que passe pela confirmação de transbordo.  


O sistema deve ser capaz de armazenar essas informações de forma acessível e organizada para futuras referências e análises.  


  


**Critério de Aceitação 3: Envio de Pesquisa de Satisfação após Encerramento de Atendimento:**  


  


Após o encerramento de qualquer atendimento, seja por escolha do aluno na opção "Encerrar atendimento" ou de forma automática após o período padrão de sessão sem resposta do aluno:  


  * O sistema deve enviar automaticamente uma pesquisa de satisfação para coletar o feedback do aluno. 
  * A pesquisa de satisfação deve ser enviada imediatamente após o encerramento do atendimento. 
  * As respostas à pesquisa de satisfação devem ser registradas e armazenadas para análise posterior.



  


**Critério de Aceitação 4: Encerramento Automático do Atendimento por Limite de Inatividades:  
**

  


O sistema deve monitorar a atividade do aluno durante o atendimento.  


Se o aluno atingir o limite máximo de inatividades configurado pelo time de gestão:  


  * O sistema deve encerrar automaticamente o atendimento. 
  * Uma mensagem de aviso de encerramento do atendimento deve ser enviada ao aluno. 
  * O texto desta mensagem de aviso deve ser parametrizável pelo time de gestão para diferentes marcas. 
  * Os motivos de atendimento devem ser preenchidos conforme especificado: 
    * Grupo de serviço: Abandono 
    * Serviço: Ausência de interação sem atendimento 
    * Motivo de atendimento 1: Abandono 
    * Motivo de atendimento 2: Limite de inatividades 
    * Motivo de atendimento 3: NULL (fica em branco) 



A parametrização do limite máximo de inatividades e o texto da mensagem de aviso de encerramento do atendimento devem ser configuráveis pelo time de gestão para diferentes marcas.  


Este critério de aceitação abrange todos os aspectos da Regra de Negócio (RN04), garantindo que o sistema atenda adequadamente aos requisitos estabelecidos.  


  


**Critério de Aceitação 5: Fechamento Automático da Fila de Espera e Direcionamento de Atendimentos em Inatividade:**  


  


Após o horário padrão cadastrado para o fechamento da fila de atendimento, passados 30 minutos:  


  * Todos os atendimentos que ainda estiverem na fila de espera devem ser automaticamente direcionados para inatividade. 
  * Uma mensagem parametrizável deve ser enviada ao aluno informando sobre o fechamento da fila de espera. 



Se um aluno que estiver em inatividade enviar uma mensagem:  


  * Durante o período de atendimento cadastrado: 
    * 'O aluno deve ser direcionado para o atendimento humano, sendo alocado no final da fila de espera caso os atendentes não tenham capacidade de atendimento. 
  * Fora do período de atendimento cadastrado: 
    * O aluno deve receber uma mensagem informando o horário de atendimento padrão. 



O campo de flag "Inatividade pós fila de espera" deve ser marcado para os atendimentos que passarem pelo processo descrito nesta RN.  


  


Este critério de aceitação abrange todas as condições e ações exigidas pela Regra de Negócio (RN05), garantindo que o sistema funcione conforme especificado.  


  


**Critério de Aceitação 6: Encerramento Automático da Fila de Espera e Envio de Mensagem ao Aluno (Chat):**  


  


  * Após o horário padrão cadastrado para o fechamento da fila de atendimento, passados 30 minutos: 
    * Todos os atendimentos que ainda estiverem na fila de espera devem ser encerrados automaticamente. 
    * Uma mensagem parametrizável deve ser enviada ao aluno informando sobre o fechamento da fila de espera. 
  * O texto dessa mensagem deve ser configurável pelo time de gestão para diferentes marcas. 
  * O campo de flag "Inatividade pós fila de espera" deve ser marcado para os atendimentos que passarem pelo processo descrito nesta RN. 



Este critério de aceitação garante que o sistema encerre automaticamente os atendimentos remanescentes na fila de espera após o horário padrão, envie a mensagem de notificação ao aluno e marque adequadamente o campo de flag conforme especificado na Regra de Negócio (RN06).


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu, como**  Aluno da YDUQS   

**Quero** ser informado da demora na fila de espera e ter a possibilidade de encerrar o atendimento ainda na fila

**Para  **não ficar preso aguardando ser atendido em dias de pico de atendimento da fila

  


**RN01 – Confirmação de transbordo: parametrização (WhatsApp e Chat)**

Caso o aluno solicite transbordo para atendimento humano e a quantidade de alunos em fila de espera esteja maior do que o valor parametrizável, o BOT deverá enviar uma mensagem questionando se o aluno realmente quer ser direcionado para o atendimento humano. 

Caso a fila esteja menor do que o valor parametrizável, o aluno deverá ser direcionado para atendimento humano, conforme processo padrão. 

O valor máximo da fila de espera e o texto da mensagem a ser enviada para confirmação do transbordo devem ser parametrizáveis pelo time de gestão (gestor – aluno e curador – aluno) 

A parametrização deverá ser feita para as diferentes marcas e canais  
  


**RN02 – Confirmação de transbordo: Opções de navegação e marcação no caso (WhatsApp e Chat)**

Junto da mensagem de confirmação do transbordo, o BOT deverá oferecer as seguintes opções de navegação: 

1 – Falar com um agente (para efetuar o transbordo) 

2 – Voltar ao menu inicial (para voltar ao menu inicial) 

3 - Encerrar atendimento (para encerrar o atendimento) 

Para todos os atendimentos que passarem pela confirmação de transbordo os seguintes campos devem ser preenchidos: 

  * Confirmação de transbordo (campo para registro da resposta do aluno à confirmação) 
    * Falar com um agente (caso escolha a opção “Falar com um agente”) 
    * Voltar ao menu inicial (caso escolha a opção “Voltar ao menu inicial”) 
    * Encerrar atendimento (caso escolha a opção “Encerrar atendimento”) 
    * Sem interação (caso aluno não responda à confirmação) 
  * Data/hora da confirmação 
  * Fila para qual solicitou transbordo 



** **

**RN03 – Confirmação de transbordo: Pesquisa de satisfação (WhatsApp e Chat)**

Caso o aluno escolha a opção de “Encerrar atendimento”, a pesquisa de satisfação somente será ser enviada caso o aluno tenha passado por um desfecho. 

Caso o aluno não responda à confirmação, seu atendimento deverá ser encerrado após o período padrão de sessão e seguir a regra de envio de pesquisa de satisfação, dado que o aluno já passou por um desfecho.  
  


**RN04 – Limite de inatividades (WhatsApp)**

Caso o aluno atinja o limite de quantidades de inatividade, o atendimento deverá ser encerrado automaticamente e uma mensagem enviada ao aluno. 

A quantidade máxima de inatividades e o texto da mensagem a ser enviada para aviso do encerramento do atendimento devem ser parametrizáveis pelo time de gestão (gestor – aluno e curador – aluno) 

A parametrização deverá ser feita para as diferentes marcas 

A pesquisa de satisfação **não** deverá ser enviada. 

O Status do Caso deverá ser colocado como "Fechado"

Os motivos de atendimento deverão ser preenchidos com os seguintes valores: 

Grupo de serviço: Abandono 

Serviço: Ausência de interação sem atendimento 

Motivo de atendimento 1: Abandono 

Motivo de atendimento 2: Limite de inatividades 

Motivo de atendimento 3: NULL (ficar em branco) 

** **

**RN05 – Fechamento da fila de espera (WhatsApp)**

Passados 30 minutos do fechamento da fila de atendimento, conforme o horário padrão cadastrado, todos os atendimentos que ainda estiverem na fila de espera deverão ser direcionados para inatividade e uma mensagem com texto parametrizável deverá ser enviada ao aluno. 

Após ser colocado em inatividade, caso o aluno envie uma mensagem podem ocorrer duas situações: 

  1. Durante o período de atendimento cadastrado: ele deverá ser direcionado para o atendimento humano, sendo alocado no final da fila de espera caso os atendentes não tenham capacidade de atendimento. 
  2. Fora do período de atendimento cadastrado: ele deverá receber uma mensagem informando o horário de atendimento padrão.   
  




**Atenção:** a rotina de fechamento de casos de inatividade após o fechamento da fila não poderá impactar os atendimentos enviados para inatividade diretamente da fila de espera antes da reabertura da fila de atendimento no dia seguinte. Caso o atendimento siga em inatividade até o final do horário de atendimento do dia seguinte, ele deverá ser fechado pela rotina. 

O campo flag “Inatividade pós fila de espera” deverá ser marcado caso o aluno passe pelo processo descrito nesta RN. 

Possibilidade de edição do tempo aguardado após fechamento da fila através de parâmetro customizável 

  


**RN06 – Fechamento da fila de espera (Chat)**

Passados 30 minutos do fechamento da fila de atendimento, conforme o horário padrão cadastrado, todos os atendimentos que ainda estiverem na fila de espera deverão ser encerrados e uma mensagem com texto parametrizável deverá ser enviada ao aluno. 

O campo flag “Inatividade pós fila de espera” deverá ser marcado caso o aluno passe pelo processo descrito nesta RN. 

  


**_  
_**

**_  
_**

**_Lista de RNs descartadas por limitação técnica da ferramenta_**

**_  
_**

~~**RN 01 - Envio de mensagem de estímulo   ** ~~

~~A cada 1h (parametrizável) em que o aluno está na fila de espera, deverá ser enviada uma mensagem de estímulo para verificação se o aluno ainda se mantém na fila de espera. Nessa mensagem, deverá conter a nova posição na fila em que o aluno se encontra.   ~~

~~Ao final da mensagem, deverão ser disponibilizadas 2 opções para o aluno:   ~~

  * ~~**1) Aguardar atendimento**  
Caso escolha a primeira opção, ele se manterá na fila de espera.  
Neste momento a mensagem padrão de entrada na fila deverá ser enviada para o aluno com a sua nova posição na fila  
~~
  * ~~**2) Encerrar atendimento.**  
Caso selecione a segunda opção, o atendimento deverá ser encerrado, fila liberada e pesquisa de satisfação enviada  ~~
  * ~~**Termo não identificado**  
Caso aluno responda com um termo não identificado, o comportamento deverá ser igual ao da NLP durante conversa do BOT, informando que não entendeu e repetindo a mensagem anterior com as mesmas opções. Caso esse cenário se repita por 3 vezes, o BOT deverá encerrar o atendimento e iniciar um novo. ~~

~~  
**Atenção:** O texto enviado e o tempo limite deverão ser parametrizáveis pelo time de negócio, podendo ser editados por gestores e curadores.  
**  
RN 02 - Remoção do aluno da fila de espera** ~~

~~Caso o aluno não interaja em até 30 min (parametrizável) após ter recebido a mensagem de estímulo (RN01), uma nova mensagem parametrizável deverá ser enviada e o aluno deverá ser colocado em estado de inatividade, sendo retirado da fila de espera, porém sem encerrar seu atendimento.    
**Atenção:  **O texto enviado e o tempo limite deverão ser parametrizáveis pelo time de negócio, podendo ser editados por gestores e curadores.  
~~

~~  
~~

~~**RN 03 - Retorno do aluno à fila de espera** ~~

~~Caso o aluno selecione a primeira opção após ter passado o tempo limite da RN02 e ter sido retirado da fila de espera, ele retornará para o final da fila de espera. ~~

~~Neste momento a mensagem padrão de entrada na fila deverá ser enviada para o aluno com a sua nova posição na fila ~~

~~**  
**~~

~~RN 04 - Envio de mensagem de encerramento  
Após passada 1h (parametrizável) da finalização do horário da fila, o aluno deverá receber uma mensagem (parametrizável) questionando se ele quer ficar na fila até o dia seguinte, devido ao encerramento da operação.Nessa mensagem, deverá conter a nova posição na fila em que o aluno se encontra.  ~~

~~****Ao final da mensagem, deverão ser disponibilizadas 2 opções para o aluno:  **** ~~

  * ~~**1) Aguardar atendimento**  
Caso escolha a primeira opção, ele se manterá na fila de espera.  
Neste momento a mensagem padrão de entrada na fila deverá ser enviada para o aluno com a sua nova posição na fila  
~~
  * ~~**2) Encerrar atendimento.   **  
Caso selecione a segunda opção, o atendimento deverá ser encerrado, fila liberada e pesquisa de satisfação enviada.  ~~
  * ~~**Termo não identificado**  
Caso aluno responda com um termo não identificado, o comportamento deverá ser igual ao da NLP durante conversa do BOT, informando que não entendeu e repetindo a mensagem anterior com as mesmas opções. Caso esse cenário se repita por 3 vezes, o BOT deverá encerrar o atendimento e iniciar um novo. ~~



~~

**Atenção:  **O texto enviado e o tempo limite deverão ser parametrizáveis pelo time de negócio, podendo ser editados por gestores e curadores.  


  
~~

~~**RN 05 - Encerramento dos atendimentos sem interação** ~~

~~Caso o aluno que tenha recebido a mensagem da RN04 não interaja até às 23h59 (parametrizável) do dia em que ele entrou na fila de espera, o aluno deverá receber uma nova mensagem parametrizável informando que seu atendimento será finalizado e qual é o horário de atendimento padrão da fila  
~~

~~**Atenção:  **O texto enviado e o tempo limite deverão ser parametrizáveis pelo time de negócio, podendo ser editados por gestores e curadores.  
~~

~~  
~~

~~**RN 06 - Encerrar atendimento na fila de espera** ~~

~~Junto da mensagem  padrão de entrada na fila que informa para o aluno a posição na fila deverá ser enviada uma opção de interação **" Encerrar atendimento"**** **  possibilitando que o aluno encerre o atendimento na fila de espera.  
Caso o aluno selecione essa opção, a pesquisa de satisfação deverá ser enviada.  ~~

~~**  
**~~

~~**RN07 - Marcações no caso** ~~

  * ~~**Fila de espera:** esse campo deverá estar marcado sempre que o aluno estiver na fila de espera ~~
    * ~~**Ativo:** aluno que está efetivamente na fila de espera ~~
    * ~~**Inativo:** aluno que foi removido da fila de acordo com a RN 02 ~~
    * ~~**Vazio:** alunos que não estiverem na fila de espera ~~
  * ~~**Tabulação:** esse conjunto de campos deverá ser preenchido sempre que o aluno for desconectado pela lógica da RN 05  
~~
    * ~~**Motivo Tabulação 1:** Abandono ~~
    * ~~**Motivo Tabulação 2:** Desconexão automática na fila de espera  
~~
  * ~~**Tabulação:**  esse conjunto de campos deverá ser preenchido sempre que o aluno escolher "Encerrar atendimento" nos cenários descritos nas RNs 01, 04 e 06  
~~
    * ~~**Motivo Tabulação 1:**  Abandono ~~
    * ~~**Motivo Tabulação 2:**  Encerramento solicitado pelo aluno na fila de espera~~
