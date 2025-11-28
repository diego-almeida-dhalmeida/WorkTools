---
id: "WI-338443"
title: "[Telefonia] Retenção - Tela de Atendimento Humano"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Ricardo Da Silva Santos"
created: "2024-01-22T21:31:12.123Z"
changed: "2025-06-03T20:49:17.13Z"
---
# WI-338443 - [Telefonia] Retenção - Tela de Atendimento Humano

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/338443](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/338443)

## 1. Identificação

- **ID/Ref:** WI-338443
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

**  
**

**Cenário 01: Tipo de registro: Retenção – Voz**  


**Dado que** eu sou atendente do Call Center de Retenção Voz 

**Quando** receber um atendimento de retenção 

**Então** deverá existir um tipo de registro diferente, específico para retenção com possibilidade de adicionar na tela de atendimento para o caso 

** **

**Resultado esperado:**

Disponibilizar os campos sinalizados para este tipo de registro, adicionando os motivos de retenção 1 e 2, campo para registrar o caso pai e Flag de transferência indevida no modal de encerramento (conforme campos indicados na RN02 desta US); 

Os perfis dos atendentes devem conseguir visualizar todos os tipos de registro de voz (SAC visualizar retenção e captação e vice-versa) 

  


**Resultados não esperados:**

Não disponibilizar os campos para registro do atendimento da Retenção-Voz e não permitir que os atendentes consigam visualizar todos os tipos de registro de voz. 

** **  


**  
**

**Cenário 02: Origem dos casos**

**Dado que** eu quando surgirem atendimentos de retenção 

**Quando** os casos forem registrados para retenção 

**Então** devem ter sua origem registrada corretamente, como ‘Retenção-Voz’, ‘SAC-Voz’ e Captação com o tipo de registro estabelecido para Voz 

** **

**Resultado esperado:**

Para ‘SAC-Voz’ devem ser criados como descritos na estória 204337 e os casos de ‘Retenção-Voz’ criados como definido na RN01 desta US 

 

**Resultados não esperados:**

Não registrar a origem dos casos corretamente.

** **

**  
**

**Cenário 03: Visualização de todos os tipo de registro de voz**

**Dado que** eu sou atendente do Call Center de Retenção Voz 

**Quando** estiver em atendimento 

**Então** preciso ter acesso a todos os tipos de registro com a origem do canal de Voz durante meu atendimento, para obter informações da transferência 

** **

**Resultado esperado:**

Ter acesso a todos os tipos de registro com a origem do canal de Voz durante o atendimento 

 

**Resultados não esperados:**

Não visualizar todos os tipos de registro com a origem do canal de Voz durante o atendimento

** **

**  
**

**Cenário 04: Tela de atendimento: Retenção – Voz**

**Dado que** eu sou atendente do Call Center de Retenção Voz 

**Quando** estiver em atendimento 

**Então** quero ter na tela de atendimento, as informações listadas na US-201673 e alguns novos campos citados na RN04 desta US 

** **

**Resultado esperado:**

Disponibilizar na tela dos atendentes de retenção receptiva, as informações listadas na US-201673 e os novos campos citados na RN04 desta US 

 

**Resultados não esperados:**

Não disponibilizar as informações listadas na US-201673 e os novos campos citados na RN04 desta US, na tela dos atendentes de retenção receptiva.

** **

**  
**

**Cenário 05: Classificação de Retenção**

**Dado que** para classificação de Retenção 

**Quando** realizar a classificação da Retenção 

**Então** disponibilizar na tela de encerramento, a possibilidade de classificar a retenção de acordo com os motivos disponíveis

** **

**Resultado esperado:**

A classificação de motivos de retenção deve ficar no modal de encerramento e ter dois níveis (com preenchimento obrigatório); 

A classificação segue independente da tabulação de motivos de atendimento e será igual para todos os atendentes de retenção (sem divisão por persona); 

Será possível realizar manutenção nos motivos de retenção pelo perfil de administrador (alterar/ incluir/ excluir) conforme exemplo indicado na RN05 desta US 

 

**Resultados não esperados:**

Não disponibilizar tela para classificação de retenção nem respeitar as regras indicadas no resultado esperado.

** **

**  
**

**Cenário 06: Caso pai na tela de atendimento**

**Dado que** eu sou atendente do Call Center de Retenção Voz 

**Quando** estiver em atendimento 

**Então** quero ter indicação do caso pai, e saber que veio de uma transferência 

** **

**Resultado esperado:**

Disponibilizar um objeto com a indicação do caso pai relacionado ao caso em atendimento, e a indicação que veio de uma transferência 

 

**Resultados não esperados:**

Não disponibilizar o objeto com as informações solicitadas.

** **

**  
**

**Cenário 07: Botão de transferência indevida - Modal de Encerramento**

**Dado que** eu sou atendente do Call Center de Retenção Voz 

**Quando** encerrar uma transferência indevida 

**Então** quero registrar na tela que se trata de uma transferência indevida, sem obrigatoriedade de preencher motivos de retenção 

** **

**Resultado esperado:**

Disponibilizar uma marcação em tela para o atendente sinalizar que o caso se trata de uma transferência indevida; 

Caso o atendente sinalize em tela que ocorreu uma transferência indevida, não será obrigatório preencher os motivos de retenção; 

Do contrário, caso o atendente não sinalize que ocorreu uma transferência indevida, será obrigatório o preenchimento dos motivos de retenção 

 

**Resultados não esperados:**

Não disponibilizar o sinalizador de transferência indevida, e não respeitar as regras indicadas no resultado esperado.

** **

**  
**

**Cenário 08: Envio do e-mail**

**Dado que** eu sou gestor do Call Center de Retenção Voz 

**Quando** for necessário o atendente ter o envio do email ativo 

**Então** quero definir quais grupos devem ter ou não essa possibilidade 

** **

**Resultado esperado:**

Disponibilizar um filtro para o gestor indicar quais grupos devem ter ou não essa possibilidade de ter o envio do e-mail ativo (para Retenção e não para SAC e vice-versa) 

Deve ser possível habilitar o campo para o atendente compor sua própria mensagem para grupos públicos diferentes (permitindo habilitar para um e outro não – Retenção-Voz / SAC-Voz). 

 

**Resultados não esperados:**

Não tornar operacional esses processos de liberação / não liberação do envio de e-mail.

** **

** **

**Cenário 09: Atendentes de retenção devem conseguir ver base de conhecimento de SAC-Voz**

**Dado que** eu sou atendentes de Retenção 

**Quando** estiver em atendimento 

**Então** quero ter acesso a base de conhecimento de SAC-Voz 

** **

**Resultado esperado:**

Disponibilizar a base de conhecimento de SAC-Voz para o atendente de Retenção (caso receba indevidamente atendimento de SAC) para seguir com o atendimento, utilizando as informações da base de conhecimento de SAC-Voz.

 

**Resultados não esperados:**

Não liberar para o atendente de Retenção acesso a base de conhecimento de SAC-Voz.


## 9. Descrição (Abaixo vem do Azure DevOps)

Eu como atendente do Call Center de retenção VOZ  
Quando houver um atendimento de retenção   
Quero ter meu atendimento registrado no Salesforce e ter campos específicos para a retenção do aluno na tela. 

RN01: Tipo de registro: Retenção - Voz

Deve existir um tipo de registro diferente (Atendimento - Retenção) para ser possível adicionar campos no caso e na tela de Atendimento - Retenção que não aparecem nos casos e na tela de SAC-Voz. Os campos deste registro devem ser iguais aos listados na estória 204337 adicionando:

  * Motivo de Retenção 1

  * Motivo de Retenção 2

  * Campo para registrar caso pai

    * Utilizado caso há uma transferência no atendimento

  * Flag de transferência indevida no modal de encerramento

  


Os tipos de perfis que devem conseguir acessar o tipo de registro são os mesmos que devem conseguir acessar o Sac-Voz. Os atendentes devem conseguir visualizar todos os tipos de registro de voz. O atendente de SAC pode visualizar retenção e captação e vice-versa. 

  


RN02: Origem dos casos

Os casos que forem para retenção devem ter a origem registrada como “Retenção - Voz”. Os casos que forem para SAC devem ficar como “SAC - Voz” e os que forem para captação como o tipo de registro estabelecido para Voz.

  


Os casos de SAC-VOZ devem ser criados como descritos na estória #204337. Os casos de Retenção-Voz devem ser criados de acordo com a RN01 acima. 

  


RN03: Visualização de todos os tipo de registro de voz

Todos os atendentes de voz devem conseguir ver todos os tipos de registro com a origem do canal de Voz. Assim, o atendente consegue ver informações da transferência durante o atendimento se necessário, acessando os casos pai.

  


RN04: Tela de atendimento: Retenção - Voz

A tela de atendimento dos atendentes/filas de retenção devem ter as informações listadas na estória #201673 e algumas adições. Deve ser possível adicionar campos/funcionalidades somente na tela dos atendentes de retenção receptiva. A seguinte funcionalidade deve estar presente na tela do atendente de retenção:

**

  * Uma classificação para os motivos de retenção

    * Detalhada na RN05

  * Flag de transferência indevida no modal de encerramento

    * Detalhada na RN07

  * Caso pai  (também em SAC)


**


  


A tabulação dos motivos de atendimento de retenção deve seguir o formato AS IS do WhatsApp/CHAT/SAC-Voz e ser preenchida com a relação tabulação x fila anexada. 

  


Anexado está um exemplo da tela de atendimento de retenção. 

**  
**

**Caso ocorra essa transferência para um tipo de registro diferente, a tela do atendente deve mudar a tela correspondente.**  


**  
**

RN05: Classificação de Retenção

A classificação de motivos de retenção deve ficar no modal de encerramento e ter dois níveis. Essa classificação deve ser independente da tabulação de motivos de atendimento. Além disso, deve ser possível editar, adicionar e excluir novos motivos de retenção pelo perfil de administrador. Não será necessário uma divisão por persona, pois será igual para todos os atendentes de retenção. Segue o exemplo abaixo:

  


![](https://lh7-us.googleusercontent.com/X7lK8q3dw2jsi4f9bNioFbYrYvuAJLt7UmFH8vIU2YnxLIIYAiW__J_spkW_3NwN1r4CqK3IYtG_SPfiS5cyjvBtJwDI1dSBcKlbhw0NeY9wCeCKtdDeoEaoiuIObXIE02GfIy-tE_WqKngjFeq9oRo)

  


RN06: Caso pai na tela de atendimento

Na tela do atendente, deve ter um objeto que mostra o caso pai relacionado a esse caso. Além disso, deve ficar claro para o atendente que o caso veio de uma transferência.

  


RN07: Botão de transferência indevida - Modal de Encerramento

Caso ocorra uma transferência indevida, o atendente deve conseguir marcar que esse atendimento foi uma transferência indevida. Caso ele selecione que foi uma transferência indevida, o atendente não deve preencher os motivos de retenção.

![](https://lh7-us.googleusercontent.com/ZjZGMjfsbEVfD7fSW7nRVtgvXpMLF76AZO9J1NYTqSJQs5tDpIZimsxDa9qv8RrZ_K4uWToLpXCj0EYOksoNDwPbRp8w-a30UWFzLcwpcPnGarjajMbXHz6Z6A7uA4EuXHAQlDeNW0sVFHWttwX7uyU)

  


### ****

**

RN08: Envio do email

Deve ser possível ter o envio do email ativo para retenção e não para SAC e vice versa. Como são áreas de atendimentos diferentes, pode ser desejado pelo time de SAC que o envio de email esteja inativo e pelo time de retenção que esteja ativo. Além disso, deve ser possível habilitar o campo para o atendente compor sua própria mensagem para grupos públicos diferentes, habilitando para um e outro não. Deve ser um filtro, deixando o gestor escolher quais grupos devem ter essa possibilidade. Esse filtro também deve ser aplicado para SAC-Voz.

  


**

**

RN09: Atendentes de retenção devem conseguir ver base de conhecimento de SAC-Voz

Atendentes de retenção devem conseguir visualizar a base de conhecimento de SAC-Voz caso recebam um atendimento de SAC indevidamente e devem conseguir atender utilizando as informações da base de conhecimento. 

  
  
**
