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
