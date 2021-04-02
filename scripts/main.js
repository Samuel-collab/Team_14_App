/* var docRef = db.doc('users/iEgnkNvQG2cY8MbluqI99JDJXdz2');

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("This users data: ", doc.data())
        $(".userName").append(" ").append(doc.data().name);
    } else {
        console.log("No such data exists!");
    }
}).catch(function(error) {
    console.log("Error getting document");
}); */