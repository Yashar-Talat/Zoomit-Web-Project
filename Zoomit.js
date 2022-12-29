//Validation Forms 


let valid = document.getElementById("confirm");
valid.addEventListener("click",validForm);

function validForm() {
    let x = document.getElementById("in-email").value;
    try {
        if(x == "") throw "لطفا ایمیل خود را وارد کنید";
        if(x == Number(x)) throw "عدد وارد نکنید";
    } catch (error) {
        alert(error);
    }
}
function showMenu() {
    var menu = document.getElementById("menu");
    if (menu.className === "menu-bar") {
        menu.className += "show";
    } else {
        menu.className = "menu-bar";
    }
}