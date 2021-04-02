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

//*****************On user login or signup, mainpage will hold a greeting to user****************
//First, find user ID.
function sayHello() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            // Do something for the user here. 
            console.log(user.uid);
            db.collection("users").doc(user.uid)
                .get()
                .then(function (doc) {
                    var n = doc.data().name;
                    console.log(n);
										//using jquery
                    $("#greeting-to-user").text(n + ", you are successfully logged in!");
										//using vanilla javascript
                    //document.getElementById("username").innerText = n;
                })
        } else {
            // No user is signed in.
        }
    });
}
sayHello();