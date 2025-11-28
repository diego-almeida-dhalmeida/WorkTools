---
id: "WI-469396"
title: "[Integração SIA x SalesForce] Configurações"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2025-03-18T18:16:10.09Z"
changed: "2025-04-28T21:31:35.017Z"
---
# WI-469396 - [Integração SIA x SalesForce] Configurações

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/469396](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/469396)

## 1. Identificação

- **ID/Ref:** WI-469396
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

Cenário 1 - Exibição do Checklist   
Dado que as configurações estão no Salesforce 

Quando o SIA consultar o Salesforce 

Então deve ser exibido um checklist com o status de cada item de configuração (filas, etapas, SLA e atendimento). 

 

Cenário 2 - Disponibilização do Atendimento 

Dado que as configurações no Salesforce estão concluídas 

Quando um aluno/administrativo tentar acessar um atendimento 

Então o atendimento deve ser disponibilizado. 

 

Cenário 3 - Restrição de Edição 

Dado que uma configuração está vinculada ao Salesforce 

Quando um usuário tentar editá-la no SIA 

Então a edição não deve ser permitida. 

 

Cenário 4 - Sinalizador de Desativação 

Dado que um atendimento foi desativado no SIA 

Quando a sincronização ocorrer com o Salesforce 

Então deve existir um indicador visual de desativação em ambos os sistemas. 

 

Cenário 5 - Tela de Vinculação 

Dado que existem configurações criadas no Salesforce 

Quando o administrador acessar a tela de vinculação no sistema próprio 

Então ele deve visualizar e validar as configurações importadas. 

 

Cenário 6 - Sucesso ou Falha da Vinculação 

Dado que uma nova configuração foi criada no Salesforce 

Quando a integração ocorrer 

Então deve existir um status visível indicando sucesso ou falha da vinculação. 

 

Cenário 7 - Alerta de Falha 

Dado que ocorreu uma falha na vinculação 

Quando a integração tentar processar a configuração 

Então um alerta deve ser gerado para o administrador. 

 

Cenário 8 - Desativação Automática 

Dado que uma configuração foi desativada no Salesforce 

Quando a sincronização ocorrer 

Então essa configuração deve ser automaticamente desativada no sistema próprio. 

 

Cenário 9 - Registro de Logs 

Dado que a integração entre os sistemas está ativa 

Quando uma vinculação for realizada (bem-sucedida ou falha) 

Então os logs de integração devem registrar todas as ocorrências para rastreabilidade.


## 9. Descrição (Abaixo vem do Azure DevOps)

Eu, como administrador do sistema, 

**Quero** que a configuração das filas, etapas, SLA e atendimento fiquem dentro do Salesforce e possam ser vinculadas corretamente ao SIA, 

Para garantir que todas as configurações estejam definidas antes de disponibilizar um atendimento ao cliente e que as informações estejam sempre sincronizadas entre os sistemas. 

 

RN01 - Configuração e Disponibilidade

  * A criação do atendimento continuará sendo feita no sistema SIA (será que não podemos criar dentro do SF?)
  * O atendimento só poderá ficar disponível para o cliente após todas as configurações (filas, etapas e SLA) estarem corretamente configuradas no Salesforce.
  * Deve existir um sinalizador nos sistemas (checklist) indicando o que está configurado e o que ainda está pendente no Salesforce.
  * Os itens configurados no Salesforce não podem ser editados no sistema SIA.  
 



RN02 - Sincronização e Vinculação

  * Deve existir uma tela de vinculação no SIA ou no SF?, onde o administrador possa visualizar e gerenciar a vinculação das configurações do Salesforce. (criar uma estória com a necessidade das telas) 
  * Cada configuração de fila, etapa, SLA e atendimento criada ou atualizada no Salesforce deve ser automaticamente vinculada ao SIA e refletida corretamente.
  * O SIA deve exibir um status indicando se a configuração está corretamente vinculada ao Salesforce, se houver qualquer erro na vinculação, um alerta deve ser gerado para o administrador. (quais os tipos de alertas podemos incluir?) 
  * Caso uma configuração seja removida ou desativada no Salesforce, ela deve ser automaticamente refletida no SIA.
  * O sistema próprio não deve permitir alterações manuais nas configurações vinculadas ao Salesforce.



 

RN03 - Desativação e Monitoramento 

  * Deve existir um sinalizador no Salesforce e no SIA indicando quando um atendimento for desativado no SIA. 
  * SIA deve consultar o Salesforce para verificar o status das configurações antes de liberar um atendimento para o aluno/administrativo. 
  * Se houver alguma pendência nas configurações, o atendimento deve permanecer indisponível para o aluno/administrativo até que todas as configurações estejam concluídas.
