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
            var img = doc.data().image;
            $(".card-body p").text(name);
            $(".card-img-top").attr("src", img);
        })

}
getDetails();

// After users rating the crowdedness, get this value.
var r1 = 0;
$('.rating1 input').click((function() {
    r1 = $(this).val();
    console.log("r1:" + r1);
}));

// After users rating the bathroom, get this value.
var r2 = 0;
$('.rating2 input').click((function() {

    r2 = $(this).val();
    console.log("r2:" + r2);
}));

// After users rating the cleaness, get this value.
var r3 = 0;
$('.rating3 input').click((function() {

    r3 = $(this).val();
    console.log("r3:" + r3);
}));

// After users rating the parking lot, get this value.
var r4 = 0;
$('.rating4 input').click((function() {

    r4 = $(this).val();
    console.log("r4:" + r4);

}));

// Round the number to 0.5 or to the integer.
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
        //Save individual review into reviews collection, which is a subcollection of each park document.
        db.collection("parks")
            .doc(id)
            .collection("reviews")
            .add({
                Title: title.value,
                Crowdedness: r1,
                Bathroom: r2,
                Cleaness: r3,
                Parkinglot: r4,
                Total: total,
                average: aver,
                username: uname,
                Comment: comment.value,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
        db.collection("parks")
            .doc(id)
            .update({
                score_total: firebase.firestore.FieldValue.increment(aver),
                score_count: firebase.firestore.FieldValue.increment(1),
            })
        console.log("done: " + title.value);

    })
}
add();



// Get updated rating total and count for each rating criterion, and then calcualte the averages.
function caculateRating() {
    db.collection("parks")
        .doc(id)
        .update({
            clean_count: firebase.firestore.FieldValue.increment(1),
            clean_total: firebase.firestore.FieldValue.increment(r3),
            crowdedness_count: firebase.firestore.FieldValue.increment(1),
            crowdedness_total: firebase.firestore.FieldValue.increment(r1),
            bathroom_count: firebase.firestore.FieldValue.increment(1),
            bathroom_total: firebase.firestore.FieldValue.increment(r2),
            parkinglot_count: firebase.firestore.FieldValue.increment(1),
            parkinglot_total: firebase.firestore.FieldValue.increment(r4),
            parkinglot_count: firebase.firestore.FieldValue.increment(1),
        })
        .then(() => {
            db.collection("parks")
                .doc(id)
                .get()
                .then((doc) => {
                    var crowdedness_total = doc.data().crowdedness_total;
                    var crowdedness_count = doc.data().crowdedness_count;
                    var crowdedness_average = roundHalf(crowdedness_total / crowdedness_count);

                    console.log(crowdedness_total);
                    console.log(crowdedness_count);
                    console.log(crowdedness_total / crowdedness_count);
                    console.log(crowdedness_average);

                    var clean_total = doc.data().clean_total;
                    var clean_count = doc.data().clean_count;
                    var clean_average = roundHalf(clean_total / clean_count);

                    var bathroom_total = doc.data().bathroom_total;
                    var bathroom_count = doc.data().bathroom_count;
                    var bathroom_average = roundHalf(bathroom_total / bathroom_count);

                    var parkinglot_total = doc.data().parkinglot_total;
                    var parkinglot_count = doc.data().parkinglot_count;
                    var parkinglot_average = roundHalf(parkinglot_total / parkinglot_count);

                    var score_total = doc.data().score_total;
                    var score_count = doc.data().score_count;
                    var score = roundHalf(score_total / score_count);
                    db.collection("parks")
                        .doc(id)
                        .update({
                            clean_rate: clean_average,
                            crowdedness_rate: crowdedness_average,
                            bathroom_rate: bathroom_average,
                            parkinglot_rate: parkinglot_average,
                            score: score,
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

// If there is no review, set the count, total and rate of each item to 0.
function getFieldBackToZero() {
    db.collection("parks")
        .doc(id)
        .get()
        .then(function(doc) {
            doc.ref.collection("reviews").get().then((snap) => {
                var size = snap.size;
                console.log(snap.size);
                if (size == 0) {
                    db.collection("parks")
                        .doc(id)
                        .update({
                            crowdedness_count: 0,
                            crowdedness_total: 0,
                            crowdedness_rate: 0,
                            bathroom_count: 0,
                            bathroom_total: 0,
                            bathroom_rate: 0,
                            clean_count: 0,
                            clean_total: 0,
                            clean_rate: 0,
                            parkinglot_count: 0,
                            parkinglot_total: 0,
                            parkinglot_rate: 0,
                            score_count: 0,
                            score_total: 0,
                            score: 0,
                        }).then(() => {
                            console.log("back to 0");
                        })
                }
            })
        })
}
getFieldBackToZero();