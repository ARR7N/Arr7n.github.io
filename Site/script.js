// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Placeholder for any scripts you might want to add
});


  document.getElementById('toggleBW').addEventListener('click', function() {
    document.body.classList.toggle('black-and-white');
  });

  document.addEventListener('DOMContentLoaded', function () {
    const sendMessageButton = document.getElementById('sendMessageButton');
    
    sendMessageButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Message Sent');
    });
});