function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function chiffre(niv, num) {
    let a;
    let b;
    if (niv == 1)
        a = 3;
    else if (niv == 2)
        a = 5;
    else if (niv == 3)
        a = 7;
    let test = false;
    for (i = 0; i < a; i++) {
        b = prompt("Give me a number");
        if (b == num) {
            alert("You won !");
            test = true;
            break;

        } else
            alert("Try again ");
    }
    if (test == false)
        alert("Game Over")
}
chiffre(1, getRandomInt(11));