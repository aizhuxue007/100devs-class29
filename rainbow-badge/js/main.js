//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const poke1 = document.querySelector('#poke1').value
  const poke2 = document.querySelector('#poke2').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
  const url2 = 'https://pokeapi.co/api/v2/pokemon/'+poke2


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.sprites.front_default)
        document.querySelector('#pokeImg1').src = data.sprites.front_default
        
        

      })
      .catch(err => {
          console.log(`error ${err}`)
      });



      
}