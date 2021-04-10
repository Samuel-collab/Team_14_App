// Go back to previus page
function goBack() {
    window.history.back();
}

// get PARKID from doc and pass it to next page.
function passParkId() {
    db.collection("parks")
        .where("name", "==", "Burnaby Mountain Park") //new query to look for field in a set
        .get() //Read
        .then(function(snapcollection) {
            snapcollection.forEach(doc => {
                console.log(doc.data());
                console.log(doc.id);
                var id = doc.id;
                addParkListener(id);
            });
        })
}
passParkId();

// Add event listener for"see the parkReview" and add PARKID in the url
function addParkListener(id) {
    var a = document.getElementsByClassName("bpm");
    if (a) {
        for (var i = 0; i < a.length; i++) {
            a[i].addEventListener('click', function() {
                console.log("bpm was clicked!")
                    // window.location.href = "details.html";
                    // When we redirect, tack on after "?" the id of the webcam

                window.location.href = "parkDetail.html?id=" + id;
            });
        }

        // a.addEventListener("click", function() {
        //     console.log("bpm was clicked!")
        //         // window.location.href = "details.html";
        //         // When we redirect, tack on after "?" the id of the webcam
        //     window.location.href = "parkDetail.html?id=" + id;
        // });
    }
}




// get PARKID from doc and pass it to next page.
function passParkId2() {
    db.collection("parks")
        .where("listkey", "==", "cp") //new query to look for field in a set
        .get() //Read
        .then(function(snapcollection) {
            snapcollection.forEach(doc => {
                console.log(doc.data());
                console.log(doc.id);
                var id = doc.id;
                console.log(id);
                addParkListener2(id);
            });
        })
}
passParkId2();

// Add event listener for"see the parkReview" and add PARKID in the url
function addParkListener2(id) {
    var a = document.getElementsByClassName("cp");
    if (a) {
        for (var i = 0; i < a.length; i++) {
            a[i].addEventListener('click', function() {
                console.log(id + "was clicked!")

                // window.location.href = "details.html";
                // When we redirect, tack on after "?" the id of the webcam
                window.location.href = "parkDetail.html?id=" + id;
            });
        }

    }
}


//Deer lake park

// get PARKID from doc and pass it to next page.
function passParkIdGeneral(listkey, className) {
    db.collection("parks")
        .where("listkey", "==", listkey) //new query to look for field in a set
        .get() //Read
        .then(function(snapcollection) {
            snapcollection.forEach(doc => {
                console.log(doc.data());
                console.log(doc.id);
                var id = doc.id;
                console.log(id);
                addParkListenerGeneral(id, className);
            });
        })
}
passParkIdGeneral("dlp", "dlp");

// Add event listener for"see the parkReview" and add PARKID in the url
function addParkListenerGeneral(id, className) {
    var a = document.getElementsByClassName(className);
    if (a) {
        for (var i = 0; i < a.length; i++) {
            a[i].addEventListener('click', function() {
                console.log(id + "was clicked!")

                // window.location.href = "details.html";
                // When we redirect, tack on after "?" the id of the webcam
                window.location.href = "parkDetail.html?id=" + id;
            });
        }

    }
}

//Robert Burnaby Park

// get PARKID from doc and pass it to next page.
function passParkId3() {
    db.collection("parks")
        .where("name", "==", "Robert Burnaby Park") //new query to look for field in a set
        .get() //Read
        .then(function(snapcollection) {
            snapcollection.forEach(doc => {
                console.log(doc.data());
                console.log(doc.id);
                var id = doc.id;
                console.log(id);
                addParkListener3(id);
            });
        })
}
passParkId3();

// Add event listener for"see the parkReview" and add PARKID in the url
function addParkListener3(id) {
    var a = document.getElementsByClassName("rbp");
    if (a) {
        for (var i = 0; i < a.length; i++) {
            a[i].addEventListener('click', function() {
                console.log(id + "was clicked!")

                // window.location.href = "details.html";
                // When we redirect, tack on after "?" the id of the webcam
                window.location.href = "parkDetail.html?id=" + id;
            });
        }

    }
}





















////////////////////////////////////////////////////////////////////////////////////
//*******Putting park elements onto the page, and changing its order based on sort */
var increm = 1;

function addParks() {
    db.collection("parks").get().then(function(snap) {
        snap.forEach(function(doc) {
            console.log(increm);
            var id = "park" + increm;
            increm = increm + 1;
            var listKey = doc.data().listKey;

            var name = "";
            name = doc.data().name;
            var image = "";
            image = doc.data().image;
            var newDom = "<div class='text'><a class='" + listKey + "' href='' target='_blank'>" + name + "</a></div><div class = 'image image1><a class= '" + listKey + "' href='parklistEDIT.html' target='_blank'><img src= '" + image + "' width=100% height = 100%></a></div>";

            document.getElementById(id).innerHTML = newDom;

            console.log(doc.data());
        })
    })
}


////////////////////////////////////////////////////////////////////////////////////
//*******Second attempt at sort feature - these time using id mainpulation *******//
////////////////////////////////////////////////////////////////////////////////////
function addListenerCleanliness() {
    document.getElementById("cleanliness").addEventListener("click", function() {
        doThis();
    })
}
addListenerCleanliness();

function doThis() {
    var incre = 1;
    db.collection("parks").orderBy("clean_rate", "desc")
        .get().then(function(snap) {
            snap.forEach(function(doc) {
                console.log(doc.data().name);
                var key = "." + doc.data().sortKey;
                console.log(key)
                var newPosition = "park" + incre;
                incre = incre + 1;
                // var e = document.getElementsByClassName(key);
                // console.log(">>",e);
                // e.id = newPosition;
                // console.log(">>",e);
                $(key).attr('id', newPosition);
            })
        })
}

function addListenerBathroom() {
    document.getElementById("bathroom").addEventListener("click", function() {
        doThis2();
    })
}
addListenerBathroom();

function doThis2() {
    var incre = 1;
    db.collection("parks").orderBy("bathroom_rate", "desc")
        .get().then(function(snap) {
            snap.forEach(function(doc) {
                console.log(doc.data().name);
                var key = "." + doc.data().sortKey;
                console.log(key)
                var newPosition = "park" + incre;
                incre = incre + 1;
                // var e = document.getElementsByClassName(key);
                // e.id = newPosition;
                $(key).attr('id', newPosition);
            })
        })
}

function addListenerParkinglot() {
    document.getElementById("parkinglot").addEventListener("click", function() {
        doThis3();
    })
}
addListenerParkinglot();

function doThis3() {
    var incre = 1;
    db.collection("parks").orderBy("parkinglot_rate", "desc")
        .get().then(function(snap) {
            snap.forEach(function(doc) {
                console.log(doc.data().name);
                var key = "." + doc.data().sortKey;
                console.log(key)
                var newPosition = "park" + incre;
                incre = incre + 1;
                // var e = document.getElementsByClassName(key);
                // e.id = newPosition;
                $(key).attr('id', newPosition);
            })
        })
}

function addListenerCrowdedness() {
    document.getElementById("crowdedness").addEventListener("click", function() {
        doThis4();
    })
}
addListenerCrowdedness();

function doThis4() {
    var incre = 1;
    db.collection("parks").orderBy("crowdedness_rate", "desc")
        .get().then(function(snap) {
            snap.forEach(function(doc) {
                console.log(doc.data().name);
                var key = "." + doc.data().sortKey;
                console.log(key)
                var newPosition = "park" + incre;
                incre = incre + 1;
                // var e = document.getElementsByClassName(key);
                // e.id = newPosition;
                $(key).attr('id', newPosition);
            })
        })
}