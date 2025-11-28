---
id: "WI-201519"
title: "[Telefonia] Transbordo ao ATH (URA)"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2022-12-06T13:39:57.153Z"
changed: "2025-03-07T18:22:41.983Z"
---
# WI-201519 - [Telefonia] Transbordo ao ATH (URA)

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/201519](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/201519)

## 1. Identificação

- **ID/Ref:** WI-201519
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

- 


## 9. Descrição (Abaixo vem do Azure DevOps)

****

Eu, como aluno

Quando iniciar o atendimento via Voz pela URA referente a minha marca após ser reconhecido pela minha matrícula ou como aluno não identificado 

Então deverei ser enviado ao Atendimento Humano quando solicitar esta demanda ou ocorrer direcionamento pela árvore da URA em casos de erro

  


Regras de Negócio:

 

RN01: Solicitação de Transbordo pelo Aluno Dentro da Janela de Operação

  


Após navegação pela árvore da URA, quando um aluno atingir um desfecho, poderá ser apresentado ao aluno a opção para falar com um Atendente Humano.

  


Neste momento, caso haja seleção da opção de transbordo pelo aluno, deverá ocorrer uma integração com o Salesforce para garantir que a tela de Caso do Salesforce possua todo o registro da navegação do aluno na URA para consulta pelo atendente humano.

  


As seguintes informações deverão ser atualizadas na tela de Caso do Salesforce quando um aluno solicitar transbordo:

  * Campo de "Transbordou para Humano" \- Atualizado para "Sim";

  * Atualização do Campo de "Proprietário do Caso";

  * Atualização do campo de "Último Desfecho" na Tela de atendimento, com a indicação do desfecho obtido pelo aluno;

  * Criação de Flag na tela de caso para indicação que o transbordo foi solicitado pelo aluno.

    * A Flag deverá ser marcada caso o aluno tenha passado por algum desfecho;

    * A Flag não deverá ser marcada caso o aluno tenha transbordado em decorrência de algum erro na URA ou tenha sua matrícula cancelada;

  * Não marcação do campo de "Transbordo Fora do Horário" na Tela de Atendimento

    * A Flag não deverá ser marcada caso o aluno tenha solicitado transbordo dentro do horário de atendimento da fila;

  * Registro do tempo de fechamento do atendimento na URA;

  * Registro do tempo de início do transbordo;

  * Registro do tempo de finalização do transbordo;

  * Cálculo do tempo de espera na fila de espera (Tempo de finalização do transbordo - Tempo de Início do transbordo)

  * Registro da fila de atendimento para qual o aluno foi direcionado;

  * Atualização do Campo "Assunto" na Tela de Caso.

    * Utilizar tabela em anexo para De-Para de desfechos e serviços. Esta tabela deverá complementar a tabela fornecida na US [#262312](https://arquiteturaestacio.visualstudio.com/Atila%202.0/_workitems/edit/262312/)




Além disso, deverá ocorrer uma integração da URA com o respectivo discador, para encaminhamento do caso para atendimento da EPS.

  


RN02: Solicitação de Transbordo pelo Aluno Fora da Janela de Operação

  


Após navegação pela árvore da URA, quando um aluno atingir um desfecho, poderá ser apresentado ao aluno a opção para falar com um Atendente Humano.

  


Neste momento, caso haja seleção da opção de transbordo pelo aluno, deverá ocorrer uma integração com o Salesforce para registrar a vontade do aluno de entrar em contato com um Atendente Humano, porém, pela solicitação ser realizada fora da janela de operação, o aluno não será capaz de falar com um atendente humano. Ele será informado da situação pela gravação da URA e seu caso deverá ser encerrado.

  


As seguintes informações deverão ser atualizadas na tela de Caso do Salesforce quando um aluno solicitar transbordo:

  * Atualização do campo de "Último Desfecho" na Tela de atendimento, com a indicação do desfecho obtido pelo aluno;

  * Criação de Flag na tela de caso para indicação que o transbordo foi solicitado pelo aluno.

    * A Flag deverá ser marcada caso o aluno tenha passado por algum desfecho;

    * A Flag não deverá ser marcada caso o aluno tenha transbordado em decorrência de algum erro na URA ou tenha sua matrícula cancelada;

  * Marcação do campo de "Transbordo Fora do Horário" na Tela de Atendimento;

    * A Flag deverá ser marcada caso o aluno tenha solicitado transbordo fora do horário de atendimento da fila;

  * Registro do tempo de fechamento do atendimento na URA = Registro do tempo de fechamento do Caso;

  * Realização dos cálculo dos tempos de atendimento;

  * Atualização do Campo "Assunto" na Tela de Caso;

    * Utilizar tabela em anexo para DePara de desfechos e serviços

  * Alteração do Status do Caso para "Fechado".




RN03: Ocorrência de Transbordo automático do Aluno, dentro da Janela de Operação

  


Durante a navegação do aluno na URA, ou em cenário de erro, poderá ocorrer seu direcionamento automático para o atendimento humano.

  


Neste momento, deverá ocorrer uma integração com o Salesforce para registrar a ocorrência de transbordo e a atualização da tela de caso. 

  


As seguintes informações deverão ser atualizadas na tela de Caso do Salesforce quando um aluno solicitar transbordo:

  * Campo de "Transbordou para Humano" \- Atualizado para "Sim";

  * Atualização do Campo de "Proprietário do Caso";

  * Atualização do campo de "Último Desfecho" na Tela de atendimento, com a indicação do desfecho obtido pelo aluno. Caso o aluno não tenha obtido desfecho, o campo deverá ficar marcado com “Erro na URA”. Esta marcação também deve ser aplicável à tela de atendimento de Voz;

  * Criação de Flag na tela de caso para indicação que o transbordo foi solicitado pelo aluno.

    * A Flag deverá ser marcada caso o aluno tenha passado por algum desfecho;

    * A Flag não deverá ser marcada caso o aluno tenha transbordado em decorrência de algum erro na URA ou tenha sua matrícula cancelada;

  * Não marcação do campo de "Transbordo Fora do Horário" na Tela de Atendimento

    * A Flag não deverá ser marcada caso o aluno tenha solicitado transbordo dentro do horário de atendimento da fila;

  * Registro do tempo de fechamento do atendimento na URA;

  * Registro do tempo de início do transbordo;

  * Registro do tempo de finalização do transbordo;

  * Cálculo do tempo de espera na fila de espera (Tempo de finalização do transbordo - Tempo de Início do transbordo)

  * Registro da fila de atendimento para qual o aluno foi direcionado;

  * Atualização do Campo "Assunto" na Tela de Caso.

    * Utilizar tabela em anexo para DePara de desfechos e serviços




RN04: Ocorrência de Transbordo automático do Aluno, fora da Janela de Operação

  


Durante a navegação do aluno na URA, ou em cenários de erro, poderá ocorrer uma tentativa de direcionamento automático para o atendimento humano.

  


Neste momento, deverá ocorrer uma integração com o Salesforce para registrar a ocorrência, e a atualização da tela de caso.

  


As seguintes informações deverão ser atualizadas na tela de Caso do Salesforce quando um aluno solicitar transbordo:

  * Atualização do campo de "Último Desfecho" na Tela de atendimento, com a indicação do desfecho obtido pelo aluno. Caso o aluno não tenha obtido desfecho o campo deverá ficar marcado com “Erro na URA”;

  * Criação de Flag na tela de caso para indicação que o transbordo foi solicitado pelo aluno.

    * A Flag deverá ser marcada caso o aluno tenha passado por algum desfecho;

    * A Flag não deverá ser marcada caso o aluno tenha transbordado em decorrência de algum erro na URA ou tenha sua matrícula cancelada;

  * Marcação do campo de "Transbordo Fora do Horário" na Tela de Atendimento;

    * A Flag deverá ser marcada caso o aluno tenha solicitado transbordo fora do horário de atendimento da fila;

  * Registro do tempo de fechamento do atendimento na URA = Registro do tempo de fechamento do Caso;

  * Atualização do Campo "Assunto" na Tela de Caso;

    * Utilizar tabela em anexo para DePara de desfechos e serviços

  * Alteração do Status do Caso para "Fechado".




RN05: Transbordo de Aluno com Matrícula Cancelada dentro do horário de operação

  


Para um aluno que possua o status da matrícula igual a "Cancelado/Cancelada", após o aluno passar pelo menu de identificação e confirmar o seu número de matrícula, ao mesmo será ofertado automaticamente a opção de transbordo.

  


As seguintes informações deverão ser atualizadas na tela de Caso do Salesforce quando um aluno solicitar transbordo:

  * Campo de "Transbordou para Humano" \- Atualizado para "Sim";

  * Atualização do Campo de "Proprietário do Caso";

  * Campo de "Último Desfecho" mantido em branco;

  * Criação de Flag na tela de caso para indicação que o transbordo foi solicitado pelo aluno.

    * A Flag deverá ser marcada caso o aluno tenha passado por algum desfecho;

    * A Flag não deverá ser marcada caso o aluno tenha transbordado em decorrência de algum erro na URA ou tenha sua matrícula cancelada;

  * Não marcação do campo de "Transbordo Fora do Horário" na Tela de Atendimento

    * A Flag não deverá ser marcada caso o aluno tenha solicitado transbordo dentro do horário de atendimento da fila;

  * Registro do tempo de fechamento do atendimento na URA;

  * Registro do tempo de início do transbordo;

  * Registro do tempo de finalização do transbordo;

  * Cálculo do tempo de espera na fila de espera (Tempo de finalização do transbordo - Tempo de Início do transbordo)

  * Registro da fila de atendimento para qual o aluno foi direcionado;

  * Campo "Assunto" na Tela de Caso mantido em branco.




  


RN06: Transbordo de Aluno com Matrícula Cancelada fora do horário de operação

  
Para um aluno que possua o status da matrícula igual a "Cancelado/Cancelada", após o aluno passar pelo menu de identificação e confirmar o seu número de matrícula, ao mesmo será ofertado automaticamente a opção de transbordo.  


  


Neste momento, deverá ocorrer uma integração com o Salesforce para registrar a ocorrência, e a atualização da tela de caso.

  


As seguintes informações deverão ser atualizadas na tela de Caso do Salesforce quando um aluno solicitar transbordo:

  * Campo de "Último Desfecho" mantido em branco;

  * Criação de Flag na tela de caso para indicação que o transbordo foi solicitado pelo aluno.

    * A Flag deverá ser marcada caso o aluno tenha passado por algum desfecho;

    * A Flag não deverá ser marcada caso o aluno tenha transbordado em decorrência de algum erro na URA ou tenha sua matrícula cancelada;

  * Marcação do campo de "Transbordo Fora do Horário" na Tela de Atendimento;

    * A Flag deverá ser marcada caso o aluno tenha solicitado transbordo fora do horário de atendimento da fila;

  * Registro do tempo de fechamento do atendimento na URA = Registro do tempo de fechamento do Caso;

  * Campo "Assunto" na Tela de Caso mantido em branco.
  * Alteração do Status do Caso para "Fechado". 

  


  


RN07: Transferência de atendimento

  


Após o atendimento ser direcionado a um operador, ele deverá ter a capacidade de realizar a transferência da chamada para algum outro operador.

  


Um atendente poderá transferir a ligação para outro atendente, um supervisor ou um gestor

  
Um supervisor poderá transferir a ligação para um atendente, outro supervisor ou um gestor

  


Um gestor poderá transferir a ligação para um atendente, um supervisor ou outro gestor. 

  


Após a ocorrência de uma transferência de atendimento, deverá ocorrer uma integração do Salesforce com o Avaya para contabilizar na tela de caso a inclusão de 1 (um) no campo de "Quantidade de Transferências", realizar a alteração do proprietário do Caso e atualizar a fila de atendimento do Caso.  
  
Uma vez que um operador efetive a transferência de atendimento, deverá ocorrer o fechamento automático do caso em sua tela de atendimento, e abertura do caso na tela do operador que recebeu a transferência. A tabulação para encerramento do atendimento deverá ser realizada apenas pelo último operador que atenderá o Caso.

  


RN08: Limitação de visibilidade para transferência de atendimento

  


No momento que um operador demandar a transferência de um atendimento, ele deverá selecionar para qual fila de atendimento ele deseja enviar a chamada.

  


O operador poderá selecionar um atendente específico para direcionamento da chamada, ou selecionar para que a chamada seja enviada para algum atendente disponível na fila.

  


O operador deverá conseguir realizar a transferência de atendimento para qualquer fila da marca do aluno. Ele não deverá conseguir visualizar filas de atendimento de outras marcas no momento que demandar a transferência.
