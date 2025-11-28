---
id: "WI-483420"
title: "[Relacionamento] - Cadastro de serviço"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Adriano Meireles Santos"
created: "2025-04-29T13:02:41.74Z"
changed: "2025-07-18T20:28:03.557Z"
---
# WI-483420 - [Relacionamento] - Cadastro de serviço

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/483420](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/483420)

## 1. Identificação

- **ID/Ref:** WI-483420
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

****

**Critério de aceite 01**

**Dado  que **eu (Gestor aluno) adicionei um novo serviço 

**Quando  **for finalizado o cadastro do serviço 

**Então** , o serviço deverá ser criado com todos os campos de preenchimento obrigatório especificados na RN01. 

 

**Critério de aceite 02**

**Dado  que** eu (Gestor aluno) estou autorizado a adicionar e editar serviços através do Salesforce 

**Quando  **for iniciado um registro de serviço 

**Então** , vou selecionar ou alterar informações a respeito do serviço respeitando as regras de negócio, quando necessário. 

 

**Critério de aceite 03**

**Dado que  ** um serviço está sendo criado ou atualizado 

**Quando  **o Gestor Aluno estiver definindo as regras de reabertura 

**Então  **existirão dois campos: “Permitir reabertura” e “Quantidade de reaberturas” 

 

 

**Critério de aceite 04**

**Dado que** um serviço está sendo criado ou atualizado 

**Quando  **o Gestor Aluno estiver definindo as regras de reabertura 

**Então  **existira um campo: “Permitir pedido de cancelamento” 

 

 

****

**Critério de aceite 05**

**Dado que** o Gestor Aluno esteja configurando ou editando um Serviço,  
**Quando** for definido um Fluxo de Atendimento com etapas (como Atendimento, Backoffice, Financeiro),  


**Então** o sistema deverá: 

Permitir o cadastro de**múltiplas etapas do fluxo** , cada uma com: 

Nome da etapa (ex: Atendimento, Backoffice, Financeiro), 

Tempo de SLA individual (em horas); 

**Calcular automaticamente o SLA Total** do serviço como o**somatório de todos os SLAs definidos no fluxo;**

Exibir o **SLA total em um campo visível e de leitura automática** , que reflita as alterações feitas nas etapas do fluxo; 

Impedir a conclusão do cadastro/edição do serviço c**aso alguma etapa do fluxo esteja sem SLA definido** , exibindo mensagem de validação adequada. 

  


**Exemplo prático:**

Fluxo definido: 

Atendimento: 2h 

Backoffice: 4h 

Financeiro: 8h 

O campo “SLA Total” do serviço deve exibir: 14 horas. 

****

 

 

**Critério de aceite 06**

**Dado que** alguns serviços são pagos 

**Quando** o Gestor Aluno estiver criando ou editando um serviço, 

**Então** deve haver um campo que permita selecionar o serviço como pago ou não 

 

 

**Critério de aceite 07**

**Dado que** alguns serviços podem ser solicitados pelo aluno mais de uma vez 

**Quando** o Gestor Aluno estiver criando ou editando um serviço, 

**Então** deve haver um campo que permita definir se o Serviço pode ser aberto em duplicidade pelo aluno, ou não. 

  


**Critério de aceite 08**

**Dado que**  Um serviço possa deixar de ser oferecido

**Quando** o Gestor aluno inativalo

**Então** o mesmo ficará indisponível para aluno e atendente, até que a inativação seja revertida


## 9. Descrição (Abaixo vem do Azure DevOps)

****

****

****

**Eu, como**  usuário Gestor Aluno

**Quero  **registrar e editar todos os serviços ofertados para os alunos pela YDUQS na plataforma Salesforce.

**Para  **garantir a execução dos processos internos de maneira padronizada e garantir a qualidade do atendimento para os alunos da empresa. 

 

**RN01 – Informações do serviço**

**No registro de um serviço, é necessário ter as seguintes informações:**

1.       Id do Serviço (automático)

 

2.       Nome do serviço (Até 150 caracteres)

 

3.       Tipo curso (Graduação, Pós-Graduação, ETC) **com a opção de seleção do tipo de curso**

    1. Seleção do tipo de curso
    2. Seleção da Marca
    3. Modalidade (EAD, PRESENCIAL, SEMIPRESENCIAL)



 

4.       Tipo de acesso (interno ou externo) - Esse campo é para marcarmos se o serviço estará disponível apenas para o aluno, ou para o operador, ou para ambos. (multi seleção)

 

5.       Área Cobrança 

    1. Campo de status - Deve existir um (Detalhar as opções de Status com a Renata)
    2. Taxa de cobrança 
    3. Desconto para Impressão EDD
    4. Incluir na mensalidade
    5. Cobrar o aluno FIS/PROUNI primeira via



 

6.       Prospecção - O administrador precisa definir se o serviço está disponível ou não para matriculados(aluno), candidatos(Oportunidade) e inscritos(Lead))

 

7.       O colaborador, que atende, define se está falando com matriculado, candidato e inscrito).

 

8.       Resposta Padrão – Campo onde o Gestor aluno, definirá as respostas padrão para o Serviço

    1. textos rápidos (Detalhes: [#483739](https://dev.azure.com/ArquiteturaEstacio/Atila%202.0/_workitems/edit/483739/))  
 



9.       Fluxo de encaminhamento – O Gestor aluno pode associar um fluxo de resolução para o serviço (Detalhes: [#483422](https://dev.azure.com/ArquiteturaEstacio/Atila%202.0/_workitems/edit/483422/) )  
  


10.   Documentos – O Gestor aluno deve ter um campo que defina a necessidade de anexação de documentos ou não, e quais documentos.  
  


11.   Pendente aluno – 

 

12.   Campo para Associação do Serviço ao Grupo de serviço (Detalhes: #483422 )  
  


13.   Atendimento Online - Automático (EDD - Autoserviços) - Campo para informativo, se o serviço será um autoserviço ou não.  
  
  
  


14.   Campo de associação do Serviço ao Artigo da base (Detalhes: [#483424 ](https://dev.azure.com/ArquiteturaEstacio/Atila%202.0/_workitems/edit/483424/))  
  


15.   Campo de associação do Serviço aos Canais de atendimento (Detalhes: #483423 )  
  


16.   Campo de associação do Serviço as Filas de atendimento (Detalhes:  [#483437](https://dev.azure.com/ArquiteturaEstacio/Atila%202.0/_workitems/edit/483437/))  
  


17.   Campo de associação do Serviço as Tabulações  (Detalhes: [#483760](https://dev.azure.com/ArquiteturaEstacio/Atila%202.0/_workitems/edit/483760/) )  
  


18.   Campo de Status do serviço - Indica se o serviço está ativo ou não para o atendente e o aluno (booleano)  
  


19.   Campo para preenchimento de Descrição - Campo texto) Deve haver um campo de preenchimento obrigatório para que o administrador consiga descrever o serviço que está criando ou editando (até 4000 caracteres)  
  
 

20.   Campo para Orientação - (Campo texto) Deve haver um campo de orientação, que não é obrigatório para todos os Serviços, porém todos devem ter a opção de orientação.  
  


21.   Campo para Dicas - (Campo texto)

 

    1. Dicas sobre o serviço para quem estiver abrindo o atendimento
    2. Dicas de ações ou medidas a serem tomadas pelo aluno.  
  




22.   Campo para de Observações - Campo texto  
  


23.   Caminho alternativo - (Campo texto)

 

24.   Campo para seleção de tipo de serviço (Sincrono ou Assincrono)  
  


25.  Tipo de atendimento: “Síncrono ou assíncrono, ou Ambos”

    1. Seleção de SLA definida por tipo de atendimento  
**Falar com a Renata, sobre a definição de SLA para cada tipoPode haver um serviço que possa ser atendido de forma Síncrona e Assíncrona  
  
  
**



**RN02 \- Acesso ao registro de serviço.  **

Como **Gestor Aluno** , é necessário que eu consiga **criar**  e **editar  **os serviços através da plataforma Salesforce. 

 

**RN03 - Permitir reabertura**

Deve existir um campo que viabiliza a opção de pedido de reabertura e quantas vezes seja necessário.

Permitir reabertura? (booleano)

Quantidade de reaberturas (Inteiro)**  
**

**RN04 - Viabilizar cancelamento do serviço pelo aluno**  
Deve existir um campo que viabiliza a opção de pedido de cancelamento do serviço em andamento.

Permitir pedido de cancelamento? (booleano)

  


**​OBS.: Inatividade: Dependendo do tema o serviço, o mesmo pode ser encerrado por inatividade do aluno.**  
  
**RN05 - SLA**  
  
O SLA total deverá ser estipulado com o somatório dos SLAs dos colaboradores do fluxo de atendimento. Ex fictício: Fluxo de atendimento de Bolsa Convênio:  
  
Atendimento - 2h (Se o serviço for assincrono, o preenchimento da primeira etapa atendimento é obrigatória)  
Backoffice - 4h  
Financeiro - 8h  
SLA TOTAL: 14 horas  


  
**RN06 - Opções de pagamento**  
Deve haver um campo que permita ao Gestor Aluno selecionar se o Serviço é pago ou não  
  


Sim (sistema disponibiliza as opções a seguir)

Não (sistema não disponibiliza as opções a seguir)  
A partir do voto de "sim" na pergunta anterior, o sistema disponibiliza as seguintes opções:  
Taxa de Serviço (opção de associar uma taxa existente)  
Permitir cobrança na mensalidade? (Sim/Não)  
Cobrar aluno FIES/Prouni? (Sim/Não)

 

**RN07 - Permissão de duplicidade**  
Deve haver no Serviço, uma opção que permita dizer se um aluno pode ter dois serviços iguais abertos simultaneamente. Seguindo as seguintes opções:  
Permitir duplicidade de Serviço?  
Sim (Aluno pode ter dois serviços do mesmo tipo em aberto ao mesmo tempo) Quantidade.  
Não (uma vez que um aluno tenha um serviço em aberto, ao tentar abrir outro do mesmo tipo ele deve ser impedido e receber uma mensagem de aviso como: "Esse serviço já foi solicitado. Aguarde a resolução para poder  abrir novamente.")

Um mesmo CPF com duas ou mais matriculas, não deve ter o seriço considerado duplicidade em matriculas diferentes.  
  
**RN08 - Ativo ou Inativo**  
Serviços que foram inativados pelo Gestor aluno, não podem ser vistos pelo Aluno ou pelo Atendente. Mas podem ser reativados posteriormente. Obs: Inativação, não é exclusão.
