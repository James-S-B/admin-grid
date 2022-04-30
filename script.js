`strict`

// Get the modal
const modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

console.log(span)
console.log(modal)




// When the user clicks the button, open the modal 
function whichModal(i) {
    if (i === 1) {
        console.log(i)
        console.log(modal)
        modal.style.display = `block`

    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = `none`
        }
    }
    //get original code from w3schools
function openModal() {
    modal.style.display = "block";
}






// When the user clicks on <span> (x), close the modal
span.onclick = function(e) {
    modal.style.display = "none";
    console.log(`CLOSE`)
    e.stopPropagation();

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}