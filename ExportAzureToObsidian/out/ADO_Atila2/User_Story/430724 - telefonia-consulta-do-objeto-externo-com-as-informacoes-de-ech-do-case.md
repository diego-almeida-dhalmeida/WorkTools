---
id: "WI-430724"
title: "[Telefonia] Consulta do objeto externo com as informações de ECH do Case"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 01-2024-CoERelac"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2024-10-30T18:09:27.91Z"
changed: "2025-05-02T12:07:09.7Z"
---
# WI-430724 - [Telefonia] Consulta do objeto externo com as informações de ECH do Case

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/430724](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/430724)

## 1. Identificação

- **ID/Ref:** WI-430724
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

****

**Critérios de Aceite**

**  
**

**Cenário 01:  campos a serem visualizados:  
****  
DADO QUE:**  O atendente de voz está logado no Salesforce com perfil “Atendimento Voz – Aluno” e papel “Atendente Voz ELO” ou “Atendente Voz Konecta”

**QUANDO:**  Visualizar a tela posicionada em Detalhes do Caso

**ENTÃO:**  Deve visualizar os campos de marcação preenchidos conforme a identificação do caso no ECH conforme a listagem na RN1.

  


**Cenário 02:  Visualização das informações:**

**DADO QUE:**  o aluno entrou em contato pela central de atendimento através do número 0800 888 6970

**QUANDO:**  digitar a matrícula ou CPF, e na sequência digitou as opções “8-outros assuntos” e “3-nenhuma das informações” para transbordo - falar com atendente

**ENTÃO:**** ** a chamada deve ser direcionada para o aluno dentro do cockpit do operador e o usuário deverá selecionar a opção Caso e ir na aba Detalhes e visualizar as informações de marcação do caso conforme a RN2.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como** um atendente de voz 

**Gostaria** de visualizar dados oriundos telefonia referente a marcação da ligação no caso

**Com o objetivo** dos times de gerenciamento possam gerenciar o canal de voz.

  


Esquema de dados criado pelo time da arquitetura:

  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/b6bca9bd-fd72-4668-88d6-e2aec06e31f0?fileName=image.png)  


  


Arquivo com as referências dos dados que precisam ser anexados no caso. 

  


[ECH-MapaDeDados.xlsx](https://estacio.sharepoint.com/:x:/s/IT_Architecture/Eb_aFAOCNh1BrbK9DbzDz_0BxedoLmAMYkQ6DprkbtvbOg?e=lQiMa6) - Listar todos os dados que precisam ir para o caso.

  


**RN1: Dados a serem inseridos no caso:  
**

  


**Campo:  
**  


Fim do transbordo  


Inicio do primeiro atendimento humano  


Fim do último atendimento humano  


Tempo Atendimento 

Tempo de espera   


Houve transferência  


Início do transbordo  


Houve desconexão do aluno  


Houve reconexão de chamada  


Houve envio para pesquisa de satisfação  


  


OBS: As informações que irão popular os campos listados a cima serão enviadas pelo time de arquitetura através da AWS (Athena). 

  


**RN2: Apresentação das informações:**  


**  
**

As informações de tempos de atendimento devem aparecer conforme as imagem a seguir:  
  
Informações de tempo de atendimento:

![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/b47a9242-3829-4ac6-891a-29bd0d3708e3?fileName=image.png)  


Informações de tempos calculados:  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/31121353-13a0-471d-912f-a4388534e219?fileName=image.png)  


  


  


**OBS** : O processo de leitura das informações será assíncrono. No momento da criação do caso as informações serão criadas no arquivo ECH (gerado de 40 em 40min), ou quando ele possui 1M), que somente depois de 1h, será sincronizado com o caso.
