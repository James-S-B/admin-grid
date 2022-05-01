`strict`

// Get the modal
const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");
const modal4 = document.getElementById("modal4");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

console.log(span)
console.log(modal1)


function allModalsClosed() {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";

}

// When the user clicks the button, open the modal 
function whichModal(i) {
    if (i === 1) {
        console.log(i)
        console.log(modal1)
        modal1.style.display = `block`
    } else if (i === 2) {
        console.log(modal2)
        modal2.style.display = `block`
    } else if (i === 3) {
        console.log(modal3)
        modal3.style.display = `block`
    } else if (i === 4) {
        console.log(modal4)
        modal4.style.display = `block`
    }
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    console.log(12345)
}

// When the user clicks on <span> (x), close the modal
span.onclick = function(e) {
    allModalsClosed();
    console.log(`CLOSE`)
    e.stopPropagation();

}