var firebaseConfig = {
    apiKey: "AIzaSyAiC0DqWuGdcROl0s_3JF1iiXyhWY1FCe0",
    authDomain: "kwitter-5a5e9.firebaseapp.com",
    databaseURL: "https://kwitter-5a5e9-default-rtdb.firebaseio.com",
    projectId: "kwitter-5a5e9",
    storageBucket: "kwitter-5a5e9.appspot.com",
    messagingSenderId: "225121902701",
    appId: "1:225121902701:web:dc27117b34278a8adc5f64",
    measurementId: "G-3945GEQP36"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
user_name14=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="WELCOME "+ user_name14 +"!";


function addroom()
{
     room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room"
    });
    localStorage.setItem("room_name", room_name);
    //window.location="kwitter_page.html";
    }

    function logoutuser()
    {
      localStorage.removeItem(user_name);
      localStorage.removeItem(room_name);
window.location="index.html";
    }


