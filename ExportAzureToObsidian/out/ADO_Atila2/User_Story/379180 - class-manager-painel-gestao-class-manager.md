---
id: "WI-379180"
title: "[Class Manager] Painel Gestão Class Manager"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2024-05-23T14:59:48.817Z"
changed: "2024-10-09T22:16:01.14Z"
---
# WI-379180 - [Class Manager] Painel Gestão Class Manager

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/379180](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/379180)

## 1. Identificação

- **ID/Ref:** WI-379180
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

.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu  **como gestor dos atendentes responsáveis por carteiras de atendimento 

**Quero  **ter acesso a um painel que resume os atendimentos de Class Manager

**Para  **que eu possa avaliar como estão os atendimentos

  
  


**_REGRAS DE NEGÓCIO:_****__**

 ****

**_RN01: Visuais do painel_**

O painel deverá consolidar os casos de atendimentos class manager, sendo composto pelos seguintes visuais:   


  
BIG NUMBERS

  * Quantidade de atendimentos (receptivos + ativos)
  * Quantidade de atendimentos receptivos
  * Quantidade de atendimentos receptivos com transbordo
  * Quantidade de atendimentos receptivos sem transbordo  

  * Quantidade de contatos ativos
  * Quantidade de contatos ativos com transbordo
  * Quantidade de contatos ativos sem transbordo



GRÁFICOS

  * Quantidade de Alunos por Carteira
  * Satisfação de atendimento
  * Resolutividade de atendimento
  * Atendimentos receptivos sem transbordo por motivo de não transbordo
  * Atendimentos ativos sem transbordo por motivo de não transbordo  

  * Atendimentos por unidade
  * Satisfação por unidade
  * Resolutividade por unidade
  * Atendimentos por carteira
  * Satisfação por carteira
  * Resolutividade por carteira



  


**_RN02: Filtros_**

O painel deverá conter os seguintes filtros:  


  * Canal
  * Data de criação do caso
  * Unidade
  * Carteira



  
**Ex. de layout:**

![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/38848a85-9bf1-46d2-9263-a7750e75a1ef?fileName=image.png)  


  


  


  


**_Ajustes 11/06_**  
  
**Definição de indicadores**  


  * Atendimentos receptivos sem transbordo por motivo de não transbordo
    * Atendimento encerrado
      * Flag Class Manager = TRUE; Último Desfecho = NULL; Fila de Atendimento = NULL
    * Fora do horário de atendimento
      * Flag Class Manager = TRUE; Último Desfecho = NULL; Transbordo Fora do horario = TRUE
    * Dentro do horário, mas com atendente indisponível
      * Flag Class Manager = TRUE; Último Desfecho = NULL; Transbordo Fora do horario = FALSE; Transbordou para Humano? = Não; Fila de Atendimento <> NULL
  * Atendimentos ativos sem transbordo por motivo de não transbordo  

    * Aluno não interagiu depois de receber a mensagem  

      * Contato Ativo = TRUE; Flag Class Manager = TRUE; Motivo Tabulação 1: Comunicação Ativa; Motivo Tabulação 2 = "Sem interação"  

    * Retorno fora do horário de atendimento  

      * Contato Ativo = TRUE; Flag Class Manager = TRUE; Último Desfecho = NULL; Transbordo Fora do horario = TRUE  

    * Retorno dentro do horário, mas com atendente indisponível  

      * Contato Ativo = TRUE; Flag Class Manager = TRUE; Último Desfecho = NULL; Transbordo Fora do horario = FALSE; Transbordou para Humano? = Não; Fila de Atendimento <> NULL
