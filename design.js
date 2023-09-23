let web = window.location.pathname
console.log(web)
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

