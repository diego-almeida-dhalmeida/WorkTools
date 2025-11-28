---
id: "WI-215143"
title: "[Telefonia] CallBack para Casos em Atendimento - Avaya"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2023-02-02T14:46:58.85Z"
changed: "2025-03-07T18:20:50.653Z"
---
# WI-215143 - [Telefonia] CallBack para Casos em Atendimento - Avaya

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/215143](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/215143)

## 1. Identificação

- **ID/Ref:** WI-215143
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

**Cenário 01: Disponibilização da Opção de CallBack**

**Dado que** eu sou atendente humano

**Quando** estiver em atendimento de transbordo e a ligação não for encerrado por mim 

**Então**  preciso que seja disponibilizada a opção de CallBack para concluir o meu atendimento

** **

**Resultado esperado:**

Disponibilizar para o atendente a possibilidade de retornar a ligação, para um atendimento que ocorreu transbordo para humano e não for encerrado pelo atendente;

Caso o atendente opte pela realização do CallBack, ele poderá utilizar o mesmo número da ligação do atendimento que caiu, ou utilizar outro número fornecido pelo aluno durante o atendimento.

 

**Resultados não esperados:**

Não disponibilizar a opção do CallBack e não permitir utilização de outro número para retornar a ligação.

 

  


**Cenário 02:** **RN02 - Criação de Campos na Tela de Caso**

**Dado que** eu sou gestor do atendimento humano

**Quando** houver CallBack durante o atendimento humano

**Então** quero obter informações para analisar a volumetria de atendimentos com CallBack

** **

**Resultado esperado:**

Incluir novas informações não editáveis na tela de caso, conforme campos citados na RN02 desta US. 

 

**Resultados não esperados:**

Não disponibilizar para consulta os novos campos solicitados para a tela do caso.

** **

**  
**

**Cenário 03:** **RN03 - Realização de CallBack**

**Dado que** eu sou atendente humano

**Quando** estiver realizando um CallBack

**Então** quero registrar as informações do CallBack no mesmo caso já aberto anteriormente

** **

**Resultado esperado:**

As informações do atendimento do CallBack devem ser registradas no mesmo caso já aberto, que gerou o CallBack;

Apenas o atendente que for o proprietário do caso poderá realizar o CallBack e dar continuidade do atendimento

 

**Resultados não esperados:**

O processo de CallBack resultar na abertura de um novo caso;

Permitir que outro atendente que não seja o proprietário do caso, realizar o CallBack e dar continuidade ao atendimento.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu** como atendente humano  


**Quando**  estiver realizando um atendimento e a ligação não seja encerrada por mim  


**Quero**  que seja ofertada a possibilidade de retornar a ligação ao aluno para continuar o atendimento  


  


**Regras de Negócio:**

**  
**

**RN01 - Disponibilização da Opção de CallBack**

**  
**

Sempre que um atendimento que tiver ocorrido transbordo não for encerrado pelo atendente humano, deverá ser ofertado ao atendente a possibilidade de retornar a ligação. 

  


Caso o atendente opte pela realização do CallBack, ele poderá ser realizado para o número que o aluno utilizou para abrir o caso ou para algum outro número fornecido pelo aluno durante o atendimento 

  


**RN02 - Criação de Campos na Tela de Caso**

**  
**

Para viabilizar a realização do CallBack e análise da volumetria de atendimentos com CallBack, deverão ser criados novos campos na tela de caso. Os novos campos a serem criados são: 

  


  * **Número de Telefone Utilizado no Contato receptivo pelo aluno (Fornecido pela URA)**
  * **Número de Telefone preferencial para o CallBack (Campo Editável pelo Proprietário do Caso)**
  * **Quantidade de CallBacks ofertados ao atendente (Fornecido pela Avaya)**
  * **Quantidade de CallBacks realizados (Fornecido pela Avaya)**
  * **Quantidade de CallBacks bem sucedidos (Fornecido pela Avaya)**



A informação para preenchimento dos campos não editáveis deverá ser fornecida por meio de integração com a URA e Avaya.  
  
**RN03 - Realização de CallBack**

**  
**

Para um atendimento humano em que tenha ocorrido a realização de um CallBack, deverá ser possibilitado ao atendente humano registrar as informações no mesmo caso já aberto anteriormente. 

  


O processo de CallBack não deverá resultar na abertura de um novo caso. 

  


Apenas o atendente humano que for o proprietário do caso poderá realizar o CallBack e gerar continuidade do atendimento. 

****
