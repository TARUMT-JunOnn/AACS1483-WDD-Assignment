let currentcart = 0
const contentno = document.getElementById("nocart")
const contentyes = document.getElementById("havecart")
const quantity = document.getElementsByClassName("quantity")
let cancel = document.getElementsByClassName("cancel")
let product = [localStorage.getItem("product1"), localStorage.getItem("product2"), localStorage.getItem("product3"), localStorage.getItem("product4"), localStorage.getItem("product5"), localStorage.getItem("product6")]
let productnum
let items = 0
let itemselement = document.getElementById("items")
const productprice = document.getElementsByClassName("productprice")
const itemsub = document.getElementById("itemsubtotalvalue")
let itemvalue = 0
const subtotal = document.getElementById("subtotalvalue")
let ordervalue
const order = document.getElementById("ordertotalvalue")
const checkout = document.getElementById("checkouttitle")

if(currentcart == 0 || currentcart == null){
    contentyes.style.display = "none"
    contentno.style.display = "block"
}else{
    contentno.style.display = "none "
    contentyes.style.display = "flex"
}

product = product.map(function(str) {

    return parseInt(str); });
    
    for (let i =0;i<6;i++){
        currentcart += (product[i])
    }
    

if(product[0] > 0){
    document.getElementById("product1").style.display = "block"
    let child = document.getElementById("select1")
    child.value = product[0]
    items++
}
if(product[1] > 0){
    document.getElementById("product2").style.display = "block"
    let child = document.getElementById("select2")
    child.value = product[1]
    items++
}
if(product[2] > 0){
    document.getElementById("product3").style.display = "block"
    let child = document.getElementById("select3")
    child.value = product[2]
    items++
}
if(product[3] > 0){
    document.getElementById("product4").style.display = "block"
    let child = document.getElementById("select4")
    child.value = product[3]
    items++
}
if(product[4] > 0){
    document.getElementById("product5").style.display = "block"
    let child = document.getElementById("select5")
    child.value = product[4]
    items++
}
if(product[5] > 0){
    document.getElementById("product6").style.display = "block"
    let child = document.getElementById("select6")
    child.value = product[5]
    items++
}

itemselement.innerHTML = items + " Items"

for (let i = 0 ; i < cancel.length ; i++){
    console.log(cancel[i])
    cancel[i].addEventListener("click", function cancelfunc(){
        currentcart -= quantity[i].value
        localStorage.sumcart = currentcart
        let cancelelement = cancel[i].parentNode
        cancelelement = cancelelement.parentNode
        console.log(cancelelement.getAttributeNode("id").value)
        if (cancelelement.getAttributeNode("id").value == "product1"){

            localStorage.product1 = 0
            window.location.reload()
            items++
        }
        else if (cancelelement.getAttributeNode("id").value == "product2"){

            localStorage.product2 = 0
            window.location.reload()
            items++
        }
        else if (cancelelement.getAttributeNode("id").value == "product3"){

            localStorage.product3 = 0
            window.location.reload()
            items++
        }
        else if (cancelelement.getAttributeNode("id").value == "product4"){

            localStorage.product4 = 0
            window.location.reload()
            items++
        }
        else if (cancelelement.getAttributeNode("id").value == "product5"){

            localStorage.product5 = 0
            window.location.reload()
            items++
        }
        else if (cancelelement.getAttributeNode("id").value == "product6"){

            localStorage.product6 = 0
            window.location.reload()
            items++
        }
    })
}

for (let i = 0 ; i < quantity.length; i++){
    quantity[i].addEventListener("change", function quantityFunc(){
        if (quantity[i].getAttributeNode("id").value == "select1"){
            localStorage.product1 = quantity[i].value
        }
        else if (quantity[i].getAttributeNode("id").value == "select2"){
            localStorage.product2 = quantity[i].value
        }
        else if (quantity[i].getAttributeNode("id").value == "select3"){
            localStorage.product3 = quantity[i].value
        }
        else if (quantity[i].getAttributeNode("id").value == "select4"){
            localStorage.product4 = quantity[i].value
        }
        else if (quantity[i].getAttributeNode("id").value == "select5"){
            localStorage.product5 = quantity[i].value
        }
        else if (quantity[i].getAttributeNode("id").value == "select6"){
            localStorage.product6 = quantity[i].value
        }
        console.log(quantity[i].value) 
        window.location.reload()
    })
}





for(let i =0;i < productprice.length ; i++){
    if (productprice[i].innerHTML == "RM499.99"){
        console.log("hi")
        itemvalue += 499.99 * product[i]
    }
    else if (productprice[i].innerHTML == "RM299.99"){
        itemvalue += 299.99 * product[i]
    }
    console.log(product[i])
    console.log(itemvalue)
}
itemvalue = itemvalue.toFixed(2)
itemsub.innerHTML = "RM" + itemvalue
subtotal.innerHTML = itemsub.innerHTML
console.log(itemvalue)
itemvalue = parseInt(itemvalue);
console.log(itemvalue)
ordervalue = itemvalue + 8
console.log(ordervalue)
order.innerHTML = "RM" + ordervalue

localStorage.order = ordervalue

checkout.addEventListener("click", function checkoutfunc(){
    window.location.href = "mypayment.html"
})






