---
id: "WI-418994"
title: "Conta Pessoal - Detalhes"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: ""
created: "2024-09-23T19:08:53.857Z"
changed: "2024-11-05T20:18:02.79Z"
---
# WI-418994 - Conta Pessoal - Detalhes

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/418994](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/418994)

## 1. Identificação

- **ID/Ref:** WI-418994
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

Cenário 01: Visualização das informações na tela de Detalhes da Conta 

DADO QUE: o usuário durante a consulta à Conta do Aluno   
QUANDO: acessar a tela de Detalhes da Conta   
ENTÃO: poderá visualizar as informações da Conta Pessoal do aluno como mencionado nas Regras de Negócio. 

Resultados esperados : visualizar as informações conforme mencionado nas regras de negócio. 

Resultados não esperados : não visualizar as informações conforme mencionado nas regras de negócio. 

Cenário 02: Visualização das informações na tela de Detalhes da Conta 

DADO QUE: o usuário durante a consulta à Conta do Aluno   
QUANDO: acessar as informações em uma das listas relacionadas   
ENTÃO: será redirecionado para as respectivas páginas dos itens da lista em selecionada, conforme as RNs 03, 04 e 05. 

Resultados esperados : ser redirecionado corretamente ao clicar no item. 

Resultados não esperados : não ser redirecionado ao clicar no item.


## 9. Descrição (Abaixo vem do Azure DevOps)

Eu, como usuário do SalesForce, 

Quero visualizar as informações da Conta Pessoal do aluno, 

Para que eu possa fornecer um atendimento mais eficiente e personalizado. 

**Regras de Negócio  **

RN01 – Header (AS IS) 

  * Header com resumo das informações da conta: 

  * Nome (título) 

  * Email 

  * Telefone 

  * Possui deficiência 

  * CPF/CNPJ 

  * Nome do responsável 




RN02 – Bloco de informações – Detalhes 

Aba com informações, ocupando 2/3 à esquerda da tela. 

**Dados Pessoais  **

Nome da Conta  | Código do Cliente (antigo Código do Aluno)   
---|---  
Nome Social  | CPF/CNPJ   
Data de Nascimento  | RG   
Sexo  | Órgão emissor do RG   
Identificação de gênero  | Data de emissão do RG   
Cor/Raça (deveria ser um campo de seleção de lista)  | UF do RG   
Deficiência  | Nacionalidade   
Nome da Mãe  | Naturalidade   
Nome do Pai  |    
  
 

**Informações para Comunicação  **

Preferência de Contato  | Preferência de horário de contato   
---|---  
Celular  | Telefone   
Outro telefone  | E-mail   
  
 

**Informações de Endereço  **

Endereço de Residência (antigo Endereço de Entrega)  | Endereço de Cobrança   
---|---  
  
 

**Formação de Ensino Médio  **

Escola  | Data de Conclusão   
---|---  
UF da Escola  | Cidade da Escola   
  
 

**Informações do Sistema (AS IS)**

**  
**

RN03 – Lista relacionada – Matrículas do Aluno 

AS IS 

RN04 – Lista relacionada – Oportunidades 

AS IS 

RN05 – Lista relacionada – Casos 

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/cc774807-ef89-4350-b1c9-e2fcaf048818?fileName=image.png)
