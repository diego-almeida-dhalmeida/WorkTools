---
id: "WI-372802"
title: "[Class Manager] Encarteiramento"
type: "User Story"
state: "New"
area: "Atila 2.0\COE RELACIONAMENTO"
iteration: "Atila 2.0"
assignedTo: "Carlos Henrique da Costa Cavalcanti"
created: "2024-05-06T14:05:17.457Z"
changed: "2025-01-23T09:39:59.86Z"
---
# WI-372802 - [Class Manager] Encarteiramento

**Link ADO:** [https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/372802](https://dev.azure.com/arquiteturaestacio/Atila%202.0/_workitems/edit/372802)

## 1. Identificação

- **ID/Ref:** WI-372802
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

**_Cenário 01: Criação do objeto de Carteira de Atendimento_**

DADO QUE: Sou um usuário com perfil "Curador - Aluno".   
QUANDO: Eu criar uma nova Carteira de Atendimento.  
ENTÃO:   


  * Devo ser capaz de criar, editar e visualizar registros no objeto.
  * Os usuários com perfil "Gestor - Aluno" e "Atendente - Aluno" devem ser capazes de visualizar o registro.



RESULTADO ESPERADO: O objeto de Carteira de Atendimento é criado com sucesso e os acessos são concedidos conforme especificado para os diferentes perfis de usuário.  
RESULTADO NÃO ESPERADO: Usuários com perfis não autorizados conseguem editar ou visualizar registros da Carteira de Atendimento.

**_  
_**

**_Cenário 02: Campos do objeto Carteira de Atendimento_**

DADO QUE: Estou criando uma Carteira de Atendimento.   
QUANDO: Preencher os campos obrigatórios do objeto.   
ENTÃO: Todos os campos listados na descrição da RN02 devem estar disponíveis para preenchimento.  
RESULTADO ESPERADO: A Carteira de Atendimento é criada com todos os campos especificados preenchidos conforme necessário.  
RESULTADO NÃO ESPERADO: Campos obrigatórios estão ausentes ou preenchidos incorretamente.

**_Cenário 03: Ativação de carteira_**

DADO QUE: Sou um usuário com perfil "Curador - Aluno".   
QUANDO: Eu criar uma nova Carteira de Atendimento e solicitar sua ativação.   
ENTÃO:

  * Deve haver um botão na tela do registro da carteira para ativação. 
  * Antes da ativação, as críticas das RN04 e RN05 devem ser realizadas. 



RESULTADO ESPERADO: O processo de ativação da Carteira de Atendimento está disponível e funciona conforme o esperado.   
RESULTADO NÃO ESPERADO: O botão de ativação não está presente ou não funciona conforme esperado.

**_Cenário 04: Crítica de criação de Carteira de Atendimento - Nome_**

DADO QUE: Estou tentando criar uma nova Carteira de Atendimento com um nome já existente.   
QUANDO: Submeter o formulário para criação da carteira.   
ENTÃO: O Salesforce deve impedir a criação e exibir uma mensagem de erro indicando a existência de outra carteira com o mesmo nome, incluindo um link para o registro existente.  
RESULTADO ESPERADO: O sistema impede a criação de uma carteira com nome duplicado e fornece uma mensagem de erro informativa.   
RESULTADO NÃO ESPERADO: A mensagem de erro não é exibida corretamente ou não contém o link para o registro existente.

**_RN05: Crítica de criação de Carteira de Atendimento - Características_**

DADO QUE: Estou tentando criar uma nova Carteira de Atendimento com características iguais a uma já existente.   
QUANDO: Submeter o formulário para criação da carteira.   
ENTÃO: O Salesforce deve impedir a criação e exibir uma mensagem de erro indicando a existência de outra carteira com características idênticas, incluindo um link para o registro existente.   
RESULTADO ESPERADO: O sistema impede a criação de uma carteira com características duplicadas e fornece uma mensagem de erro informativa.   
RESULTADO NÃO ESPERADO: A mensagem de erro não é exibida corretamente ou não contém o link para o registro existente.

**_Cenário 06: Vínculo da carteira com matrícula_**

DADO QUE: Estou visualizando uma matrícula no sistema.   
QUANDO: A matrícula está vinculada a uma Carteira de Atendimento.   
ENTÃO: Deve haver uma sessão no objeto da matrícula para registro da Carteira de Atendimento, contendo os campos especificados.   
RESULTADO ESPERADO: A Carteira de Atendimento é vinculada corretamente à matrícula e os campos relevantes são preenchidos conforme necessário.   
RESULTADO NÃO ESPERADO: O vínculo não é criado corretamente ou os campos não são preenchidos como esperado.

**_Cenário 07: Gatilho de atualização da carteira_**

DADO QUE: Houve uma atualização em algum campo da matrícula usado na seleção da Carteira de Atendimento.   
QUANDO: A alteração é salva.   
ENTÃO:   


  * O relacionamento entre a Carteira de Atendimento e a Matrícula deve ser revisado para garantir que a matrícula esteja na carteira correta.
  * O campo "Último cálculo Carteira" deve ser atualizado conforme necessário. 



RESULTADO ESPERADO: O sistema revisa o relacionamento entre a Carteira de Atendimento e a Matrícula automaticamente após qualquer alteração relevante na matrícula.  
RESULTADO NÃO ESPERADO: O sistema não atualiza corretamente o relacionamento ou o campo "Último cálculo Carteira".


## 9. Descrição (Abaixo vem do Azure DevOps)

**Eu  **como aluno de qualquer marca YDUQS

**Quero  **fazer parte de uma carteira de atendimento

**Para** receber atendimento personalizado pelo meu encarteirador Class Manager

  
  


**_REGRAS DE NEGÓCIO:_****__**

 ****

**_RN01: Criação do objeto de Carteira de Atendimento_**

Deverá ser criado um novo objeto para gestão (criação, edição e visualização) das Carteiras de Atendimento.

**  
**

Acesso por perfil:

  * "Curador - Aluno" poderá criar e editar registros no objeto
  * "Gestor \- Aluno" e "Atendente \- Aluno" poderão visualizar o registro



**  
**

****_RN02: Campos do objeto Carteira de Atendimento_**  
**

Para criação de uma Carteira de Atendimento, os seguintes campos deverão estar disponíveis:  


  * Informações gerais
    * Carteira de Atendimento (texto livre)
    * Status (ativo x inativo)
    * Descrição
  * Responsáveis pelo atendimento
    * Atendente principal (fila de atendimento - com lookup)
    * Atendente suplente (fila de atendimento - com lookup)
  * Canais disponíveis (obs.: campos podem ser resumidos a um único campo multi seleção)
    * WhatsApp (Flag)
    * Chat (Flag)
    * Voz (Flag)
    * Requerimentos (Flag)
    * Reclame Aqui (Flag)
    * Reclamações (Flag)
    * Secretarias (Flag)
    * Coordenação de curso (Flag)
    * Ouvidoria (Flag)
    * Polos (Flag)
  * Segmentação de alunos
    * Marca (lista multi seleção)
    * Grupo marca (lista multi seleção)
    * IES (lista multi seleção)
    * Tipo de Unidade (lista multi seleção)  

    * Tratamento Campus/Polo (regra para selação ou exclusão)  

    * Modalidade (lista multi seleção)
    * Tipo de Curso (lista multi seleção)
    * Tratamento Cursos (regra para selação ou exclusão)
    * Indicação Período Inicial (regra para escolher **> =** ou **< =** ou **<**  ou **>)**  

    * Período Inicial (valor numérico)
    * Indicação Período Final (regra para escolher **> =** ou **< =** ou **<**  ou **>)**  

    * Período Final (valor numérico)
    * Situação Acadêmica (lista multi seleção)
    * Renovado (sim, não, todos)
  * Cursos Aluno (vínculo com lista de cursos) 
  * Campus/Polo (vínculo com lista de campus/polo) 



Exemplos de visualização em tela 

![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/10124b11-d58a-4db8-bdda-c84839355848?fileName=image.png)  


  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/bbb4c6c5-939c-4a35-a193-9ff26cc85826?fileName=image.png)  


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/5491acf7-f916-42cc-9c8c-9d9279e7dae7?fileName=image.png)  


  


  


**_**_RN03: Ativação de carteira_**  
_**

Após a criação de uma Carteira de Atendimento, deverá ser realizado o processo de ativação da certeira, através de um botão na tela do registro da carteira. Antes de ativar a carteira, as críticas das RN04 e RN05 deverão ser realizadas.  


Acesso por perfil:

  * "Curador - Aluno" poderá criar e editar registros no objeto



**_**_  
_**_**

**RN04: Crítica de criação de Carteira de Atendimento - Nome**

Ao tentar criar uma nova Carteira de Atendimento com o nome igual a alguma outra já existente, o SalesForce deverá impossibilitar a criação e apresentar uma mensagem de erro informando a existência da outra carteira, identificando também o nome da carteira e um link direcionado para o registro, visando facilitar a identificação.

**Mensagem a ser disponibilizada**

> "Infelizmente já há outra Carteira de Atendimento com este nome:  (__Carteira.de.Atendimento__)  
> 
> 
> Por favor, tente outro nome"
>
>> _
>> 
>> _
>> 
>>   
> 
> 
> ******  
> ******

******_RN05: Crítica de criação de Carteira de Atendimento -__****Características****_******  
Ao tentar criar uma nova Carteira de Atendimento com as mesmas características de alguma já existente, o SalesForce deverá impossibilitar a criação e apresentar uma mensagem de erro informando a existência da outra carteira, identificando também o nome da carteira e um link direcionado para o registro, visando facilitar a identificação. 

> **
> 
> **
> 
> ****

**Mensagem a ser disponibilizada**  


> "Infelizmente já há outra Carteira de Atendimento com estas características:  (__Carteira.de.Atendimento__)  
> 
>
>>   
> 
> 
> Por favor, revise as características informadas"
> 
> **  
> **

**Campos a serem considerados na verificação:**  


  * Marca (lista multi seleção)
  * Grupo marca (lista multi seleção)
  * IES (lista multi seleção)
  * Tipo de Unidade (lista multi seleção)
  * Tratamento Campus/Polo (regra para selação ou exclusão)
  * Modalidade (lista multi seleção)
  * Tipo de Curso (lista multi seleção)
  * Tratamento Cursos (regra para selação ou exclusão)
  * Indicação Período Inicial (regra para escolher **> =** ou **< =** ou **<**  ou **>)**
  * Período Inicial (valor numérico)
  * Indicação Período Final (regra para escolher **> =** ou **< =** ou **<**  ou **>)**
  * Período Final (valor numérico)
  * Situação Acadêmica (lista multi seleção)
  * Renovado (sim, não, todos)



>   
> 

****_RN06: Vínculo da carteira com matrícula_**  
**

No objeto da matrícula, deverá existir uma nova sessão para registro da "Carteira de Atendimento".  
Nela, estarão contidos os seguintes campos:

  * Carteira de atendimento (lookup com carteira na qual aluno está contido)
  * Último cálculo Carteira (data e hora)



  


Acesso por perfil:  


> Curador - Aluno, Gestor \- Aluno e Atendente \- Aluno poderão visualizar o registro
> 
> Edição dos campos deverá ser realizada de forma automática ou pelo administrador do sistema

  


  


Exemplos de visualização em tela   


![Image](https://dev.azure.com/ArquiteturaEstacio/db028a6d-95bf-4de3-8a6d-3b5bdaa4f8d7/_apis/wit/attachments/f0c0a1a8-5c90-40bb-973b-8e3af130af28?fileName=image.png)  


****  
****

******_RN07: Gatilho de atualização da carteira_**  
****

Sempre que houver atualização de algum campo da matrícula que é utilizado na seleção da Carteira de Atendimento, o relacionamento entre Carteira de Atendimento e Matrícula deverá ser revisado para garantir que a Matrícula está alocada na carteira correta. Quando houver alteração, o campo Último cálculo Carteira deverá ser atualizado.  
Além disso, ao zerar o campo "Último cálculo Carteira" o cálculo de identificação de carteira para a matrícula deverá ser refeito automaticamente

****  
****

****  
****
