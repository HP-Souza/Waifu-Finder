const apiUrl = "https://api.waifu.im/search"; // Replace with the actual API endpoint URL

let params = {
  is_nsfw: "false",
};

console.log(params)

const queryParams = new URLSearchParams();

for (const key in params) {
  if (Array.isArray(params[key])) {
    params[key].forEach((value) => {
      queryParams.append(key, value);
    });
  } else {
    queryParams.set(key, params[key]);
  }
}
const requestUrl = `${apiUrl}?${queryParams.toString()}`;

fetch(requestUrl)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Request failed with status code: " + response.status);
    }
  })
  .then((data) => {
    // Process the response data as needed
    console.log(data);
  })
  .catch((error) => {
    console.error("An error occurred:", error.message);
  });

  function pesquisar() {
    let tags = document.querySelector(".input-tag").value;
    dados(tags);
  }

  function tag(tags){
    dados(tags)
  }

async function dados(tags) {
  let dados = await fetch("https://api.waifu.im/search").then((response) =>
    response.json()
  );
  console.log(dados);
  exibirDados(dados);
}

function exibirDados(dados) {
  document.querySelector(".imagem").src = dados.images[0].url;
  if(dados.images[0].artist == null){
    document.querySelector(".artista").innerHTML = "Sem artista indentificado"
  }
  else{
    document.querySelector(".artista").innerHTML = dados.images[0].artist.name;
  }
  
}
