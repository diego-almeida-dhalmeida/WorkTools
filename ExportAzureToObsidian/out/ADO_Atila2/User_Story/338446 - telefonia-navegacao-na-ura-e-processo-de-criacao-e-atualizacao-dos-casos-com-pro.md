---
id: "WI-338446"
title: "[Telefonia] Navegação na URA e processo de criação e atualização dos casos (Com processo de identificação do aluno na URA)"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2024-01-22T21:36:35.287Z"
changed: "2025-03-07T18:21:06.253Z"
---
# WI-338446 - [Telefonia] Navegação na URA e processo de criação e atualização dos casos (Com processo de identificação do aluno na URA)

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/338446](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/338446)

## 1. Identificação

- **ID/Ref:** WI-338446
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

**Cenário 01: Processo de identificação na URA**

**Dado que**  eu sou aluno ou tenha oportunidade/lead registrada em uma das marcas YDUQS

**Quando**  fizer uma ligação na URA

**Então**  quero ser identificado como aluno ou oportunidade/lead

** **

**Resultado  esperado****:**

1) Ao iniciar a navegação na URA, a pessoa pode ser identificada como um aluno ou através de uma oportunidade ou lead;

2) Essa identificação deve ocorrer da seguinte maneira (priorizando o aluno):

  * Identificação como aluno: através do telefone, CPF ou matrícula;
  * Identificação como possível aluno: através do telefone, CPF ou oportunidade/lead.

3) Apresentar as opções após identificação da seguinte forma (identificação por telefone, CPF, oportunidade/lead - priorizando o aluno):  


  * Identificação por aluno: apresentar as 3 últimas matrículas, priorizando as ativas;
  * Identificação por oportunidade: apresentar prioritariamente a última oportunidade, e na sequência as 2 próximas oportunidades(penúltima e antepenúltima) sem restrição de tempo;
  * Identificação por lead: apresentar os 3 últimos leads, dentro dos últimos 6 meses e que estejam com as informações que serão verbalizadas na URA preenchidas.  
 



**Resultados não esperados:**

Ao iniciar a navegação na URA, havendo informações suficientes para identificar a pessoa como aluno ou oportunidade/lead, e seguir no processo sem identificação.

 

** **

**Cenário 02: Integração URA x SIA x Salesforce para a identificação da pessoa**

**Dado que**  o aluno ou pessoa com oportunidade/lead registrada em uma das marcas YDUQS

**Quando**  fizer uma ligação na URA

**Então**  terá sua identificação correta através da integração dos sistemas para seguir o fluxo definido para o seu atendimento

** **

**Resultado  esperado****:**

Obter uma boa integração com as informações necessárias entre a URA, SIA e Salesforce, para o atendimento seguir dentro da árvore de serviço definida para alunos, oportunidades e leads, seguindo as regras definidas na RN02 desta US.

** **

**Resultados não esperados:**

Havendo informações suficientes nos sistemas, não identificar a pessoa como aluno ou oportunidade/lead através da integração.

** **

** **

**Cenário 03:  Abertura de caso no Salesforce para pessoa identificada**

**Dado que**  eu sou aluno ou pessoa com oportunidade/lead registrada em uma das marcas YDUQS

**Quando**  fizer uma ligação na URA e for identificada

**Então**  quero ter um caso aberto para meu atendimento atrelado a minha identificação

** **

**Resultado  esperado****:**

1) Os casos devem ser abertos mediante a identificação da pessoa, da seguinte forma:

  * Identificado como oportunidade: caso aberto como Captação-Voz atrelado a oportunidade identificada;
  * Identificado como lead: caso aberto como Captação-Voz atrelado ao lead identificado;
  * Identificado como aluno: caso aberto com tipo de registro Atendimento-Aluno (origem como SAC-Voz), atrelado a matrícula identificada.



  


2) Fazer o registro do caso com as informações definidas na RN03 desta US.  
** **  


**Resultados não esperados:**

Havendo identificado a pessoa como aluno ou oportunidade/lead, registrar o caso como pessoa “NÃO identificada”.

** **

** **

**Cenário 04: Abertura de caso para pessoa não identificada pela URA**

**Dado que**  uma pessoa NÃO identificada pelas marcas YDUQS

**Quando**  fizer uma ligação na URA

**Então**  terá um caso aberto para seu atendimento como lead ou aluno NÃO identificado

** **

**Resultado  esperado****:**

1) A URA deve perguntar a pessoa que não foi identificada se ela é aluno ou não;

  * Caso a pessoa se identifique como ‘aluno’, o caso deve ser criado com o tipo de registro “Atendimento-Aluno” (origem como SAC-Voz) e o caso registrado como 'aluno não identificado';
  * Caso a pessoa NÃO se identifique como ‘aluno’, será criado um lead para essa pessoa e aberto um caso com tipo de registro e origem específico para Captação. 

  
2) Fazer o registro do caso com as informações definidas na RN04 desta US.  
   


**Resultados não esperados:**

Não identificando a pessoa como aluno ou oportunidade/lead, registrar o caso como pessoa “identificada”.

** **

** **

**Cenário 05: Atualização do caso quando abandonado na URA**

**Dado que**  um atendimento na URA

**Quando**  for abandonado antes de um desfecho/endpoint na URA

**Então**  o atendimento deve ser atualizado como abandonado no Salesforce

** **

**Resultado  esperado****:**

1) O Salesforce deve receber da URA a informação se o caso foi abandonado ou não;

2) O atendimento deve ser finalizado como abandonado, com a informação do momento do abandono no Salesforce, como definido na RN05 desta US;

3) As informações de script points, mensagem emergencial e chute devem ser registrados na jornada na URA.

 

**Resultados não esperados:**

Não registra como abandono quando o atendimento for abandonado antes de um desfecho/endpoint na URA.

** **

** **

**Cenário 06: Atualização do caso quando retido na URA (passou por um desfecho e  ****não houve transbordo)**

**Dado que**  um atendimento na URA

**Quando**  passar por um desfecho e não houver transbordo

**Então**  o caso deve ser atualizado com as informações necessárias

** **

**Resultado  esperado****:**

1) Para o caso retido na URA, deve haver a atualização do caso no final da navegação;

2) O caso deve ser atualizado com as informações conforme definido na RN06 desta US;

3) As informações de script points, mensagem emergencial e chute devem ser registrados na jornada na URA.

 

**Resultados não esperados:**

Não fazer atualização dos casos retidos na URA.

** **

**  
**

**Cenário 07: Alteração do caso que não foi retido na URA**

**Dado que**  durante o atendimento

**Quando**  o caso não for retido na URA

**Então**  a URA deve enviar para o Salesforce qual endpoint é relacionado a qual tipo de registro e serviço

** **

**Resultado  esperado****:**

1) Para o caso que não ficou retido na URA, deve ser identificado se o endpoint é relacionado ao tipo de registro SAC, Retenção ou Captação;

2) Caso o endpoint seja de Retenção ou Captação, deve haver a atualização do tipo de registro e origem, conforme definido na RN07 desta US;

3) As informações de script points, mensagem emergencial e chute devem ser registrados na jornada na URA.

 

**Resultados não esperados:**

Não fazer a alteração do caso que não foi retido na URA.


## 9. Descrição (Abaixo vem do Azure DevOps)

Eu como aluno e oportunidade/lead das marcas da Yduqs

Quando houver uma ligação na URA

Quero ter meu atendimento registrado no Salesforce com as informações corretas do tipo de registro e origem.

****

**RN01: Processo de identificação na URA:**

** Ao iniciar a navegação na URA, a pessoa pode ser identificada como uma oportunidade, um lead ou um aluno de 4 maneiras diferentes, semelhante ao modo descrito na US 201521:**

  1. **ANI**

  2. **CPF**

  3. **Matrícula**

     1. **Identificado como aluno**

  4. **Oportunidade**

     1. **Identificado como oportunidade**


  


O processo deve seguir como descrito no fluxo anexado.

<https://miro.com/app/board/uXjVPhcaXMY=/>** **(fluxo está sinalizado)  


  


Para completar o processo de identificação, a URA deve conseguir identificar matrículas, oportunidades e leads da pessoa. Essa identificação, descrita na RN02, deve ser possível caso o aluno se identifique com seu número de telefone, CPF, matrícula ou oportunidade (número de inscrição).

****

**RN02: Integração URA x SIA x Salesforce para a identificação da pessoa**

**É crucial a integração entre os sistemas para a identificação da pessoa. Para a identificação de matrículas do aluno, a necessidade foi definida na US 201521. A URA deve receber as informações de identificação e persona do aluno para direcionar o aluno para o fluxo correto. O Salesforce necessita da matrícula do aluno que foi escolhida para a abertura do caso e para o envio da persona de volta para a URA.**

**Além disso, as oportunidades e os leads existentes daquela marca precisam ser identificados pela URA caso a pessoa se identifique pelo número da oportunidade, ANI ou CPF. Deve haver uma integração da URA com o Salesforce para buscar as informações do candidato para a sua identificação na URA. Caso o aluno selecione uma oportunidade ou um lead na hora da identificação, essa informação deve ser enviada de volta para o Salesforce na hora da abertura do caso. As seguintes informações são necessárias:**

  * **Inscrição/oportunidade : a URA deverá passar para o aluno o número da inscrição**

  * **Lead : a URA deverá comunicar a instituição que o aluno tem um lead**




**Esse processo de identificação segue o fluxo do link abaixo.**

**<https://miro.com/app/board/uXjVPhcaXMY=/> **  
  


RN03: Abertura de caso no Salesforce para pessoa identificada

  


Caso o indivíduo seja identificado como uma oportunidade e deseja falar sobre isso, um caso deve ser aberto nesse momento como Captação-Voz e atrelado a essa oportunidade.

  


Caso o indivíduo seja identificado como um lead e deseja falar sobre isso, um caso deve ser aberto nesse momento como Captação-Voz e atrelado a esse lead.

  


Caso o indivíduo seja identificado como um aluno, um caso deve ser aberto nesse momento como o tipo de registro “Atendimento-Aluno” e a origem como “SAC-Voz” e atrelado a essa matrícula. Todos os casos de aluno identificado nesse momento devem ser abertos dessa mesma maneira. 

  


As informações do caso que devem ser registradas nesse momento são as seguintes:

  


  * Hora de abertura do caso

  * Origem do caso

  * Informações do aluno

  * Informações da matrícula


  


É importante ressaltar que o Salesforce deve, no momento de identificação, mandar as informações de persona para a URA. 

  


RN04: Abertura de caso para pessoa não identificada pela URA

  


O processo deve seguir como descrito no fluxo anexado.

<https://miro.com/app/board/uXjVPhcaXMY=/> (fluxo está sinalizado)  


  


Caso a URA não consiga identificar o indivíduo no menu de identificação detalhado na RN01, a URA irá perguntar para o indivíduo se ele é aluno ou não. 

  


Se a pessoa se identificar como aluno, o caso deve ser criado nesse momento como o tipo de registro “Atendimento-Aluno” com origem “SAC-Voz”. O caso será para um aluno não identificado. 

  


Se a pessoa não se identificar como aluno, devemos criar um lead para essa pessoa e criar um caso no Salesforce como o tipo de registro e origem escolhidos para Captação. 

  


As informações do caso que devem ser registradas nesse momento são as seguintes:

  


  * Hora de abertura do caso

  * Origem do caso

  * Registrar que é um aluno não identificado


  


RN05: Atualização do caso quando abandonado na URA

Se um atendimento for abandonado antes de um desfecho/endpoint na URA, ele deve ser atualizado como abandonado e com a informação do momento do abandono no Salesforce, como descrito na US [#232953](https://dev.azure.com/ArquiteturaEstacio/Atila%202.0/_workitems/edit/232953/). O Salesforce receberá da URA a informação se o caso foi abandonado ou não. Além disso, as informações de script points, mensagem emergencial e chute devem ser registrados na jornada na URA

  


RN06: Atualização do caso quando retido na URA (passou por um desfecho e não houve transbordo)

  


O processo deve seguir como descrito no fluxo anexado.

**

<https://miro.com/app/board/uXjVPhcaXMY=/> (fluxo está sinalizado)  


**  


Se o caso foi retido na URA, deve haver a atualização do caso criado no Salesforce no final da navegação. O caso deve ser atualizado com as informações necessárias, como descrito nas USs [#232953](https://dev.azure.com/ArquiteturaEstacio/Atila%202.0/_workitems/edit/232953/) e [#204337](https://dev.azure.com/ArquiteturaEstacio/Atila%202.0/_workitems/edit/204337/). 

  


Além disso, as informações de script points, mensagem emergencial e chute devem ser registrados na jornada na URA

  


RN07: Alteração do caso que não foi retido na URA

  


O processo deve seguir como descrito no fluxo anexado.

**

<https://miro.com/app/board/uXjVPhcaXMY=/> (fluxo está sinalizado)  


**  


Se um atendimento não for retido na URA, deve ser identificado se o endpoint é relacionado ao tipo de registro SAC, Retenção ou Captação, lembrando que todos os casos de aluno foram criados como SAC-Voz. A URA irá enviar para o Salesforce a informação de qual endpoint é relacionado a qual tipo de registro e serviço.

  


Caso o endpoint seja de Retenção ou Captação, deve haver a atualização do tipo de registro e origem, trocando para o correspondente:

  * Retenção: Tipo de registro e origem são “Atendimento-Retenção” 

  * Captação: Tipo de registro e origem são os escolhidos pela área de Captação para Voz. 


  


As informações da navegação devem estar preenchidas com o tipo de registro e origem alterados e corretos. Além disso, as informações de script points, mensagem emergencial e chute devem ser registrados na jornada na URA.
