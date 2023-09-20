function getLastPart(url) {
const parts = url.split("/");
return parts.at(-1);
}

let web = getLastPart(document.URL)
console.log(web)
if (web=="index.html")
{
    document.getElementById("home").style.backgroundColor = "#dddddd"
}
else if (web=="product.html")
{
    document.getElementById("product").style.backgroundColor = "#dddddd"
}
else if (web=="about-us.html")
{
    document.getElementById("aboutus").style.backgroundColor = "#dddddd"
}
else if (web=="login.html")
{
    document.getElementById("login").style.backgroundColor = "#dddddd"
}
