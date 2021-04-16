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



/**click to parklist.html */
function addParkListListener() {
    var a = document.getElementsByClassName("parklist");
    if (a) {
        for (var i = 0; i < a.length; i++) {
            a[i].addEventListener('click', function() {
                console.log(a + "was clicked!")

                window.location.href = "parklistEDIT.html";
            });
        }

    }
} 
addParkListListener();
