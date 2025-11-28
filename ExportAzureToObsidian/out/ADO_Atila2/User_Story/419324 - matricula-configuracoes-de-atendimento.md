---
id: "WI-419324"
title: "Matrícula - Configurações de Atendimento"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: ""
created: "2024-09-24T14:43:14.1Z"
changed: "2024-11-05T20:18:02.79Z"
---
# WI-419324 - Matrícula - Configurações de Atendimento

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/419324](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/419324)

## 1. Identificação

- **ID/Ref:** WI-419324
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

**Cenário 01: Visualização das informações na tela de Configurações de Atendimento**  


DADO QUE: o usuário durante a consulta às informações acadêmicas  
QUANDO: acessar a aba Configurações de Atendimento da Matrícula  
ENTÃO: poderá visualizar as informações da matrícula como mencionado nas Regras de Negócio.  
**Resultados esperados  **: visualizar as informações conforme mencionado nas regras de negócio.  
**Resultados não esperados  **: não visualizar as informações conforme mencionado nas regras de negócio

  


**Cenário 02: Navegação através das carteiras e personas de atendimento**  


DADO QUE: o usuário durante a consulta às informações acadêmicas  
QUANDO: clicar em uma carteira de atendimento ou persona, como mencionado na RN02  
ENTÃO: poderá acessar as páginas com informações da carteira ou persona selecionada  
**Resultados esperados  **: ser redirecionado corretamente para a página da carteira/persona selecionada.  
**Resultados não esperados  **: não ser redirecionado corretamente para a página da carteira/persona selecionada.

  


**Cenário 03: Navegação através da lista relacionada de mailing**

DADO QUE: o usuário durante a consulta às informações acadêmicas

QUANDO: clicar em um item da lista relacionada de mailing, como mencionado na RN03  
ENTÃO: poderá acessar as páginas com informações do mailing selecionado  
**Resultados esperados  **: ser redirecionado corretamente para a página selecionada.  
**Resultados não esperados  **: não ser redirecionado corretamente para a página selecionada


## 9. Descrição (Abaixo vem do Azure DevOps)

Eu, como usuário do Salesforce,   


Quero visualizar as configurações de atendimento do aluno,   
Para que eu possa fornecer um atendimento mais completo e direcionado. 

Regras de Negócio 

Geral + 

RN01 – Sub-abas 

Na parte central da tela, abaixo da divisão de abas, ficará a divisão das sub-abas, nesta ordem: 

  * Segmentações 

  * Mailing 




RN02 – Sub-aba – Segmentações 

Blocos com informações localizado no meio da tela, abaixo da lista de abas/sub-abas: 

Carteiras de atendimento por canal 

WhatsApp  | Requerimentos   
---|---  
Chat  | Reclamações   
Telefonia  | Coordenação de curso   
Secretarias  | Ouvidoria   
Polos  | Último cálculo carteira   
  
 

Persona 

Persona WhatsApp  | Persona Requerimentos   
---|---  
Persona Chat  | Persona Reclamações   
Persona Telefonia  | Persona Coordenação de curso   
Persona Secretarias  | Persona Ouvidoria   
Persona Polos  | Último cálculo persona   
  
 

![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/d2e24c4c-0f3c-46ad-90aa-be69225d7169?fileName=image.png)  


  


RN03 – Sub-aba – Mailing 

Sub-aba incluindo Lista relacionada dos Assests dos Mailings (AS IS)  

![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/c35508d5-f560-46ca-9a84-18f9931141ae?fileName=image.png)
