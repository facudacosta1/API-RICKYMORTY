function getCharacters(done){
    const results = fetch('https://rickandmortyapi.com/api/character')

    results
        .then(response => response.json())
        .then (data => {
            done(data);
        })
}

getCharacters(data => {
    console.log(data);

    data.results.forEach (personaje => {
        const article= document.createRange().createContextualFragment(/*html*/ `
            <article>

                <div class="image-container">
                    <img src="${personaje.image}" alt="Personaje">
                </div>

                <h2>${personaje.name}</h2>
                <span>Especie: ${personaje.species}</span>
                
            </article>
        ` );

        const main = document.querySelector('main');

        main.append(article)
    })
} );

const title = document.querySelector('h1');

title.addEventListener('mouseover', function(e){
    title.className = 'change-title';
})

title.addEventListener('mouseout', function(){
    title.className= 'title'
})