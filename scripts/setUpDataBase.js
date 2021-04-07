// One-time setup database by invoke the funtion in the console.
function setup() {
    db.collection("parks").doc("Burnaby Mountain Park").set({
        address: "7600 Halifax St, Burnaby, British Columbia V5A 4M8 Canada",
        clean_count: 0,
        clean_total: 0,
        clean_rate: 0,
        crowdedness_count: 0,
        crowdedness_total: 0,
        crowdedness_rate: 0,
        bathroom_count: 0,
        bathroom_total: 0,
        bathroom_rate: 0,
        parkinglot_count: 0,
        parkinglot_total: 0,
        parkinglot_rate: 0,
        image: "images/Burnaby Mountain Park/burnaby mountain park.png",
        listkey: "bpm",
        name: "Burnaby Mountain Park",
        phone_number: "(604) 294 - 7450",
        sorKey: "BMP",
        score: 0,
        score_count: 0,
        score_total: 0,
    })
    db.collection("parks").doc("CentralPark").set({
        address: "3883 Imperial St, Burnaby, BC V5J 1A3",
        clean_count: 0,
        clean_total: 0,
        clean_rate: 0,
        crowdedness_count: 0,
        crowdedness_total: 0,
        crowdedness_rate: 0,
        bathroom_count: 0,
        bathroom_total: 0,
        bathroom_rate: 0,
        parkinglot_count: 0,
        parkinglot_total: 0,
        parkinglot_rate: 0,
        image: "./images/CentralPark/CentralPark.JPG",
        listkey: "cp",
        name: "Central Park",
        phone_number: "(604) 294 - 7450",
        score: 0,
        score_count: 0,
        score_total: 0,
        sorKey: "CP",
    })
}

// Add carousel pics pathes into database
function addCarousel() {
    db.collection("parks").doc("Burnaby Mountain Park").update({
        carousel: ["./images/Burnaby Mountain Park/1.jpg", "./images/Burnaby Mountain Park/2.jpg", "./images/Burnaby Mountain Park/3.jpg",
            "./images/Burnaby Mountain Park/4.jpg", "./images/Burnaby Mountain Park/5.jpg"
        ]
    })
    db.collection("parks").doc("CentralPark").update({
        carousel: ["./images/CentralPark/1.jpg", "./images/CentralPark/2.jpg", "./images/CentralPark/3.jpg",
            "./images/CentralPark/4.jpg", "./images/CentralPark/5.jpg"
        ]
    })
    console.log("carousel pictures have been added");
}