const input= document.querySelector(".modal-input");
input.addEventListener("keydown" , nameFunction);

function nameFunction (e) {
    const span = document.querySelector(".user-name");
    const inputValue = document.querySelector(".modal-input").value ;
    console.log(e.keyCode);
    if (e.keyCode==13) {
     span.innerHTML = inputValue ;
     document.querySelector(".modal").style.display = "none";
     document.querySelector("#my-button").style.display = "block";
    }

} 