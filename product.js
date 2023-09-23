let num = 6
let product = [0,0,0,0,0,0]

let x = document.getElementsByClassName("cartImgproduct")
for (let i =0; i < x.length ; i++){
    x[i].addEventListener('click', function cart(){
        product[i]++
        console.log(i +" "+product[i])
    })
}


function display(){
    document.getElementById("product1").style.display= "block"
    document.getElementById("product2").style.display= "block"
    document.getElementById("product3").style.display= "block"
    document.getElementById("product4").style.display= "block"
    document.getElementById("product5").style.display= "block"
    document.getElementById("product6").style.display= "block"
    num = 6
    document.getElementById("countProduct").innerHTML = num + " Product"
}

document.addEventListener('DOMContentLoaded', function display(){
    document.getElementById("product1").style.display= "block"
    document.getElementById("product2").style.display= "block"
    document.getElementById("product3").style.display= "block"
    document.getElementById("product4").style.display= "block"
    document.getElementById("product5").style.display= "block"
    document.getElementById("product6").style.display= "block"
    num = 6
    document.getElementById("countProduct").innerHTML = num + " Product"
});

function bag(){
    document.getElementById("product1").style.display= "block"
    document.getElementById("product2").style.display= "block"
    document.getElementById("product3").style.display= "none"
    document.getElementById("product4").style.display= "none"
    document.getElementById("product5").style.display= "none"
    document.getElementById("product6").style.display= "none"
    num = 2
    document.getElementById("countProduct").textContent = num + " Product"
}

function earing(){
    document.getElementById("product1").style.display= "none"
    document.getElementById("product2").style.display= "none"
    document.getElementById("product3").style.display= "block"
    document.getElementById("product4").style.display= "block"
    document.getElementById("product5").style.display= "none"
    document.getElementById("product6").style.display= "none"
    num = 2
    document.getElementById("countProduct").textContent = num + " Product"
}

function neck(){
    document.getElementById("product1").style.display= "none"
    document.getElementById("product2").style.display= "none"
    document.getElementById("product3").style.display= "none"
    document.getElementById("product4").style.display= "none"
    document.getElementById("product5").style.display= "block"
    document.getElementById("product6").style.display= "block"
    num = 2
    document.getElementById("countProduct").textContent = num + " Product"
}
