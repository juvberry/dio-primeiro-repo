// Um desenvolvedor tentou criar um projeto que consome a base de dados de filme do TMDB para criar um organizador de filmes, mas desistiu 
// pois considerou o seu código inviável. Você consegue usar typescript para organizar esse código e a partir daí aprimorar o que foi feito?

// const https = require('https');
// import{ got } from 'got'

// A ideia dessa atividade é criar um aplicativo que: 
//    - Busca filmes
//    - Apresenta uma lista com os resultados pesquisados
//    - Permite a criação de listas de filmes e a posterior adição de filmes nela

// Todas as requisições necessárias para as atividades acima já estão prontas, mas a implementação delas ficou pela metade (não vou dar tudo de graça).
// Atenção para o listener do botão login-button que devolve o sessionID do usuário
// É necessário fazer um cadastro no https://www.themoviedb.org/ e seguir a documentação do site para entender como gera uma API key https://developers.themoviedb.org/3/getting-started/introduction

let apiKey:string = 'fabb0e3340d2025e4ce26632d735c575';
let requestToken:any;
let username:string ;
let password:string;
let sessionId:any;
let listId:string = '7101979';

let loginButton = document.getElementById('login-button') as HTMLButtonElement;
let searchButton = document.getElementById('search-button');
let searchContainer = document.getElementById('search-container');


interface ObjetoListaFilmes{
    page: number;
    results: Array<ResultsObj>;
    total_pages: number;
    total_results: number
}

interface ResultsObj {
    "adult": boolean,
    "backdrop_path": string,
    "genre_ids": [],
    "id": number,
    "original_language": string,
    "original_title": string,
    "overview": string,
    "popularity": number,
    "poster_path": string,
    "release_date": string,
    "title": string,
    "video": boolean,
    "vote_average": number,
    "vote_count": number
}

interface HttpGet{
    url: string;
    method: string;
    body?: MyBody
}

interface RequestToken{
    "success": boolean,
    "expires_at": string,
    "request_token": string
}

interface Session{
    "success": boolean,
    "session_id": string
}

type MyBody = null | object | string

loginButton?.addEventListener('click', async () => {
    let passwordText = document.getElementById('senha') as HTMLInputElement;
    password = passwordText.value
    let usernameText =  document.getElementById('login') as HTMLInputElement;
    username = usernameText.value
    let apiKeyText = document.getElementById('api-key') as HTMLInputElement;
    apiKey = apiKeyText.value
    await criarRequestToken();
    await logar();
    await criarSessao();
})

searchButton?.addEventListener('click', async () => {
    let lista = document.getElementById("lista");
    if (lista) {
        lista.outerHTML = "";
    }
    let query = document.getElementById('search') as HTMLInputElement;
    let listaDeFilmes:ObjetoListaFilmes = await procurarFilme(query.value);
    let ul = document.createElement('ul');
    ul.id = "lista"
    for(let item of listaDeFilmes.results) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(item.original_title))
        ul.appendChild(li)
    }
    
    console.log(listaDeFilmes);
    searchContainer?.appendChild(ul);
})

function validateLoginButton() {
  let passwordText = document.getElementById('senha') as HTMLInputElement;
  password = passwordText.value
  let usernameText =  document.getElementById('login') as HTMLInputElement;
  username = usernameText.value
  let apiKeyText = document.getElementById('api-key') as HTMLInputElement;
  apiKey = apiKeyText.value
  if(password && username && apiKey) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}

class HttpClient {
  static async get<T>({url, method, body = null}:HttpGet) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open(method, url, true);

      request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
          resolve(JSON.parse(request.responseText));
        } else {
          reject({
            status: request.status,
            statusText: request.statusText
          })
        }
      }
      request.onerror = () => {
        reject({
          status: request.status,
          statusText: request.statusText
        })
      }

      if (body) {
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        body = JSON.stringify(body);
      }
      request.send(body);
    })
  }
}

async function procurarFilme(query: string):Promise<ObjetoListaFilmes> {
  query = encodeURI(query);
  let result = await HttpClient.get<ObjetoListaFilmes>({
    url: `https://api.themoviedb.org/3/search/movie?api_key=` + apiKey + `&query=` + query,
    method: "GET"
  });
 return <ObjetoListaFilmes>result;
}

async function adicionarFilme(filmeId:number) {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${apiKey}&language=en-US`,
    method: "GET"
  })
  console.log(result);
}

async function criarRequestToken () {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/token/new?api_key=` + apiKey,
    method: "GET"
  })
  let variavel = <RequestToken>result
  requestToken = variavel.request_token
  return requestToken
}

async function logar() {
  await HttpClient.get<any>({
    url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=` + apiKey,
    method: "POST",
    body: {
      username: `${username}`,
      password: `${password}`,
      request_token: `${requestToken}`
    }
  })
}

async function criarSessao() {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}&request_token=${requestToken}`,
    method: "GET"
  })
  let variavel =  <Session>result
  sessionId = variavel.session_id;
}

async function criarLista(nomeDaLista:string, descricao:string) {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list?api_key=${apiKey}&session_id=${sessionId}`,
    method: "POST",
    body: {
      name: nomeDaLista,
      description: descricao,
      language: "pt-br"
    }
  })
  console.log(result);
}

async function adicionarFilmeNaLista(filmeId:number, listaId:number) {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list/${listaId}/add_item?api_key=${apiKey}&session_id=${sessionId}`,
    method: "POST",
    body: {
      media_id: filmeId
    }
  })
  console.log(result);
}

async function pegarLista() {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list/${listId}?api_key=${apiKey}`,
    method: "GET"
  })
  console.log(result);
}