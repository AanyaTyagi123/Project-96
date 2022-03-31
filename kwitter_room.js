const firebaseConfig = {
    apiKey: "AIzaSyBuVTvNOqBv6afBoHxndOX_lBOXWwl9L8g",
    authDomain: "project94-56f48.firebaseapp.com",
    databaseURL: "https://project94-56f48-default-rtdb.firebaseio.com",
    projectId: "project94-56f48",
    storageBucket: "project94-56f48.appspot.com",
    messagingSenderId: "790819763034",
    appId: "1:790819763034:web:153a357d5f3ef52b91b963",
    measurementId: "G-NNWW8DZX0W"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room names - " + Room_names);
      row = "<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'> #"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
