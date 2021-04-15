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