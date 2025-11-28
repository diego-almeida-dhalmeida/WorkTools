---
id: "WI-201681"
title: "[Telefonia] Dashboard - Panorama geral atendimento"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2022-12-06T18:24:41.37Z"
changed: "2025-03-07T18:07:36.46Z"
---
# WI-201681 - [Telefonia] Dashboard - Panorama geral atendimento

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/201681](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/201681)

## 1. Identificação

- **ID/Ref:** WI-201681
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

.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu,** como gerente/coordenador ou analista,   


**Preciso** visualizar em um dashboard indicadores que indiquem a performance do canal de atendimento Telefonia - Modal de Voz  


**Com o objetivo de** gerenciar os dados de telefonia 

  


Regras de Negócio:  


  


**RN1:** Construção do Painel  


  


Deverão ser aproveitados os relatórios já utilizados para whatsapp (estória: [#201410](https://dev.azure.com/ArquiteturaEstacio/Atila%202.0/_workitems/edit/201410/)), mas serão voltados para os atendimentos realizados na telefonia - Modal de Voz. 

Os seguintes visuais deverão ser incluídos no painel:  


  


**Volume de contatos recebidos** = Quantidade de contatos que interagiram com o canal de atendimento em período de tempo definido de acordo com os filtros;  
  


**Abandono na URA** = Quantidade de contatos que foram abandonados, de acordo com o critério de abandono, em período de tempo definido de acordo com os filtros;  
  


**Contatos retidos na URA** = Total de alunos que finalizaram seu atendimento na URA sem abandonar (Volume de contatos recebidos - Abandono na URA - Volume de Transbordo);  
  


**Volume de Transbordo** = Total de alunos que foram para o atendimento humano (Volume de contatos recebidos - Abandono na URA- retenção na URA);  
  


**Desconexões no Humano** = Total de alunos que foram desconectados por queda de ligação dentro do atendimento humano, marcando esse tópico pela tabulação inserida nesses casos;  
  


**Alunos Atendidos** = Total de Alunos atendidos sem abandono no atendimento humano. (Volume de Transbordo - Desconexões no Humano);  
  


**Contatos em Andamento - Funil** = Total de alunos que estão com contato em andamento no momento de visualização do painel, separando os que estão na URA e os que estão no atendimento humano, com uma visão de funil;  
  


**Contatos em Andamento** = Total de alunos que estão com contato em andamento no momento de visualização do painel;  
  


**Contatos em andamento por fila de atendimento** = Visual detalhando a volumetria de atendimento em andamento distribuída nas diferentes filas de atendimento;  
  


**Casos fechados por fila de atendimento** = Visual detalhando a volumetria de atendimento já finalizada distribuída nas diferentes filas de atendimento;  
  


**TMAU** = Média dos tempos de atendimentos dentro da URA, expresso em minutos e segundos, a contar a partir do momento em que se inicia a primeira interação do aluno, até o fim do atendimento na URA, seja pelo transbordo, seja pelo encerramento da ligação;  
  


**TMAH** = Média dos tempos de atendimentos humanos, expresso em minutos e segundos, a contar a partir do momento em que se inicia o atendimento humano (entrada na tela de algum atendente), até o encerramento do atendimento;  
  


**TME** = Média dos tempos de espera dos atendimentos, a contar da finalização do atendimento na URA e o direcionamento da ligação para o atendente humano;  
  


**Nível de Serviço** = Quantidade de contatos atendidos pelos atendentes humanos com TME menor que 60 segundos (deve ser parametrizável esse tempo), dividida pela quantidade total de contatos transbordados;  
  


**Média da Avaliação Atendimento** = Média das notas respondidas pelos alunos após o terminado do atendimento para a pergunta "Em uma escala de 1 a 5, sendo 1 muito ruim e 5 muito bom, qual nota você daria ao atendimento que acaba de receber?"  


Resolutividade = Quantidade de respostas, "Sim" ou "Não", à pergunta "Sua solicitação foi resolvida nesse contato?", vista em gráfico de pizza;  
  


**Quantidades de atendimento por operador;**  
  


**TMA por operador;**  


  
**Nota por operador;**  


  
**Resolutividade por operador.**  


  


**RN2:** Visualização do Painel  


  


Este painel estará disponível diretamente no Sales Force apenas para os perfis de Supervisor, Gestor e Curador.  


  


  


**RN3:** Filtros do Painel  


  


Para este painel, deverão ser aplicados 3 filtros, sendo eles:  


  


Data de Hora de Abertura do Caso;  


Fila de Atendimento;  


Marca.  


  


**RN04:** Painéis para criar  


  


Deverão ser criados dois painéis exatamente iguais. 

Um dos painéis será destinado à operação da Konecta, que deverá ser restrito às Marcas Estácio e Wyden  


Outro painel será destinado à operação da ELO, que deverá ser restrito às Marcas Ibmec e IDOMED
