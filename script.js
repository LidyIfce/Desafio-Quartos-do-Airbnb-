window.onload = function () {
    let xmlhttp = new XMLHttpRequest();
    let url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            preencherCartoes(JSON.parse(this.responseText))
        }
    };

    xmlhttp.open('GET', url);
    xmlhttp.send();
}

function preencherCartoes(array) {
    let out = ""

    for (i in array) {
        
        let {photo, price, name, property_type} = array[i]

        out += `<div class="col-md-4 card">
                    <a href="#" id="cardLink">
                        <img src="${photo}" class="card-img-top" id="imagemCards" alt="...">
                        <div class="card-body">
                            <h5 class="card-title" id = "titleCard">R$ ${price}</h5>
                            <h6 class="card-subtitle mb-2 text-muted" id = "subtitleCard"> ${property_type}</h6>
                            <p class="card-text" id = "descCard">${name}</p>
                        </div>
                </a>
            </div>`
    }

    document.getElementById("cartoes").innerHTML = out;

}


