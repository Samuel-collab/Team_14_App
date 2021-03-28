var parkSet = db.collection("parks").doc("Burnaby Mountain Park");

parkSet.update({
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
})

function readBMPname() {
    parkSet.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data: ", doc.data());
            $(".infroText .p1").text(doc.data().name);
            $(".infroText .p2").text(doc.data().address);
        } else {
            console.log("Not found");
        }
    })
}
readBMPname();

var r1 = 0;
$('.rating1 input').click((function() {

    r1 = $(this).val();
    console.log("r1:" + r1);
}));
var r2 = 0;
$('.rating2 input').click((function() {

    r2 = $(this).val();
    console.log("r2:" + r2);
}));
var r3 = 0;
$('.rating3 input').click((function() {

    r3 = $(this).val();
    console.log("r3:" + r3);
}));
var r4 = 0;
$('.rating4 input').click((function() {

    r4 = $(this).val();
    console.log("r4:" + r4);

}));



function add() {
    var index = 0;
    let title = document.getElementById('title');
    let comment = document.getElementById('comment');
    if (getCollectionSize() == 0) {
        index = '1';
    } else {
        index = getCollectionSize() + 1;
    }
    var total = parseFloat(r1) + parseFloat(r2) + parseFloat(r3) + parseFloat(r4);
    console.log("total: " + total);
    firebase.firestore().collection("parks").doc("Burnaby Mountain Park").collection('rating').add({
        Title: title.value,
        Sterilization: r1,
        Safety: r2,
        Cleaness: r3,
        "Parking lot": r4,
        Total: total,
        Comment: comment.value

    });
    title.value = '';
}

function getCollectionSize() {
    parkSet.collection("rating").get()
        .then(function(snap) {
            var size = snap.size;
            console.log(size);
            return size;
        })
}






/* db.collection("rating").get().then(function(querySnapshot) {
    console.log(querySnapshot.size);
});

var stars = [false, false, false, false, false];

function addRating() {
    let title = document.getElementById('title');
    firebase.firestore().collection("parks").doc("Burnaby Mountain Park").collection("rating").add({
        title: title.value,
        rating: stars
    });
    title.value = '';
    console.log("added");
}

function color(key, star) {
    for (let index = 0; index <= star; index++) {
        document.getElementById('star' + key + (index)).style.color = "orange";
    }
}

function nocolor(key) {
    for (let index = 0; index < stars.length; index++) {
        document.getElementById('star' + key + (index)).style.color = "initial";
    }
}

function mark(name, key, star) {
    for (let index = 0; index <= star; index++) {
        stars[index] = true
    }
    firebase.firestore().parkSet.collection('rating').doc(key).set({
        title: name,
        rating: stars
    })
    stars = [false, false, false, false, false];
}

(() => {


    firebase.firestore().collection("parks").doc("Burnaby Mountain Park").collection("rating")
        .onSnapshot(function(querySnapshot) {

            document.getElementById('render1').innerHTML = '';
            querySnapshot.forEach(function(doc) {
                console.log(doc.id)
                if (doc.data().rating[0]) {
                    document.getElementsById('render1').innerHTML += `
            <div class="row" id="${doc.id}">
            <div class="col">
            <div id="starsR${doc.id}"></div>  
            </div>
                                                         
            </div>
            
            `;
                    for (let index = 0; index < doc.data().rating.length; index++) {
                        if (doc.data().rating[index]) {
                            document.getElementById('starsR' + doc.id).innerHTML += `
                    
                    <i style="color:orange" class="fa fa-star"></i>                                    
                    
                    `;
                        } else {
                            document.getElementById('starsR' + doc.id).innerHTML += `
                    <i style="color:initial" class="fa fa-star"></i>
                   
                    `;
                        }
                    }
                } else {
                    document.getElementById('render1').innerHTML += `
            <div class="row" id="${doc.id}">
                <div class="col">   
                        <i onmouseover="color('${doc.id}','0')" onclick="mark('${doc.data().title}','${doc.id}','0')" onmouseleave="nocolor('${doc.id}')" id='${'star'+doc.id+0}' class="fa fa-star"></i>
                        <i onmouseover="color('${doc.id}','1')" onclick="mark('${doc.data().title}','${doc.id}','1')" onmouseleave="nocolor('${doc.id}')" id='${'star'+doc.id+1}' class="fa fa-star"></i>
                        <i onmouseover="color('${doc.id}','2')" onclick="mark('${doc.data().title}','${doc.id}','2')" onmouseleave="nocolor('${doc.id}')" id='${'star'+doc.id+2}' class="fa fa-star"></i>
                        <i onmouseover="color('${doc.id}','3')" onclick="mark('${doc.data().title}','${doc.id}','3')" onmouseleave="nocolor('${doc.id}')" id='${'star'+doc.id+3}' class="fa fa-star"></i>
                        <i onmouseover="color('${doc.id}','4')" onclick="mark('${doc.data().title}','${doc.id}','4')" onmouseleave="nocolor('${doc.id}')" id='${'star'+doc.id+4}' class="fa fa-star"></i>                   </div>                    
            </div>
            
            `;
                    document.getElementById('render2').innerHTML += `
            <div9 class="row" id="${doc.id}">
                <div class="col">   
                        <i onmouseover="color('${doc.id}','5')" onclick="mark('${doc.data().title}','${doc.id}','0')" onmouseleave="nocolor('${doc.id}')" id='${'star'+doc.id+5}' class="fa fa-star"></i>
                        <i onmouseover="color('${doc.id}','6')" onclick="mark('${doc.data().title}','${doc.id}','1')" onmouseleave="nocolor('${doc.id}')" id='${'star'+doc.id+6}' class="fa fa-star"></i>
                        <i onmouseover="color('${doc.id}','7')" onclick="mark('${doc.data().title}','${doc.id}','2')" onmouseleave="nocolor('${doc.id}')" id='${'star'+doc.id+7}' class="fa fa-star"></i>
                        <i onmouseover="color('${doc.id}','8')" onclick="mark('${doc.data().title}','${doc.id}','3')" onmouseleave="nocolor('${doc.id}')" id='${'star'+doc.id+8}' class="fa fa-star"></i>
                        <i onmouseover="color('${doc.id}','9')" onclick="mark('${doc.data().title}','${doc.id}','4')" onmouseleave="nocolor('${doc.id}')" id='${'star'+doc.id+9}' class="fa fa-star"></i>                   </div>                    
            </div9
        9
        9   `;
                    document.getElementById('render3').innerHTML += `
            <div class="row" id="${doc.id}">
                <div class="col">   
                        <i onmouseover="color('${doc.id}','0')" onclick="mark('${doc.data().title}','${doc.id}','0')" onmouseleave="nocolor('${doc.id}')" id='${'star'+doc.id+0}' class="fa fa-star"></i>
                        <i onmouseover="color('${doc.id}','1')" onclick="mark('${doc.data().title}','${doc.id}','1')" onmouseleave="nocolor('${doc.id}')" id='${'star'+doc.id+1}' class="fa fa-star"></i>
                        <i onmouseover="color('${doc.id}','2')" onclick="mark('${doc.data().title}','${doc.id}','2')" onmouseleave="nocolor('${doc.id}')" id='${'star'+doc.id+2}' class="fa fa-star"></i>
                        <i onmouseover="color('${doc.id}','3')" onclick="mark('${doc.data().title}','${doc.id}','3')" onmouseleave="nocolor('${doc.id}')" id='${'star'+doc.id+3}' class="fa fa-star"></i>
                        <i onmouseover="color('${doc.id}','4')" onclick="mark('${doc.data().title}','${doc.id}','4')" onmouseleave="nocolor('${doc.id}')" id='${'star'+doc.id+4}' class="fa fa-star"></i>                   </div>                    
            </div>
            
            `;

                    document.getElementById('render4').innerHTML += `
            <div class="row" id="${doc.id}">
                <div class="col">   
                        <i onmouseover="color('${doc.id}','0')" onclick="mark('${doc.data().title}','${doc.id}','0')" onmouseleave="nocolor('${doc.id}')" id='${'star'+doc.id+0}' class="fa fa-star"></i>
                        <i onmouseover="color('${doc.id}','1')" onclick="mark('${doc.data().title}','${doc.id}','1')" onmouseleave="nocolor('${doc.id}')" id='${'star'+doc.id+1}' class="fa fa-star"></i>
                        <i onmouseover="color('${doc.id}','2')" onclick="mark('${doc.data().title}','${doc.id}','2')" onmouseleave="nocolor('${doc.id}')" id='${'star'+doc.id+2}' class="fa fa-star"></i>
                        <i onmouseover="color('${doc.id}','3')" onclick="mark('${doc.data().title}','${doc.id}','3')" onmouseleave="nocolor('${doc.id}')" id='${'star'+doc.id+3}' class="fa fa-star"></i>
                        <i onmouseover="color('${doc.id}','4')" onclick="mark('${doc.data().title}','${doc.id}','4')" onmouseleave="nocolor('${doc.id}')" id='${'star'+doc.id+4}' class="fa fa-star"></i>                   </div>                    
            </div>
            
            `;
                }
            });

        });



})(); */