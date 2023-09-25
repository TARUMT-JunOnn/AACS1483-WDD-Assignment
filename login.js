const login = document.getElementById("loginbutton")
const logout = document.getElementById("logout")
account = {name: "Admin", sumcart: "0"}
let user = localStorage.getItem("user")
let sumcart = localStorage.getItem("sumcart")
const loginnav = document.getElementById("login")
const requiredlogin = "required.html"

//if(user != null){
    document.getElementById("cartlink").style.display= "block"
    document.getElementById("profile").style.display= "flex"
/*    loginnav.innerHTML = "My Account"
    loginnav.getAttributeNode("href").value = "myacc.html"
}else{
    loginnav.innerHTML = "Login / Sign Up"
    loginnav.getAttributeNode("href").value = "login.html"
    const website = document.getElementsByTagName("a")
    for (let i = 0; i< website.length; i++){
        if(website[i].getAttributeNode("href").value != "index.html" && website[i].getAttributeNode("href").value != "login.html" && website[i].getAttributeNode("href").value != "mailto:charlottexy@gmail.com"){
            website[i].getAttributeNode("href").value = requiredlogin
        }
    }
}*/
function editfunc(){
    console.log("Hello")
    window.location.href = "myaddress.html"
}

logout.addEventListener("click", function logout(){
    localStorage.clear()
})

login.addEventListener("click", function login(){
    user = account.name
    sumcart = account.sumcart
    console.log(user)
    console.log(sumcart)
    localStorage.user = user
    localStorage.sumcart = sumcart
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
