let h1 = document.body.firstChild.nextSibling
let start = document.body.firstChild.nextSibling.nextSibling.nextSibling
let end = document.body.firstChild.nextSibling.nextSibling.nextSibling.nextElementSibling.nextElementSibling
let lastParagraph = document.querySelectorAll("p.end")

h1.innerHTML = "We have changed the text, now it is different from the previous one, and there is nothing interesting here :)"
start.innerHTML = "Yes, we changed the text here too"
end.innerHTML = "Of course, we did not forget to make a change here as well."

lastParagraph[0].style.color = "red"
lastParagraph[0].style.border = "2px solid brown";
lastParagraph[0].style.backgroundColor = "green";
lastParagraph[0].style.padding = "10px";
lastParagraph[0].style.display = "inline-block";

// ----------------------------------------------------------------------------- //

let click = document.getElementById('bonus');

click.onclick = function (){
    alert("You clicked on the element with id = bonus")
}
