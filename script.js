async function getData (){
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`)

    const data = await response.json()

    const pizza = data.recipes

    console.log(pizza)

    const result = pizza.map(function(e){
        return `
        <div class="pizza">
            <h2>${e.title}</h2>
            <img src="${e.image_url}" alt="${e.title}">
        </div>
        `
    }).join('');
    document.querySelector(".recipes").innerHTML = result
}
getData()