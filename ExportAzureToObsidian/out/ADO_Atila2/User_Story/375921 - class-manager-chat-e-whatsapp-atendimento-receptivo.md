---
id: "WI-375921"
title: "[Class Manager] Chat e WhatsApp - Atendimento Receptivo "
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2024-05-15T11:08:42.643Z"
changed: "2025-01-23T09:40:51.917Z"
---
# WI-375921 - [Class Manager] Chat e WhatsApp - Atendimento Receptivo 

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/375921](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/375921)

## 1. Identificação

- **ID/Ref:** WI-375921
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

**RN01: Disponibilização do serviço no BOT**

DADO QUE: O aluno entra em contato com o BOT. 

QUANDO: O aluno está associado a uma Carteira que está habilitada para o canal. 

ENTÃO: Deverá ser incluída na primeira posição do Menu Inicial a opção "Class Manager". 

RESULTADO ESPERADO: 

  * Alunos encarteirados verão "Class Manager" na primeira posição do menu inicial, seguido pelas outras opções padrão. 
  * Alunos não encarteirados verão as opções padrão no menu inicial. 



RESULTADO NÃO ESPERADO: 

  * Alunos encarteirados não veem a opção "Class Manager". 
  * Alunos não encarteirados veem a opção "Class Manager". 

  


  


**RN02: Opções de navegação - outro desfecho**

DADO QUE: O aluno seleciona uma opção do menu no BOT. 

QUANDO: A opção selecionada não é "Class Manager". 

ENTÃO: O BOT deverá se comportar da forma padrão. 

RESULTADO ESPERADO: O BOT responde de acordo com o comportamento padrão para as opções do menu. 

RESULTADO NÃO ESPERADO: O BOT não se comporta conforme esperado para as opções padrão do menu. 

  


**RN03: Opções de navegação - desfecho Class Manager**

DADO QUE: O aluno seleciona a opção "Class Manager" no menu do BOT. 

QUANDO: A opção "Class Manager" é selecionada. 

ENTÃO: Deve ser apresentada uma FAQ com o nome do Class Manager principal e seu horário de atendimento, preenchidas automaticamente de acordo com a Carteira do aluno. 

RESULTADO ESPERADO: 

  * A FAQ apresenta corretamente o nome do Class Manager principal e o horário de atendimento. 
  * As informações são preenchidas automaticamente e o texto é parametrizável pelo "Curador - Aluno". 
  * Após a FAQ, são apresentadas as opções "Falar com atendente", "Voltar ao menu inicial", e "Encerrar Conversa". 



RESULTADO NÃO ESPERADO: 

  * A FAQ não apresenta corretamente as informações do Class Manager. 
  * As opções de navegação subsequentes não estão disponíveis ou não funcionam corretamente. 

  


  


**RN04: Transbordo para Class Manager principal**

**Cenário 4.1: Dentro do horário e atendente disponível**

DADO QUE: O aluno seleciona a opção "Falar com atendente" na FAQ do "Class Manager". 

QUANDO: O horário está dentro do horário de atendimento e o atendente principal está disponível. 

ENTÃO: O aluno deve ser direcionado para a fila de atendimento, respeitando a capacidade de atendimento do atendente. 

RESULTADO ESPERADO: 

  * O aluno é direcionado corretamente para a fila de atendimento. 
  * A capacidade de atendimento do atendente é respeitada. 



RESULTADO NÃO ESPERADO: 

  * O aluno não é direcionado para a fila de atendimento. 
  * A capacidade de atendimento do atendente não é respeitada. 



Cenário 4.2: Fora do horário de atendimento  


DADO QUE: O aluno seleciona a opção "Falar com atendente" na FAQ do "Class Manager". 

QUANDO: O horário está fora do horário de atendimento. 

ENTÃO: O BOT deve disponibilizar uma mensagem padrão de fora do horário com as opções de "Voltar ao Menu Inicial" e "Encerrar conversa". 

RESULTADO ESPERADO: 

  * O aluno recebe uma mensagem padrão indicando que o atendimento está fora do horário. 
  * As opções "Voltar ao Menu Inicial" e "Encerrar conversa" são apresentadas e funcionam corretamente. 



RESULTADO NÃO ESPERADO: 

  * O aluno não recebe a mensagem de fora do horário. 
  * As opções "Voltar ao Menu Inicial" e "Encerrar conversa" não são apresentadas ou não funcionam corretamente. 



**RN05: Validação de transbordo para Class Manager secundário**

DADO QUE: O aluno seleciona a opção "Falar com atendente" e o atendente principal está indisponível dentro do horário de atendimento. 

QUANDO: O BOT oferece transbordo para o atendente secundário. 

ENTÃO: O aluno deverá receber uma mensagem perguntando se deseja ser atendido por um suplente, com o texto parametrizável pelo "Curador - Aluno". 

RESULTADO ESPERADO: 

  * Mensagem de validação é apresentada corretamente com opções de "Falar com atendente", "Voltar ao menu inicial", e "Encerrar Conversa". 
  * O aluno pode escolher entre as opções de forma funcional. 



RESULTADO NÃO ESPERADO: 

  * A mensagem de validação não aparece ou está incorreta. 
  * As opções de navegação subsequentes não estão disponíveis ou não funcionam corretamente. 



**RN06: Transbordo para Class Manager secundário**

**Cenário 1: Dentro do horário e atendente secundário disponível**

DADO QUE: O aluno selecionou a opção "Falar com atendente" na validação de transbordo para Class Manager secundário. 

QUANDO: O horário está dentro do horário de atendimento e o atendente secundário está disponível. 

ENTÃO: O aluno deve ser direcionado para a fila de atendimento do atendente secundário, respeitando a capacidade de atendimento. 

RESULTADO ESPERADO: 

  * O aluno é direcionado corretamente para a fila do atendente secundário. 
  * A capacidade de atendimento do atendente secundário é respeitada. 



RESULTADO NÃO ESPERADO: 

  * O aluno não é direcionado para a fila do atendente secundário. 
  * A capacidade de atendimento do atendente secundário não é respeitada. 



**Cenário 2: Dentro do horário e atendente secundário indisponível**

DADO QUE: O aluno selecionou a opção "Falar com atendente" na validação de transbordo para Class Manager secundário. 

QUANDO: O horário está dentro do horário de atendimento, mas o atendente secundário está indisponível. 

ENTÃO: O BOT deve disponibilizar uma mensagem padrão de indisponibilidade do atendente com as opções de "Voltar ao Menu Inicial" e "Encerrar conversa". 

RESULTADO ESPERADO: 

  * O aluno recebe uma mensagem padrão de indisponibilidade do atendente. 
  * As opções "Voltar ao Menu Inicial" e "Encerrar conversa" são apresentadas e funcionam corretamente. 



RESULTADO NÃO ESPERADO: 

  * O aluno não recebe a mensagem de indisponibilidade do atendente. 
  * As opções "Voltar ao Menu Inicial" e "Encerrar conversa" não são apresentadas ou não funcionam corretamente. 



**Cenário 3: Fora do horário de atendimento**

DADO QUE: O aluno selecionou a opção "Falar com atendente" na validação de transbordo para Class Manager secundário. 

QUANDO: O horário está fora do horário de atendimento. 

ENTÃO: O BOT deve disponibilizar uma mensagem padrão de fora do horário com as opções de "Voltar ao Menu Inicial" e "Encerrar conversa". 

RESULTADO ESPERADO: 

  * O aluno recebe uma mensagem padrão indicando que o atendimento está fora do horário. 
  * As opções "Voltar ao Menu Inicial" e "Encerrar conversa" são apresentadas e funcionam corretamente. 



RESULTADO NÃO ESPERADO: 

  * O aluno não recebe a mensagem de fora do horário. 
  * As opções "Voltar ao Menu Inicial" e "Encerrar conversa" não são apresentadas ou não funcionam corretamente. 



**RN07: Criação e edição da FAQ Class Manager**

DADO QUE: O usuários curador - aluno entra no sistema para fazer alterações nas FAQs 

QUANDO: For necessário alterar o texto enviado na FAQ de Class Manager 

ENTÃO: O texto deverá ser parametrizável pelo "Curador - Aluno" e conter os dados de "Horário de atendimento" e "Nome do Class Manager" que serão preenchidos automaticamente de acordo com a carteira do aluno. 

RESULTADO ESPERADO: 

  * A FAQ é editável e os dados são preenchidos automaticamente de acordo com a carteira do aluno. 



RESULTADO NÃO ESPERADO: 

  * A FAQ não é editável ou os dados não são preenchidos automaticamente. 



**RN08: Criação e edição do texto da validação de transbordo para Class Manager secundário**

DADO QUE: A validação de transbordo para Class Manager secundário ocorre. 

QUANDO: A mensagem de validação é editada. 

ENTÃO: O texto da mensagem deve ser parametrizável pelo usuário "Curador - Aluno". 

RESULTADO ESPERADO: 

  * O texto da mensagem é editável e pode ser parametrizado conforme necessário. 



RESULTADO NÃO ESPERADO: 

  * O texto da mensagem não é editável ou não pode ser parametrizado. 



**RN09: Marcações no caso**

DADO QUE: O aluno interage com o BOT. 

QUANDO: O aluno está vinculado a uma Carteira de Atendimento ou acessa a opção "Class Manager". 

ENTÃO: Os campos "Carteira de atendimento" e "Flag Class Manager" devem ser preenchidos corretamente, além das marcações padrão do sistema. 

RESULTADO ESPERADO: 

  * O campo "Carteira de atendimento" é preenchido corretamente se o aluno estiver vinculado a uma carteira. 
  * O campo "Flag Class Manager" é marcado se o aluno acessou a opção "Class Manager". 
  * As demais marcações seguem as regras padrão do sistema. 



RESULTADO NÃO ESPERADO: 

  * Os campos "Carteira de atendimento" e "Flag Class Manager" não são preenchidos corretamente. 
  * As demais marcações não seguem as regras padrão do sistema.


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu  **como aluno de qualquer marca YDUQS que faça parte de uma carteira

**Quero  **ter a possibilidade de receber atendimento via Chat e WhatsApp do Class Manager responsável pela minha carteira

**Para  **receber um atendimento mais qualificado

  
  


_REGRAS DE NEGÓCIO:_  
_Fluxo geral de navegação no BOT em anexo ( "Class Manager - Receptivo WhatsApp e Chat") ou através do link <https://miro.com/app/board/uXjVKSOrngE=/> (no card "Atendimento WhatsApp e Chat")_

 

**RN01: Disponibilização do serviço no BOT**

Ao entrar em contato com o BOT, caso o aluno esteja associado a uma Carteira que esteja habilitada para o canal, deverá ser incluída na primeira posição do Menu Inicial a opção "Class Manager"

ex.:  


> Aluno encarteirado: 
>
>> 1\. Class Manager 
>
>> 2\. 2ª via de boleto 
>
>> 3\. Histórico Escolar 
> 
> Aluno não encarteirado: 
>
>> 1\. 2ª via de boleto 
>
>> 1\. Histórico Escolar 

  


**RN02: Opções de navegação - outro desfecho**

Caso aluno selecione alguma opção do menu que não seja do Class Manager, o BOT deverá se comportar da forma padrão 

  


**RN03: Opções de navegação - desfecho Class Manager**

Caso aluno selecione a opção "Class Manager", deverá ser apresentada uma FAQ contendo o nome do Class Manager principal e seu horário de atendimento. 

As informações sobre o Class Manager deverão ser preenchidas automaticamente de acordo com a Carteira do aluno.  
**Atenção: o texto deverá ser parametrizável pelo usuário Curador - Aluno**  
  
Além disso, após a apresentação da FAQ, deverão estar disponíveis 3 opções de navegação: 

  1. **Falar com atendente**  
Caso aluno selecione esta opção, o comportamento do BOT deverá ser pautado na RN04
  2. **Voltar ao menu inicial**  
Caso aluno selecione esta opção, ele deverá ser direcionado para o menu inicial
  3. **Encerrar Conversa**  
Caso aluno selecione esta opção, a conversa deverá ser encerrada e a pesquisa de satisfaçã _o_ enviada  




  


**RN04: Transbordo para Class Manager principal**

Após aluno selecionar a opção "Falar com atendente" descrita na RN03, o BOT deverá respeitar os seguintes cenários baseados em horário de atendimento e disponibilidade do atendente: 

  * **Dentro do horário e atendente disponível**  
Direcionamento padrão para fila, respeitando capacidade de atendimento do atendente 
  * **Dentro do horário e atendente indisponível (caminho detalhando na RN abaixo)**  
Oferta de transbordo para atendente secundário, conforme RN05 
  * **Fora do horário**  
Disponibilização de mensagem padrão de fora do horário com as opções abaixo 
    * **Voltar ao Menu Inicial**  
Caso aluno selecione esta opção, ele deverá ser direcionado para o menu inicial  

    * **Encerrar conversa**  
Caso aluno selecione esta opção, a conversa deverá ser encerrada e a pesquisa de satisfaçã _o  _enviada  




**RN05: Validação de transbordo para Class Manager secundário**

Após aluno selecionar a opção "Falar com atendente" descrita na RN03 e a condição de estar dentro do horário do atendimento mas com o atendente indisponível, deverá ser disponibilizado uma mensagem para o aluno questionando se ele quer ser atendido por um suplente.  
**Atenção: o texto deverá ser parametrizável pelo usuário Curador - Aluno**  
  
Além disso, após a apresentação do texto, deverão estar disponíveis 3 opções de navegação:

  1. **Falar com atendente  
** Caso aluno selecione esta opção, o comportamento do BOT deverá ser pautado na RN06
  2. **Voltar ao menu inicial  
** Caso aluno selecione esta opção, ele deverá ser direcionado para o menu inicial 
  3. **Encerrar Conversa  
** Caso aluno selecione esta opção, a conversa deverá ser encerrada e a pesquisa de satisfaçã _o_ enviada



  


**RN06: Transbordo para Class Manager secundário**  


Após aluno selecionar a opção "Falar com atendente" descrita na RN05, o BOT deverá respeitar os seguintes cenários baseados em horário de atendimento e disponibilidade do atendente: 

    * **Dentro do horário e atendente disponível  
** Direcionamento padrão para fila, respeitando capacidade de atendimento do atendente
  * **Dentro do horário e indisponível**  
Disponibilização de mensagem padrão de atendente indisponível com as opções abaixo  

    * **Voltar ao Menu Inicial**  
Caso aluno selecione esta opção, ele deverá ser direcionado para o menu inicial  

    * **Encerrar conversa**  
Caso aluno selecione esta opção, a conversa deverá ser encerrada e a pesquisa de satisfaçã _o  _enviada
  * **Fora do horário**  
Disponibilização de mensagem padrão de fora do horário com as opções abaixo 
    * **Voltar ao Menu Inicial**  
Caso aluno selecione esta opção, ele deverá ser direcionado para o menu inicial  

    * **Encerrar conversa**  
Caso aluno selecione esta opção, a conversa deverá ser encerrada e a pesquisa de satisfaçã _o  _enviada



**RN07: Criação e edição da FAQ Class Manager**  


A FAQ a ser disponibilizada após aluno acessar opção "Class Manager" descrita na RN01 deverá ser parametrizável pelo usuário "Curador - Aluno" e conter os dados de "Horário de atendimento" e "Nome do Class Manager" que serão preenchidos automaticamente de acordo com a carteira do aluno.

  


**RN08: Criação e edição do texto da validação de transbordo para Class Manager secundário**  


O texto a ser utilizado na mensagem de validação do transbordo para o Class Manager secundário descrito na RN05 deverá ser parametrizável pelo usuário "Curador - Aluno"

  


**RN09: Marcações no caso**

  * **Carteira de atendimento**  
Caso aluno esteja vinculado à alguma carteira de atendimento, o campo deverá ser preenchido com a carteira (campo lookup)**  
**
  * **Flag Class Manager  
** Marcar se aluno acessou a opção "Class Manager"

**Atenção:** as demais marcações deverão respeitar as regras padrão do sistema  
Ex.: o campo "Transbordou para humano?" deverá ser preenchido conforma regras padrão para registo dos casos de transbordo
