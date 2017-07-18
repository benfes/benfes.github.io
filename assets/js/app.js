if ('serviceWorker' in navigator){
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('/sw.js').then(function(registration){
      console.log('service worker registered: ', registration.scope);
    }, function(err){
      console.log(err);
    });
  });
}
