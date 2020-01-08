if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js', {scope: './'}) 
    .then(registration => {
      console.log('Registration successful');
    })
    .catch(error => {
      console.log(error);
    })
} else {
  console.log('Browser doesnt support service worker');
}

