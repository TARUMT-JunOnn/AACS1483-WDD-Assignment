let web = window.location.pathname
const contactimg = document.getElementById("footerimg")
let determine = localStorage.getItem("determine")
console.log(determine)
function determinefunc(){
    console.log("YES")
    if (determine == "true"){
        contactimg.scrollIntoView({behavior :"smooth", 
        block: 'center',
        inline: 'center'});
        localStorage.removeItem("determine");
    }
}
if (web=="/index.html")
{
    document.getElementById("home").style.backgroundColor = "rgba(237,233,225,1)"
}
else if (web  == "/product.html" || web == "/review.html")
{
    document.getElementById("product").style.backgroundColor = "rgba(237,233,225,1)"
}
else if (web=="/about-us.html" || web == "/FAQ.html" || web == "/Location.html")
{
    document.getElementById("aboutus").style.backgroundColor = "rgba(237,233,225,1)"
}
else if (web=="/login.html")
{
    document.getElementById("login").style.backgroundColor = "rgba(237,233,225,1)"
}

const contact = document.getElementById("contact")
contact.addEventListener("click", contactfunc)

function contactfunc(){
    window.location.href = "about-us.html"
    localStorage.determine = true
}

const submit = document.getElementById("submit")
const submited = document.getElementById("submited")
const addresschange = document.getElementById("address")
const address1 = document.getElementById("address1")
const address2 = document.getElementById("address2")
const additional = document.getElementById("additional")
const state = document.getElementById("state")
const city = document.getElementById("city")
const postal = document.getElementById("postal")

addresschange.addEventListener("submit",function changeaddress(){
    console.log(address1.value)
    console.log(address2.value)
    console.log(state.value)
    console.log(additional.value)
    console.log(city.value)
    console.log(postal.value)
    localStorage.address = address1.value + ", " + address2.value + ", " + additional.value + ", " + postal.value + " " + city.value + ", " + state.value
    console.log(localStorage.address)
})

addresschange.addEventListener("click", submitedfunc)
function submitedfunc(){
    submited.style.display = "block"
}




