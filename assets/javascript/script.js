  var config = {
    apiKey: "AIzaSyA_YYFMlgDXpNLbr-VPKyQbuQoT04pEGSI",
    authDomain: "train-schedule-b4d7c.firebaseapp.com",
    databaseURL: "https://train-schedule-b4d7c.firebaseio.com",
    projectId: "train-schedule-b4d7c",
    storageBucket: "train-schedule-b4d7c.appspot.com",
    messagingSenderId: "804141869590"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  // Initial load
  database.ref().on("child_added", function(snapshot, prevChildKey) {
  	
  	var name = snapshot.val().name;
  	var dest = snapshot.val().dest;
  	var time = snapshot.val().time;
  	var freq = snapshot.val().freq;



  	$("#train-table").append("<div class='row' style='padding-top: 8px; margin: 0 10px; border-bottom: 1px solid #bbb'><div class='col-xs-4'>"+ name +"</div><div class='col-xs-2 center'>"+ dest +"</div><div class='col-xs-2 center'>"+ freq +"</div><div class='col-xs-2 center'>"+ freq +"</div><div class='col-xs-2 center'>"+ freq +"</div></div>");

  }, function(errorObject) {

  });

  $('#add-train').on("click", function() {


  	var name = $('#name-input').val().trim();
  	var dest = $('#dest-input').val().trim();
  	var time = $('#time-input').val().trim();
  	var freq = $('#freq-input').val().trim();



  	var train = {
  		name: name,
  		dest: dest,
  		time: time,
  		freq: freq  		
  	};

  	database.ref().push(train);

  	$('#name-input').val("");
  	$('#dest-input').val("");
  	$('#time-input').val("");
  	$('#freq-input').val("");

  	// Prevent default behavior
		event.preventDefault();
  });