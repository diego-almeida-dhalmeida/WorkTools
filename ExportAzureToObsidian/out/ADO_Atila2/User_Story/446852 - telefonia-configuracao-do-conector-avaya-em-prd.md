---
id: "WI-446852"
title: "[Telefonia] Configuração do conector Avaya em PRD"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 04-2024-CoERelac-2 ªOndaTelefonia"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2025-01-08T13:45:47.77Z"
changed: "2025-03-07T18:08:40.33Z"
---
# WI-446852 - [Telefonia] Configuração do conector Avaya em PRD

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/446852](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/446852)

## 1. Identificação

- **ID/Ref:** WI-446852
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

**Dado  **que o conector Avaya foi instalado e configurado no Salesforce,  


**Quando  **um agente acessar o Salesforce e iniciar o painel de integração Avaya,  


**Então  **ele deverá ser capaz de fazer e receber chamadas diretamente pela interface do Salesforce.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como** operador de voz da Yduqs ((Perfil Atendente Voz - Aluno, ou Atendente-Aluno)),  
**Gostaria de** configurar o conector Avaya no Salesforce dentro da área Atendimento-Aluno,  
**Para que** os agentes possam acessar funcionalidades de telefonia diretamente na plataforma, integrando chamadas e registros de atendimento de forma eficiente.  


  


Passos para configuração do Avaya:  
  
1\. Instalação dos componentes APEX na instância de produção através do acesso a URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t5w000005PndM  


2\. Na página de instalação do IXWS, selecionar instalar para todos os usuários;  


3\. Habilitar aplicação Lightning Experience para habilitar o Avaya Workspaces for CRM – Acesse a configuração do ambiente UAT para referência;  


4\. Importar o ccdef em anexo;  


5\. Copiar a configuração do ccdef de UAT para o ambiente de PRD conforme a EPS Elo e Konecta;  


6\. Associar os usuários do Salesforce nos seus respectivos ccdef;  


7\. Copiar as configurações do diretório de números do ambiente UAT para o ambiente PRD;  


8\. Copiar as configurações do Softphone Layout do ambiente UAT para o ambiente PRD;  


9\. Copiar os resources do ambiente URA para o ambiente PRD.
