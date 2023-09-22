let num = 3

function display(){
    document.getElementById("product1").style.display= "block"
    document.getElementById("product2").style.display= "block"
    document.getElementById("product3").style.display= "block"
    num = 3
    document.getElementById("countProduct").textContent = num + " Product"
}

document.addEventListener('DOMContentLoaded', function display(){
    document.getElementById("product1").style.display= "block"
    document.getElementById("product2").style.display= "block"
    document.getElementById("product3").style.display= "block"
    num = 3
    document.getElementById("countProduct").textContent = num + " Product"
});

function bag(){
    document.getElementById("product1").style.display= "block"
    document.getElementById("product2").style.display= "none"
    document.getElementById("product3").style.display= "none"
    num = 1
    document.getElementById("countProduct").textContent = num + " Product"
}

function earing(){
    document.getElementById("product1").style.display= "none"
    document.getElementById("product2").style.display= "block"
    document.getElementById("product3").style.display= "block"
    num = 2
    document.getElementById("countProduct").textContent = num + " Product"
}





