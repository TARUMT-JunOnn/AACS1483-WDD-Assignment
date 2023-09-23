let num = 6
let product = [0,0,0,0,0,0]
const plus1txt = document.createTextNode("+1")
const plus1 = document.createElement("p")
const createclass = document.createAttribute("class")
createclass.value = "plus1"
plus1.setAttributeNode(createclass)
plus1.appendChild(plus1txt)

let x = document.getElementsByClassName("cartImgproduct")
for (let i =0; i < x.length ; i++){
    x[i].addEventListener('click', function cart(){
        product[i]++
        console.log(i +" "+product[i])
        x[i].parentNode.appendChild(plus1)
        const clear = document.getElementsByClassName("plus1")
        console.log(clear)
        const timeout = function clearfunc(){
            clear[0].remove()
        }
        setTimeout(timeout, 900)
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

document.addEventListener('DOMContentLoaded', display());

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
