---
id: "WI-418266"
title: "[Relacionamento] Tela de Experiência do Aluno (Raio X) - COE"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Rhaan Dias de Oliveira"
created: "2024-09-20T15:01:47.15Z"
changed: "2024-10-21T02:15:22.41Z"
---
# WI-418266 - [Relacionamento] Tela de Experiência do Aluno (Raio X) - COE

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/418266](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/418266)

## 1. Identificação

- **ID/Ref:** WI-418266
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

****

**

**

Eu, como atendente de qualquer canal e marca

Quero visualizar na tela de matrícula e na tela de atendimento os dados de experiência do aluno

Para realizar um bom atendimento

  


RN01 - Visualização da tela de experiência do aluno no objeto de matrícula

  


A tela de experiência deve estar presente no objeto de matrícula do aluno como uma sub-aba, localizada no lado das abas de financeiro e acadêmico. O nome da aba deve ser “Raio - X”. Segue o exemplo abaixo:

  


![](https://lh7-us.googleusercontent.com/hrcAavdE__nLSgFBNUwjlPnPOFSm1K_YKj36e1AlydCMyY6Byyxwridhzl9Ix3QMxpy3t9wUI5GASPz7QIZNBXstw7djNNY13bVI15zrcgXto2H-Bzoav9MHHtT3qYKyqVPTXCwoqlMg5obP6ESFAUE)

  


Essa aba com a tela de experiência do aluno deve ter sub-abas, similar à aba do Financeiro e Acadêmico, como no exemplo abaixo:

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/250723f2-04d1-4f00-9888-35a15fa39c04?fileName=image.png)

  


Essas sub-abas da tela de experiência do aluno serão utilizadas para dividir os campos da tela de experiência em seções, facilitando a navegação do atendente. A organização/layout dos campos está detalhada na apresentação em anexo. 

  


RN02 - Conteúdo da tela de experiência - Objeto da Matrícula

  


A tela de experiência do aluno deve incluir todas as informações importantes para o atendimento, providenciando ao atendente o conhecimento necessário para direcionar o aluno. As seguintes seções (em negrito) se tornarão sub-abas da tela de experiência na tela de matrícula, com os os seguintes campos:

  


  * Atrito/Evasão




> > _Seção atrito_

    * Aluno atritado \- informação deve estar no Salesforce

    * Reclamações em andamento?

    * Rechamada por parte do aluno (mesmo canal) - será considerado rechamada se o contato ocorreu dentro de 24hrs

    * Último desfecho no mesmo canal

    * Liberação da matrícula via processo judicial?




> > _Seção Evasão_

    * Aluno evadiu durante o curso?

    * Propensão a evadir no semestre atual

    * Data agendamento de entrevista?

    * Hora agendamento de entrevista?

    * Status do requerimento de evasão



  * Risco Financeiro

    * Inadimplente?

    * Quantidade de boletos não pagos

    * Contestação

    * Aluno possui negociação vigente?

    * Aluno possui renegociação vigente?

    * Aluno possui promessa de pagamento vigente?

    * Bloqueio de pagamento por cartão de crédito?

    * Bloqueio de ligação de cobrança?

    * Débito automático?

    * Recorrência de pagamento?

  * Engajamento




    * Funcionário ou Dependente? (dentro de detalhes da matrícula)  


    * Aluno sem Interação?

    * Entrada Tardia? (dentro de detalhes da matrícula)

    * Frequência em Aula

    * Acesso às Plataformas

    * Documentação pendente?

    * Data da expedição do Diploma

    * Data da Colação




    * Percentual de disciplinas aprovadas

  * Renovação




    * Renovado?

    * Data de renovação

    * Aceite Contrato Educacional

    * Data aceite contrato educacional

    * Propensão a renovação

    * Possui boleto de renovação?

    * Situação do boleto de renovação



  * Satisfação

    * NPS - informação deve estar no Salesforce

    * Satisfação média (total)

    * Resolutividade média  (total)

    * Satisfação média (por canal) - devemos ter um campo para cada canal

    * Resolutividade média  (por canal) - devemos ter um campo para cada canal


Os campos "Funcionário ou Dependente" e "Entrada Tardia" devem estar localizados dentro da aba "Detalhes da Matrícula". Os campos "NPS" e "Aluno Atritado" devem ser levados para dentro do Salesforce. 

  


A planilha em anexo lista as informações que devem estar presentes na tela de experiência e o tipo de cada dado. 

  


RN03 - Visualização da tela de experiência do aluno na tela de atendimento

  


Na tela de atendimento teremos uma aba que representará a tela de experiência que está na matrícula do aluno. A sub-aba “Satisfação”, descrita na RN acima, não deve ser incluída na tela de atendimento. A aba principal deve ser a aba do "Raio-X" e a tela hoje com nome "dados de atendimento" deve ser uma sub-aba do Raio-X chamada "Atendimento".  A sub-aba "Atendimento" deve ser aberta automaticamente. Segue um exemplo da tela:

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/41f24b09-6191-4298-9009-779224edc1ff?fileName=image.png)  


  


A aba do Raio-X  deve ter sub-abas dividindo os campos resumidos em seções.

  


As abas, da tela de atendimento devem ser:

  * Raio - X

  * > Atendimento

  * > Atrito/Cancelamento

  * > Risco Financeiro

  * > Engajamento

  * > Renovação

  * > Histórico de Atendimento

  * Acadêmico

  * Financeiro

  * Base de Conhecimento

  * Autosserviços


  


Todas as abas devem estar de fácil acesso para o atendente. Essas informações devem ser atualizadas em tempo real, mantendo o atendente informado da situação atual do aluno.  A organização/layout dos campos está detalhada na apresentação em anexo. 

  


RN04: Tela de Atendimento - Campos na tela principal do atendimento

  


Os seguintes campos devem estar diretamente na tela de Atendimento em formato de farol.  Para campos binários, as cores serão vermelho e cinza. Para campos com 3 níveis de resposta (Baixo, Médio e Alto), o farol teria três cores: Verde, amarelo e vermelho. O farol vermelho deve sinalizar um ponto de atenção ou pendência do aluno para o atendente. 

  


  * Rechamada por parte do aluno

  * Aluno Atritado?
  * Propensão a evadir no semestre atual

  * Inadimplente?  


  * Documentação pendente?

  * Renovado?




**  
**

RN05: Atualização das informações

As informações devem ser atualizadas à medida que forem atualizadas nas bases de origem. 

  


**RN06: Acesso da tela**

Os perfis que conseguem visualizar essas informações (em ambos objetos) devem ser os mesmos que conseguem visualizar as abas "Financeiro" e "Acadêmico".
