---
id: "WI-201763"
title: "[Telefonia] Pesquisa de Satisfação Retorno EPS"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 01-2024-CoERelac"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2022-12-06T19:40:59.463Z"
changed: "2025-03-13T19:50:00.407Z"
---
# WI-201763 - [Telefonia] Pesquisa de Satisfação Retorno EPS

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/201763](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/201763)

## 1. Identificação

- **ID/Ref:** WI-201763
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

****

**Cenário 01:  Logado como Atendimento de Voz para receber ligação do aluno******

**DADO QUE:  **O atendente de voz está logado no Salesforce com perfil “Atendimento Voz – Aluno” e papel “Atendente Voz ELO” ou “Atendente Voz Konecta”

QUANDO: Visualizar a tela posicionada no cockpit do operador

**ENTÃO:  **Deve visualizar apenas as abas relacionadas ao atendimento telefônico, para aceite desse cenário.

**  
**

**Resultado esperado:**  Visualizar o Aplicativo " Atendimento Voz – Aluno" no seu perfil, com as abas relacionadas ao atendimento telefônico como "Chamadas", "Casos", "Contatos" e "Fila de Voz".

**  
**

**Resultado não esperado:  **Não visualizar no Salesforce as funcionalidades de WhatasApp e Chat, referente às telas: Sessões do Massaging, Usuários do Massaging, Transcrições do Chat.

**  
****DADO QUE:**** ** o aluno entrou em contato pela central de atendimento através do número 0800 888 6973**  
**

**QUANDO:**** ** digitar a matrícula ou CPF, e na sequência digitou as opções “8-outros assuntos” e “3-nenhuma das informações” para transbordo - falar com atendente

**ENTÃO:**** ** a chamada deve ser direcionada para o aluno dentro do cockpit do operador

** **

**DADO QUE:**  O atendente de voz está logado no Salesforce com perfil “Atendimento Voz – Aluno” e papel “Atendente Voz ELO” ou “Atendente Voz Konecta” com status “Disponível” para receber ligação

**QUANDO:  **A receber a ligação do aluno para iniciar o atendimento

**ENTÃO:  **O atendente deve receber a chamada telefônica do aluno na tela do cockpit do operador, para aceite desse cenário  


  


**Cenário 02:  ****Momentos de Envio da Pesquisa de Satisfação**

****DADO QUE:**** eu sou aluno não identificado ou identificado de uma das marcas YDUQS 

****QUANDO:**** meu atendimento for “Fechado” ou “Fechado Incorretamente” 

******ENTÃO:  **quero receber a primeira pergunta da pesquisa sobre o nível de satisfação com o atendimento

  


**Resultado esperado:** o aluno deve receber a pesquisa de satisfação de forma automática, quando o atendimento for encerrado pelo atendente (sem necessitar de envio pelo atendente) 

 

**Resultado não esperado:** o aluno não receber a pesquisa de satisfação, quando o atendimento for encerrado pelo atendente. 

  


  


**Cenário 03:  ****Disponibilizar a primeira pergunta da pesquisa de satisfação**  


****DADO QUE:**** eu sou aluno não identificado ou identificado de uma das marcas YDUQS 

******QUANDO:  **meu atendimento for “Fechado” ou “Fechado Incorretamente” 

****ENTÃO:**** quero receber a gravação da primeira pergunta da pesquisa de satisfação 

** **

****Resultado  esperado**:**

Caso o aluno insira uma nota DENTRO das opções válidas de 1 a 5 (sendo: 1-Totalmente insatisfeito; 2-Insatisfeito; 3-Regular; 4-Satisfeito; 5-Totalmente satisfeito) 

  * Ok. 



Caso o aluno insira uma nota FORA das opções válidas (de 1 a 5):  


  * Deverá ser reproduzida uma nova gravação informando que não entendeu a resposta do aluno e repetir a primeira pergunta da pesquisa pela **segunda** vez;
  * Deverá ser reproduzida uma nova gravação informando que não entendeu a resposta do aluno e repetir a primeira pergunta da pesquisa pela **terceira** vez; 
  * Caso o aluno continue inserindo uma nota FORA das opções válidas de 1 a 5, ele deverá ser desconectado e seu atendimento encerrado, e o campo de pesquisa de satisfação deve ficar sem registro no Salesforce.



**Resultado não esperado:**  


• Não disparar nenhuma mensagem para resposta inválida;  


• Aceitar respostas inválidas;  


• A pesquisa ser encerrada.  


   


**Cenário 04:  Disponibilizar a segunda pergunta da pesquisa de satisfação **

****DADO QUE:****  eu sou aluno não identificado ou identificado de uma das marcas YDUQS 

******QUANDO:  **concluir a resposta da primeira pergunta da pesquisa de satisfação

****ENTÃO:****  quero receber a gravação da segunda pergunta da pesquisa de satisfação, questionando sobre a resolutividade do atendimento 

  


**Resultado  esperado: **

Caso o aluno insira uma resposta DENTRO das opções válidas de 1 ou 2 (sendo: 1-Sim; 2-Não) 

  * Ok. 



Caso o aluno insira uma resposta FORA das opções válidas (de 1 ou 2):  


  * Deverá ser reproduzida uma nova gravação informando que não entendeu a resposta do aluno e repetir a segunda pergunta da pesquisa pela **segunda  **vez;
  * Deverá ser reproduzida uma nova gravação informando que não entendeu a resposta do aluno e repetir a segunda pergunta da pesquisa pela **terceira  **vez; 
  * Caso o aluno continue inserindo uma opção FORA das opções válidas de 1 ou 2, ele deverá ser desconectado e seu atendimento encerrado, e o campo da segunda pergunta deve ficar sem registro no Salesforce, registrar apenas a resposta da primeira pergunta.



**Resultado não esperado:**  


• Não disparar nenhuma mensagem para resposta inválida;  


• Aceitar respostas inválidas;  


• A pesquisa ser encerrada. 

  


  


**Cenário 05: Registrar os dados da pesquisa de satisfação **

****DADO QUE:****  eu sou aluno não identificado ou identificado de uma das marcas YDUQS 

******QUANDO:  **concluir a resposta da primeira e segunda perguntas da pesquisa de satisfação  


****ENTÃO:****  quero que minhas respostas fiquem registradas dentro do Salesforce para consulta e serem utilizadas nos indicadores: 

****  
****

**Resultado  esperado:  
**

****

Registrar a pesquisa de satisfação dentro do Salesforce para consulta e serem utilizadas nos indicadores da seguinte forma:

  * Nível de satisfação (Valor Nível de Satisfação) com a resposta numérica dada pelo aluno para a primeira pergunta (de 1 a 5); 
  * Solicitação Resolvida? (Valor Solicitação Resolvida) com a resposta numérica dada pelo aluno para a segunda pergunta => visando o cálculo dos indicadores de resolutividade (0 ou 1) registrar **0 para Não**  e **1 para Sim**



**Resultado não esperado:**  


**Qualquer uma das respostas dada pelo aluno na pesquisa de satisfação, não ficarem registradas no Salesforce.  
**

  


  


**Cenário 06: Tempo limite de espera **

****

****DADO QUE:****  eu sou aluno não identificado ou identificado de uma das marcas YDUQS

****QUANDO:  ****meu atendimento for “Fechado” ou “Fechado Incorretamente”

****ENTÃO:**  **quero ouvir a gravação das perguntas da pesquisa de satisfação, dentro do limite de espera estabelecido

**Resultado  esperado:  
**

****

Caso o aluno não responda a primeira ou a segunda pergunta (das RN02 ou da RN03), a URA deverá fazer a repetição da pergunta por 3x seguidas, antes de desconectar o aluno.

  


**Resultado não esperado: **

Caso o aluno não responda a primeira ou a segunda pergunta dentro das opções, a URA desconectar o aluno sem repetir cada pergunta por 3x seguidas.


## 9. Descrição (Abaixo vem do Azure DevOps)

****

****

**

Eu, como aluno das marcas da Yduqs, ao final do meu atendimento

Quero ser solicitado a participar da pesquisa de satisfação do atendimento

Para que possam avaliar o meu atendimento.

  


Regras de Negócio:

 

RN01 - Momentos de Envio da Pesquisa de Satisfação

O envio da pesquisa deve acontecer após a finalização do atendimento humano, assim que o encerramento do atendimento acontecer. O caso precisa estar registrado como “Fechado” ou “Fechado Incorretamente” para a pesquisa ser enviada ao aluno.

  


No momento que o caso for fechado, deve ocorrer uma integração para direcionamento da chamada do atendente humano para URA, que fornecerá a pesquisa de satisfação. Esse direcionamento deve ser automático, sem necessitar de envio pelo atendente. 

  


RN02 – Disponibilizar a primeira pergunta da pesquisa de satisfação

1 - Disparar a pesquisa de satisfação para o aluno exibindo a gravação com a primeira pergunta sobre o seu nível de satisfação com o atendimento.

  


Após ouvir a pergunta da pesquisa, o aluno deverá inserir uma nota válida para seu atendimento, devendo ser uma nota entre 1 a 5 (1-Totalmente insatisfeito; 2-Insatisfeito; 3-Regular; 4-Satisfeito; 5-Totalmente satisfeito).

  


2 - Caso o aluno não responda dentro das opções válidas de 1 a 5, deverá ser reproduzida uma nova gravação informando que não entendeu a resposta do aluno resposta e reforçando a primeira pergunta da pesquisa.

  


3 - Caso o aluno novamente não responda dentro das opções válidas de 1 a 5, reproduzir nova gravação informando ao aluno que não entendeu sua resposta, reforçando a primeira pergunta da pesquisa.

  


4 - Caso o aluno continue não respondendo dentro das opções válidas de 1 a 5, ele deverá ser desconectado e seu atendimento encerrado. O campo de pesquisa de satisfação deverá ficar sem registro dentro do Salesforce.

  


RN03 – Disponibilizar a segunda pergunta da pesquisa de satisfação

  


1 - Após o aluno responder a primeira pergunta dentro das opções válidas de 1 a 5, reproduzir na sequência a gravação da segunda pergunta da pesquisa, questionando sobre a resolutividade do atendimento ao aluno. O aluno deve responder dentro das opções válidas de 1: Sim ou 2: Não.

  


2 - Caso o aluno não responda dentro das opções válidas de 1: Sim ou 2: Não, reproduzir novamente a gravação, informando ao aluno que não entendeu sua resposta, reforçando a segunda pergunta da pesquisa.

  


3 - Caso o aluno novamente não responda dentro das opções válidas de 1:Sim ou 2:Não, reproduzir novamente a gravação, informando ao aluno que não entendeu sua resposta, reforçando a segunda pergunta da pesquisa.

  


4 - Caso o aluno continue não respondendo dentro das opções válidas de 1 ou 2, ele deverá ser desconectado e seu atendimento encerrado. O campo da segunda pergunta da pesquisa de satisfação deverá ficar sem registro dentro do Salesforce. A primeira resposta deve ser registrada.

  


RN04 – Registrar os dados da pesquisa de satisfação

  


Concluir a pesquisa de satisfação fazendo o registro das respostas do aluno referente às perguntas da pesquisa nos campos do caso de pesquisa de satisfação, descritos na [#202691](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_workitems/edit/202691) e na RN08 da [#232953](https://arquiteturaestacio.visualstudio.com/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_workitems/edit/232953) . Esse registro deve ocorrer como uma atualização no caso do Salesforce na seção “Pesquisa de Satisfação”, semelhante à tela de caso do Whatsapp. 

  


Caso o aluno não forneça resposta de uma ou das duas perguntas, os campos correspondentes deverão ficar em branco na tela de Caso.

Os campos da seção do caso são os seguintes:  


  * Nível de satisfação

    * Campo a ser preenchido com o texto referente à resposta numérica dada pelo aluno à primeira pergunta (1-Totalmente insatisfeito; 2-Insatisfeito; 3-Regular; 4-Satisfeito; 5-Totalmente satisfeito).

  * Valor Nível de Satisfação

    * O valor numérico dado pelo aluno visando o cálculo dos indicadores de satisfação (1, 2, 3, 4 ou 5).

  * Solicitação Resolvida?

    * Campo a ser preenchido com o texto referente à resposta numérica dada pelo aluno à segunda pergunta (1- Sim ou 2- Não)

  * Valor Solicitação Resolvida

    * O valor numérico dado pelo aluno visando o cálculo dos indicadores de resolutividade (0 ou 1). 0 para Não e 1 para Sim


  


RN05 - Tempo limite de espera

Caso o aluno não responda a alguma das perguntas da RN02 ou da RN03, a URA deverá desconectá-lo após repetição da mesma pergunta 3x seguidas.

**
