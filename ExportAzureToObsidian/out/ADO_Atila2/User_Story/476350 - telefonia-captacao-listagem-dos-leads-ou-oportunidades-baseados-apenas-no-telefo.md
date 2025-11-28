---
id: "WI-476350"
title: "[Telefonia/Captação] - Listagem dos leads ou oportunidades, baseados apenas no telefone"
type: "User Story"
state: "Active"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: ""
created: "2025-04-07T10:57:12.827Z"
changed: "2025-09-12T15:59:34.997Z"
---
# WI-476350 - [Telefonia/Captação] - Listagem dos leads ou oportunidades, baseados apenas no telefone

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/476350](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/476350)

## 1. Identificação

- **ID/Ref:** WI-476350
- **Tipo:** User Story
- **Status:** Active


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

**Critério de aceite**

**Dado que  **a lista de Lead ou Oportunidade estará atrelada ao Caso.

**Quando  **eu fizer a seleção

**Então**  ao clicar na opção, a tela de Lead ou Oportunidade deve aparecer na tela do Caso de atendimento Captação-Voz. Garantindo que os campos solicitados para o lead estejam na lista de lead na tela.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu como** atendente ATL - Atendimento, 

**Quero** ter na minha tela de atendimento de captação voz, uma lista (componente personalizado) resultante do filtro feito pela URA, sempre que o número de telefone estiver associado a mais de uma opção de lead e/ou Oportunidade.

**Para** que ao interagir com o candidato eu possa identificar a opção correta e seguir com o atendimento.

 

**RN01****-** Após a escolha do lead ou oportunidade, o mesmo deverá ser atrelado automaticamente ao Caso de atendimento captação voz.

 

**RN02****-** A lista deve trazer as opções priorizando a data de criação, do mais recente ao mais antigo.

 

**RN03   \- **Sendo lead a opção, os campos que devem aparecer unicamente na lista são: Marca, curso, nível de ensino, modalidade, satus do lead. (Essas informações já existem no objeto Lead).

 

**RN04   \- **A URA deverá filtrar o nível de ensino  **A definir** _(Revisar, para possível criação de uma nova história para URA)_

 ![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/1e8f45f2-b413-4ff6-84c9-9e5656fef291?fileName=image.png)
