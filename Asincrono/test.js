function operazioneAsincrona(callback) {
    // Simuliamo un'operazione asincrona, ad esempio un timeout di 2 secondi
    console.log("sto eseguenda un azione");
    setTimeout(function() {
      
      // Chiamiamo la callback dopo che l'operazione è completata
      callback();
    }, 2000);
  }
  
  // Definiamo una funzione di callback
  function miaCallback() {
    console.log("Callback eseguita con successo!");
  }
  
  // Chiamiamo la funzione con la callback
  operazioneAsincrona(miaCallback);
  