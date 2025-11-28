---
id: "WI-201673"
title: "[Telefonia] Tela de atendimento Telefonia SAC Voz"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 03-2024-CoERelac-1ªOndaTelefonia"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2022-12-06T17:56:38.757Z"
changed: "2025-03-10T16:49:48.203Z"
---
# WI-201673 - [Telefonia] Tela de atendimento Telefonia SAC Voz

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/201673](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/201673)

## 1. Identificação

- **ID/Ref:** WI-201673
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

### 

### Cenário 01: O atendente recebe uma ligação e acessa a tela resumo de atendimento 

**Dado  ** que eu sou um atendente de uma marca YDUQS 

** **

**Quando  **eu for realizar um atendimento SAC Voz

 

**Então**  a tela de resumo deverá conter todos os campos, faróis e ferramentas descritas nas regras de negócio RN01 devidamente preenchidos após realizar a pesquisa do aluno pelo CPF/Matrícula.

 

Resultado esperado:  Todos os campos descritos anteriormente estarão presentes na tela e devidamente preenchidos com as informações corretas do aluno que ligou.  
  


**Resultado não esperado:   **Nem todos os campos descritos anteriormente estão presentes na tela e/ou não estão devidamente preenchidos com as informações corretas do aluno que ligou.

  


Cenário 02: O atendente termina o atendimento e deseja fazer anotações sobre o caso e/ou enviar um texto ao redirecionar

Dado  que eu sou um atendente de uma marca YDUQS 

Quando eu for realizar uma anotação referente a um atendimento SAC Voz 

Então a tela de resumo deverá conter uma caixa de texto editável

Resultado esperado:  O atendente terá uma caixa de texto disponível em sua tela onde ele poderá escrever uma mensagem para o backoffice/supervisor em caso de redirecionamento do atendimento ou simplesmente realizar anotações sem que o aluno possa ver.

Resultado não esperado:  Não ter a caixa de texto disponível nem poder escrever na mesma. Além disso, a mensagem não fica registrada em lugar nenhum e o aluno pode lê-la.

  


Cenário 03: O atendente tenta escrever uma mensagem para o aluno no caixa de texto

Dado  que eu sou um atendente de uma marca YDUQS 

Quando eu utilizar a caixa de texto disponível na tela resumo

Então não poderei enviar o que tiver escrito para o aluno

Resultado esperado:  O atendente não poderá enviar nada escrito com as próprias palavras aos alunos

Resultado não esperado:  o atendente consegue enviar um texto escrito com as próprias palavras aos alunos

  


Cenário 04: O atendente deseja enviar um dos vídeos padrões disponíveis ao aluno durante o atendimento

Dado  que eu sou um atendente de uma marca YDUQS 

Quando eu estiver realizando um atendimento e desejar enviar um texto padrão da marca do aluno

Então a tela de resumo deverá conter um campo expansivo que me permite procurar o texto desejado e enviar ao aluno

Resultado esperado:  O atendente terá o campo expansivo com a base de textos padrão para envio disponível na sua tela resumo

Resultado não esperado:  Não ter o campo expansivo com a base de textos padrões nem conseguir enviar para o aluno caso tenha o texto disponível

Cenário 05: O atendente aceita a ligação do aluno e começa o atendimento

Dado  que eu sou um atendente de uma marca YDUQS 

Quando eu iniciar o atendimento de telefonia

Então a tela de resumo deverá conter um campo que indica os nós da árvore da URA que o aluno percorreu antes de falar pessoalmente com o atendente

Resultado esperado:  O atendente conseguirá ler o caminho percorrido pelo aluno na URA

Resultado não esperado:  Não ter o caminho percorrido pelo aluno na URA disponível na tela ou ter o caminho errado retratado na tela

  


Cenário 06: O atendente deseja consultar artigos disponíveis na base de conhecimento durante o atendimento do aluno

Dado  que eu sou um atendente de uma marca YDUQS 

Quando eu estiver realizando um atendimento e desejar consultar os artigo da base de conhecimento para auxiliar no atendimento

Então a tela de resumo deverá conter um campo expansivo que me permite procurar o texto o artigo deseja por um mecanismo de busca

Resultado esperado:  O atendente terá o campo expansivo com a base de artigos disponível na sua tela resumo

Resultado não esperado:  Não ter o campo expansivo com a base de artigos disponível em sua tela nem conseguirá ler os artigos contidos na base caso o campo exista

  


Cenário 07: O atendente está realizando o atendimento do aluno

Dado  que eu sou um atendente de uma marca YDUQS 

Quando eu estiver realizando um atendimento

Então a tela de resumo deverá mostrar o status do atendimento, o campo de tabulação e o nome do atendente que está realizando o atendimento

Resultado esperado:  O atendente conseguirá ler seu nome (quem está realizando o atendimento), o status do atendimento em questão e utilizar o espaço destinado para tabulação

Resultado não esperado: Não conseguir visualizar as informações de status da ligação, nome do atendente nem o campo de tabulação e/ou o campo de tabulação não estar funcionando adequadamente

  


**Cenário 08: O Atendente tenta finalizar o atendimento sem preencher todos os níveis da tabulação  **

**DADO QUE:**  o atendente tenha feito todos os tramites do atendimento.

**QUANDO:**  ele tentar finalizar o atendimento sem preencher todos os níveis da tabulação

**ENTÃO:**  deve surgir a informação a tabulação deve ser preenchida obrigatoriamente por completo.

**Resultado esperado:**  a ferramenta deve impedir a finalização do atendimento e indicar que o todos os níveis de tabulação devem ser preenchidos por meio da seguinte mensagem: "Para finalizar o atendimento é necessário preencher todos os níveis da tabulação".

  


**Resultado não esperado:  **a ferramenta não impede a finalização do atendimento e o atendente conclui o ticket sem preencher todos os níveis da tabulação ou o atendente tem acesso a tabulação da marca errada.

  


**Critério 9: O atendente finaliza o atendimento clicando no botão de conclusão**

**Dado**  que eu sou um atendente de uma marca YDUQS 

** **

**Quando  **tiver tabulado o atendimento em todos os níveis e clicar no botão de conclusão

 

**Então**  Deverá ser finalizado o atendimento

 

**Resultado esperado:   **O botão está disponível e liberado para uso após o preenchimento completo da tabulação.  
  


**Resultado não esperado:   **O botão não está disponível ou está permitindo a conclusão do atendimento sem o preenchimento completo da tabulação em todos os seus níveis. 

  


**Critério 10****: Pessoas de perfis diferente do atendente consultam a tela resumo exceto conteudistas e curadores**

  


**Dado  ** que eu sou da marca YDUQS e quero consultar a tela resumo de atendimento

** **

**Quando  **eu clicar na tela resumo de atendimento  
  


**Então**   eu terei acesso liberado para visualizá-la, assim como todos os demais perfis.

  
**Resultado esperado:  ** Todos os perfis terão acesso a tela exceto curadores e conteudistas  
  


Resultado não esperado:  Nem todos os perfis terem acesso liberado para visualização da tela

  


**Critério 11: O atendente recebeu uma ligação de um aluno que possui mais de uma matrícula**

**Dado**  que eu sou um atendente de uma marca YDUQS 

 

**Quando**  receber um atendimento no qual o aluno possui mais de uma matrícula  
  


**Então**  Deverá estar disponível na tela, em um primeiro momento, a matrícula com a qual ele entrou em contato. Caso ele tenha entrado em contato pelo CPF, deverá estar disponível na tela, em um primeiro momento, a sua matrícula mais recente e ativa. Também deverá possuir uma lista suspensa para que possa alterar essa matrícula durante o atendimento. Essa lista suspensa deve iniciar com a matrícula ativa mais recente até a matrícula inativa mais antiga.

 

**Resultado esperado:   **Se o aluno identificou qual matrícula ele deseja falar sobre, a tela resumo conterá as informações referentes a essa matrícula. Caso o aluno não tenha informado, a tela resumo conterá as informações referentes a sua matrícula ativa mais recente. O atendente poderá alterar a matrícula em uma lista suspensa. O ato de alterar a matrícula implica na atualização dos dados da tela. 

  


**Resultado não esperado:   **A tela não carrega primeiramente as informações referentes a matrícula pela qual o aluno se identificou anteriormente ou, se ele não tiver se identificado ainda, pela matrícula ativa mais recente. Além disso, o atendente não consegue alterar a matrícula em análise e/ou carregar corretamente a mudança dos dados.

  


**Critério 12: O atendente recebeu uma ligação de um aluno com renovação pendente  **

**  
**

**Dado**  que eu sou um atendente de uma marca YDUQS 

 

**Quando**  receber um atendimento de aluno com renovação pendente  
  
  


**Então**  Deverá ter disponível na tela uma sinalização de que trata-se de um aluno com renovação pendente.

 

**Resultado esperado:   **Haverá um destaque na tela referente a pendência de renovação  
  


**Resultado não esperado:   **Não haverá um destaque na tela referente a pendência de renovação

  


**Critério 13: O atendente recebe uma ligação onde o aluno solicita o envio da segunda via de um boleto**

**Dado**  que eu sou um atendente de uma marca YDUQS 

** **

**Quando  ** eu entrar na tela resumo de atendimento e selecionar um boleto  
  


**Então**  Deverá estar disponível a opção de enviar para o email cadastrado ou inserir manualmente um outro email para envio a segunda via do(s) boleto(s) em questão e/ou enviar para o whastapp cadastrados ou inserir um outro celular para envio do código de barras do(s) boleto(s) em questão. 

 

Resultado esperado:  Haverá um botão para envio da segunda via/código de barras do boleto que funciona corretamente e permite a inserção manual de um novo email/celular. 

  


Resultado não esperado:  Não haverá um botão para envio da segunda via/código de barras do boleto e/ou ele não funcionará corretamente e permitirá a inserção manual de um novo email/celular. 

  


**Critério 14: O atendente está preenchendo a tabulação**

**Dado**  que eu sou um atendente de uma marca YDUQS 

** **

**Quando  ** eu for iniciar a tabulação

 

**Então**  ao clicar no campo de tabulação ele deverá se expandir na tela para que eu tenha uma leitura dos textos facilitada e apresentar as opções de tabulação em forma de dropdown, ramificada em níveis da árvore de serviços e sendo possível pesquisar ao começar a escrever o motivo.

 

Resultado esperado:  O campo de tabulação irá se expandir na tela para facilitar a visualização dos níveis de tabulação em formato de dropdown ramificados pelos níveis da árvore de serviço e com campo de busca.

Resultado não esperado:  O campo de tabulação não expandir e a tabulação não vier em um formato separado em níveis da árvore de serviço das marcas e sem campo de busca.

  


**Critério 15: O atendente deseja transferir o atendimento para o backoffice ou um supervisor**

**Dado**  que eu sou um atendente de uma marca YDUQS 

** **

**Quando  ** eu for finalizar o atendimento e quiser redirecioná-lo para o Backoffice ou supervisor

 

**Então**  terei disponível botões que notificarão ao backoffice ou supervisor sobre o encaminhamento do caso 

 

**Resultado esperado:   **Os botões estão disponíveis na tela e notificam adequadamente o backoffice e os supervisores 

**Resultado não esperado:   **Os botões não estão disponíveis na tela e/ou não notificam adequadamente o backoffice e os supervisores


## 9. Descrição (Abaixo vem do Azure DevOps)

### 

****

**

### **

### 

**

**

### Eu, como atendente de call center  
Quero visualizar os seguintes campos na tela resumo enquanto estiver realizando um atendimento do canal de Voz, no Salesforce  
Para que consiga realizar o atendimento de forma mais ágil.

RN01: Abas da tela de atendimento

Devem estar iguais como definidas na [#201400](https://arquiteturaestacio.visualstudio.com/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_workitems/edit/201400) RN03. 

  


### RN02: Dados do atendimento

1.       Dados Pessoais (As Is do WhatsApp)

Quando o aluno é direcionado para o call center, a tela resumo do atendente deve ser preenchida de informações referentes ao aluno, uma vez que o mesmo já terá sido identificado pelo número da matrícula na URA. 

  


2.       Detalhes da Matrícula

  * Matrícula

  * Status da matrícula

  * Marca

  * Modalidade (presencial, semipresencial e flex)

  * Período flexível

  * Nome da IES

  * Campus/Polo

  * Curso

  * Forma de ingresso

  * Turno

  * Tipo curso

  * Tipo de polo

  * Renovado

  * Data de Renovação

  * Indicação Calouro Veterano

  * Período Ingresso




3\. Responsável financeiro 

  * Nome

  * CPF

  * Email

  * Indicador  responsável financeiro




4.       Modal de Encerramento do Atendimento

  * Tabulação (destrinchada nos níveis da árvore de serviço, conforme exemplificado abaixo)

  * Campo livre para anotações




RN03: Tela do Financeiro (As Is do WhatsApp)

As informações financeiras do aluno devem estar nessa tela, localizada ao lado da tela de dados do atendimento.

  * Bolsas (ID, Nome da bolsa, condicional/incondicional, validade, porcentagem, renovação automática, status e data de encerramento)

  * Financiamentos (ID, nome, validade, porcentagem, renovação automática, status e data de cancelamento)

  * Boletos (detalhes, nosso número, tipo, código, competência, créditos financeiros, valor, vencimento, data de pagamento, situação, forma de pagamento, baixa, autosserviço de envio da segunda via do boleto selecionado)




RN04: Tela do Acadêmico (As Is do WhatsApp)

Em uma terceira aba na tela de atendimento, as informações da jornada acadêmica do aluno devem estar preenchidas. Essa aba deve ser dividida entre disciplinas matriculadas, disciplinas cursadas e disciplinas a cursar, similar à tela do whatsapp. 

RN05: Tela da Experiência do Aluno/Raio - X

Em uma quarta aba na tela de atendimento, terá a tela de experiência do aluno. Nessa tela as informações importantes sobre as pendências do aluno devem ser preenchidas, como descrito na estória US [#201400](https://arquiteturaestacio.visualstudio.com/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_workitems/edit/201400) 

RN06: Base de Conhecimento (As Is do WhatsApp)

### A base de conhecimento deverá estar disponível para o atendente em uma sub-aba na tela de resumo com as demais informações, conforme feito no whatsapp:

### ![](https://lh7-us.googleusercontent.com/8rOcTHwuti83ogVy6w9lvEzJb_OZOj_Ow2VQ-reB19ie4hA8LAR1IsONS9lxkri84NMgRut01pAajfSub87NRA-vg09cmDVUGg3_G0SR9XJahouGUZjUR1-_j1Ygy464hnJBndVmdthS37i-hdTzp40)

### Quando o atendente deve conseguir navegar pela assistência guia e pela sugestão de atendimento, similar ao whatsapp. Ao encontrar o seu conteúdo, deverá abrir uma nova tela com esse conteúdo expandido ao clicar em seu nome. Segue o exemplo de navegação do Whatsapp:

![](https://lh7-us.googleusercontent.com/09TPnlSmyCJFqq4Ur7vPa4ADZUnjp-ONGpuCihA3yn-VpCOgiWYTUFeVMwpC8zapUYvmEaL_TaggtmzP7MnpasMEGL4Pi2_JdNVpGdfBwzbfusGCQchyWHPexw39A9hYJgQ4tZ1rRvItzCpbAq_dAVk)

![](https://lh7-us.googleusercontent.com/Qtj0IMXUvaib_nJhtApIpy-rKv7i9ru73oG3B-ENjCBelgaK9Gn_YkwQi4h1hpwdkRxp2t3EPS6umiI_dbR6KQc0ooYT3Jibmp92QGq2M-kCJEcTnqEzm_F_DpUY2TIeSvrcA_H1EwiktnJ6coGwnSA)

### A navegação e funcionalidades devem estar de acordo com as estórias de Whatsapp/Chat e a estória #241843.

A cascata de argumentação de retenção deve entrar na base de conhecimento. 

  


RN07: Preenchimento da tabulação ao final do atendimento (As Is do WhatsApp, pelo modal de encerramento)

O consultor não poderá concluir o atendimento sem que o mesmo esteja tabulado em todos os níveis (a tabulação poderá ser realizada de forma mais destrinchada, em níveis da árvore de serviços).

O CRM deverá apontar uma mensagem de erro indicando que a tabulação não está preenchida completamente e por isso o atendimento não poderá ser finalizado

  


RN08: Botão de conclusão do atendimento

Na tela de resumo deverá constar um botão disponível de conclusão de atendimento no canto superior direito. Utilizar a tela do whatsapp como exemplo: 

![](https://lh7-us.googleusercontent.com/yiTCeS3KhAFq1b9MT5NhrDVD9GqSaat5n7ejnlD82TZzQPS5E0R9mZ9LmCKA9wB4ymKFcsnjWrJy7UNv-9gaUiUdCci59lau9jTkTwHEAxfwednJTgAqDjGzcYu2pRuI5WEAiFlXE5QBq5dI4VOYSDY)

Ao clicar no botão “Encerrar Atendimento”, este atendimento será finalizado.

OBS: Respeitando a regra de tabulação preenchida.

Além disso, deve ter um botão de “Identificar Aluno” que abre o modal de identificação do aluno, similar ao Whatsapp. 

  


RN09: Acesso a tela de resumo

Todos os perfis de usuário terão acesso a essa tela de resumo exceto conteudistas.

RN10: Identificação da matrícula do aluno (Similar ao WhatsApp)

Caso a identificação da matrícula já tenha sido feita pela URA, a informação da matrícula deve ser preenchida automaticamente utilizando as informações retiradas da jornada da URA.

Caso o aluno tenha se identificado por uma matrícula específica, puxar as informações referentes a essa matrícula em questão.

Em todos os casos, o atendente deve conseguir identificar novamente o aluno, mesmo ele já sendo identificado na URA.

Caso o aluno inicie o atendimento humano sem ser identificado, o atendente deve clicar no botão “Identificar aluno” e o mesmo modal do Whatsapp deve ser usado:

  


![](https://lh7-us.googleusercontent.com/_03mLl0F6b3a0U62bNQ-ooFsITZW6NqBVOza6dbCTXORv471nFsKmwDAG4gyc4OzdOP_ntXM-Kru0Z5t8LXe_2p95RNHagY8qJnEwUJwL5keLmOtVMzMYfaQkmdoB3SPzAbhW5v2txKFJwQ0-WcXoIs)

  


RN11: Identificação de aluno com renovação pendente. (As Is do WhatsApp)  
O campo de renovação pendente da tela de experiência deve estar presente na tela de dados principal e deve ser destacado na tela quando for um aluno com renovação pendente.

  


RN12: Visualização da Tabulação (As Is do WhatsApp)

Ao clicar na tabulação para iniciar o seu preenchimento, é necessário que o campo se expanda em forma de pop up para facilitar a leitura aos consultores e ser possível de pesquisar ao começar a digitar o motivo. 

  


RN13: Envio de e-mail

O envio do e-mail para o aluno deve ocorrer da maneira descrita na US #201736. O botão estará da seguinte forma:

  
  


![](https://lh7-us.googleusercontent.com/Nzgt7kp16mPVzInz0f6aPOBNcY2zd57jDev2SL0prYyG3N7xV27wlUU7tbUfWO78ZR7rGE1xQGs_3y_BXQAnmtTvn0XvFVc_Yo1Zvu7bF5ZXV0zu9mzY85sj832hM_E9M_-75jNpbiHPSbVb_2aaujY)

  


O supervisor/gestor deve conseguir desabilitar essa opção de envio de e-mail.

  
**

RN14 : Faróis

  


**

Alguns campos, com identificações por meio de cores, da experiência do aluno (US[#201400](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_workitems/edit/201400) ) devem estar em formato de farol na aba principal do atendimento. As informações ficaram em um formato de ícone, com a cor do farol. Ao passar o mouse em cima, o nome do campo deve ficar visível (aluno atritado, documentação pendente, etc) 

  


No momento que o atendente iniciar os atendimentos, essas informações devem estar já presentes (não deve demorar para carregar).

**  


**
