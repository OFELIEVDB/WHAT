fetch('https://whatyearisit-backend.vercel.app/message')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#msg').textContent = data.message;
 });