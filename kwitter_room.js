const firebaseConfig = {
    apiKey: "AIzaSyAI1m3zrhK0p3_a0zrctjy-re7EbRFQUlM",
    authDomain: "project-94-c7d7f.firebaseapp.com",
    databaseURL: "https://project-94-c7d7f-default-rtdb.firebaseio.com",
    projectId: "project-94-c7d7f",
    storageBucket: "project-94-c7d7f.appspot.com",
    messagingSenderId: "630256162444",
    appId: "1:630256162444:web:543a6b4d29fe7c8c2a4da9"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);



  user_name = localStorage.getItem("username");
   document.getElementById("username").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
});
localStorage.setItem("room_name" , room_name);
window.location = "kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+ " onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{

console.log(name);
localStorage.setItem("room_name" , name);
window.location = "kwitter_page.html";

}

function logout()
{
localStorage.removeItem("room_name");
localStorage.removeItem("user_name");

window.location = "index.html";
      
}
