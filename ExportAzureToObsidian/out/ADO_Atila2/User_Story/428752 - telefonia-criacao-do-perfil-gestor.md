---
id: "WI-428752"
title: "[Telefonia] Criação do perfil Gestor"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2024-10-25T11:44:55.67Z"
changed: "2025-01-10T17:39:19.037Z"
---
# WI-428752 - [Telefonia] Criação do perfil Gestor

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/428752](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/428752)

## 1. Identificação

- **ID/Ref:** WI-428752
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

**Cenário 01:   Garantir permissões de acordo com perfil**

**DADO QUE  **um usuário do Salesforce está definido com um perfil específico na ferramenta

**QUANDO  **ele acessar as telas do sistema

**ENTÃO  **deve ser permitida a visualização e edição de campos de acordo com as liberações desse perfil.

**Resultado esperado:  **Permissões concedidas aos usuários apenas para visualizar/editar determinados campos nas telas de atendimento, que façam sentido com sua função na companhia.

**Resultado não esperado:**  Usuários que ao entrar no Salesforce possam visualizar e/ou editar campos que não estavam determinados (pela planilha) em seu perfil de atendimento.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu, como**  colaborador YDUQS

**Quero**  ser capaz de navegar pelo Salesforce com minhas permissões específicas para visualizar e/ou editar os campos em cada tela de atendimento, conforme definições do meu perfil de atendimento (detalhados na planilha anexa)

**Para  **poder realizar e restringir minhas ações de acordo com meu perfil determinado.  


 

**RN01 - Informações principais**

Ao acessar o Salesforce, o usuário deve ter a possibilidade de ser configurado para o perfil de atendimento Gestor.

A diferença desses perfis se dá nas permissões destinadas a cada um deles. Na planilha anexa encontramos quais campos serão acessíveis para visualização e/ou edição, de acordo com cada perfil descrito.  


  


**RN02 - Atualização de Perfis**

A definição de perfis de cada um dos usuários deve ser feita nas configurações do cadastro de cada um, com liberação para edição apenas para os _Administradores do Sistema : [Tabela de Perfis.xlsx](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/452a7d93-cb51-4365-b10e-49243ea66a4e?fileName=Tabela%20de%20Perfis.xlsx&download=true)_
