// URL da API pública de filmes (TMDB - The Movie Database)
// Nota: Em um projeto real, seria necessário uma chave de API.
// Usaremos um endpoint simples e público que não exige chave para este exemplo.
const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWUwZGQ2MDhhYTU0ZDljYmExZWM4YWJjOWY0Y2YwZCIsIm5iZiI6MTc0NTgzNDY2My45MDYsInN1YiI6IjY4MGY1MmE3NDYwMzU3MWVhZDBmOGM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-nX88RLTMySS2Tv1WZC5GWrYhPKkb_xgPPT0uE0nvu4&language=pt-BR'
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500'

const containerFilmes = document.getElementById('container-filmes')

// Função principal para buscar os dados da API
async function buscarFilmes() {
    try {
        // 1. Faz a requisição GET para a API
        const resposta = await fetch(API_URL)
        
        // 2. Verifica se a resposta foi bem-sucedida (código 200)
        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`)
        }

        // 3. Transforma a resposta (JSON) em um Objeto JavaScript
        const dados = await resposta.json()
        
        // 4. Chama a função para mostrar os filmes na tela
        mostrarFilmes(dados.results)

    } catch (erro) {
        // 5. Se der erro, mostra uma mensagem no console e na tela
        console.error('Erro ao buscar filmes:', erro)
        containerFilmes.innerHTML = '<p class="erro">Não foi possível carregar os filmes. Verifique a API ou sua conexão.</p>'
    }
}

// Função para manipular o DOM e mostrar os filmes
function mostrarFilmes(filmes) {
    // Limpa a mensagem de "Carregando..."
    containerFilmes.innerHTML = ''

    // 1. Loop (for...of) para percorrer a lista de filmes (Array de Objetos)
    for (const filme of filmes) {
        // 2. Cria o HTML para o cartão de cada filme
        const cartaoHTML = `
            <div class="cartao-filme">
                <img src="${BASE_IMG_URL}${filme.poster_path}" alt="Poster do filme ${filme.title}">
                <div class="info-filme">
                    <h3>${filme.title}</h3>
                    <p>Lançamento: ${filme.release_date}</p>
                    <p>Nota: ${filme.vote_average}</p>
                </div>
            </div>
        `
        // 3. Adiciona o cartão ao container principal
        containerFilmes.innerHTML += cartaoHTML
    }
}

// Inicia a busca quando a página carrega
buscarFilmes()
