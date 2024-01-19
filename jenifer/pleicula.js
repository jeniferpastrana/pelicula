// selectores
const inputTile = document.querySelector("#search")
const container = document.querySelector(".container-cards");
container.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-snow.more")) {
        const id = event.target.getAttribute("id-movie")
        console.log(id);
        loadShowMore(id)

    }
    if(event.target.classList.contains("bx-arrow-back")){
        // const title=event.target.getAttribute("title-movie")
        
        callToApi(inputTile.value)

    }
})


async function loadShowMore(id) {
    const URL = `https://www.omdbapi.com/?apikey=690d22ef&i=${id}`

    const response = await fetch(URL)
    const data = await response.json()
    printSnowMore(data);
}




function printSnowMore(movie) {

    cleanHTML()
    console.log(movie)
    // destructuracion del objeto moive
    //1 primera forma de acceder

    // 2. segunda forma =movie["porter"]
    // 3 la propiedad {Poster}= movie;
    const { Title, Poster, Language, Year, Writer, Released, Country, Actors, Plot, BoxOffice } = movie
    container.innerHTML = `<div class =" card-snow-more">
     <i class='bx bx-arrow-back' title-movie = "${Title}"></i>
     <img   src ="${Poster}"/>

     <div>
     
     
     <p> <span>"${Language}"</span></p>
     <p> año :<span>"${Year}"<span></p>
     <p> escritor :<span>"${Writer}"<span></p>
     <p> escritor :<span>"${Released}"<span></p> 
     <p> escritor :<span>"${Country}"<span></p>
     <p> escritor :<span>"${Actors}"<span></p>
     <p> escritor :<span>"${Plot}"<span></p>
     <p> presupuesto  :<span>"${BoxOffice}"<span></p>
     <p> escritor :<span>"${Title}"<span></p>
     

    </diV>
     
     </div>`



}
let timer


inputTile.addEventListener("input", (e) => {
    // event =evento que ocurrio
    // la etiqueta donde ocurrio
    // el valor del input


    // hacemos un backdrop de forma manual en java script
    clearTimeout(timer)

    timer = setTimeout(() => {
        console.log();
        callToApi(e.target.value)
    }, 500);
    // llamdo ala api
    // callToApi()

})

// funcion para hacer el llamado ala api
async function callToApi(title) {

    const URL = `https://www.omdbapi.com/?apikey=690d22ef&s=${title}`
    // const URL =`https://api.escuelajs.co/api/v1/products`
    const response = await fetch(URL)
    console.log(response);
    const data = await response.json()
    console.log(data.Search);
    // funcion parea imprimir en el html los detalles de  la pelicula 
    prinMovies(data.Search)
}

// funcion para mostar la peliculas en el html
function prinMovies(movies) {

    // limpiar html

    cleanHTML()


    // validar que si existe pelicula

    if (!movies) {
        const titleError = document.createElement("h2")
        titleError.textContent = "la pelicula no fue encontrada  "
        titleError.classList.add("alert")
        container.appendChild(titleError)
    }
    // recorremos la lista

    movies.forEach(movie => {
        // inyectra 
        container.innerHTML += `<div class="card">

        <h2  class="title-movie">${movie.Title}</h2>
    
        <img src="${movie.Poster}" alt="">
    
          <p>Año  <span>${movie.Year}</span></p>
          <p>Tipo   <span>${movie.Type}</span></p>
          <button class="btn-snow.more" id-movie="${movie.imdbID}">ver mas </button>
      </div>`




    })



}


function cleanHTML() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)

    }


}


