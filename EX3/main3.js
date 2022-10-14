//Question 1
/*function elgrande(){
    let a=prompt("entrer le premier nombre :");
    let b=prompt("entrer le premier nombre :");
    let c=prompt("entrer le premier nombre :");
    let max;
    if(a<b && b>c){
        max=b;
    }
    else if(a<b && b<c){
        max=c;
    }
    else{
        max=a;
    }
    alert("le plus grand nombre est :"+max);
}
elgrande();
*/
//Question 2
function somme(){
    let a=prompt("Entrer le premier nombre :");
    let b=prompt("Entrer le deuxième nombre :");
    var sum=0;
    if(a==b){
        sum=3*(parseInt(a) + parseInt(b));//I used parseInt because a & b are identified in the operation as string
    }
    else{
        sum=a+b;
}
alert("La somme est:"+sum);
}
somme();