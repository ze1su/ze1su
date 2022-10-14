//Question 1
function somme(){
    let tab= new Array(5);//declaration d'un nouveau tableau
    let i=1;
    for(var a=0; a<5; a++) {
    tab[a]=prompt("Entrer la valeur numero "+ i +" :");
    i++;
    }
    let sum=parseInt(tab[0])+parseInt(tab[1])+parseInt(tab[2])+parseInt(tab[3])+parseInt(tab[4]);
    alert("La somme est :"+sum);
}
somme();

//Question 2