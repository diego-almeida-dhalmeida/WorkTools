---
id: "WI-379182"
title: "[Class Manager] Tela de matrículas encarteiradas"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Luis Eduardo Peçanha Magalhães"
created: "2024-05-23T15:00:07.343Z"
changed: "2025-01-23T09:40:07.073Z"
---
# WI-379182 - [Class Manager] Tela de matrículas encarteiradas

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/379182](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/379182)

## 1. Identificação

- **ID/Ref:** WI-379182
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

**Eu  **como atendente responsável por uma carteira de atendimento 

**Quero  **ter acesso a uma tela que resume as matrículas da minha carteira

**Para  **que eu possa realizar filtros, segmentar minha base e disparar comunicações ativas

  
  


**_REGRAS DE NEGÓCIO:_****__**

 ****

**_RN01: Tela de Matrículas da Carteira_**

Os atendentes responsáveis pelas carteiras devem ter disponível para eles uma tela na qual será possível visualizar todas as matrículas que fazem parte da sua carteira. Somente as da sua carteira e não as demais matrículas.




**  
**

****_RN02: Filtros na tela_**  
**

O Atendente deverá poder filtrar a carteira de alunos de acordo com as características dos campos associados as matrículas, como: Matrícula (Modalidade, Curso, IES, ...), Caso (data, transbordo, desfecho, fila de atendimento,...),  Conta (Nome, cpf, ...), entre outros

  


  


****_RN03: Envio de mensagem ativa via WhatsApp_**  
**

O atendente deverá poder selecionar um aluno único ou um grupo de alunos para disparar uma comunicação ativa 

  


  


**Exemplo de tela:**  
  
![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/9079d64c-54af-4cf9-ba2b-219c3d5d9b74?fileName=image.png)

  


  


**_Ajustes 14/06_**  


Tipo de relatório que une casos, matrículas, carteira e conta

Separação dos relatórios em pastas com segmentação principal de Campus/Polo:  


  1. Campus/polo: BARRA I - IBMEC
  2. Campus/polo:: CENTRO I - IBMEC  

  3. Campus/polo: BELO HORIZONTE - FUNCIONÁRIOS  

  4. Campus/polo: EIXO MONUMENTAL  

  5. Campus/polo: FARIA LIMA  

  6. Campus/polo: PAULISTA  

  7. Campus/polo: EIXO MONUMENTAL
  8. Campus/polo: POLO IBMEC - CENTRO - RJ; IBMEC EXAME; IBMEC ONLINE; INFOMONEY; POLO IBMEC - BARRA I - RJ; POLO IBMEC - CENTRO - RJ; SUDOESTE  
  


**_Ajustes 24/06_**  


Valores para filtros:

  


Turno:

  * INTEGRAL
  * INTEGRAL - PÓS
  * MANHÃ
  * MANHÃ/TARDE
  * NOITE
  * TARDE
  * VIRTUAL  
  




Forma de Ingresso:

  * Aluno Ouvinte
  * CERTIFICAÇÃO INTERNACIONAL
  * CONVÊNIO UNIVERSIDADE EXTERIOR
  * DISCIPLINA ISOLADA - MESTRADO / DOUTORAD
  * DISCIPLINAS ISOLADAS NÃO CONVENIADAS

  * Inscrição 
  * MSV - Externa

  * MSV - Interna

  * NOM_FORMA_INGRESSO

  * Outros Concursos

  * PROUNI

  * PROVA DE SELEÇÃO - MESTRADO / DOUTORADO

  * PTA - CIDADE

  * PTA - GAMA FILHO

  * TRANSF. EXTERNA

  * TRANSF. INTERNA

  * Vestibular

  * VESTIBULAR (ENEM)
