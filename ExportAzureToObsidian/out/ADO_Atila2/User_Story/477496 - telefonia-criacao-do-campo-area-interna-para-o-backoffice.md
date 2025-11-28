---
id: "WI-477496"
title: "[Telefonia] - Criação do campo \"Área interna\" para o backoffice"
type: "User Story"
state: "Resolved"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 07-2025-Relacionamento"
assignedTo: "Marcos Vinicius Almeida da Silva"
created: "2025-04-08T15:51:50.22Z"
changed: "2025-07-31T19:49:06.55Z"
---
# WI-477496 - [Telefonia] - Criação do campo "Área interna" para o backoffice

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/477496](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/477496)

## 1. Identificação

- **ID/Ref:** WI-477496
- **Tipo:** User Story
- **Status:** Resolved


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

**

1) Após realizar uma ligação para o número 0800 888 6970  


2) Utilizar a matrícula 201908573317  


3) Escolher o caminho 5 para o transbordo  


4) Utilizar no conector Avaya o usuário agente01@estacio.br, senha: Avaya@1234  


5) Acessar os detalhes do caso para verificar as modificações solicitadas. 

  
Critério de aceite1:**

**Dado que** acesso o salesforce como um operador do backoffice 

**Quando** estiver nos detalhes do caso na aba de "Motivos de atendimento"

**Então** devo conseguir selecionar a área de atendimento que ficará responsável pela resolução do caso  

  


**Critério de aceite 2:**  


****

**Dado** que acesso o salesforce como um operador do call center Atendente Voz - Aluno do backoffice  


**Quando** selecionar a opção no campo "Status Backoffice" e escolher a opção "Pendente"  


**Então** o campo "Área Interna" deve ser de preenchimento obrigatório. Caso não informado, o registro não poderá ser gravado e a seguinte mensagem será apresentada no campo "Para 'Status Backoffice' Pendente é obrigatório informar a 'Área interna'!"

  
**Critério de aceite 3:**  


**Dado que  **acesso o salesforce como um operador do call center, Atendente - Aluno, Atendente Voz - Aluno, ou para perfis de gestão como Gestor - Aluno e Administrador 

**Quando  **estiver nos detalhes do caso na aba de "Motivos de atendimento"

**Então  **devo conseguir visualizar o campo "Área Interna" sem a permissão de edição


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como** atendente do backoffice (perfil Atendente Voz - Aluno) 

**Quero** na tela de detalhes do caso, a aba Motivo de Encaminhamento ter um campo de escolha (picklist) para selecionar a Área interna da empresa que irá tratar o caso 

**Para que** o time do backoffice possa registrar e acompanhar os encaminhamentos internos 

  


**Lista de opções para o campo área:**  
  
Ao Vivo  


Backoffice de Atendimento  


Campus Virtual - EAD  


Captação  


Cobrança  


Colação de Grau  


Consep  


Coordenadores Relacionamento  


Curso Profissionalizante  


Curso Técnico  


Cursos Livres  


Digitaliza  


Diploma | Certificado  


ENADE  


Ensineme  


Estagio  


Financiamentos  


Gestão de Contratos Polo Parceiro  


Horas AAC  


Ingresso Irregular  


NAAP  


NAC  


NAE  


Nota Fiscal  


Plano de Pagamento Descasado  


Pós-Graduação  


Retenção  


Solicitação Gravação/Interação - Elo  


Solicitação Gravação/Interação - Konecta  


  


Obs: Em ordem alfabética. 

  


  


**Protótipo:**  
  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/fe01bd97-50ca-4a4c-8562-c28bac7636f3?fileName=image.png)
