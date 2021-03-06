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
            var phoneNum = doc.data().phoneNumber;
            $("#parkName").text(name);
            $("#address").text(address);
            $("#phoneNumber").text(phoneNum);
            addParkListener(id);
            addParkListenerFacility(id);
            addParkListenerParkMap(id)

            var newUrl = doc.data().googleMap;
            $("#googleMapHere").attr("href",newUrl);
            console.log(id);
        })
}
getDetails();



// Add event listener for "see the parkReview" and add PARKID in the url
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

// Add event listener for "Facility" and add PARKID in the url when changing window location
function addParkListenerFacility(id) {
    console.log(id);
    var a = document.getElementById("facility");
    if (a) {
        a.addEventListener("click", function(x) {
            x.preventDefault();
            console.log("facility was clicked!");
            window.location.href = "parkFacility.html?id=" + id;
        });
    }
}

// Add event listener for "ParkMap" and add PARK ID in the url when changing window location
function addParkListenerParkMap(id) {
    console.log(id);
    var a = document.getElementById("parkMap");
    if (a) {
        a.addEventListener("click", function(x) {
            x.preventDefault();
            console.log("ParkMap was clicked!");
            window.location.href = "parkMap.html?id=" + id;
        });
    }
}



// Add carousel pictures based on parkid.
function carousel() {
    db.collection("parks")
        .doc(id)
        .get()
        .then((doc) => {
            $("#c1").attr("src", doc.data().carousel[0]);
            $("#c2").attr("src", doc.data().carousel[1]);
            $("#c3").attr("src", doc.data().carousel[2]);
            $("#c4").attr("src", doc.data().carousel[3]);
            $("#c5").attr("src", doc.data().carousel[4]);
        })
}
carousel();