//Question 1
function convert(){
    let a =prompt("Veuillez entrer un nombre d'heures:");
    let b = a * 60;
    alert("Le nombre d'heures en minutes : "+b);
}
convert();


//Question 2
function secondToEverything(){
    let a=prompt("Veuillez entrer un nombre entier de secondes :");
    let hour=Math.floor(a / 3600);
    let min=Math.floor(a / 60); /* Les minutes */
    let sec= a % 60;
    alert(hour+"h "+min+"min "+sec+"sec");
}

secondToEverything();
