const deletebtn = document.getElementsByClassName("deletebutton");

for (let i = 0; i<deletebtn.length; i++) {
    deletebtn[i].addEventListener("click", function() {

    
        const endpoint = "/" + this.dataset.doc;
        fetch(endpoint, {
            method: "delete"
        }).then((res) => res.json()).then((data) => {
            // alert("Fiş deleted successfully");
            window.location.href = data.redirect;
            
        }).catch((err) => {
            console.log(err);
            // alert("Could not delete Fiş");
        })
    });
}



const searchBy = document.getElementById("searchBy");
const form = document.getElementById("searchConIndex");
searchBy.addEventListener("change", function() {
    form.action = searchBy.value;
})




