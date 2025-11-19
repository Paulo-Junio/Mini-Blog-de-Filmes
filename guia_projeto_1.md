# Guia de Execução: Projeto 1 - Mini-Blog de Filmes

## 🎬 Objetivo do Projeto

Criar um mini-blog que busca informações de filmes em uma **API pública** e as exibe em um layout organizado usando **Grid**.

### Conteúdos Revisados

| Conteúdo | Onde é Usado |
| :--- | :--- |
| **HTML** | Estrutura básica, tags `<header>`, `<main>`, `<footer>`. |
| **CSS** | Estilização de cores, fontes e sombras. |
| **Grid** | Organização dos cartões de filmes na página. |
| **JavaScript** | Funções, `fetch()` (Requisição API), `async/await`. |
| **JSON/Objetos** | Receber e ler os dados da API (título, nota, imagem). |
| **DOM** | Criar e inserir os cartões de filmes no HTML. |
| **Loops** | Percorrer a lista (Array) de filmes recebida da API. |

## 🛠️ Passos para a Execução

### 1. Estrutura HTML (`index.html`)

O HTML é simples. Ele apenas cria o cabeçalho e um container vazio (`<main id="container-filmes">`) onde o JavaScript irá inserir os filmes.

### 2. Estilização CSS (`style.css`)

O CSS usa o `display: grid` no `#container-filmes` para organizar os cartões de forma responsiva.

### 3. A Magia do JavaScript (`script.js`)

O código JavaScript é o mais importante e faz três coisas principais:

#### A. Buscar os Dados (`buscarFilmes`):

-   Usa a função `fetch()` para fazer a Requisição **GET** para a API.
-   O `await` é usado para "esperar" a resposta da API (como um garçom esperando o prato).
-   `resposta.json()` transforma o **JSON** em um **Objeto JavaScript**.

#### B. Loop e DOM (`mostrarFilmes`):

-   Recebe a lista de filmes (um **Array de Objetos**).
-   Usa um **Loop `for...of`** para percorrer cada Objeto de filme.
-   Para cada filme, ele cria uma string HTML (o cartão) e usa o **DOM** (`containerFilmes.innerHTML += ...`) para adicionar o cartão à página.

#### C. Acessando o Objeto:

-   Dentro do loop, ele acessa as informações do Objeto do filme, como `filme.title` e `filme.vote_average`, para mostrar na tela.

## 💡 Dica de Desafio

Tente adicionar um campo de busca no cabeçalho (`<input type="text">`) e, ao digitar, mude a URL da API para buscar filmes com aquele nome! (Isso exigirá o evento `change` ou `input` e o `fetch()` novamente).
