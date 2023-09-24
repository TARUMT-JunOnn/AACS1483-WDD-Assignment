let currentcart= sessionStorage.getItem("sumcart")
const contentno = document.getElementById("nocart")

if(currentcart == 0 || currentcart == null){
    contentno.style.display = "block"
}

