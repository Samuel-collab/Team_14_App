// Go back to previus page
function goBack() {
    window.history.back();
}

// https://some.site/?id=ParkID
const parsedUrl = new URL(window.location.href);

// extract id from url, assign to variable.
var id = parsedUrl.searchParams.get("id");

// Get userID and name by getUser().
var uid;
var uname;

function getUser() {
    firebase.auth().onAuthStateChanged(function(sb) {
        if (sb) {
            uid = sb.uid;
            console.log(uid);
            db.collection('users').doc(sb.uid)
                .get() // read!
                .then(function(doc) {
                    console.log(doc.data().name);
                    uname = doc.data().name;
                })
        }
    })
}
getUser();

// Display park information based on PARKID
function getDetails() {
    db.collection("parks")
        .doc(id)
        .get()
        .then(function(doc) {
            var name = doc.data().name;
            var address = doc.data().address;
            $(".infroText .p1").text(name);
            $(".infroText .p2").text(address);
        })

}
getDetails();

// Rating score of Crowdedness.
var r1 = 0;
$('.rating1 input').click((function() {
    r1 = $(this).val();
    console.log("r1:" + r1);
}));

// Rating score of bathroom.
var r2 = 0;
$('.rating2 input').click((function() {

    r2 = $(this).val();
    console.log("r2:" + r2);
}));

// Rating score of cleaness.
var r3 = 0;
$('.rating3 input').click((function() {

    r3 = $(this).val();
    console.log("r3:" + r3);
}));

// Rating score of parkling lot.
var r4 = 0;
$('.rating4 input').click((function() {

    r4 = $(this).val();
    console.log("r4:" + r4);

}));

// Round the number to 0.5 or integer.
function roundHalf(num) {
    return Math.round(num * 2) / 2;
}

// Save review data to firebase.
function add() {
    document.getElementById("save").addEventListener("click", function() {
        var index = 0;
        let title = document.getElementById('title');
        let comment = document.getElementById('comment');
        var total = parseFloat(r1) + parseFloat(r2) + parseFloat(r3) + parseFloat(r4)
        var aver = roundHalf(total / 4);
        console.log("total:" + total);
        console.log("average:" + aver);
        //Save individual review into rating collection, which is a subcollection of the user document.
        db.collection("parks")
            .doc(id)
            .collection("reviews")
            .add({
                Title: title.value,
                Crowdedness: r1,
                Bathroom: r2,
                Cleaness: r3,
                "Parking lot": r4,
                Total: total,
                average: total / 4,
                username: uname,
                Comment: comment.value,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
        console.log("done: " + title.value);

    })
}
add();

// Get update rating total, count and average for each rating item.
function caculateRating() {
    db.collection("parks")
        .doc(id)
        .update({
            clean_count: firebase.firestore.FieldValue.increment(1),
            clean_total: firebase.firestore.FieldValue.increment(r3),
        })
        .then(() => {
            db.collection("parks")
                .doc(id)
                .get()
                .then((doc) => {
                    var total = doc.data().clean_total;
                    var count = doc.data().clean_count;
                    var average = total / count;
                    db.collection("parks")
                        .doc(id)
                        .update({
                            clean_rate: average
                        })
                })
        })
}

// when users save the review, invoke caculateRating().
function addEventListenerToRatingSave() {
    document.getElementById("save").addEventListener("click", function() {
        caculateRating();
    })
}
addEventListenerToRatingSave();

//setFieldToZero();

// If there is no review, set the count, total and rate of each item to 0.
function getFieldBackToZero() {
    db.collection("parks")
        .get()
        .then(function(snap) {
            snap.forEach((doc) => {
                doc.ref.collection("rating").get().then((snap) => {
                    var size = snap.size;
                    console.log(snap.size);
                    if (size == 0) {
                        db.collection("parks")
                            .doc(id)
                            .update({
                                clean_count: 0,
                                clean_total: 0,
                                clean_rate: 0,
                            }).then(() => {
                                console.log("back to 0");
                            })
                    }
                })
            })

        })
}
getFieldBackToZero()