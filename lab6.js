function Left(){
    let cat = document.querySelector("#left");
    let dog = document.querySelector("#right");
    cat.classList.remove("hidden-animal");
    dog.classList.add("hidden-animal");
   
}

function Right(){
    let cat = document.querySelector("#left");
    let dog = document.querySelector("#right");
    cat.classList.add("hidden-animal");
    dog.classList.remove("hidden-animal");

}
function Both(){
    let cat = document.querySelector("#left");
    let dog = document.querySelector("#right");
    cat.classList.remove("hidden-animal");
    dog.classList.remove("hidden-animal");
}