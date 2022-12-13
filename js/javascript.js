//MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
let ilTeam = [
    {
        nome: "Wayne Barnet",
        ruolo: "Founder & Ceo",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: src= "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
]

// for (let i = 0; i < ilTeam.length; i++){
//     console.log(ilTeam[i])
// }

//MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < ilTeam.length; i++){
    for (let key in ilTeam[i]){
        console.log(ilTeam[i][key])
    }
}

//MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe

// let contenitore = document.querySelector(".container")
// let riga

// for(let i = 1; i < ilTeam.length; i++){
//     riga = document.createElement("div")
//     riga.classList.add("riga")
//     riga.innerText = `nome: ${ilTeam[i].nome} ruolo: ${ilTeam[i].ruolo} immagine: ${ilTeam[i].foto}`
//     console.log(riga)
//     contenitore.append(riga)
// }

//BONUS

function generatoreTabella(){
    let griglia = document.createElement("div")
    griglia.classList.add("griglia")
    document.getElementById("tab").appendChild(griglia)
    for(let i = 1; i < ilTeam.length; i++){
        riga = document.createElement("div")
        riga.classList.add("riga")
        riga.innerHTML = `<p>nome: ${ilTeam[i].nome}</p><p>ruolo: ${ilTeam[i].ruolo}</p><img src="./img/${ilTeam[i].foto}">`
        console.log(riga)
        griglia.appendChild(riga)
    }
    
    return griglia
}

generatoreTabella()
