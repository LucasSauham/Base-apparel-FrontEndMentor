
function reset() {
    document.getElementById("status-email").innerHTML = "";
    document.getElementById("img-status").style.display = "none";
}

function valida_email() {
    reset();
    let input = document.getElementById("email").value;
    let status = document.getElementById("status-email");
    let img_status = document.getElementById("img-status");
    if(input.includes("@")) {
        status.append("It's a valide email!");
        status.style.color =  "rgb(6, 116, 15)";
        img_status.style.display = "none";
    }
    else {
        let img_status = document.getElementById("img-status");
        status.append("Please provide a valide email");
        status.style.color = "hsl(0, 93%, 68%)";
        img_status.style.display = "block"; 
    }
}
