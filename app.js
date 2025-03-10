
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js"; 
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";


const firebaseConfig = {
  apiKey: "AIzaSyBvhp5RdY17DSQCO6p6vLrQ5E2RasBH-IM",
  authDomain: "sign-up-login-form-f52a3.firebaseapp.com",
  databaseURL: "https://sign-up-login-form-f52a3-default-rtdb.firebaseio.com",
  projectId: "sign-up-login-form-f52a3",
  storageBucket: "sign-up-login-form-f52a3.firebasestorage.app",
  messagingSenderId: "339294474621",
  appId: "1:339294474621:web:28fa9b08aa573d6aeffc14",
  measurementId: "G-YG6KX3XX2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Make sendMessage globally accessible 
window.sendMessage = function () {     
  let username = document.getElementById("username").value;     
  let message = document.getElementById("message").value;
  if (username === "" || message === "") return;  

  // Push message to Firebase    
   push(ref(db, "messages"), {        
     name: username,      
     text: message     
      });  
      document.getElementById("message").value = ""; // Clear input
    
    }; 
// Function to listen for new messages 
onChildAdded(ref(db, "messages"), function(snapshot) {     
  let data = snapshot.val(); 
  let messageBox = document.getElementById("messages");     
  let msgElement = document.createElement("p");    
   msgElement.textContent = data.name + ": " + data.text;     
   messageBox.appendChild(msgElement);     
   messageBox.scrollTop = messageBox.scrollHeight;    
   }); 