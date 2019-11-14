

var firebaseConfig = {
    apiKey: "AIzaSyBg1Sy8nEY83VTr6c1R9PyYTZ2Yv3JNkF0",
    authDomain: "zwapp-188917.firebaseapp.com",
    databaseURL: "https://zwapp-188917.firebaseio.com",
    projectId: "zwapp-188917",
    storageBucket: "zwapp-188917.appspot.com",
    messagingSenderId: "936347608573",
    appId: "1:936347608573:web:b7ff21e5f887014e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var nameRef=firebase.database().ref().child('name');
nameRef.on("child_added", function(data) {
	var eleh1=document.createElement('div');
	eleh1.appendChild(document.createTextNode(data.val().zw.number));
  document.getElementById('namelist').appendChild(eleh1);
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

function addname(){
	
var name=document.getElementById('inputname').value;

nameRef.push({
	zw:{
		number:name,
		age:26
	},
	zj:{
		number:2,
		age:29
	}
});
console.log('nameadded');
}
var eleAddname=document.createElement('div');
document.getElementById("root").appendChild(eleAddname);
eleAddname,innerHTML='
	<div id="namelist"></div>
	<input type="text" name="name" id="inputname" />
<button onclick="addname()">addname</button>';
