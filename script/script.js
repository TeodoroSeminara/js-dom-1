

// Ciao ragazzi,
// esercizio di oggi: Primi passi col DOM

// repo: js-dom-1

// Consegna

// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.

// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

// BONUS

// Facciamo accendi e spegni:

// Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
// Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
// E così via...

// Per fare questo bonus potremmo aver bisogno di del metodo string.includes() 😉

// Buon Lavoro e buon divertimento!  💡 


const myBottom = document.querySelector(".switch");
const switchOn = document.querySelector(".spenta");
const switchOff = document.querySelector(".accesa");

console.log(myBottom, switchOn);


myBottom.addEventListener("click", accendiSpegni);

function accendiSpegni() {

    const lampOn = switchOn.classList.contains("spenta");

    if (lampOn) {
        switchOn.classList.add("accesa");
        switchOn.classList.remove("spenta");
        switchOff.classList.remove("accesa");
        switchOff.classList.add("spenta");
        myBottom.innerHTML = "Spegni";
    } else {
        switchOn.classList.remove("accesa");
        switchOn.classList.add("spenta");
        switchOff.classList.remove("spenta");
        switchOff.classList.add("accesa");
        myBottom.innerHTML = "Accendi";
    }

    console.log(switchOn.classList);

}