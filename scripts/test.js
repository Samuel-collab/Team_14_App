function goBack() {
    window.history.back();
}


// Pass parkID in url



// var dataRef = db.doc('parkFacility/facility');

// dataRef.get().then(function(doc){
//   if (doc.exists) {
//     console.log("Document Data: ", doc.data());
//   } else {
//     console.log("Document not found!");
//   }
// }).catch(function(error){
//   console.log("Error getting document", error);
// });

// dataRef = db.doc('park/park01');

// dataRef.set({
//   partialData: 10,
//   partialData2: "fourty"
// }).then(function() {
//   console.log('successfully written fields in doc park01');
// }).catch(function(error){
//   console.error("error detected. abort.",error);
// });

// dataRef = db.collection('park');
// dataRef.add({
//   name: "newPark",
//   age: 10
// }).then(function(docRef) {
//   console.log("Document written with id: ", docRef.id)
// }).catch(function(error) {
//   console.error("error occured",error);
// });