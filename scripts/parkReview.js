var parkSet = db.collection("parks").doc("Burnaby Mountain Park");


/* parkSet.set({
    name: "Burnaby Mountain Park",
    address: "100 Centennial Way, Burnaby, BC V5A 2X9, Canada",
    facilities: "swimming pool, slide"

}).then(function() {
    console.log("Document is written!");
}).catch(function(err) {
    console.log(err);
}); */

parkSet.update({
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
})

function readBMPname() {
    parkSet.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data: ", doc.data());
            $(".parkLink").text(doc.data().name);
            $(".address").text(doc.data().address);
        } else {
            console.log("Not found");
        }
    })

}
readBMPname();

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