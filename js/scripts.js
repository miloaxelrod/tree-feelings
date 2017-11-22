var config = {
    apiKey: "AIzaSyCGzn1CPde1U0_QgbM7FPaqMR-Fgv550wM",
    authDomain: "tree-feelings.firebaseapp.com",
    databaseURL: "https://tree-feelings.firebaseio.com",
    projectId: "tree-feelings",
    storageBucket: "tree-feelings.appspot.com",
    messagingSenderId: "359833217111"
  };
  firebase.initializeApp(config);

 $(document).ready(function() {

/* MVP */

/*
  > create a little form to enter a couple forms about a trees
  > save it to firebase
  > manually add five tree ids

  > call api by random id (of those five)
    > read each treeId from the database
    > put them in an array
    > use some math to pick a random one
  > display name and image for that tree
  > add a feeling
  > display the feeling
*/

var database = firebase.database();

$('#submit-tree').submit(function(event) {

  event.preventDefault();

  var treeName = $('#new-tree-name').val();
  var treeId = $('#new-tree-id').val();

  $('#new-tree-name').val('');
  $('#new-tree-id').val('');

  var treeReference = database.ref('trees')
  treeReference.push({
    treeName: treeName,
    treeId: treeId
  });
});

console.log('test1');

var root = 'https://eol.org/api/pages/1.0.json?batch=false&id=';
var searchSettings = '&maps_page=1&texts_per_page=2&texts_page=1&subjects=overview&licenses=all&details=true&common_names=true&synonyms=true&references=true&taxonomy=true&vetted=0&cache_ttl=&language=en'

var searchTreeId = 1061748;

console.log('test2boop');

$.ajax({
  url: root + searchTreeId + searchSettings,
  method: 'GET'
}).then(function(data) {
  var treeInfo = data.results;
  console.log(treeInfo);
  console.log('test3');
});

console.log('test4');

/* search box */

/*
  > upon searchbox-btn click, grab searchbox-text val and put it in a variable
  > apply that variable to the database in a search for keyword
  > store those objects in an array
  > go to search results page
  > in a loop, display thumbnails on the page for each objects in the array
*/

/* add trees to database */

/*
  > takes search val and stores it in a variable inside local scope
  > clears searchbox


  > creates a new .html page whos name is the name of the tree? OH how about the object id number from firebase, that has no spaces
*/



/* browse trees */

/*
  > make a loop that
  > in local scope,retrieves name and image url from firebase and store in a variable
  > insert those variables into the htlm for the tree thumbnail
  > append that onto #browse-trees
*/


/* add a feeling */

$('#add-entry').on("click", function() {
  $('#submit-feeling').css('display', 'block');
});

/*
  > on submit, get values from the form and store it in local variabels
  > clear fields
  > send the values to the database
  > retrieve those values, put them into the entry-container frame
  > append it to #entries
*/



});
