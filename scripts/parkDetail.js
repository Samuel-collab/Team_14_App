function goBack() {
    window.history.back();
}

function getDetails() {
    // https://some.site/?id=ParkID
    const parsedUrl = new URL(window.location.href);

    // extract id from url, assign to variable
    var id = parsedUrl.searchParams.get("id");
    console.log(id);

    db.collection("parks")
        .doc(id)
        .get()
        .then(function(doc) {
            var name = doc.data().name;
            var address = doc.data().address;
            $("#parkName").text(name);
            $("#address").text("Address: " + address);
        })
}
getDetails();