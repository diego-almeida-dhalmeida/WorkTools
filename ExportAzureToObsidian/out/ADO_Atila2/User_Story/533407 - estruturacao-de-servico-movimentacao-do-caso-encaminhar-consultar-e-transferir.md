---
id: "WI-533407"
title: "[Estruturação de serviço] Movimentação do caso - Encaminhar, consultar e transferir"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: ""
created: "2025-09-09T14:09:30.947Z"
changed: "2025-09-15T19:32:05.49Z"
---
# WI-533407 - [Estruturação de serviço] Movimentação do caso - Encaminhar, consultar e transferir

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/533407](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/533407)

## 1. Identificação

- **ID/Ref:** WI-533407
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

- 


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como** Gestor Aluno   


**Gostaria que** ao consultar, transferir ou encaminhar o atendimento para o supervisor, outra operação ou para o BackOffice não seja criado um caso filho e seja criado um registro de Movimentação do caso  
**Para que** dessa forma os problemas de marcação de PSAT fossem corrigidos e a criação de casos "duplicados" sejam evitados. 

  


  


**RN1**  


O caso original precisar ter o registro de todas etapas e informações como: Data e hora inicio e fim, tempos de atendimento, proprietários, fila de atendimento.  


  


**RN2**  


Ao transferir/Consultar deve "popar" o caso na tela do segundo atendente e deve existir uma opção de assumir o caso.  


  


**RN3**  


Ao assumir o caso assume-se como proprietário e a edição, finalização enviando para PSAT, tabulação e todo o controle de atendimento deve estar com o novo atendente que assumiu o caso.  


  


**RN4**  


Ao assumir o caso o atendente inicial perde todo o controle do caso no SalesForce, e dessa forma não deve ser permitido tabular ou encaminhar o caso. Deve ter somente leitura do caso.  


  


**RN5**  


Deve haver uma nova opção de reassumir o caso para que os cenários onde a transferência não foi concluída e/ou o operador devolver a ligação para o Agente.  


  


**RN6**  


Deve ser possível visualizar essas movimentações do caso em detalhes do caso.
