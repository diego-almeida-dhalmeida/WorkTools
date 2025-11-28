---
id: "WI-338456"
title: "[Telefonia] Retenção - Cascata de Retenção"
type: "User Story"
state: "Closed"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2024-01-22T22:12:53.52Z"
changed: "2025-03-13T14:34:41.693Z"
---
# WI-338456 - [Telefonia] Retenção - Cascata de Retenção

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/338456](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/338456)

## 1. Identificação

- **ID/Ref:** WI-338456
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

**Cenário 01: Navegação automatizada do Atendente**

****

Cenário 02: Navegação entre abas

****

Cenário 03: Perguntas automatizadas

****

**Cenário 04: Edição dos textos nas telas**

**

Cenário 05: Atualização do fluxo Low-Code

****

Cenário 06: Fluxo Atrito

****

Cenário 07: Aluno Retido

****Cenário 08: Aluno não retido******

****Cenário 09: Pergunta editável****

****Cenário 10: Erro ao responder automaticamente uma pergunta**  
**


## 9. Descrição (Abaixo vem do Azure DevOps)

****

****

**

**

**

**

Eu como atendente do canal de retenção VOZ

Quando houver uma ligação

Quero ter um fluxo guiado com as argumentações que devo usar para reter o aluno

  


Exemplo do fluxo da cascata: https://miro.com/app/board/uXjVN4iWQ8k=/?share_link_id=49413481729

  


RN01: Fluxo guiado na tela do atendente

Ao receber o atendimento, o atendente de retenção VOZ deve ter na sua tela os fluxos guiados de retenção para argumentação. Esses fluxos são uma série de etapas que devem aparecer para o atendente usar na argumentação de retenção. Eles são compostos por perguntas e respostas que ocorrem ao longo da navegação para definir quais etapas e quais textos devem aparecer para cada atendimento. 

  


O fluxo estará disponível em uma nova aba na tela de atendimento chamada “Argumentação”, logo após a aba do Financeiro. O atendente deve conseguir mudar de aba e voltar para a mesma tela que estava, assim conseguindo consultar outras informações do aluno e não perder a etapa do fluxo. Segue o exemplo abaixo:

  


![](https://lh7-us.googleusercontent.com/l4j5HAu6psXe7NsDXsyVLp80iJsjrNe7AAGuPGP8jshMJlCSOwMq1E8Dyj0qZkkV93LoAx4EwVGMxI6ZMkTRr4OziUOOpkVMmF6DhsWuU0Pl3aOwp6KE6TTszO8YUag8cKhXIVvkDBd5Y52V-0UDYvI)

  


Para disparar um fluxo, o atendente deverá selecionar o tópico principal do fluxo na seleção de botões inicial descrita na RN07. Cada tela após entrar em um fluxo específico será definida por uma etapa daquele fluxo. Em cada etapa vamos ter os blocos de texto que definem a linha de argumentação que o atendente deve usar para aquele aluno. Esse processo de etapas e textos está descrito na RN02.

  


O aluno pode ser retido em qualquer etapa do fluxo, significando que o aluno foi convencido pelo argumento a continuar na instituição. O atendente deve ter a possibilidade de continuar para a próxima etapa do fluxo ou finalizar a navegação, marcando que o aluno foi retido, em qualquer etapa. Isso está detalhado na RN09 e na RN11.

  


**No final do fluxo, o aluno ou é retido, sendo levado para a tela da RN11, ou não é retido, sendo levado para a tela da RN12. Um fluxo pode ser vinculado ao final de outro, deste modo o atendente só deve ir para a tela de Não Retido na última etapa de último fluxo da sequência.**

  


RN02: Relação perguntas, etapas e blocos de texto. 

  


Uma etapa pode ter múltiplos blocos de texto e um fluxo tem múltiplas etapas. Não deve haver limite de etapas por fluxo principal e não deve haver limite de bloco de textos por etapa. Além disso, deve ser possível adicionar ou remover etapas do fluxo e editar/adicionar/remover os blocos de texto de cada etapa. 

  


As perguntas devem poder ser vinculadas a uma etapa ou a um bloco de texto, com a resposta definindo se o atendente irá visualizar aquele argumento. Cada pergunta deve definir as etapas e os blocos de texto que serão usados pelo atendente para aquele atendimento. Por exemplo, imagine que uma etapa tem 3 blocos de texto e queremos que caso a resposta de uma pergunta seja Sim o atendente só visualize 2 desses blocos de texto. Deste modo, a pergunta não está vinculada à etapa e sim a um bloco de texto. O fluxo de etapas será definido pela sequência de perguntas atribuídas ao fluxo escolhido.

  


Importante: O conteudista e o gestor devem conseguir editar os blocos de texto com texto, links e imagens.

  


RN03: Perguntas/Campos de definição do fluxo

As perguntas irão aparecer na tela do atendente na aba de argumentação e, de acordo com a resposta de cada pergunta, a próxima etapa do fluxo será definida. As perguntas devem aparecer ao longo da navegação, guiando o atendente à etapa correta. Por exemplo, se o aluno não for retido na primeira etapa, as perguntas necessárias para definir a próxima etapa devem aparecer. O fluxo anexado demonstra esse processo. Caso o aluno tenha sido retido, o atendente deve selecionar o botão que falará “Aluno Retido” na tela detalhado no RN11.

  


RN4: Perguntas/Campos automatizados

  


Quando a pergunta do formulário for atrelada a um campo já existente, seja ele no Salesforce ou de outra fonte que conseguimos consumir, a resposta deve ser preenchida automaticamente de acordo com a regra estabelecida, sem aparecer na tela do atendente. A regra, descrita na RN15, coloca a resposta em um formato binário de Sim ou Não. O fluxo deve somente mostrar na tela do atendente as perguntas que não temos a resposta automaticamente preenchidas.

  


Importante: Caso ocorra um erro na hora de preencher automaticamente o dado, a pergunta deve entrar para o atendente para ele selecionar sim ou não, como detalhado na RN05

  


As informações específicas da criação e formatação das perguntas estão na RN14 e RN15.

  


RN5: Preencher manualmente os campos/perguntas 

  


Quando a pergunta não for atrelada a um campo já existente da Salesforce ou de outra fonte, o atendente deve selecionar a resposta manualmente na tela. Esse campo será binário (opções de Sim e Não). Ao clicar na resposta, a pergunta deve sumir aparecendo a próxima pergunta ou a próxima etapa do fluxo conectado à pergunta.

  


As informações específicas da criação e formatação das perguntas estão na RN14 e RN15.

  


Segue o exemplo da tela abaixo:

![](https://lh7-us.googleusercontent.com/FR8b8_Km3W6kADEOR-fvKdVClR-qGC_vZp3VjCa32OD3Fx4Be-BndkQBRmG6P-R2jzq33u64jMJ77VxdneC1wIEkjMcRdxQi1rbb-ll8u0S_ewxB28iOJC3IBLgbpPcBvP1UT_R-jMRZwWkWHkK7HIE)

  


Segue parte do fluxo abaixo como exemplo do processo:

![](https://lh7-us.googleusercontent.com/uulKhGYMV3qXJne9xVSuNMiz8EvaHPpnmcKxfBQrzLrTb9bEb4bOJDbsUe3WOGzCOkaWyxSA9dKhRFzACSzs5A6MAniwqgf-btc06aYuh5B-itrD3oQmegHjMLeAmfsu9IvbL91Sslkks6Sc1ixQ0vc)

  
  
  


RN06: Tela Inicial - Fluxo de introdução

Ao entrar na aba de argumentação, o atendente terá uma tela inicial antes de mergulhar nos diversos fluxos de retenção. Essa tela inicial é um fluxo inicial que deve estar presente para todos os atendentes antes da seleção do fluxo de retenção da RN07. Nessa tela, o atendente terá direcionamentos iniciais com as informações que serão comunicadas ao aluno e com instruções sobre o que fazer para iniciar o atendimento. Haverá algumas perguntas para definir o texto correto para aparecer nessa tela. Quando a informação necessária para a pergunta se encontrar no Salesforce ou em outra fonte consumível, as respostas devem ser preenchidas automaticamente. Assim, as informações da tela inicial devem aparecer automaticamente, sem o atendente visualizar as perguntas.

  


Importante: Caso ocorra um erro na hora de preencher automaticamente o dado, a pergunta deve entrar para o atendente para ele selecionar sim ou não, como descrito na RN5.

  


Na tela inicial deve haver um botão de “Iniciar” para selecionar o fluxo de retenção descrito na RN07 que deseja seguir, como no exemplo abaixo:

![](https://lh7-us.googleusercontent.com/J3GCgddaUJa7gR0RpnmBs3Nq9pbHXrtMtJwP_Ph9LjzUnN4WlStnWZczF1w-Za9tJwh9J8RNivbzfySbGuj1ykhiNBGAuSp9V4KyRH0_7SPJyetpAaFDicuuo4YVC45rY6jY1C6XWd5u31h4UOEvKB8)

  


RN07: Botões de seleção de fluxo de retenção

Na tela inicial descrita na RN06, o atendente deve entender a razão da ligação para melhor selecionar o fluxo de retenção que deve seguir. Ao clicar em iniciar, deve aparecer na tela do atendente uma seleção de botões que definirão o fluxo de retenção e ele deve selecionar qual fluxo usar com o aluno. 

  


Cada botão tem um fluxo que é composto por etapas e blocos de texto. Cada tela representará uma etapa, que é composta de diversos blocos de texto, como descrito na RN02.

  


Deve ser possível adicionar novos botões com novos fluxos de etapas e textos. No momento, os botões devem ser os seguintes:

  * Motivos Financeiros

  * Motivos Acadêmicos

  * Motivos Pessoais/Saúde

  * Atrito

    * Detalhado na RN13


  


Segue o exemplo abaixo:

![](https://lh7-us.googleusercontent.com/2vXJDfvbKzKPPCElehaCKccI8o4DnOwtvNzsDXYBIeN8ni8U83zMIBFmt4BTsbtelwjxfSH-tGLgOY6uOQSA7--0g4JQHkEawYltu45spMSuREJ8UCdlIHn7_0s6oqYm7LUzRkxyl6mHg4JpEhBgro4)

  
  


RN08: Conexão de diversos fluxos

Deve ser possível anexar um fluxo no final de outro, assim o atendente será levado para as etapas do segundo fluxo automaticamente ao passar para o próximo argumento no final do primeiro fluxo. É importante que de para vincular um fluxo de retenção a vários outros fluxos, como por exemplo anexar o fluxo Atrito no final dos fluxos de Motivos Acadêmicos, Motivos Financeiros e Motivos Pessoais/Saúde definidos na RN07. Exemplos está no link do Miro que está no início da US.

  


RN09: Tela de etapas do fluxo

  


Após clicar em um botão de seleção, o atendente começará a navegar em um fluxo de retenção, tendo as perguntas que irão definir as próximas etapas. Cada etapa será uma tela e é importante que dê para adicionar texto, imagem e links nos campos de texto das etapas. Além disso, os textos e as etapas devem ser parametrizáveis. Cada botão inicial descrito na RN07 terá seu fluxo de etapas e textos.

  


Na tela de cada etapa, deve haver um botão para:

  * Aluno Retido

    * O atendente deve selecionar esse botão caso o aluno tenha sido retido nessa etapa. A RN11 explicará o botão de Aluno Retido.

  * Próximo Argumento

    * Nesse botão deverá levar o atendente para a próxima etapa caso não tenha conseguido convencer e reter o aluno naquela etapa.

    *  Caso o atendente tenha chegado na última etapa do fluxo dos botões de seleção inicial, o atendente deve ser direcionado para o fluxo de Atrito. 

      * Deve ser possível adicionar fluxos na sequência de outros.

  * Atrito

    * Caso o aluno não queira escutar as próximas etapas de retenção, o atendente deve ter a possibilidade de pular direto para um outro fluxo vinculado ao botão Atrito (nome deve ser parametrizável). No momento, esse botão deve se chamar Atrito, levando o atendente para o fluxo de Atrito que é obrigatório para todos os alunos não retidos. Essa etapa está descrita na RN13.


  


Segue o exemplo abaixo:

![](https://lh7-us.googleusercontent.com/3AN8MpqX7VhXmr60KjvRPPEBtzRcF2y00WaGXH6LS1vu2X61DnDqbuc2UNVl8iykdtjcXYU97Z1tiPwhq1N2y4dfgAoET-pEJQNpKK8dCgxEcDnW85PjfkjP4pBZt9rDm5imIn2H1dVsjwCM4eQVHmc)

  


RN10: Menu de seleção de fluxo nas etapas

Deve ser possível mudar o fluxo escolhido em qualquer momento durante o atendimento, podendo utilizar mais de um fluxo de retenção. Para isso ser possível, deverá ter uma um menu de seleção no canto superior direito de todas as etapas onde os botões de seleção inicial de fluxo da RN07 podem ser selecionados. Ele deve expandir no canto superior direito sem fechar a página atual. 

  


Segue o exemplo abaixo:

![](https://lh7-us.googleusercontent.com/IV9-0wFEkyQ22JVUkvu7qr8zu0n8Id2j2cvBBm-b7asO29dFlGoQOA_C7SwXEeX2Fc9IMrnxJ3UKAEBcCZ8Gx6ObN6YGvatnfgYtssHh9n2uxX7Qdxxpll3GsRlHAhIUAnFw-UDw9_UhVBWr2EgG-iI)

  


RN11: Tela do Aluno Retido

Após cada etapa do fluxo, o atendente deve ter a opção de definir se o aluno foi retido naquela etapa ou não. Caso o aluno for retido, ele deve clicar no botão de Aluno Retido que está em todas as telas de argumentação e ser direcionado para uma tela com as instruções para um aluno retido. Deve ser possível editar o texto dessa tela. 

  


RN12: Tela do Aluno Não Retido

Caso o atendente chegue no final do fluxo de retenção e não tiver um segundo fluxo anexado no final, o atendente deve ser direcionado para a tela de aluno não retido. A tela deve ter um texto editável, podendo adicionar links e imagens.

  


RN13: Atrito

O fluxo de atrito deve ser acessível pela seleção inicial de botões da RN07 e o atendente também deve conseguir chegar nesse fluxo clicando no botão “Atrito” que aparece na tela de todas as etapas dos outros fluxos. Nesse caso, o atendente deve selecionar o botão Atrito e seguir o fluxo antes de finalizar o atendimento. 

  


Caso o atendente não consiga reter o atendente nos outros fluxos de retenção (outros botões de seleção inicial de fluxo) o atendente deve ser enviado para o fluxo de Atrito ao passar para a próxima etapa. Esse processo de anexar um fluxo no final de outro está descrito na RN08

  


No fluxo do Atrito também deve haver o botão de Aluno Retido descrito na RN11 em cada etapa.

  


No processo atual, ao chegar no final do Atrito, o atendente deve ser direcionado para uma tela de Aluno Não Retido. Nessa tela o atendente terá as instruções que ele deve seguir se o aluno não é retido. Deve ser possível editar o texto dessa tela. Essa tela é descrita na RN12.

  


RN14: Formatação das perguntas

Cada pergunta deve seguir o seguinte formato:

  1. Texto da pergunta

     1. Deve ser editável sempre

     2. Exemplo: O aluno é calouro?

  2. Atrelar campo do Salesforce

     1. Responder uma flag se sim ou não

        1. Caso sim, o administrador deve selecionar qual campo deve ser atrelado à pergunta. 

     2. Exemplo: conectar pergunta com campo existente de Calouro ou Veterano

  3. Definição de regra

     1. Só deve ser preenchido se o ponto 2 for igual a Sim. Deve ser possível definir a lógica do que será sim e o que será não. Esse ponto está detalhado na RN15.

     2. Exemplo: Calouro = sim & Veterano = Não.


  


RN015: Regra dos campos do formulário

Quando a pergunta do formulário for atrelada a um campo do Salesforce, deve ser possível definir a regra, definindo o que será igual a Sim e o que será igual a Não.

  


Deve ser possível selecionar se quer preencher o campo com um valor ou texto. 

  


Para o valor de comparação devem ter as seguintes opções:

  * Campo valor

    * Igual a

    * Diferente de

    * Maior que

    * Menor que

    * Maior ou igual a

    * Menor ou igual a

  * Campo texto

    * Igual a

    * Diferente de


  


Segue os exemplos abaixo:

  1. Aluno é calouro? → Campo Calouro e Veterano

     1. Regra do Sim →  texto deve ser igual a Calouro 

     2. Regra do Não → texto deve ser igual a Veterano. 

  2. Aluno presencial? → Campo Modalidade

     1. Regra do Sim →  texto deve ser igual a Presencial

  3. Aluno possui bolsa igual ou maior que 50%?

     1. Regra do Sim →  valor deve ser maior ou igual a 50


  
  
  
  
  
**  


**

**

**

****

********
