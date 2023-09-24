let web = window.location.pathname
const contactimg = document.getElementById("footerimg")
let determine = sessionStorage.getItem("determine")
console.log(determine)
function determinefunc(){
    console.log("YES")
    if (determine == "true"){
        contactimg.scrollIntoView({behavior :"smooth", 
        block: 'center',
        inline: 'center'});
        sessionStorage.removeItem("determine");
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
    sessionStorage.determine = true
}

const submit = document.getElementById("submit")
const submited = document.getElementById("submited")

submit.addEventListener("click", submitedfunc)

function submitedfunc(){
    submited.style.display = "block"
}

