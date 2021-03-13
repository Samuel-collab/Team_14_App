var parkSet = db.collection("parks").doc("Burnaby Mountain Park");

parkSet.set({
    name: "Burnaby Mountain Park",
    address: "100 Centennial Way, Burnaby, BC V5A 2X9, Canada",
    facilities: "swimming pool, slide"

}).then(function() {
    console.log("Document is written!");
}).catch(function(err) {
    console.log(err);
});

parkSet.update({
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
})

function readBMPname() {
    parkSet.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data: ", doc.data());
            $(".parkLink").text(doc.data().name);
        } else {
            console.log("Not found");
        }
    })

}
readBMPname();