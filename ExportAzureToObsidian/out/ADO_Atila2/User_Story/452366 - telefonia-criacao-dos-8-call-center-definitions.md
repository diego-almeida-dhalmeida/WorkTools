---
id: "WI-452366"
title: "[Telefonia] Criação dos 8 call center definitions"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0\Sprint 02-2025-Relacionamento"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2025-01-24T19:05:47.62Z"
changed: "2025-03-07T18:04:00.247Z"
---
# WI-452366 - [Telefonia] Criação dos 8 call center definitions

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/452366](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/452366)

## 1. Identificação

- **ID/Ref:** WI-452366
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

...


## 9. Descrição (Abaixo vem do Azure DevOps)

**FEITO DIRETO EM PROD**

**\-------------------------------------**

**Eu como** administrador do Salesforce  
**Quero que** seja atualizada a configuração de Call center definitions (CCDEF) e Directory Numbers no Salesforce (UAT3 e PRD) com os segmentos revisados pelo negócio para viabilizar a operação de telefonia no Salesforce.  
**Para que** todos os call centers definitions das respectivas EPS devem ser criados a partir do clone do call center definition principal da EPS.

**Orientações técnicas:**

Para operações da ELO, criar um CCDEF baseado no clone de "AXP Connect Elo" de UAT3.   
Para operações da KONECTA, criar um CCDEF baseado no clone de "AXP Connect Konecta" de UAT3.  
Deverá ter 1 CCDEF criado para cada operação. 

A Minsait deverá realizar as configurações sempre baseadas na planilha (em anexo) de segmentações de telefonia levantado pela área de negócio, que poderá ser atualizado quando necessário nesse card pelo @Carlos Henrique Costa Cavalcanti . 

1° Etapa: Configurar os 8 call centers definition da ELO em **UAT3** hoje (24/01) para que a Avaya realize o restante da configuração em UAT3. 

**Call Center Definition** | **Operação**  
---|---  
ELOSacEstacioWyden | SAC Estacio/Wyden   
ELORetencaoEstacioWyden | Retenção Estacio/Wyden   
ELOSacPremiumIbmecIdomed | SAC PREMIUM IBMEC / IDOMED   
ELOCaptacaoWydenGraduacao | CAPTAÇÃO WYDEN GRADUAÇÃO   
ELOCaptacaoEstacioGraduacao | CAPTAÇÃO ESTÁCIO GRADUAÇÃO   
ELOCaptacaoWydenPos | CAPTAÇÃO WYDEN PÓS   
ELOCaptacaoEstacioPos | CAPTAÇÃO ESTÁCIO PÓS   
ELOCaptacaoIdomedGraduacao | CAPTAÇÃO IDOMED GRADUAÇÃO   
  
2° Etapa: Clonar essas configurações da ELO, após conclusão da Avaya, em**PRD** até segunda-feira (27/01).  


2.1. Clonar um CCDEF para cada operação;

2.2. Copiar as configurações de Directory Numbers; 

2.2. Copiar os agentes de cada grupo ao seu respectivo CCDEF; 

2.3. Copiar os atalhos correspondentes ao seu respectivo CCDEF;  
**Repetir esses passos da etapa 2 também para o CCDEF da KONECTA em PRD.**
