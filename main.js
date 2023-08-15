const goomba = document.goomba;
const bobomb = document.bobomb;
const cheep = document.cheep;
const submitTotal = document.submitTotal;

submitTotal.addEventListener("submit", function(event) {
    event.preventDefault();

    let numOfGoombas = goomba.goombaInput.value;
    let goombaTotal = numOfGoombas * 5;
    let numOfBobombs = bobomb.bobombInput.value;
    let bobombTotal = numOfBobombs * 7;
    let numOfCheeps = cheep.cheepInput.value;
    let cheepTotal = numOfCheeps * 11;
    let grandTotal = goombaTotal + bobombTotal + cheepTotal;
    let date = submitTotal.date.value;
    goomba.goombaInput.value = "";
    bobomb.bobombInput.value = "";
    cheep.cheepInput.value = "";

    const newInvoice = document.createElement("div");
    newInvoice.innerHTML = "Invoice Date: " + date + "<br>" + numOfGoombas + " Goomba's @ 5 coins each = " + goombaTotal + " Coins<br>" + numOfBobombs + " Bob-omb's @ 7 coins each = " + bobombTotal + " Coins<br>" + numOfCheeps + " Cheep-Cheep's @ 11 coins each = " + cheepTotal + " Coins<br>Grand Total: " + grandTotal + " Coins<br><br>";
    document.getElementById("invoice").prepend(newInvoice);
    
});

