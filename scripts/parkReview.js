// Go back to previus page
function goBack() {
    window.history.back();
}

// https://some.site/?id=ParkID
const parsedUrl = new URL(window.location.href);
// extract id from url, assign to variable
var id = parsedUrl.searchParams.get("id");


// Display park information based on PARKID
function getDetails() {
    db.collection("parks")
        .doc(id)
        .get()
        .then(function(doc) {
            var name = doc.data().name;
            var address = doc.data().address;
            $(".parkLink").text(name);
            $(".address").text(address);
            $("#parkimg").html("<img src= '" + doc.data().image + "' class = 'card-img-top'></img>");

        })
    addParkListener(id);
}
getDetails();

// Add event listener for"see the parkReview" and add PARKID in the url
function addParkListener(id) {
    var a = document.getElementById("goToRate");
    if (a) {
        a.addEventListener("click", function() {
            console.log("goToRate was clicked!")
            window.location.href = "RatePage.html?id=" + id;
        });
    }
}

// Get overall rating of a park and display it.
function overallRating() {
    db.collection("parks")
        .doc(id)
        .get()
        .then(function(doc) {
            var score = doc.data().score;
            overall(score);
            $("#reviewaver").text(doc.data().score);
            $("#reviewtotal").text(doc.data().score_count);
        })
}
overallRating();

// Bar section display based on the database.
function barSectionDisplay() {
    db.collection("parks")
        .doc(id)
        .get()
        .then(doc => {

            $("#crowdbarnum").text(doc.data().crowdedness_rate);
            $("#bathroombarnum").text(doc.data().bathroom_rate);
            $("#cleanbarnum").text(doc.data().clean_rate);
            $("#parkingbarnum").text(doc.data().parkinglot_rate);
            barLength('crowdedness', doc.data().crowdedness_rate);
            barLength('bathroom', doc.data().bathroom_rate);
            barLength('cleaness', doc.data().clean_rate);
            barLength('parking', doc.data().parkinglot_rate);

        })
}
barSectionDisplay();

// Bar length.
function barLength(whichbar, rating) {
    if (whichbar == "crowdedness") {
        switch (rating) {
            case 0.5:
                $(".bar-5").width("10%");
                break;
            case 1:
                $(".bar-5").width("20%");
                break;
            case 1.5:
                $(".bar-5").width("30%");
                break;
            case 2:
                $(".bar-5").width("40%");
                break;
            case 2.5:
                $(".bar-5").width("50%");
                break;
            case 3:
                $(".bar-5").width("60%");
                break;
            case 3.5:
                $(".bar-5").width("70%");
                break;
            case 4:
                $(".bar-5").width("80%");
                break;
            case 4.5:
                $(".bar-5").width("90%");
                break;
            case 5:
                $(".bar-5").width("100%");
                break;
            default:
                break;
        }
    } else if (whichbar == "bathroom") {
        switch (rating) {
            case 0.5:
                $(".bar-4").width("10%");
                break;
            case 1:
                $(".bar-4").width("20%");
                break;
            case 1.5:
                $(".bar-4").width("30%");
                break;
            case 2:
                $(".bar-4").width("40%");
                break;
            case 2.5:
                $(".bar-4").width("50%");
                break;
            case 3:
                $(".bar-4").width("60%");
                break;
            case 3.5:
                $(".bar-4").width("70%");
                break;
            case 4:
                $(".bar-4").width("80%");
                break;
            case 4.5:
                $(".bar-4").width("90%");
                break;
            case 5:
                $(".bar-4").width("100%");
                break;
            default:
                break;
        }
    } else if (whichbar == "cleaness") {
        switch (rating) {
            case 0.5:
                $(".bar-3").width("10%");
                break;
            case 1:
                $(".bar-3").width("20%");
                break;
            case 1.5:
                $(".bar-3").width("30%");
                break;
            case 2:
                $(".bar-3").width("40%");
                break;
            case 2.5:
                $(".bar-3").width("50%");
                break;
            case 3:
                $(".bar-3").width("60%");
                break;
            case 3.5:
                $(".bar-3").width("70%");
                break;
            case 4:
                $(".bar-3").width("80%");
                break;
            case 4.5:
                $(".bar-3").width("90%");
                break;
            case 5:
                $(".bar-3").width("100%");
                break;
            default:
                break;
        }
    } else if (whichbar == "parking") {
        switch (rating) {
            case 0.5:
                $(".bar-2").width("10%");
                break;
            case 1:
                $(".bar-2").width("20%");
                break;
            case 1.5:
                $(".bar-2").width("30%");
                break;
            case 2:
                $(".bar-2").width("40%");
                break;
            case 2.5:
                $(".bar-2").width("50%");
                break;
            case 3:
                $(".bar-2").width("60%");
                break;
            case 3.5:
                $(".bar-2").width("70%");
                break;
            case 4:
                $(".bar-2").width("80%");
                break;
            case 4.5:
                $(".bar-2").width("90%");
                break;
            case 5:
                $(".bar-2").width("100%");
                break;
            default:
                break;
        }
    }
}


// Display overtall rating star for a park based on score
function overall(score) {
    switch (score) {
        case 0.5:
            $("#s1").addClass("fa-star-half-o");
            $("#s1").addClass("checked");
            $("#s1").attr("aria-hidden", "true");
            break;
        case 1:
            $("#s1").addClass("checked");
            break;
        case 1.5:
            $("#s1").addClass("checked");
            $("#s2").addClass("checked");
            $("#s2").addClass("fa-star-half-o");
            $("#s2").attr("aria-hidden", "true");
            break;
        case 2:
            $("#s1").addClass("checked");
            $("#s2").addClass("checked");
            break;
        case 2.5:
            $("#s1").addClass("checked");
            $("#s2").addClass("checked");
            $("#s3").addClass("checked");
            $("#s3").addClass("fa-star-half-o");
            $("#s3").attr("aria-hidden", "true");
            break;
        case 3:
            $("#s1").addClass("checked");
            $("#s2").addClass("checked");
            $("#s3").addClass("checked");
            break;
        case 3.5:
            $("#s1").addClass("checked");
            $("#s2").addClass("checked");
            $("#s3").addClass("checked");
            $("#s4").addClass("checked");
            $("#s4").addClass("fa-star-half-o");
            $("#s4").attr("aria-hidden", "true");
            break;
        case 4:
            $("#s1").addClass("checked");
            $("#s2").addClass("checked");
            $("#s3").addClass("checked");
            $("#s4").addClass("checked");
            break;
        case 4.5:
            $("#s1").addClass("checked");
            $("#s2").addClass("checked");
            $("#s3").addClass("checked");
            $("#s4").addClass("checked");
            $("#s5").addClass("checked");
            $("#s5").addClass("fa-star-half-o");
            $("#s5").attr("aria-hidden", "true");
            break;
        case 5:
            $("#s1").addClass("checked");
            $("#s2").addClass("checked");
            $("#s3").addClass("checked");
            $("#s4").addClass("checked");
            $("#s5").addClass("checked");
            break;
        default:
            break;
    }
}

// Display individual star rating.
function overallIndividual(average, docid, docname) {
    switch (average) {
        case 0.5:
            $("#star1" + docid + "").addClass("fa-star-half-o");
            $("#star1" + docid + "").addClass("checked");
            $("#star1" + docid + "").attr("aria-hidden", "true");
            break;
        case 1:
            $("#star1" + docid + "").addClass("checked");
            break;
        case 1.5:
            $("#star1" + docid + "").addClass("checked");
            $("#star2" + docid + "").addClass("checked");
            $("#star2" + docid + "").addClass("fa-star-half-o");
            $("#star2" + docid + "").attr("aria-hidden", "true");
            break;
        case 2:
            $("#star1" + docid + "").addClass("checked");
            $("#star2" + docid + "").addClass("checked");
            break;
        case 2.5:
            $("#star1" + docid + "").addClass("checked");
            $("#star2" + docid + "").addClass("checked");
            $("#star3" + docid + "").addClass("checked");
            $("#star3" + docid + "").addClass("fa-star-half-o");
            $("#star3" + docid + "").attr("aria-hidden", "true");
            break;
        case 3:
            $("#star1" + docid + "").addClass("checked");
            $("#star2" + docid + "").addClass("checked");
            $("#star3" + docid + "").addClass("checked");
            break;
        case 3.5:
            $("#star1" + docid + "").addClass("checked");
            $("#star2" + docid + "").addClass("checked");
            $("#star3" + docid + "").addClass("checked");
            $("#star4" + docid + "").addClass("checked");
            $("#star4" + docid + "").addClass("fa-star-half-o");
            $("#star4" + docid + "").attr("aria-hidden", "true");
            break;
        case 4:
            $("#star1" + docid + "").addClass("checked");
            $("#star2" + docid + "").addClass("checked");
            $("#star3" + docid + "").addClass("checked");
            $("#star4" + docid + "").addClass("checked");

            break;
        case 4.5:
            $("#star1" + docid + "").addClass("checked");
            $("#star2" + docid + "").addClass("checked");
            $("#star3" + docid + "").addClass("checked");
            $("#star4" + docid + "").addClass("checked");
            $("#star5" + docid + "").addClass("checked");
            $("#star5" + docid + "").addClass("fa-star-half-o");
            $("#star5" + docid + "").attr("aria-hidden", "true");
            break;
        case 5:
            $("#star1" + docid + "").addClass("checked");
            $("#star2" + docid + "").addClass("checked");
            $("#star3" + docid + "").addClass("checked");
            $("#star4" + docid + "").addClass("checked");
            $("#star5" + docid + "").addClass("checked");
            break;
        default:
            break;
    }
}

// Create review DOM.
function createReviewDom(docid) {
    let container = $("<div></div>");
    container.addClass("container");

    let review = $("<div></div>");
    review.addClass("reviewHeader");

    let img = $("<img id = 'userIcon'></img>");
    img.attr("src", "./images/profile/user1.jpg");
    review.append(img)

    let h5 = $("<h5></h5>");
    let span = $("<span></span>")
    span.attr("id", "userName" + docid + "");
    h5.append(span);
    review.append(h5);

    let stars = $("<span id = 'stars'><span>");
    h5.after(stars);

    let star1 = $("<span></span>");
    star1.addClass("fa fa-star");
    star1.attr("id", "star1" + docid + "");
    stars.append(star1);
    // h5.after(star1);

    let star2 = $("<span></span>");
    star2.addClass("fa fa-star");
    star2.attr("id", "star2" + docid + "");
    stars.append(star2);
    // star1.after(star2);

    let star3 = $("<span></span>");
    star3.addClass("fa fa-star");
    star3.attr("id", "star3" + docid + "");
    stars.append(star3);
    // star2.after(star3);

    let star4 = $("<span></span>");
    star4.addClass("fa fa-star");
    star4.attr("id", "star4" + docid + "");
    stars.append(star4);
    // star3.after(star4);

    let star5 = $("<span></span>");
    star5.addClass("fa fa-star");
    star5.attr("id", "star5" + docid + "");
    stars.append(star5);
    // star4.after(star5);

    let div2 = $("<div></div>");
    div2.attr("id", "comment" + docid + "");
    div2.addClass("comment");

    $(".btn-primary").before(container);
    container.prepend(review);
    container.append(div2);

}

// Get DocId from Subcollection
function getDocIdfromSubcollection() {
    db.collection("parks")
        .doc(id)
        .collection("reviews")
        .get()
        .then((snap) => {
            snap.forEach(doc => {
                var docid = doc.id
                displayReview(docid);
            });
        })
}
getDocIdfromSubcollection();

// Display Reviews
function displayReview(docid) {
    db.collection("parks")
        .doc(id)
        .collection("reviews")
        .doc(docid)
        .get()
        .then((doc) => {

            var docname = doc.data().username;
            var average = doc.data().average;
            var comment = doc.data().Comment;
            createReviewDom(docid);
            overallIndividual(average, docid);
            $("#userName" + docid + "").text(docname);
            $("#comment" + docid + "").text(comment);

        })
}