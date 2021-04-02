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
            $(".parkLink").text(name);
            $(".address").text(address);
        })
    addParkListener(id);
}
getDetails();

// Add event listener for"see the parkReview" and add PARKID in the url
function addParkListener(id) {
    var a = document.getElementById("goToRate");
    if (a) {
        a.addEventListener("click", function() {
            console.log("goToRate was clicked!")
            window.location.href = "RatePage.html?id=" + id;
        });
    }
}

/* var parkSet = db.collection("parks").doc("Burnaby Mountain Park");
parkSet.update({
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
}) */

// Readmore button
function readMore() {

    var moreText = document.getElementsByClassName("reviewBody");

    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}