var divData = document.querySelector("#data");
var divImportar = document.querySelector("#importar");

function adicionar() {
        
 

    let divAtividade = document.createElement("div");

    divAtividade.id = "atividade";

    for(let i = 0; i < 3; i++) {
        let p = document.createElement("p");

        p.innerHTML = data[i];

        divAtividade.appendChild(p);
    }

    let button = document.createElement("button");
    button.innerHTML = "Finalizar";

    button.addEventListener("click", () => {
        finalizar(button);
    });

    let colButtom = document.createElement("form");
    colButtom.appendChild(button);

    divAtividade.appendChild(colButtom);

    divData.appendChild(divAtividade);
    atividade.value = "";
    atividade.value = "";
atividade.value = "";

}

function finalizar (element) {
    
    let data = [atividade.value, atividade.value, atividade.value];
    
    let divAtividade = document.createElement("div");

    divAtividade.id = "atividade";

    for(let i = 0; i < 3; i++) {
        let p = document.createElement("p");

        p.innerHTML = data[i];

        divAtividade.appendChild(p);
    }

    let button = document.createElement("button");
    button.innerHTML = "Finalizar";

    button.addEventListener("click", () => {
        finalizar(button);
    });

    let colButtom = document.createElement("form");
    colButtom.appendChild(button);

    divAtividade.appendChild(colButtom);

    divImportar.appendChild(divPedido);
    
    element.parentNode.parentNode.remove();
}

function finalizar(element) {
    element.parentNode.parentNode.remove();
}