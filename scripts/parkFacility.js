var parkFacilitySet = db.collection("parkFacility").doc("facility");

parkFacilitySet.set({
    list: "Restaurant"

}).then(function() {
    console.log("Document is written!");
}).catch(function(err) {
    console.log(err);
});

parkFacilitySet.update({
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
})

function readBMPname() {
    parkFacilitySet.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data: ", doc.data());
            $(".parkFacility").text(doc.data().list);
        } else {
            console.log("Not found");
        }
    })
}
readBMPname();

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
            // addParkListener(id);
            // addParkListenerFacility(id)

            $("#imageGoesHere").attr("src", doc.data().carousel[0]);

            addFacilityInfo(doc);

            console.log(id);
        })
}
getDetails();

function addFacilityInfo(docID) {
    for (var i = 0; i < 6; i++) {
        var temp = "#facility" + (i + 1);
        $(temp).text(docID.data().facility[i]);
    }
    for (var i = 0; i < 6; i++) {
        var temp = "#facility" + (i + 1);
        if ($(temp).text() == "Button") {
            $(temp).remove();
        }
    }
}