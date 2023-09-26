const login = document.getElementById("loginform")
const logout = document.getElementById("logout")
account = {name: "Admin", sumcart: "0", address : "Bukit Jalil Branch, Endah Promenade Jalan 3/149e, Bukit Jalil 57000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur.", email : "charlottexy@gmail.com"}
let user = localStorage.getItem("user")
let sumcart = localStorage.getItem("sumcart")
let getaddress = localStorage.getItem("address")
let getemail = localStorage.getItem("email")
const loginnav = document.getElementById("login")
const requiredlogin = "required.html"
const namecontent = document.getElementById("namecontent")
const emailcontent = document.getElementById("emailcontent")
const oldaddress = document.getElementById("oldaddress")



if(user != null){
    document.getElementById("cartlink").style.display= "block"
    document.getElementById("profile").style.display= "flex"
    loginnav.innerHTML = "My Account"
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
}

function address(){
    namecontent.innerHTML = user
    emailcontent.innerHTML = getemail
    oldaddress.value = getaddress
}

function editfunc(){
    window.location.href = "myaddress.html"
}

logout.addEventListener("click", function logout(){
    localStorage.clear()
})

login.addEventListener("submit", function login(){
    user = account.name
    sumcart = account.sumcart
    getaddress = account.address
    getemail = account.email
    localStorage.user = document.getElementById("name").value
    localStorage.sumcart = sumcart
    localStorage.address = getaddress
    localStorage.email = document.getElementById("email").value
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

