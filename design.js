function getLastPart(url) {
const parts = url.split("/");
return parts.at(-1);
}

let web = getLastPart(document.URL)
console.log(web)
if (web=="home.html")
{
    document.getElementById("home").style.backgroundColor = "rgba(237,233,225,1)"
    //document.getElementById("cartlink").style.display= "block"
}
else if (web=="product.html")
{
    document.getElementById("product").style.backgroundColor = "rgba(237,233,225,1)"
}
else if (web=="about-us.html")
{
    document.getElementById("aboutus").style.backgroundColor = "rgba(237,233,225,1)"
}
else if (web=="login.html")
{
    document.getElementById("login").style.backgroundColor = "rgba(237,233,225,1)"
}

