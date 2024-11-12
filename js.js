//recuperiamo i riferimenti agli input
const email = document.getElementById("email");
const password = document.getElementById("password");
//RIFERIMENTO AL FORM
const form = document.getElementById("form");
//RIFERIMENTO AI BOTTONI
const bottoneSalva = document.getElementsByTagName("button")[0];
const bottoneRimuovi = document.getElementsByTagName("button")[1];
//RIFERIMENTO ALLA CHIAVE DI LOCALSTORAGE
const key = "Memoria-registrazione";
//FUNZIONE COSTRUTTORE

class Registrazione {
  constructor(_email, _password) {
    this.emailInserita = _email;
    this.passwordInserita = _password;
  }
}
//RIFERIMENTO ALLE COL CREATE PER LE CARD

//FUNZIONE PRIMO BOTTONE
bottoneSalva.addEventListener("click", function () {
  const utenteRegistrato = new Registrazione(email.value, password.value);

  localStorage.setItem(key, JSON.stringify(utenteRegistrato));

  //PRENDERE RIFERIMENTO ALLA SECTION DOVE APPENDERE LE CARD
  const col = document.createElement("div");
  const section = document.getElementsByClassName("divContenitore")[0];
  col.classList.add("col");

  col.innerHTML = `<div class="card">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${utenteRegistrato.emailInserita}</li>
    </ul>
</div>`;
  section.appendChild(col);
});

//FUNZIONE SECONDO BOTTONE
bottoneRimuovi.addEventListener("click", function () {
  localStorage.removeItem(key);
  col.classList.add("d-none");
});

//OROLOGIO

let tempoIniziale=sessionStorage.getItem("tempoIniziale")
if(tempoIniziale===null){
    tempoIniziale=0

}
let timeScorre
const timer=document.getElementById("timer")
const contatore =function(){
    timeScorre=setInterval(function(){
        tempoIniziale++;
        timer.innerText=tempoIniziale;
        sessionStorage.setItem("tempoIniziale", tempoIniziale)
    }, 1000)
}
 contatore()