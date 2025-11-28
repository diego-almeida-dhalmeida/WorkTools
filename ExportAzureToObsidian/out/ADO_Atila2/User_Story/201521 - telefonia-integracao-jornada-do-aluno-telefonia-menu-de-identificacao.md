---
id: "WI-201521"
title: "[Telefonia] Integração - Jornada do Aluno Telefonia (Menu de Identificação)"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2022-12-06T13:40:51.67Z"
changed: "2024-11-14T19:38:53.97Z"
---
# WI-201521 - [Telefonia] Integração - Jornada do Aluno Telefonia (Menu de Identificação)

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/201521](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/201521)

## 1. Identificação

- **ID/Ref:** WI-201521
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

**Cenário 01:**

**DADO QUE:**  O aluno ou candidato utilizou o atendimento telefônico

**QUANDO:**   ele informar a matrícula a qual deseja atendimento ou seu número de inscrição

**ENTÃO:  **a URA deverá identificá-lo e mantê-lo na URA caso seja um aluno querendo atendimento para uma matrícula existente ou direcionar para Captação caso seja um candidato.

 

**Cenário 02:**

**DADO QUE:**  Um aluno identificado percorreu a URA e demanda atendimento humano

**QUANDO:**   ele for direcionado para o atendimento humano

**ENTÃO:  **a URA já deverá ter enviado a matrícula (além do cpf e fila adequada) ao CRM de modo que a tela do atendente seja preenchida automaticamente tanto via cpf quanto via matrícula

 

**Cenário 03:**

**DADO QUE:**  Um aluno não identificado percorreu a URA e demanda atendimento humano

**QUANDO:**   ele for direcionado para o atendimento humano

**ENTÃO** :** ** O atendente deverá iniciar o atendimento humano com o processo de identificação do aluno e associação do seu numero de matrícula ao Caso existente

**  
**

**Cenário 04:**

**DADO QUE:** É demandado a um aluno identificação na URA

**QUANDO:**   ele digitar seu número de matrícula, CPF ou telefone celular

**ENTÃO:  **a URA deverá identificar o aluno por meio de integração com o Salesforce.  


  


**Cenário 05:**

**DADO QUE:  **Ocorre uma falha no processo de identificação do aluno na URA

**QUANDO:**   ele digitar seu número de matrícula, CPF ou telefone celular e não for identificado nenhum número correspondente na base de dados do Salesforce

**ENTÃO:  **a URA deverá realizar nova tentativa para identificar o aluno por meio de integração com o Salesforce, até que ocorram 3 tentativas mal sucedidas. Então, o aluno deverá ser direcionado à árvore de serviços de alunos não identificados.


## 9. Descrição (Abaixo vem do Azure DevOps)

**

Eu, como aluno ou candidato

Quando iniciar o atendimento via telefone, e for atendido pela URA referente a minha marca

Então confirmarei na URA a matrícula para qual desejo atendimento, para ser identificado e ter o caso registrado na base de dados no Salesforce

  


Regras de Negócio:

RN01: Possibilidades de Identificação:

Um aluno que demande atendimento na URA, poderá ter sua identificação realizada de cinco maneiras distintas:

  * Aluno é identificado automaticamente na URA pelo seu número de telefone, se seu número de telefone estiver associado a alguma conta no Salesforce;

  * Aluno insere seu número de CPF na URA para ser identificado pelo Salesforce;

  * Aluno insere seu número de Matrícula na URA para ser identificado pelo Salesforce;

  * Aluno não consegue ser identificado na URA, e seguirá atendimento como aluno não identificado;

  * O demandante do atendimento é um candidato, e não um aluno, e é direcionado ao fluxo de captação.




A URA só deverá ser capaz de identificar as matrículas de sua respectiva marca.

  


Ex:

  


URA IDOMED deverá identificar matrículas ativas e inativas da IDOMED. Não deverá identificar matrículas Estácio. Desta forma, não deve ocorrer o registro de um Caso no Salesforce onde ocorra a identificação de uma matrícula fora da URA de sua Marca.

  


RN02:  Integração da URA com Salesforce para identificação dos alunos

 

Para possibilitar a identificação do aluno, a URA deve ser integrada com o Salesforce, permitindo a busca dos dados diretamente do Salesforce, sem utilizar o SIA. 

  


Caso um aluno não seja identificado na busca no Salesforce, deverá ocorrer a integração On-Demand para que o Salesforce busque a matrícula/CPF no SIA e informe à URA para identificação.

  


RN03: Identificação do aluno pelo número de telefone

  


A identificação pelo número de telefone do aluno deverá ser automática.

  


Caso o aluno possua apenas 01 matrícula registrada na marca, o aluno deverá optar pela escolha de atendimento para sua matrícula ou direcionamento ao menu de captação.

  


Caso o aluno possua mais de 01 matrícula registrada na marca, deverá ser fornecido ao aluno a possibilidade de escolha para qual matrícula ele deseja o atendimento, ou se deseja ser direcionado ao menu de captação. 

  


As informações de identificação do aluno e da matrícula devem ser adicionadas ao Caso do Salesforce.

  


Em qualquer cenário, se o aluno optar pelo direcionamento à fila de captação na navegação da URA, não deve haver um caso de Relacionamento no Salesforce.

  


RN04: Identificação do aluno pelo CPF

Caso a URA não consiga associar o número de telefone demandante do atendimento a um aluno da marca da URA, será fornecido ao aluno a possibilidade de se identificar.

  


Caso o aluno opte por se identificar pelo número de CPF, será apresentado na URA um menu para que o aluno escolha para qual matrícula deseja o atendimento, ou se deseja ser direcionado à fila de captação.

  


Caso o aluno selecione uma matrícula para continuidade do atendimento, as informações de identificação do aluno e da matrícula devem ser adicionadas ao Caso do Salesforce. No momento de finalização da navegação (último desfecho e abandono) ou transbordo, o caso deve ser criado no Salesforce com as informações detalhadas na US [#204337](https://arquiteturaestacio.visualstudio.com/Atila%202.0/_workitems/edit/204337/)

  


Em qualquer cenário, se o aluno optar pelo direcionamento à fila de captação na navegação da URA, não deve haver um caso de Relacionamento no Salesforce.

 

RN05: Identificação do aluno pela matrícula  
  


Caso a URA não consiga associar o número de telefone demandante do atendimento a um aluno da marca da URA, será fornecido ao aluno a possibilidade de se identificar.

  


Caso o aluno opte por se identificar pelo número de Matrícula, será apresentado na URA um menu para que o aluno escolha se deseja o atendimento para a matrícula inserida, ou se deseja ser direcionado à fila de captação.

  


Caso o aluno selecione uma matrícula para continuidade do atendimento, as informações de identificação do aluno e da matrícula devem ser adicionadas ao Caso do Salesforce. No momento de finalização da navegação (último desfecho e abandono) ou transbordo, o caso deve ser criado no Salesforce com as informações detalhadas na US [#204337](https://arquiteturaestacio.visualstudio.com/Atila%202.0/_workitems/edit/204337/)

  


Em qualquer cenário, se o aluno optar pelo direcionamento à fila de captação na navegação da URA, não deve haver um caso de Relacionamento no Salesforce.

  


RN06: Atendimento de Aluno não identificado  
  


Caso a URA não consiga associar o número de telefone demandante do atendimento a um aluno da marca da URA, será fornecido ao aluno a possibilidade de se identificar.

  


Caso o aluno opte por se identificar pelo número de Matrícula ou CPF, e após 3 tentativas de identificação a URA não consiga associar os dados fornecidos a nenhuma matrícula em sua base de dados, a URA dará prosseguimento no atendimento com a apresentação do menu de aluno não identificado.

  


No momento de finalização da navegação (último desfecho e abandono) ou transbordo, o caso deve ser criado no Salesforce com as informações detalhadas na US [#204337](https://arquiteturaestacio.visualstudio.com/Atila%202.0/_workitems/edit/204337/) . O caso deverá conter informações da navegação da URA e as mesmas marcações de atendimento a aluno não identificado que um caso aberto pelo Whatsapp possui. 

  


Em qualquer cenário, se o aluno optar pelo direcionamento à fila de captação na navegação da URA, não deve haver um caso de Relacionamento no Salesforce.

 

RN07: Direcionamento de Candidato ao Fluxo de Captação  
  


Caso haja direcionamento de candidato ao fluxo de captação dentro da URA, não deve ser criado nenhum caso em Relacionamento.

**
