---
id: "WI-442939"
title: "[Telefonia] Encaminhamento/perfil - Criar lista de visualização para o Supervisor Voz permitindo gestão e transferencia de casos"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 01-2025-Relacionamento"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2024-12-13T20:35:49.083Z"
changed: "2025-03-07T18:19:52.593Z"
---
# WI-442939 - [Telefonia] Encaminhamento/perfil - Criar lista de visualização para o Supervisor Voz permitindo gestão e transferencia de casos

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/442939](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/442939)

## 1. Identificação

- **ID/Ref:** WI-442939
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

******

**Roteiro de teste:**

  1. Abrir o Salesforce como Sara Nascimento (perfil supervisor Voz) (usuário: sara.nascimento.ter@estacio.br).
  2. Abrir a tela de lista de casos de Backoffice com os casos Abertos. 
  3. Alocado os casos que serão atribuídos em massa para o atendente responsável 



******

  


Critérios de Aceitação:  
  


**Cenário 01** \- Acesso às Listas de Visualização  


  


**Dado** que sou um Supervisor Voz com papel Gestor Voz Konecta ou Gestor Voz Elo,  


**Quando** acesso à lista de visualização de casos,  


**Então** devo ver as listas "BO Supervisor SAC - Voz" e "BO Supervisor Retenção - Voz".  


  


**Cenário 02** \- Aplicação de Filtros  


  


Dado que estou visualizando a lista de casos,  


Quando aplico os filtros de Tabulação N1 diferente de vazio, e casos atribuídos a qualquer operador,  


Então a lista deve exibir apenas os casos que atendem a esses critérios, com os "Status Backoffice" de "Aberto", "Atribuído", "Em andamento" e "Pendente".  


  


**Cenário 03** \- Modificação de Proprietário  


  


**Dado** que estou na lista filtrada de casos,  


**Quando** seleciono múltiplos casos,  


**Então** devo ter a opção de modificar o proprietário dos casos massivamente.  


  


**Cenário 04** \- Confirmação de Alteração de Proprietário  


  


**Dado** que alterei o proprietário de um ou mais casos,  


**Quando** confirmo a alteração,  


**Então** o sistema deve atualizar os casos selecionados com o novo proprietário e refletir a mudança na lista.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como**  Supervisor Voz e com papel Gestor Voz Konecta, ou Gestor Voz Elo)  


**Quero** na lista de visualização de casos, acessar as listas conforme abaixo permitindo a modificação do proprietário dos casos (campo Proprietário) massivamente.  
**Para que** os atendimentos possam ser gerenciados e otimizar a resolução dos casos mediante a falte de um operador

**Listas de visualização para o Supervisor:**

BO Supervisor SAC - Voz (Origem do Caso: SAC - Voz)  
BO Supervisor Retenção - Voz (Origem do Caso: Retenção - Voz)  


**Inserir os Filtros:**

Tabulação N1 diferente de vazio, casos atribuídos para qualquer operador, com os "Status Backoffice" de "Aberto", "Atribuído", "Em andamento" e "Pendente";  


  


**A tela de lista de casos do supervisor  deve exibir as colunas:**  
  


Numero do caso  


"Tabulação N1" 

"Tabulação N2"

Assunto 

Status 

Prioridade 

Data/hora de abertura 

Alias do proprietário do caso
