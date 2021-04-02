// Go back to previus page
function goBack() {
    window.history.back();
}


// https://some.site/?id=ParkID
const parsedUrl = new URL(window.location.href);
// extract id from url, assign to variable
var id = parsedUrl.searchParams.get("id");

// Display park information based on PARKID
function getDetails() {
    db.collection("parks")
        .doc(id)
        .get()
        .then(function(doc) {
            var name = doc.data().name;
            var address = doc.data().address;
            $("#parkName").text(name);
            $("#address").text("Address: " + address);
            addParkListener(id);
            console.log(id);
        })
}
getDetails();



// Add event listener for"see the parkReview" and add PARKID in the url
function addParkListener(id) {
    console.log(id);
    var a = document.getElementById("gotoreview");
    if (a) {
        a.addEventListener("click", function() {
            console.log("gotoreview was clicked!");
            window.location.href = "parkReview.html?id=" + id;
        });
    }
}