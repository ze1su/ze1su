function verify(){
    let a=prompt("Entrer le premier nombre :");
    var b=prompt("Entrer le deuxième nombre :");
    if((a==40 || b==40) || (parseInt(a)+parseInt(b)==40)){ //I used parseInt because a & b are identified in the operation as string
        alert("true");
    }
    else{
        alert("false");
    }
}
verify();