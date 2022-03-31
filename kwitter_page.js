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

function send()
{
      msf = document.getElementById("msg").ariaValueMax;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}