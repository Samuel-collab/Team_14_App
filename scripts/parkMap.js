var parkSet = db.collection("parks").doc("Burnaby Mountain Park");

parkSet.update({
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
})


function readBMPname() {
    parkSet.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data: ", doc.data());
            $(".nameOfPark").text(doc.data().name);
        } else {
            console.log("Not found");
        }
    })
}
readBMPname();


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

            addParkMap(doc);
            //addFacilityInfo(doc);

            console.log(id);
        })
}
getDetails();

function addParkMap(docID) {
    var parkMapUrl = docID.data().parkMap;
    $("#parkMap").attr("src", parkMapUrl);
}