class Animal {
    constructor(name){
        this.name = name;
    }
    action(){
        document.getElementById(this.actionSoundName).play();
    }
    putInTheDocument(){

        var petsTable = document.getElementById("petsTable");
        var petTR = document.createElement("tr");
        petTR.classList.add(this.name);

            
        var petNameTD = document.createElement("td");
        petNameTD.textContent = this.name;
        petTR.appendChild(petNameTD);
        
    
        var petLegsTD = document.createElement("td");
        petLegsTD.textContent = this.legs;
        petTR.appendChild(petLegsTD);

    
        var petActionTD = document.createElement("td");
        var petActionTDButton = document.createElement("button");
        petActionTDButton.textContent = this.actionText;
        petActionTD.appendChild(petActionTDButton);
        petTR.appendChild(petActionTD);

        
        petActionTDButton.onclick = this.action.bind(this);
        petsTable.querySelector("tbody").appendChild(petTR)

        
    }
}

class Cat extends Animal {
    constructor(name){
        super(name);
        this.legs = 4;
        this.actionText = "Meoow"
        this.actionSoundName = "meow"
    }
}

class Monkey extends Animal {
    constructor(name){
        super(name);
        this.legs = 2;
        this.actionText = "Scream";
        this.actionSoundName = "scream";
    }
}

var Mila = new Cat("Mila");
Mila.putInTheDocument();

var Charlie = new Monkey("Charlie");
Charlie.putInTheDocument();

const tbody = document.querySelector("tbody");
const imgCat = document.querySelector(".cat");
const imgMonkey = document.querySelector(".monkey");
const clear = document.querySelector(".clear");


tbody.addEventListener("click", e =>{
    if(e.target.parentElement.classList.contains("Mila")){
       imgCat.style.display="block"
       imgMonkey.style.display= "none"
       clear.style.display="block"
    }else if(e.target.parentElement.classList.contains("Charlie")){
        imgMonkey.style.display="block"
        imgCat.style.display= "none"
        clear.style.display="block"
    }
});

clear.addEventListener("click", ()=>{
    imgCat.style.display= "none"
    imgMonkey.style.display= "none"
    clear.style.display = "none"
});


