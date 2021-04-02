// Go back to previus page
function goBack() {
    window.history.back();
}

// Display park information based on PARKID
function getDetails() {
    // https://some.site/?id=ParkID
    const parsedUrl = new URL(window.location.href);

    // extract id from url, assign to variable
    var id = parsedUrl.searchParams.get("id");
    db.collection("parks")
        .doc(id)
        .get()
        .then(function(doc) {
            var name = doc.data().name;
            var address = doc.data().address;
            $("#parkName").text(name);
            $("#address").text("Address: " + address);
        })
    addParkListener(id);

}
getDetails();

// Add event listener for"see the parkReview" and add PARKID in the url
function addParkListener(id) {
    var a = document.getElementById("goToReview");
    if (a) {
        a.addEventListener("click", function() {
            console.log("goToReview was clicked!")
                // window.location.href = "details.html";
                // When we redirect, tack on after "?" the id of the webcam
            window.location.href = "parkReview.html?id=" + id;
        });
    }

}