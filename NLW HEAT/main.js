// variaveis: Let ou Const
// let é variável que pode ser mudada depois
//const é variável que não pode mudar o conteúdo
// Constante do tipo Objeto tem que ficar dentro de chaves
/*
      Exemplo de criação de objeto
        let userInfo = {
        name: 'Marcos Paulo',
        phone: 2112345678,
        accept: true
      }
      */
const userSocialMedia = {
  github: 'RoyalBrito',
  youtube: 'LofiGirl',
  facebook: 'brito.mp',
  twitter: 'brito_mp',
  instagram: 'brito_mp'
}

//Como criar uma função, "function" e um nome da função, abre e fecha parêntesis, caso haja parâmetros coloque dentro do parêntesis e abre chaves.
//Quando estiver criando variáveis apenas para a função não tem necessidade de usar o let ou o const
//Depois é só chamar a função dessa forma, chamando o nome da função e os parêntesis
/*Estilos do nomeação das variáveis
      camelCase
      PascalCase
      snake_case
      */
function changeSocialMediaLinks() {
  //Exemplo para pegar um elemento pelo ID utilizando o DOM.
  // const userName = (document.getElementById('userName').textContent ='Learner')
  //userName.textContent = 'Mosquito'
  const userName = (document.getElementById('userName').textContent =
    'Exemplo de mudança')
  const intro = (document.getElementById('introduction').textContent =
    'Exemplo de mudança 2')
  for (let li of socialMediaLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${userSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${userSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      introduction.textContent = data.bio
      userImage.src = data.avatar_url
      userlogin.textContent = data.login
    })
  //Promisse - Recurso da linguagem de programação JS para poder pegar alguma coisa
  //Arrow function é uma forma contraida da função
  //Then significa promessa de pegar algo, no exemplo se o fetch der certo ele vai passar para a promessa
  //fetch comando de pegar uma rota de uma url e vai trazer para alguma variável o que a url responder
}
getGitHubProfileInfos()
