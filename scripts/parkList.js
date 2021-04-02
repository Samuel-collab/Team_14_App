// Go back to previus page
function goBack() {
    window.history.back();
}

// get PARKID from doc and pass it to next page.
function passParkId() {
    db.collection("parks")
        .where("name", "==", "Burnaby Mountain Park") //new query to look for field in a set
        .get() //Read
        .then(function(snapcollection) {
            snapcollection.forEach(doc => {
                console.log(doc.data());
                console.log(doc.id);
                var id = doc.id;
                addParkListener(id);
            });
        })
}
passParkId();

// Add event listener for"see the parkReview" and add PARKID in the url
function addParkListener(id) {
    var a = document.getElementById("bpm");
    if (a) {
        a.addEventListener("click", function() {
            console.log("bpm was clicked!")
                // window.location.href = "details.html";
                // When we redirect, tack on after "?" the id of the webcam
            window.location.href = "parkDetail.html?id=" + id;
        });
    }

}