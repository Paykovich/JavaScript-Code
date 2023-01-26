let btns = document.querySelectorAll(".btn");
let halloween = document.querySelectorAll(".halloween")

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let buttonStyle = getComputedStyle(this);
        let buttonBgColor = buttonStyle["backgroundColor"];
        document.body.style.backgroundColor = buttonBgColor;
        
    });
}

function newPageHalloween() {
    window.location.href = "halloween.html"
}
