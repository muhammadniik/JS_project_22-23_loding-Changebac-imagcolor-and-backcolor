window.addEventListener("load", function() {
    this.document.getElementsByClassName("loader")[0].classList.add("action");
})



const imagemains = document.querySelector(".imagemain");
const contant = document.querySelector(".contant");

function chengimage(num) {

    imagemains.style.backgroundImage = `url("../images/Car (${num}).png")`;
    let back = "";
    switch (num) {
        case 1:
            back = "black";
            break;
        case 2:
            back = "red";
            break;
        case 3:
            back = "white";
            break;
        case 4:
            back = "green";
            break;
    }
    contant.style.backgroundColor = back;

}