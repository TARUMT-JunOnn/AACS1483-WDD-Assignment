const login = document.getElementById("loginbutton")
const logout = document.getElementById("logout")
account = {name: "Admin", sumcart: "0"}
let user = sessionStorage.getItem("user")
let sumcart = sessionStorage.getItem("sumcart")
const requiredlogin = "required.html"

if(user != null){
    document.getElementById("cartlink").style.display= "block"
    document.getElementById("profile").style.display= "flex"
}else{
    const website = document.getElementsByTagName("a")
    for (let i = 0; i< website.length; i++){
        console.log(website[i].getAttributeNode("href").value)
        if(website[i].getAttributeNode("href").value != "index.html" && website[i].getAttributeNode("href").value != "login.html" && website[i].getAttributeNode("href").value != "mailto:charlottexy@gmail.com"){
            website[i].getAttributeNode("href").value = requiredlogin
        }
    }
}

logout.addEventListener("click", function logout(){
    sessionStorage.clear()
})

login.addEventListener("click", function login(){
    user = account.name
    sumcart = account.sumcart
    console.log(user)
    console.log(sumcart)
    sessionStorage.user = user
    sessionStorage.sumcart = sumcart
    if(user != null){
        document.getElementById("cartlink").style.display= "block"
        document.getElementById("profile").style.display= "flex"
    }
    const previousURL = new URL(document.referrer, "http://example.com/")
    if (previousURL.pathname == "/required.html"){
        window.location.href = "index.html"
    }else{
        window.history.back()
    }
})