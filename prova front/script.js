var mural = document.getElementById("mural");
var body = document.querySelector("body");

function adicionar(){
    let mu = mural.options[mural.selectedIndex].text;

    let info = document.createElement("div");
    info.className = "info";
    info.style.width = "30vw";
    info.style.height = "15vh";
    info.style.border = "1px solid black";
    info.style.color = "red";

    let mur = document.createElement("p");
    mur.style.fontSize = "30px";
    mur.innerHTML = mu;

    let mensagem = document.querySelector("#mensagem").value;
    console.log(mensagem)

    info.appendChild(mur)
    body.appendChild(info)

    let msg = document.createElement("p");
    msg.innerHTML = mensagem
    info.appendChild(msg)

    let site = document.querySelector("#site").value;

    let link = document.createElement("a");
    link.innerHTML = site
    link.href = site
    info.appendChild(link)
    console.log(site)

    let button = document.createElement("button");
    button.innerHTML = "excluir"
    button.addEventListener(click,()=> {
        info(excluirr)
    })
    info.appendChild(button)

}

function excluirr(element){
    element.remove()
}